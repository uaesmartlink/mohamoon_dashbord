import { useMemo } from "react";
import { Card, Form, Input, Button, Upload, message } from "antd";
import { useParams } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import FirebaseService from "services/FirebaseService";
import {
  countrySchema,
  countrySchemaEditing,
} from "utils/validation/CountryValidation";
import { useHistory } from "react-router-dom";

const NewCountry = () => {
  const history = useHistory();
  const { id, name, translation} = useParams();

  const isEditing = useMemo(() => !!id, [id]);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      if (isEditing) {
        const form = {
          countryName: values.countryName,
          countryTranslation: values.countryTranslation,
          iconUrl: values.country_icon,
        };
        const isValid = await countrySchemaEditing.validate(form);
        if (isValid) {
          if (!values.country_icon) {
            await FirebaseService.editCountry(
              id,
              form.countryName,
              form.countryTranslation,
              null
            );
            history.push("/app/country");
          } else {
            let iconUrl = await FirebaseService.uploadImage(
              values.country_icon.file.name,
              values.country_icon.fileList[0].originFileObj
            );
            const form = { countryName: values.countryName, countryTranslation: values.countryTranslation, iconUrl };
            await FirebaseService.editCountry(
              id,
              form.countryName,
              form.countryTranslation,
              form.iconUrl
            );

            history.push("/app/country");
          }
        }
      } else {
        let iconUrl = await FirebaseService.uploadImage(
          values.country_icon.file.name,
          values.country_icon.fileList[0].originFileObj
        );

        const form = {
            countryName: values.countryName,
            countryTranslation: values.countryTranslation,
            iconUrl,
        };
        const isValid = await countrySchema.validate(form);
        if (isValid) {
          await FirebaseService.editCountry(
            id,
            form.countryName,
            form.countryTranslation,
            form.iconUrl
          );
          history.push("/app/country");
        }
      }
    } catch (error) {
      message.error("error : " + error.message);
    }
  };

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M && false;
  }

  return (
    <Card>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 10 }}
        form={form}
        name="country_input"
        onFinish={onFinish}
        scrollToFirstError
        labelAlign="left"
        initialValues={{ countryName: isEditing ? name : null ,  countryTranslation:  isEditing ? translation : null}}
      >
       
        <Form.Item
          name="countryName"
          label="Country Name"
          rules={[
            {
              required: true,
              message: "Please chose country Name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="countryTranslation"
          label="Country in Arabic"
          rules={[
            {
              required: true,
              message: "Please chose country in Arabic",
            },
          ]}
        >
          <Input />
        </Form.Item>
     
        <Form.Item
          name="country_icon"
          label="country Icon"
          rules={[
            {
              required: isEditing ? false : true,
              message: "Please chose country Icon",
            },
          ]}
        >
          <Upload
            name="logo"
            listType="picture"
            multiple
            maxCount={1}
            beforeUpload={beforeUpload}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 3,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default NewCountry;
