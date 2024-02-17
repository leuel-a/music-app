import React from 'react';

interface Props {
  name: string;
}

const CheckBox: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <label>
        <input type="checkbox" />
        <span>{name}</span>
      </label>
    </div>
  );
};

export default CheckBox;