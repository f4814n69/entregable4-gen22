import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'

const FormUser = ({ createNewUser,updateInfo, updateUserById, handleClose, setUpdateInfo }) => {

  const { reset, register, handleSubmit } = useForm()

  useEffect(() => {
    if(updateInfo){
    reset(updateInfo)
    }
  },[updateInfo])

  const submit = data => {
    if(updateInfo) {
      // Update
      updateUserById(updateInfo.id, data)
    } else {
      // Create
    createNewUser(data)
    }
    handleClose()
    reset(defaultValues)
  }

  const handleX = () => {
    reset(defaultValues)
    setUpdateInfo()
    handleClose()
  }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <h2 className='form_title'>Form User</h2>
      <div onClick={handleX} className='form_x'>x</div>
      <div className='form_item'>
        <label className='form_label' htmlFor="email">Email</label>
        <input className='form_input' {...register("email")} type="email" id="email" />
      </div>
      <div className='form_item'>
        <label className='form_label' htmlFor="password">Password</label>
        <input className='form_input' {...register("password")} type="password" id="password" />
      </div> 
       <div className='form_item'>
        <label className='form_label' htmlFor="firstname">First Name</label>
        <input className='form_input' {...register("first_name")} type="text" id="firstname" />
      </div>  
      <div className='form_item'>
        <label className='form_label' htmlFor="lastName">Last Name</label>
        <input className='form_input' {...register("last_name")} type="text" id="lastName" />
      </div> 
       <div className='form_item'>
        <label className='form_label' htmlFor="birthday">Birthday</label>
        <input className='form_input' {...register("birthday")} type="date" id="birthday" />
      </div>
      <button className='form_btn'>{ updateInfo ?  "update" : "Create" }</button>
    </form>
  )
}

export default FormUser