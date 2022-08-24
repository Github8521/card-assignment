import React from 'react'
import { useSelector } from 'react-redux';

export default function Alert() {
  const alert=useSelector((state)=>state.alert.alert)
  const capitalizeFirstLetter=(string)=> {
    if(string==='danger'){
      string='error'
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
    <div style={{height:'100px'}}>
   { alert &&<div className={`alert alert-${alert.type} alert-dismissible fade show` }role="alert">
    <strong>{capitalizeFirstLetter( alert.type)}!</strong> {alert.message}.
  </div>}
  </div>
  </>
  )
}
