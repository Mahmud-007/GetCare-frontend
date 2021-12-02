import React,{useState} from 'react';
import type { NextPage } from 'next';
import Navbar from '../../components/Navbar'

const Cookies = require('js-cookie');


const DoctorDetails:NextPage = () => {

    return (
        <div>
            <Navbar/>
                DoctorDetails profile
        </div>
    )
}

export default DoctorDetails;