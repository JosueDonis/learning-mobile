export type CardType = {
  id?: string | number;
  icon?: string;
  title?: string;
  description?: string | number;
  klass?: string;
  klassIcon?: string;
  klassTitle?: string;
  klassDescription?: string;
  klassContentText?: string;
};

export type ProgressType = {
  klass?: string;
  value: number;
  total?: number;
  title?: string;
  description?: string;
  color?: "primary" | "secondary" | "tertiary";
  type?: "progress" | "average";
};

export type CalendarType = {
  id?: string;
  klass?: string;
  klassText?: string;
  title?: string;
  description?: string;
  users?: string[];
  date?: Date;
  endDate?: Date;
};

export type SegmentType = {
  label?: string;
  value?: string;
};

export type PlaceholderType = {
  klass?: string;
  state?: string;
  title?: string;
  description?: string;
  img?: string;
  icon?: string;
  klassIcon?: string;
};
