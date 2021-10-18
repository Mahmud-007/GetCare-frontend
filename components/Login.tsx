import {useState} from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import styles from '../styles/SignupLogin.module.css'
import Button from '@mui/material/Button';


export default function Login(props:any) {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const loginSubmitHandler = (e:any)=>{
        e.preventDefault();
        console.log("alskdf");
    }
    return (
        <div>
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
                    <form onSubmit={loginSubmitHandler}>
                        <input 
                            onChange={(e)=>{ 
                                //e.preventDefault();
                                setEmail(e.target.value);
                            }}
                            name="email" 
                            id="outlined-basic" 
                            placeholder="Email" 
                            
                        />
                        <br/>
                        <input
                            onChange={(e)=>{ 
                                // e.preventDefault();
                                setPassword(e.target.value);
                            }}
                            name="password"
                            id="outlined-basic" 
                            placeholder="Password" 
                            />
                            <br/>
                            <Button
                                type="submit"
                                variant="contained">
                                    Login
                            </Button>
                    </form>
                    
                    <br/>
                    <Button 
                        onClick={props.componentHanlder}
                        variant="text">
                            Don't have an account
                    </Button>

                </Box>
            </Card>
        </div>
    )
}
