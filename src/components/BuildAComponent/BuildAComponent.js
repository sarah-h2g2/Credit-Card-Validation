import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

import styles from './BuildAComponent.css'

export default function BuildAComponent() {
    
    const [ ccNumber, setCCNumber ] = useState('');

    const changeHanlder = (e) => {
       
       let cleanValue = e.target.value.trim().replace(/\s\s+/g," ");
       cleanValue = cleanValue && (cleanValue[0] == 4 || cleanValue[0] ==  5) ? cleanValue.substr(0, 19) : cleanValue.substr(0, 17);
       const reg = RegExp(/^[0-9\s]+$/,"g");
       let isValid = reg.test(cleanValue);
             console.log(isValid,cleanValue);
       if (isValid) {
          
         let arr = cleanValue.split("");
         
         if (cleanValue.charAt(0) == 4 || 
          cleanValue.charAt(0) == 5) {

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
         }

         else if (cleanValue.charAt(0) == 3) {

           if (arr.length === 17) {
              cleanValue = arr.join("");
           }
           else if (arr.length === 12) {
              arr.splice(12, 0," ");
              cleanValue = arr.join("");
           }
           else if (arr.length === 5) {
              arr.splice(5, 0," ");
              cleanValue = arr.join("");
           }
         }
           setCCNumber(cleanValue);
        
      }
  
       else {

          return false;
       }

    }

    return (
         <div className={styles.BuildAComponent}>
         <div className={styles.InputWrapper}>
         <label htmlFor="ccField">Credit Card Visa/Master/American Express</label>
         <input type="text" onChange={changeHanlder} value={ccNumber} id="ccField"/>
         </div>
         </div>
    )}