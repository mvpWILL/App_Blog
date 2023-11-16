import React from 'react';

const Input_blog = ({ placeholder, value, onChange,required  }) => (
    
  <input type="text" required={required} placeholder={placeholder} value={value} onChange={onChange} />
);

export default Input_blog;
