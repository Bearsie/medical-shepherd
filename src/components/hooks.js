import { useState } from 'react';

export const useSelectValue = (initialSelectValue) => {
    const [value, setValue] = useState(initialSelectValue);
  
    const handleChange = (val) => {
      setValue(val);
    };
  
    return { value, onChange: handleChange };
  };