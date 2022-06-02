import React, { useEffect, useState } from 'react'

function CheckBoxes({checkInfo,setCheckInfo}) {

  return (
    <div>
        <div className='label-wrap'>
            <label htmlFor="password-length">Password Length</label>
            <input type="number"  id="password-length" min="8" max="26" defaultValue="8" onChange={(e) => setCheckInfo({...checkInfo,passwordLength:e.target.value})}/>
        </div>
        <div className='label-wrap'>
            <label htmlFor="uppercase">Add uppercase letters</label>
            <input type="checkbox"  id="uppercase"  onChange={(e) => setCheckInfo({...checkInfo,addUppercase:e.target.checked})}/>
        </div>
        <div className='label-wrap'>
            <label htmlFor="lowercase">Add lowercase letters</label>
            <input type="checkbox"  id="lowercase" onChange={(e) => setCheckInfo({...checkInfo,addLowercase:e.target.checked})}/>
        </div>
        <div className='label-wrap'>
            <label htmlFor="number">Include number</label>
            <input type="checkbox"  id="number" onChange={(e) => setCheckInfo({...checkInfo,includeNumber:e.target.checked})}/>
        </div>
        <div className='label-wrap'>
            <label htmlFor="symbols">Include symbols</label>
            <input type="checkbox"  id="symbols" onChange={(e) => setCheckInfo({...checkInfo,includeSymbols:e.target.checked})}/>
        </div>
    </div>
  )
}

export default CheckBoxes
 