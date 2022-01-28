import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface FormInputProps {
  id: string;
  type: HTMLInputTypeAttribute;
  required: boolean;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function FormInput({ id,
  type,
  required,
  placeholder,
  onChange }: FormInputProps) {

  return (
    <div className={`${id}-field form-group`}>
      <input id={`form_submission_${id}`}
        className="form-control"
        type={type}
        onChange={onChange}
        required={required}
        placeholder={placeholder} />
    </div>
  )
}