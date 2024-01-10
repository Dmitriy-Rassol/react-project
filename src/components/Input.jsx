import React from 'react';
const styles = {margin: '0 20px 0 0'}

const Input = ({ value, onChange }) => {
  return (
    <input style={styles} type="text" value={value} onChange={onChange} />
  );
};

export default Input;