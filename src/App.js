import React from 'react';
import Button from './components/ui/Button';
import Input from './components/ui/input';
import LinkButton from './components/ui/LinkButton';
const App = () => {
  return (
<div>
  <Button textbtn="hola"/>
  <Input name={"password"}/>
  <LinkButton text={'password'}/>
</div>
  )
}

export default App