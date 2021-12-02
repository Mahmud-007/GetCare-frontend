import {useState,useEffect} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import styles from '../styles/SignupLogin.module.css'

const Cookies = require('js-cookie');

export default function ApplyDoctor(props:any){
    const [speciality,setSpeciality] = useState('');
    const [license,setLicense] = useState('');
    const [location,setLocation] = useState('');
    const [timing,setTiming] = useState('');

    const addDoctor=(e:any)=>{
        console.log(Cookies.get('user'));
        e.preventDefault();
        axios.post(`${process.env.API}/doctor/apply`,
        {
          speciality,
          license,
          location,
          timing
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
                <h1 className={styles.boxTitle}>Apply Doctor</h1>
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
                      setSpeciality(e.target.value);
                    }}
                    id="outlined-basic" 
                    label="Speciality" 
                    variant="outlined" 
                    
                />
                <br/>
                <TextField
                    onChange={(e)=>{ 
                      setLicense(e.target.value);
                    }}
                    id="outlined-basic" 
                    label="License" 
                    variant="outlined" 
                />
                    <br/>
                <TextField
                  onChange={(e)=>{ 
                    setLocation(e.target.value);
                  }}
                  id="outlined-basic" 
                  label="Location" 
                  variant="outlined" 
                />
                    <br/>
                <TextField
                  onChange={(e)=>{ 
                    setTiming(e.target.value);
                  }}
                  id="outlined-basic" 
                  label="Timing" 
                  variant="outlined" 
                />
                    <br/>
                    <Button
                        onClick={addDoctor}
                        variant="contained">
                            Add
                    </Button>
                </Box>
            </Card>
      </div>
    )
}