import React from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/input'
import LinkButton from '../components/ui/LinkButton'
import '../styles/container.css'
const ForgotPass = () => {
  return (
    <div className='ForgotPass'>
        <h1>Forgot your Password?</h1>
        <p>it's okey, we got you! What's your Email address?</p>
        <Input name="Email"/>
        <Button textbtn="Reset Password"/>
        <p>Oh wait! I remembered ! Back to <LinkButton text="Sign in"/> </p>
    </div>
  )
}

export default ForgotPass