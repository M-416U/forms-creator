# React Form Creator

A React component for creating dynamic forms with validation using Zod schemas.

## Installation

You can install the `react-form-creator` package via npm:

```bash
npm install react-form-creator
```

````

## Usage

### Importing the Component

```javascript
import FormCreator from 'react-form-creator'
```

### Creating Form Fields

Consider organizing your form field definitions in a `forms` folder. Each form can have its own file containing the field definitions.

For example, you can create a `LoginForm.js` file inside the `forms` folder:

```javascript
// forms/LoginForm.js
import { z } from 'zod'

export const loginFormFields = [
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

```jsx
import { loginFormFields } from './forms/LoginForm'

// Inside your component
;<FormCreator fields={loginFormFields} onSubmit={handleSubmit} submitText='Login' />
```

### Handling Form Submission

```javascript
const handleSubmit = (formData) => {
  // Handle form submission here
  console.log('Form data:', formData)
}
```


# FormCreator Component

The `FormCreator` component is a React component designed to simplify the creation of dynamic forms. It allows users to define form fields and their properties easily, including validation using Zod schemas.

## Props

The `FormCreator` component accepts the following props:

- `fields`: An array of `FieldObject` instances representing form fields.
- `onSubmit`: A function to handle form submission. It receives the form data as an argument.
- `submitText` (optional): Text to display on the submit button (default is "Submit").
- `submitClassName` (optional): CSS class name for styling the submit button.
- `className` (optional): CSS class name for styling the form itself.
- Additional props that can be added to the `FieldObject` interface:
  - `className`: CSS class name for styling the input field.
  - `parentClassName`: CSS class name for styling the parent div of the input field.
  - `child`: React node for rendering additional content inside the parent div of the input field.
  - `customInput`: Custom React component for rendering the input field.
  - `validationSchema`: Zod schema for validating the input field value.
  - `label`: Label text for the input field.
  - `isRequired`: Boolean indicating whether the input field is required.
  - `errorClassName`: CSS class name for styling the error message.
````
