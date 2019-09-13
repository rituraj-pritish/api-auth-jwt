import React,{useEffect} from 'react'
import {useAlert} from 'react-alert';

const CustomError = ({error}) => {
  const alert = useAlert();
  useEffect(()=> {
    if(error !== ''){
    alert.error(error);}
  },[error])
  
  return (
    <div >

    </div>
  )
}

export default CustomError
