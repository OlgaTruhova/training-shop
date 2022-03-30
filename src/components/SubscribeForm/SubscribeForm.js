import React, { useState } from "react";
import { useAddUserEmailMutation } from "../../redux/products/productsApi";
import classNames from "classnames";
import { LoadingSub } from "../LoadingSub/LoadingSub";

const SubscribeForm = (inf) => {
   const [addUserEmail, {isLoading, error}] = useAddUserEmailMutation();

   const [userEmail, setUserEmail] = useState('');
   const [isDisabled, setIsDisabled] = useState(true);
  
   

   const validateEmail = (email) => {
      const reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      const res = reg.test(email);
      return res; 
   }

   const onEmailChange = (e) => {
      let email = e.target.value;
      let valid = validateEmail(email);
      setUserEmail(email);
      isDisabledBtn(valid);
   }

   const isDisabledBtn = (valid) => {
      if (valid === true) {
         setIsDisabled(false);
      } else {
         setIsDisabled(true);
      }
   }
   
   const handlerChange = async () => {
      await addUserEmail({"mail": `${userEmail}`}).unwrap();
   }

   return (
      <>
         <input type={inf.type} name={inf.type} placeholder={inf.placeholder} onChange={onEmailChange} data-test-id={inf.test}/>
         {
            error ? error.originalStatus !== 200 ? <span className="subscribe-error">Ошибка при отправке почты</span> : 
            <span className="subscribe-noerror">Почта отправлена успешно</span> : null
         }
         <button onClick={handlerChange} id="subscribe-btn" data-test-id={inf.testBtn} disabled={isDisabled || isLoading}
         className={classNames("button", {active: isDisabled === true})}>
            {isLoading && <LoadingSub />}
            {inf.textBtn}
         </button>
         
      </>
   )
}

export { SubscribeForm }