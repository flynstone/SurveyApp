import { TextField } from "@mui/material";
import { ErrorMessage, Form, useField } from "formik";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
}

export default function MyTextInput(props: Props) {
  const [field, meta] = useField(props.name);

  return (
    <>
      <TextField {...field} {...props}>

      </TextField>
    </>

  )
}
