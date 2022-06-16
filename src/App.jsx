import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUsername } from './features/users';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


function App() {

  const dispatch = useDispatch()
  const userList = useSelector((state) => state.users.value)
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [newUsername, setNewUsername] = useState("")

  return (
    <div className="App">
      <div className="addUser mt-4 py-3 px-5 rounded shadow-lg">
        <h2>Create User</h2>
        <input className="form-control mt-2" type="text" onChange={(e) => setName(e.target.value)} placeholder='Name...' />
        <input className="form-control mt-2" type="text" onChange={(e) => setUsername(e.target.value)} placeholder='Username...' />
        <button className="btn btn-success mt-2" style={{width: '100%'}} onClick={() => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username })) }}>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map(user => {
          return <div>
            <h1>{user.name}</h1>
            <h2>{user.username} id:{user.id}</h2>
            <input className="form-control mb-2" style={{width: '60%', marginLeft: '20%'}} type="text" placeholder='NewUsername'onChange={(e) => setNewUsername(e.target.value)}/>
            <button className='btn btn-primary me-2 shadow' onClick={()=>{dispatch(updateUsername({id: user.id, username: newUsername}))}}> Update Username</button>
            <button className='btn btn-danger ms-2 shadow' onClick={()=>{dispatch(deleteUser({id:user.id}))}}> Delete User</button>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
