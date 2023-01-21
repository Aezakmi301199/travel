import React from 'react'
import classes from './input.module.css'
import hidden from './image/hiddenEye.svg'
import visible from './image/visibleEye.svg'
interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError: boolean
  isErrorText: string | null
  value: string
}

const defaultType = 'password'

const PasswordInput: React.FC<InputProps> = ({
  isError = false,
  isErrorText,
  value,
  ...props
}) => {
  console.log(value)
  const className = isError ? 'input_error' : ''
  const [showedPassword, setShowPassword] = React.useState(false)
  const type = showedPassword ? 'text' : defaultType
  return (
    <div className={classes.input_container}>
      <input className={classes[className]} {...props} type={type} />
      {isError && isErrorText ? (
        <div className={classes.input_error_container}>
          <p className={classes.errorText}>{isErrorText}</p>
        </div>
      ) : (
        ''
      )}
      {value ? (
        <img
          onClick={e => setShowPassword(!showedPassword)}
          src={showedPassword ? visible : hidden}
          className={classes.picture}
        ></img>
      ) : (
        ''
      )}
    </div>
  )
}

export default PasswordInput
