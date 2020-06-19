import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

import styles from './BuildAComponent.css'

export default function BuildAComponent() {
    
    const [ ccNumber, setCCNumber ] = useState('');

    const changeHanlder = (e) => {
       
       let cleanValue = e.target.value.trim().replace(/\s\s+/g,"").substr(0, 19);
       const reg = RegExp(/[0-9\s]+$/,"g");
       let isValid = reg.test(cleanValue) && cleanValue.length < 20;
             
       if (isValid) {
       	  
       	 let arr = cleanValue.split("");
       	 console.log('changeHanlder', e.target.value,isValid);
       	 if (cleanValue.charAt(0) == 4 || 
       	 	cleanValue.charAt(0) == 3) {

       	   if (arr.length === 17) {
	       	    cleanValue = arr.join("");
       	   }
       	   else if (arr.length === 14) {
	       	    arr.splice(14, 0," ");
	       	    cleanValue = arr.join("");
       	   }
       	   else if (arr.length === 9) {
	       	    arr.splice(9, 0," ");
	       	    cleanValue = arr.join("");
       	   }
       	   else if (arr.length === 4) {
	       	    arr.splice(4, 0," ");
	       	    cleanValue = arr.join("");
       	   }
       	   setCCNumber(cleanValue);
	      
	    }
	}
       else {
	        setCCNumber(cleanValue);
	       	return false;
       }

    }

    return (
         <div className={styles.BuildAComponent}>
         <div className={styles.InputWrapper}>
         <label htmlFor="ccField">Credit Card Visa/Master</label>
         <input type="text" onChange={changeHanlder} value={ccNumber} id="ccField"/>
         </div>
         </div>
    )}