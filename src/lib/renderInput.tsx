import React from 'react'
import { FieldObject } from '../types'
import { CheckboxInput, FileInput, NumberInput, TextInput, TextareaInput } from '../components/inputs'

const renderInput = (
  field: FieldObject,
  formData: { [key: string]: string },
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
) => {
  if (field.customInput) {
    const CustomInput = field.customInput
    return <CustomInput {...field} value={formData[field.name]} onChange={handleChange} />
  } else {
    switch (field.type) {
      case 'text':
        return <TextInput {...field} value={formData[field.name]} onChange={handleChange} />
      case 'number':
        return <NumberInput {...field} value={formData[field.name]} onChange={handleChange} />
      case 'textarea':
        return <TextareaInput {...field} value={formData[field.name]} onChange={handleChange} />
      case 'checkbox':
        return <CheckboxInput {...field} checked={formData[field.name] === 'true'} onChange={handleChange} />
      case 'file':
        return <FileInput {...field} onChange={handleChange} />
      default:
        return null
    }
  }
}

export default renderInput
