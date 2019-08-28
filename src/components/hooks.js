import { useState } from 'react';

export const useValue = (initialValue, initialData = {}) => {
  const [value, setValue] = useState(initialValue);
  const [data] = useState(initialData);

  const handleChange = (value) => {
    setValue(value);
  };

  return { value, onChange: handleChange, ...data };
};
