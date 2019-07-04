import { useState } from 'react';

export const useValue = (initialSelectValue) => {
  const [value, setValue] = useState(initialSelectValue);

  const handleChange = (val) => {
    setValue(val);
  };

  return { value, onChange: handleChange };
};

export const useEventValue = (initialSelectValue) => {
  const [value, setValue] = useState(initialSelectValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return { value, onChange: handleChange };
};