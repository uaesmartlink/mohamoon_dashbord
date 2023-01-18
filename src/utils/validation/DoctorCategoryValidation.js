import * as yup from "yup";

export const lawyerCategorySchema = yup.object().shape({
  categoryName: yup.string().required(),
  iconUrl: yup.string().url().required(),
});

export const lawyerCategorySchemaEditing = yup.object().shape({
  categoryName: yup.string().required(),
});
