import { FieldObject } from '../types'

export function Typeofy(fields: FieldObject[]): Record<string, string | number | boolean> {
  const dynamicType: Record<string, string | number | boolean> = {}

  fields.forEach((field) => {
    dynamicType[field.name] = field.value
  })

  return dynamicType
}
