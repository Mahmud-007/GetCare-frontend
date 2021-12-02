import {useState,useEffect} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from '../styles/SignupLogin.module.css';
import Button from '@mui/material/Button';

const Cookies = require('js-cookie');

export default function Patients(){
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');
    const [patients,setPatients] = useState([{
        id:1,
        age:'kf',
        gender:"male"
    }]);
    // access_token handled by headers authorization
    useEffect(() =>{
        axios.get(`${process.env.API}/users`, { 
            'headers': { 
              'Authorization': Cookies.get('user') 
                      }
          })
          .then((res:any)=>{
            setPatients(res.data);
            console.log(patients);
          })
          .catch((err)=>{
            console.log(err);
            console.log("token", Cookies.get('user'));
          })
      },[]);
    
    const addPatient=(e:any)=>{
        console.log(Cookies.get('user'));
        e.preventDefault();
        axios.post(`${process.env.API}/patient/add-details`,
        {
            age,gender
        },
        { 
            'headers': { 
              'Authorization': Cookies.get('user') 
                      }
          })
          .then((res:any)=>{ 
            console.log(res);
          })
          .catch((err)=>{
            console.log("errorr",err);
          })
    }
    return (
        <div>
            Patients
            <Card className={styles.card}>
                <h1 className={styles.boxTitle}>Patients</h1>
                <Box
                    className={styles.box}
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '45ch' },
                    }}
                    noValidate
                    autoComplete="on"
                    >
                    <br/>  
                    <TextField 
                    onChange={(e)=>{ 
                        setAge(e.target.value);
                    }}
                    id="outlined-basic" 
                    label="Age" 
                    variant="outlined" 
                    
                />
                <br/>
                <TextField
                    onChange={(e)=>{ 
                        setGender(e.target.value);
                    }}
                    id="outlined-basic" 
                    label="Gender" 
                    variant="outlined" 
                    />
                    <br/>
                    <Button
                        onClick={addPatient}
                        variant="contained">
                            Add
                    </Button>
                </Box>
            </Card>
            <div>
                <ul>
                {
                patients.map(patient => (
                    <li key={patient.id}>{patient.age} -- {patient.gender}</li>
                )) 
                
                }
                </ul>
            </div>
        </div>
    )
}