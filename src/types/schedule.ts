export type ClassProps = {
  id?: string;
  day: string;
  startTime: string;
  endTime?: string;
  subject: string;
  color: string;
  instructor: string;
};

export type SaveFormInputs = {
  day: string;
  startTime: string;
  endTime: string;
  subject: string;
  color: string;
  instructor: string;
};

export type ColorOption = {
  value: string;
  label: string;
  class: string;
};