import React from 'react'

const FormFields = ({name,type}) => {
  return (
    <div>
      <label htmlFor="">{name} </label>
      <input type={type} name="" id="" />
    </div>
  );
}

export default FormFields;