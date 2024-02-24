# Forms Creator

A React component for creating dynamic forms with validation using Zod schemas.

## Installation

##### You can install the `forms-creator` package via npm:

```bash
npm install forms-creator
```

##### or yarn

```bash
yarn add forms-creator
```

## Usage

Importing the Component

```TypeScript
import FormCreator from 'forms-creator'
```

## Creating Form Fields

Consider organizing your form field definitions in a forms folder. Each form can have its own file containing the field definitions.

#### For example, you can create a LoginForm.ts file inside the forms folder:

```TypeScript
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

### Using the FormCreator Component

```TypeScript
import { loginFormFields } from './forms/LoginForm'

// Inside your component
<FormCreator className='form' fields={loginFormFields} onSubmit={handleSubmit} submitText='Login' />
```

### Handling Form Submission

```TypeScript
const handleSubmit = (formData) => {
// Handle form submission here
console.log('Form data:', formData)
}
```

## Props

| Prop            | Type              | Description                                                                     |
| --------------- | ----------------- | ------------------------------------------------------------------------------- |
| className       | String            | CSS class name for styling the form itself.                                     |
| fields          | Array             | An array of FieldObject instances representing form fields.                     |
| onSubmit        | Function          | A function to handle form submission. It receives the form data as an argument. |
| submitText      | String (optional) | Text to display on the submit button (default is "Submit").                     |
| submitClassName | String (optional) | CSS class name for styling the submit button.                                   |

## Field Options

| Option           | Type                              | Description                                                                           |
| ---------------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| name             | String                            | The name of the form field.                                                           |
| value            | String \| Number \| Boolean       | The initial value of the form field.                                                  |
| type             | String                            | The type of the form field (text - number - textarea - checkbox - file).              |
| className        | String (optional)                 | CSS class name for styling the input field.                                           |
| parentClassName  | String (optional)                 | CSS class name for styling the parent div of the input field.                         |
| child            | React.ReactNode (optional)        | React node for rendering additional content inside the parent div of the input field. |
| customInput      | Custom React Component (optional) | Custom React component for rendering the input field.                                 |
| validationSchema | Zod Schema (optional)             | Zod schema for validating the input field value.                                      |
| label            | String (optional)                 | Label text for the input field.                                                       |
| isRequired       | Boolean (optional)                | Boolean indicating whether the input field is required.                               |
| errorClassName   | String (optional)                 | CSS class name for styling the error message.                                         |
