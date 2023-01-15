import React, {useState} from 'react';
import {questions} from './api';
import MyAccodion from './MyAccodion';
import './accordion.css';

const Accordion=()=>{
const [data, setData]= useState(questions);

    return(
        <>
        <h1>hii</h1>
        {
            data.map((curElem)=>{
            const {id} = curElem;
            return <MyAccodion key ={id} {... curElem} />

            })
        }

        </>
    );
}

export default Accordion;