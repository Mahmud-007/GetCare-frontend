import React,{useState} from 'react';
import type { NextPage } from 'next';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import styles from '../styles/SignupLogin.module.css';
import Button from '@mui/material/Button';

const Login:NextPage = () => {

    const router = useRouter();
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const loginSubmitHandler = (e:any)=>{
        e.preventDefault();
        
        axios.post(`${process.env.API}/login`,{
            email,password
        })
            .then((response)=>{
                console.log(response.data);
                 
                 router.push('/auth');
            })
            .catch((error)=>{
                console.log(error);
            });
            console.log(email,password);
    }


    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <h1 className={styles.boxTitle}>{process.env.APP_NAME}</h1>
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
                        //e.preventDefault();
                        setEmail(e.target.value);
                    }}
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    
                />
                <br/>
                <TextField
                    onChange={(e)=>{ 
                        // e.preventDefault();
                        setPassword(e.target.value);
                    }}
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    />
                    <br/>
                    <Button
                        onClick={loginSubmitHandler}
                        variant="contained">
                            Login
                    </Button>
                    
                    <br/>
                    <Link href='/signup'>
                    <Button 
                        
                        variant="text">
                            Don't have an account
                    </Button>
                    </Link>

                </Box>
            </Card>
        </div>
    )
}

export default Login;