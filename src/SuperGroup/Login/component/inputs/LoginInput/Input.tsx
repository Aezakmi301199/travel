import React from 'react'
import classes from './input.module.css'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError: boolean
  isErrorText: string | null
}

const Input: React.FC<InputProps> = ({
  isError = false,
  isErrorText,
  ...props
}) => {
  const className = isError ? 'input_error' : ''

  return (
    <div className={classes.input_container}>
      <input className={classes[className]} {...props} />
      {isError && isErrorText ? (
        <div className={classes.input_error_container}>
          <p className={classes.errorText}>{isErrorText}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Input
