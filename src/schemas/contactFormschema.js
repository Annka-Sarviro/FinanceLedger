import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().min(3, "name is too short").max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required(),
});

export default validationSchema;
