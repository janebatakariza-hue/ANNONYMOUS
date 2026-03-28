import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css'


function App(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      try {
        const fetchUsers = async()=>{
          const res = await axios.get("http://localhost:3000/api/admin");
          if(res.status ===200){
              setUsers(res.data.users)
          
          }
        }
        fetchUsers()

        
      } catch (error) {
        console.log(error)
      }
    },[])
    console.log(users)

  return (
    <>
    <div>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </table>
      {
        users.map(user =>(
          <div className='div'>
            <p>{user.fname}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
          </div>
        ))
      }
      </div>
    </div>
    </>
  )
}

export default App;