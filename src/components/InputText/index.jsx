import { ErrorMessage, useField } from "formik";

const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={
          `
          ${meta.touched && meta.error ? "border-red-500" : ""}
          shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
          `
        }
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name}>
        {msg => <div className="text-red-500">{msg}</div>}
      </ErrorMessage>
    </div>
  )
}

export default InputText;
