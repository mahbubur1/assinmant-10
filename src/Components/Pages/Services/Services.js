import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../../Home/Service/Service';
import {Row} from "react-bootstrap";
import './Services.css'

const Services = () => {
    const [services,setServices] =useState([])
    useEffect(() =>{
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id="services" className='mt-5'>
            <h1 className='mb-4 text-center'>Our Services</h1>
            <div  className='container g-2'>
           <Row>
           {
               services.map(service =><Service 
                key={service.id}
                service={service}
                >
                </Service>)
            }
           </Row>
          </div>
        </div>
    );
};

export default Services;