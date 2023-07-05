export type TextFieldTypes =
  | "date"
  | "email"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "url"
  | "time"
  | "week"
  | "month"
  | "datetime-local";

export interface DateTimeFormatOptions {
  localeMatcher?: "best fit" | "lookup" | undefined;
  weekday?: "long" | "short" | "narrow" | undefined;
  era?: "long" | "short" | "narrow" | undefined;
  year?: "numeric" | "2-digit" | undefined;
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
  day?: "numeric" | "2-digit" | undefined;
  hour?: "numeric" | "2-digit" | undefined;
  minute?: "numeric" | "2-digit" | undefined;
  second?: "numeric" | "2-digit" | undefined;
  timeZoneName?:
    | "short"
    | "long"
    | "shortOffset"
    | "longOffset"
    | "shortGeneric"
    | "longGeneric"
    | undefined;
  formatMatcher?: "best fit" | "basic" | undefined;
  hour12?: boolean | undefined;
  timeZone?: string | undefined;
}

export interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  label?: string;
  icon?: string;
  mode?: "ios" | "md";
  fill?: "clear" | "outline" | "solid" | "default";
  color?: string;
  shape?: "round";
  form?: string;
  slotIcon?: string;
  onClick?: MouseEventHandler;
  klass?: string;
  type?: "button" | "submit" | "reset";
  klassIcon?: string;
}
