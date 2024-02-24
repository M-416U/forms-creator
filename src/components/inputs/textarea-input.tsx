import React from 'react'

interface TextareaInputProps {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  isRequired?: boolean
}

const TextareaInput: React.FC<TextareaInputProps> = ({ name, value, onChange, className = '', isRequired = false }) => {
  return (
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={isRequired}
      className={`input ${className}`}
    />
  )
}

export default TextareaInput
