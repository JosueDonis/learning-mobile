import { IonItem, IonLabel, IonIcon, IonInput } from "@ionic/react";
import { ChangeEventHandler, useState } from "react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";
import { TextFieldTypes } from "@/types/input";

interface InputProps {
  label?: string;
  name?: string;
  required?: boolean;
  value?: string;
  tabIndex?: number;
  type?: string;
  autoComplete?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>, key?: string) => void;
  placeholder?: string;
}
const Input: React.FC<InputProps> = ({
  tabIndex,
  label,
  name,
  required,
  value,
  type,
  onChange,
  autoComplete,
  placeholder,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <div className="relative mt-4">
      <label
        className={`text-sm font-poppins ${isFocus ? " text-primary" : ""}`}
        htmlFor={name}
      >
        {label}
      </label>
      <div
        className={`bg-[#fff] h-[44px] items-center flex p-2 mt-1 input rounded-[4px] ${
          isFocus ? "border-primary border-[1px]" : ""
        }`}
      >
        <input
          autoComplete={autoComplete}
          tabIndex={tabIndex}
          className="border-transparent font-poppins text-[14px] focus:border-transparent outline-none rounded bg-transparent w-[88%]"
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={(e) => {
            setIsFocus(true);
          }}
          onBlur={(e) => {
            setIsFocus(false);
          }}
          required
        />
      </div>
    </div>
  );
};

export default Input;
