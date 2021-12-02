import { useEffect, useState } from 'react';
import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Users from '../components/Users';
import Doctors from '../components/Doctors';
import Patients from '../components/Patients';
import Navbar from '../components/Navbar'

// import {createStore} from 'redux'
// import allReducers from '../reducers/'
const Cookies = require('js-cookie');


const Home:NextPage = () => {
 
  //console.log("form auth",isAuthenticated)
  useEffect(() => {
    console.log("useEffect form index");
    
  },[])
    return (
        <div>
          <Navbar/>
            <div className={styles.container}>
              <Users/>
              <Doctors/>
              <Patients/>
            <Head>
              <title>{process.env.APP_NAME}</title>
              <meta name="description" content={process.env.APP_NAME} />
            </Head>
            <div>
              
            </div>
          </div>
        </div>
      );
}

export default Home;