import React from 'react'

interface CheckboxInputProps {
  name: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ name, checked, onChange, className = '' }) => {
  return (
    <input
      type='checkbox'
      id={name}
      name={name}
      checked={checked}
      onChange={onChange}
      className={`input ${className}`}
    />
  )
}

export default CheckboxInput
