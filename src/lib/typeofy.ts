import { FieldObject } from '../types'

type ValueForType<T extends FieldObject['type']> = T extends 'text' | 'textarea'
  ? string
  : T extends 'number'
    ? number
    : T extends 'checkbox'
      ? boolean
      : T extends 'file'
        ? File
        : never

function generateType<T extends FieldObject>(field: T): { [K in T['name']]: ValueForType<T['type']> } {
  return {
    [field.name]: field.value as ValueForType<T['type']>,
  } as { [K in T['name']]: ValueForType<T['type']> }
}
export function Typeofy(fields: FieldObject[]) {
  return typeof fields.map((field) => generateType(field))
}
