import {useState,useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import styles from '../styles/SignupLogin.module.css'
import Button from '@mui/material/Button';

const Cookies = require('js-cookie');

export default function User(props:any) {
    // let store = createStore(allReducers);
  const [users,setUsers] = useState([{
    id: 1,
    name: 'mahmud sdfg',
    email: 'mahmud@gmail.com',
  }]);
  
  //console.log("form auth",isAuthenticated)
  useEffect(() => {
    console.log("useEffect");
    // access_token handled by headers authorization
    axios.get(`${process.env.API}/users`, { 
        'headers': { 
          'Authorization': Cookies.get('user') 
                  }
      })
      .then((res:any)=>{
        setUsers(res.data);
        console.log(typeof(users))
        console.log(users);
      })
      .catch((err)=>{
        console.log(err);
        console.log("token", Cookies.get('user'));
      })
  },[])
    
    return (
        <div>
            Users
            <div>
                <ul>
                {
                users.map(user => (
                    <li key={user.id}>{user.name} -- {user.email}</li>
                )) 
                
                }
                </ul>
            </div>
        </div>
    );
}
