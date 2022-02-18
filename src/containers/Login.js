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
        <LinkButton text='Forgot Password ?'/>
        <Button textbtn="Login"/>
        <p color='#666666'>Don't have an Account?</p><LinkButton text="Sign Up"/>
    </div>
  )
}

export default Login