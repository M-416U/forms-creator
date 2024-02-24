import React from 'react'

interface FileInputProps {
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const FileInput: React.FC<FileInputProps> = ({ name, onChange, className = '' }) => {
  return <input type='file' id={name} name={name} onChange={onChange} className={`input ${className}`} />
}

export default FileInput
