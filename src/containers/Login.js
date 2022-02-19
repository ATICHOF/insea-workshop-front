import React from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/input'
import LinkButton from '../components/ui/LinkButton'
import '../styles/container.css'
const Login = () => {
  return (
    <div className='login'>
        <h1>Welcome Back to Fastcast</h1>
        <Input name="Email"/>
        <Input name="Password"/>
        <p><LinkButton text='Forgot your Password ?' link={"/forgotpass"} /></p>
        <Button textbtn="Login"/>
        <p color='#666666'>Don't have an Account? <LinkButton text="Sign Up" link={"signup"}/></p>
    </div>
  )
}

export default Login