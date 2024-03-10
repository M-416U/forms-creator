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

type GeneratedType<T extends FieldObject[]> = {
  [P in keyof T]: T[P] extends FieldObject ? { [K in T[P]['name']]: ValueForType<T[P]['type']> } : never
}

type Typeofy<T extends FieldObject[]> = GeneratedType<T>

export function Typeofy<T extends FieldObject[]>(fields: T): Typeofy<T> {
  return fields.map((field) => generateType(field)) as Typeofy<T>
}
