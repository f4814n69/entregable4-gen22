import React from 'react'

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpen }) => {
 
 const handleDelete = () => {
  deleteUserById(user.id)
 }
 
const handleUpdate = () => {
  setUpdateInfo(user)
  handleOpen()
}

  return (
    <article>
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
    <ul>
      <li><span>Email: </span>{user.email}</li>
      <li><span>Birthday: </span>{user.birthday}</li>
    </ul>
    <button onClick={handleDelete}>Delete</button>
    <button onClick={handleUpdate}>Update</button>
    </article>
  )
}

export default UserCard