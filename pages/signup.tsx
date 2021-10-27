import React from 'react';
import type { NextPage } from 'next';
import Card from '@mui/material/Card';
import Link from 'next/link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from '../styles/SignupLogin.module.css'
import Button from '@mui/material/Button';


const Signup:NextPage = () => {
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
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <br/>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <br/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    <br/>
                    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
                    <br/>

                    <Button variant="contained">Signup</Button>
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