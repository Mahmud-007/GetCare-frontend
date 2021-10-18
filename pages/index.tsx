import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Signup from '../components/Signup';
import Login from '../components/Login';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [isLogin,setIsLogin] = useState(false);
  const componentHandler:any = ()=>{
    setIsLogin(!isLogin);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <meta name="description" content={process.env.APP_NAME} />
      </Head>
      <div>
        {
          isLogin ? 
            <Login componentHanlder={componentHandler} /> 
            : 
            <Signup componentHanlder={componentHandler}/>
        }

      </div>
    </div>
  )
}

export default Home
