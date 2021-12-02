import React,{useState} from 'react';
import type { NextPage } from 'next';
import Doctor from '../../components/Doctors';
import Navbar from '../../components/Navbar'

const Cookies = require('js-cookie');

const Doctors:NextPage = () => {

    return (
        <div>
            <Navbar/>
            <Doctor/>
        </div>
    )
}

export default Doctors;