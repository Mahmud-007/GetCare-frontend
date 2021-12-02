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

export default function Doctor(props:any) {
    // let store = createStore(allReducers);
  const [doctors,setDoctors] = useState([{
    id: 1,
    speciality: "null  ",
    license: 'null',
    location: 'null',
    timing: "null"
  }]);
  
  //console.log("form auth",isAuthenticated)
  useEffect(() => {
    console.log("useEffect");
    // access_token handled by headers authorization
    axios.get(`${process.env.API}/doctors`, { 
        'headers': { 
          'Authorization': Cookies.get('user') 
        }
      })
      .then((res:any)=>{
        setDoctors(res.data);
        console.log(typeof(doctors))
        console.log("doc:", doctors);
      })
      .catch((err)=>{
        console.log(err);
        console.log("token", Cookies.get('user'));
      })
  },[]);
  
    return (
        <div>
            Doctors
            <div>
                <ul>
                {
                doctors.map(doctor => (
                    <Link href={`doctor/${doctor.id}`}>
                      <li key={doctor.id}>{doctor.speciality} -- {doctor.license} -- {doctor.timing} -- {doctor.location}</li>
                    </Link>
                )) 
                
                }
                </ul>
          </div>
        </div>
    );
}
