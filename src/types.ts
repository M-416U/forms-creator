import { ZodType } from 'zod'
import { Typeofy } from './lib/typeofy'
export interface FieldObject {
  name: string
  value: string | number | boolean
  type: 'text' | 'number' | 'textarea' | 'checkbox' | 'file'
  className?: string
  parentClassName?: string
  child?: React.ReactNode
  customInput?: React.ElementType<any>
  validationSchema?: ZodType
  label?: string
  isRequired?: boolean
  errorClassName?: string
}

export interface FormCreatorProps {
  className?: string
  fields: FieldObject[]
  onSubmit: (formData: typeof Typeofy<FieldObject[]>) => void
  submitText?: string
  submitClassName?: string
}
