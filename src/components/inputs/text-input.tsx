import React from 'react'

interface TextInputProps {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  isRequired?: boolean
}

const TextInput: React.FC<TextInputProps> = ({ name, value, onChange, className = '', isRequired = false }) => {
  return (
    <input
      type='text'
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={isRequired}
      className={`input ${className}`}
    />
  )
}

export default TextInput
