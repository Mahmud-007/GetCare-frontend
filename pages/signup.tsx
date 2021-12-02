import React,{useState} from 'react';
import type { NextPage } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router'
import Card from '@mui/material/Card';
import Link from 'next/link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from '../styles/SignupLogin.module.css'
import Button from '@mui/material/Button';

const Signup:NextPage = () => {
    const [name,setName] = useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [confirmPassword,setConfirmPassword] =useState('');
    const [message,setMessage] =useState('');
    const router = useRouter();
    const signupSubmitHandler = (e:any)=>{
        e.preventDefault();
        if (password!=confirmPassword){
            setMessage('Password did not matched');
        }
        else{ 
            axios.post(`${process.env.API}/signup`,
        {
            name,email,password
        }
        )
            .then((response:any)=>{
                router.push('/login');
            })
            .catch((error)=>{
                console.log(error);
            });
            console.log(email,password);
        }
        
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
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined" 
                        onChange={(e)=>{ 
                            setName(e.target.value);
                        }}
                        />
                    <br/>
                    <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined" 
                        onChange={(e)=>{ 
                            setEmail(e.target.value);
                        }}
                        />
                    <br/>
                    <TextField 
                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined" 
                        onChange={(e)=>{ 
                            setPassword(e.target.value);
                        }}
                        />
                    <br/>
                    <TextField 
                        id="outlined-basic" 
                        label="Confirm Password" 
                        variant="outlined" 
                        onChange={(e)=>{ 
                            setConfirmPassword(e.target.value);
                        }}
                        />
                    <br/>

                    <Button 
                        variant="contained"
                        onClick={signupSubmitHandler}
                        >
                            Signup
                    </Button>
                    <br/>
                    <Link href='/login'>
                    <Button 
                        variant="text">
                        Already Have an Account
                    </Button>
                    </Link>

                </Box>
            </Card>
        </div>
    )
}

export default Signup;