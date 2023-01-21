import React from 'react'
import Input from '../../components/ihputs/LoginInput/Input'
import classes from './PageLogin.module.css'
const PageLogin = () => {
  const [authForm, setAuthForm] = React.useState({ username: '', password: '' })
  console.log(authForm)
  return (
    <div className={classes.login_comtainer}>
      <div className={classes.login}>
        <h4 id={classes.login_title}>Авторизация</h4>
        <div className={classes.login_form}>
          <div className={classes.input_container}>
            <Input
              isError={true}
              isErrorText='Не то ввел браток'
              type='email'
              placeholder='lena@gmail.com'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAuthForm({ ...authForm, username: e.target.value })
              }}
            />
          </div>
          <div className={classes.input_container}>
            <Input
              isError={false}
              isErrorText=''
              type='email'
              placeholder='lena@gmail.com'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAuthForm({ ...authForm, password: e.target.value })
              }}
            />
          </div>
          <a className={classes.links_redirect}>Забыли пароль?</a>
          <a className={classes.links_redirect}>Еще не создали аккаунт?</a>
          <button type='button'>Авторизоваться</button>
        </div>
      </div>
    </div>
  )
}

export default PageLogin
