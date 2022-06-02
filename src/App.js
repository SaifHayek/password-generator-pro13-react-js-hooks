import React, { useState } from 'react'
import Msg from './Components/Msg'
import PassForm from './Components/PassForm'
import Title from './Components/Title'

function App() {
  let [isAlert,setIsAlert] = useState(false) ;
  let [alertMsg,setAlertMsg] = useState('Password is generated successfully')
  return (
    <>
      <div className='app'>
           {isAlert && <Msg alertMsg={alertMsg}/>}
          <Title/>
          <PassForm setIsAlert = {setIsAlert} setAlertMsg={setAlertMsg}/>
      </div>
    </>
  )
}

export default App
