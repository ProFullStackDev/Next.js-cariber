import { ChangeEventHandler } from "react";

interface SelectItem {
  value: string;
  text: string;
}

interface FormInputProps {
  id: string;
  label?: string;
  description?: string;
  required: boolean;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  item: SelectItem[];
}

export default function FormSelect({ id,
  label,
  description,
  required,
  placeholder,
  onChange,
  item }: FormInputProps) {

  return (
    <div className={`${id}-field form-group`}>
      <label className="control-label string color-black" htmlFor={`form_submission_${id}`}>
        {label} {required && (<span className="color-red">*</span>)}
      </label>
      <p className="color-black f-s-12">
        {description}
      </p>
      <select id={`form_submission_${id}`}
        className="form-control"
        onChange={onChange}
        required={required}
        placeholder={placeholder}>
        {item.map((value, index) => {
          return (
            <option key={index} value={value.value}>{value.text}</option>
          )
        })}
      </select>
    </div>
  )
}