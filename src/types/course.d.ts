export type CourseType = {
  id?: string;
  title?: string;
  teacher?: string;
  tags?: string[];
  progress?: string;
  lessons?: number;
  totalLessons?: number;
  dueDate?: Date;
  picture?: string;
};
