import React,{useState} from 'react';
import type { NextPage } from 'next';
import ApplyDoctor from '../../components/ApplyDoctor';
import Navbar from '../../components/Navbar'

const Cookies = require('js-cookie');

const DoctorApply:NextPage = () => {

    return (
        <div>
            <Navbar/>
            <ApplyDoctor/>
        </div>
    )
}

export default DoctorApply;