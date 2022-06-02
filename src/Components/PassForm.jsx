import React,{useRef, useState}from 'react'
import CheckBoxes from '../CheckBoxes'
import Msg from './Msg'

function PassForm({setIsAlert,setAlertMsg}) {
    let [checkInfo,setCheckInfo] = useState({
        passwordLength : 8 ,
        addUppercase : false ,
        addLowercase : false ,
        includeNumber : false ,
        includeSymbols : false ,
    })
    let [char,setChar] = useState({
        lowercase : 'abcdefghijklmnopqrstuvwxyz' ,
        uppercase : 'abcdefghijklmnopqrstuvwxyz'.toUpperCase() ,
        numbers : '0123456789' ,
        symbols : '/*-+=%!?@#$^&_' 
    })
    let [password,setPassword] = useState('')
  
   const generatePassword = (e) => {
        e.preventDefault()
        let availableChars = [];
        if(checkInfo.addUppercase){
            availableChars = [...availableChars,...char.uppercase.split("")]
        }
        if(checkInfo.addLowercase){
            availableChars = [...availableChars,...char.lowercase.split("")]
        }
        if(checkInfo.includeNumber){
            availableChars = [...availableChars,...char.numbers.split("")]
        }
        if(checkInfo.includeSymbols){
            availableChars = [...availableChars,...char.symbols.split("")]
        }
        let password = ''
        for(let i = 0 ;i<checkInfo.passwordLength ; i++){
            password += availableChars.length > 0 ? availableChars[Math.floor(Math.random()*availableChars.length)] : ''
        }
        setPassword(password)
        setIsAlert(true)
        if(availableChars.length == 0){
            setAlertMsg('You must to check at least one checkbox')
        }else{
            setAlertMsg('Password is generated successfully')
        }
        setTimeout(()=>{
            setIsAlert(false)
        },2000)
   }

   const copyPassword = () => {
         navigator.clipboard.writeText(password)
         setIsAlert(true)
         if(password){
             setAlertMsg('Copying Done Successfully')
         }else{
             setAlertMsg('Sorry, there is no password')
         }
         setTimeout(()=>{
            setIsAlert(false)
        },2000)
   }

  return (
    <form onSubmit={generatePassword}> 
        <h3 className='input-password' >
            <span>{password}</span>
            <i className="fa-solid fa-copy" onClick={copyPassword}></i>
        </h3>
        <CheckBoxes checkInfo={checkInfo} setCheckInfo = {setCheckInfo}/>
        <button type="submit" className='submit-btn' >Generate password</button>
    </form>
  )
}

export default PassForm
