import { useState } from 'react';

export default (
  defaultValue: string
): [
  {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  },
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return [{ value, onChange }, setValue];
};
