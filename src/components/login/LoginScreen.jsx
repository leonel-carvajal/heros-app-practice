import React from 'react'

const LoginScreen = ({history}) => {

  const handleClick = ()=>{
    history.replace('/')
  }
  return (
    <div className='container'>
      <h1 className='container-title'>Login</h1>
      <hr/>
      <button className='container-button' onClick={handleClick}>Login</button>
    </div>
  )
}

export default LoginScreen;
