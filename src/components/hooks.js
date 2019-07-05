import { useState } from 'react';

export const useValue = (initialSelectValue, initialSelectId = undefined, initialName = undefined) => {
  const [value, setValue] = useState(initialSelectValue);
  const [id, setId] = useState(initialSelectId);
  const [name, setName] = useState(initialName);

  const handleChange = (value, id) => {
    setValue(value);
    if (id) setId(id);
    if (name) setName(name);
  };

  const objectId = id ? { id } : {};
  const objectName = name ? { name } : {};

  return { ...objectId, ...objectName, value, onChange: handleChange };
};