import { ChangeEventHandler } from "react";

interface FormInputProps {
  id: string;
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function FormCheckbox({ id,
  label,
  onChange }: FormInputProps) {

  return (
    <div className={`${id}-field p-5`}>
      <div className="checkbox">
        <label>
          <input className={`form_submission_${id} w-18 h-18`}
            type="checkbox"
            name={`name_${id}`}
            id={id}
            value={label}
            onChange={onChange} />
          <span className="p-l-5 color-black">
            {label}
          </span>
        </label>
      </div>
    </div>
  )
}