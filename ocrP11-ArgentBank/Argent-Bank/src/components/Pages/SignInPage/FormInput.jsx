import React from 'react'

const FormInput = ({className, htmlFor, type, id, text, value, onChange, disabled}) => {
  return (
    <div className={className}>
            <label htmlFor={htmlFor}>{text}</label>
      <input type={type} id={id} value={value} onChange={onChange} disabled={disabled} />
          </div>
  )
}

export default FormInput