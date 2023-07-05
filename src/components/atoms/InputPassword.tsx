import { IonItem, IonLabel, IonIcon, IonInput } from "@ionic/react";
import { ChangeEventHandler, useState } from "react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";
import { TextFieldTypes } from "@/types/input";

interface InputPasswordProps {
  label?: string;
  name?: string;
  required?: boolean;
  value?: string;
  tabIndex?: number;
  autoComplete?: string;
  placeholder?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>, key?: string) => void;
}
const InputPassword: React.FC<InputPasswordProps> = ({
  tabIndex,
  label,
  name,
  required,
  value,
  autoComplete,
  onChange,
  placeholder,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [type, setType] = useState<TextFieldTypes>("password");
  return (
    <div className="learning-input-password relative mt-4">
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
        <span
          className="btn_eye_icon"
          onClick={() => setType(type === "text" ? "password" : "text")}
        >
          <IonIcon icon={type == "password" ? eyeOutline : eyeOffOutline} />
        </span>
      </div>
    </div>
  );
};

export default InputPassword;
