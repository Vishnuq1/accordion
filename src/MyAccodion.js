 import React from 'react';
import { questions } from './api';

 const MyAccodion =()=>
 {
    const questions=()=>{
        return(
            questions=[

                {
                    id:1,
                    question: "what is your mobile no?",
                    answer:" kru main ky dial no."
                },
                {
                    id:2,
                    question:" ucchi h building",
                    answer:" lift teri bnd hai"
                }
                
                
                ]
                
        );
    }
    return(
<>
<h1>{questions}</h1>





<h2>hii</h2>
</>
    );
    }

 export default MyAccodion;