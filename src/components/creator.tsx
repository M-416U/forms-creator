'use client'
import React, { useState } from 'react'
import { FormCreatorProps } from '../types'
import { RenderInput } from '../lib'
import { ZodError } from 'zod'

const FormCreator: React.FC<FormCreatorProps> = ({ className, fields, onSubmit, submitText, submitClassName }) => {
  const [formData, setFormData] = useState<any>({})
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }))
    validateField(name, value)
  }

  const validateField = (name: string, value: string) => {
    const field = fields.find((field) => field.name === name)
    if (field?.validationSchema) {
      try {
        field.validationSchema.parse(value)
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors }
          delete newErrors[name]
          return newErrors
        })
      } catch (error) {
        if (error instanceof ZodError) {
          const errorMessage = error.errors.map((err) => err.message).join('\n')
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
          }))
        }
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fields.forEach((field) => {
      if (field.validationSchema) {
        validateField(field.name, formData[field.name])
      }
    })

    if (Object.keys(errors).length === 0) {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`form ${className}`}>
      {fields.map((field) => (
        <div key={field.name} className={`parent ${field.parentClassName}`}>
          {field.child && field?.child}
          {field.label && <label className='label'>{field.label}</label>}
          {RenderInput(field, formData, handleChange)}
          {errors[field.name] && <span className={`error ${field.errorClassName}`}>{errors[field.name]}</span>}
        </div>
      ))}
      <button type='submit' className={`submit-btn ${submitClassName}`}>
        {submitText ? submitText : 'Submit'}
      </button>
    </form>
  )
}

export default FormCreator
