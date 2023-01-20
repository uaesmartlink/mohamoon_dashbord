import * as yup from "yup";

export const countrySchema = yup.object().shape({
  countryName: yup.string().required(),
  iconUrl: yup.string().url().required(),
});

export const countrySchemaEditing = yup.object().shape({
   countryName: yup.string().required(),
});
