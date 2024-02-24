# Forms Creator

A React component for creating dynamic forms with validation using Zod schemas.

## Installation

You can install the `forms-creator` package via npm:

`````bash
npm install forms-creator
```

Usage
Importing the Component
````bash
import FormCreator from 'forms-creator'
```

Creating Form Fields
Consider organizing your form field definitions in a forms folder. Each form can have its own file containing the field definitions.

For example, you can create a LoginForm.ts file inside the forms folder:

```bash

// forms/LoginForm.ts
import { z } from 'zod'
import { FieldObject } from 'forms-creator/types'

export const loginFormFields: FieldObject[] = [
{
name: "username",
value: "",
type: "text",
label: "Username",
validationSchema: z.string().min(3, "Username must be at least 3 characters long"),
isRequired: true,
errorClassName: "error",
},
{
name: "password",
value: "",
type: "password",
label: "Password",
validationSchema: z.string().min(6, "Password must be at least 6 characters long"),
isRequired: true,
errorClassName: "error",
},
]

```
Using the FormCreator Component

```bash

import { loginFormFields } from './forms/LoginForm'

// Inside your component
<FormCreator className='form' fields={loginFormFields} onSubmit={handleSubmit} submitText='Login' />
```
Handling Form Submission

```bash
const handleSubmit = (formData) => {
// Handle form submission here
console.log('Form data:', formData)
}
```
`````
