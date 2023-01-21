export const validatEmpty = (value: string) => {
  console.log(value)
  console.log(!value)
  if (!value) {
    return 'Пустое поле'
  }
  return null
}

export const validatePassword = (value: string) => {
  return validatEmpty(value)
}

export const validateUsername = (value: string) => {
  return validatEmpty(value)
}

export const validateLoginForm = (
  name: keyof typeof loginFormSchema,
  value: string
) => {
  return loginFormSchema[name](value)
}

export const loginFormSchema = {
  username: validateUsername,
  password: validatePassword
}
