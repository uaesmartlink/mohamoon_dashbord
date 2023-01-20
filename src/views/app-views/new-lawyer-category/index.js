import { useMemo } from "react";
import { Card, Form, Input, Button, Upload, message } from "antd";
import { useParams } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import FirebaseService from "services/FirebaseService";
import {
  lawyerCategorySchema,
  lawyerCategorySchemaEditing,
} from "utils/validation/LawyerCategoryValidation";
import { useHistory } from "react-router-dom";

const NewLawyerCategory = () => {
  const history = useHistory();
  const { id, name, translation, description, descriptionAr} = useParams();

  const isEditing = useMemo(() => !!id, [id]);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      if (isEditing) {
        const form = {
          categoryName: values.categoryName,
          categoryTranslation: values.categoryTranslation,
          categoryDescription: values.categoryDescription, 
          categoryDescriptionAr: values.categoryDescriptionAr, 
          iconUrl: values.category_icon,
        };
        const isValid = await lawyerCategorySchemaEditing.validate(form);
        if (isValid) {
          if (!values.category_icon) {
            await FirebaseService.editLawyerCategory(
              id,
              form.categoryName,
              form.categoryTranslation,
              form.categoryDescription,
              form.categoryDescriptionAr,
              null
            );
            history.push("/app/lawyer-category");
          } else {
            let iconUrl = await FirebaseService.uploadImage(
              values.category_icon.file.name,
              values.category_icon.fileList[0].originFileObj
            );
            const form = { categoryName: values.categoryName, categoryTranslation: values.categoryTranslation,categoryDescription: values.categoryDescription,categoryDescriptionAr: values.categoryDescriptionAr , iconUrl };
            await FirebaseService.editLawyerCategory(
              id,
              form.categoryName,
              form.categoryTranslation,
              form.categoryDescription,
              form.categoryDescriptionAr,
              form.iconUrl
            );

            history.push("/app/lawyer-category");
          }
        }
      } else {
        let iconUrl = await FirebaseService.uploadImage(
          values.category_icon.file.name,
          values.category_icon.fileList[0].originFileObj
        );

        const form = {
          categoryName: values.categoryName,
          categoryTranslation: values.categoryTranslation,
          categoryDescription: values.categoryDescription,
          categoryDescriptionAr: values.categoryDescription,
          iconUrl,
        };
        const isValid = await lawyerCategorySchema.validate(form);
        if (isValid) {
          await FirebaseService.editLawyerCategory(
            id,
            form.categoryName,
            form.categoryTranslation,
            form.categoryDescription,
            form.categoryDescriptionAr,
            form.iconUrl
          );
          history.push("/app/lawyer-category");
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
        name="lawyer_category_input"
        onFinish={onFinish}
        scrollToFirstError
        labelAlign="left"
        initialValues={{ categoryName: isEditing ? name : null ,  categoryTranslation:  isEditing ? translation : null,  categoryDescription: isEditing? description : null, categoryDescriptionAr: isEditing? descriptionAr : null}}
      >
       
        <Form.Item
          name="categoryName"
          label="Category Name"
          rules={[
            {
              required: true,
              message: "Please chose Category Name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="categoryTranslation"
          label="Category in Arabic"
          rules={[
            {
              required: true,
              message: "Please chose Category in Arabic",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="categoryDescription"
          label="Category Description"
          
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="categoryDescriptionAr"
          label="category Description in Arabic"
          
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category_icon"
          label="Category Icon"
          rules={[
            {
              required: isEditing ? false : true,
              message: "Please chose Category Icon",
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

export default NewLawyerCategory;
