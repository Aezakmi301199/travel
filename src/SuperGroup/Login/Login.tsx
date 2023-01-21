import React from 'react'
import Input from './component/inputs/LoginInput/Input'
import classes from './Login.module.css'
import { formErrors } from './interface/interface'
import { validateLoginForm } from './utils/utils'
const PageLogin = () => {
  const [authForm, setAuthForm] = React.useState({ username: '', password: '' })
  const [formErrors, setFormErrors] = React.useState<formErrors>({
    username: '',
    password: ''
  })
  return (
    <div className={classes.login_comtainer}>
      <div className={classes.login}>
        <h4 id={classes.login_title}>Авторизация</h4>
        <div className={classes.login_form}>
          <div className={classes.input_container}>
            <label className={classes.inputLabel}>Логин</label>
            <Input
              isError={!!formErrors.username}
              isErrorText={formErrors.username}
              type='email'
              placeholder='lena@gmail.com'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const username = e.target.value
                const error = validateLoginForm('username', username)
                setFormErrors({ ...formErrors, username: error })
                setAuthForm({ ...authForm, username: e.target.value })
              }}
            />
          </div>
          <div className={classes.input_container}>
            <label className={classes.inputLabel}>Пароль</label>
            <Input
              isError={!!formErrors.password}
              isErrorText={formErrors.password}
              type='password'
              placeholder='lena@gmail.com'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const username = e.target.value
                const error = validateLoginForm('password', username)
                setFormErrors({ ...formErrors, password: error })
                setAuthForm({ ...authForm, password: e.target.value })
              }}
            />
          </div>
          <a className={classes.linkRedirect}>Забыли пароль?</a>
          <button type='button'>Авторизоваться</button>
          <a className={classes.createAccount}>Еще не создали аккаунт?</a>
        </div>
      </div>
    </div>
  )
}

export default PageLogin
