import React, { useState } from "react";
import { useSubmitProductReviewMutation } from "../../redux/products/productsApi";
import classNames from "classnames";
import { LoadingSub } from '../LoadingSub/LoadingSub';
import stars from '../../assets/png/stars.png';
import notStars from '../../assets/png/not-star.png';
import "./FormWriteReview.css";

const FormWriteReview = (inf) => {

   const [submitProductReview, {isLoading, isError}] = useSubmitProductReviewMutation();
   const [userName, setUserName] = useState('');
   const [userComment, setUserСomment] = useState('');
   const [validName, setValidName] = useState(false);
   const [validComment, setValidComment] = useState(false);
   const [isDisabled, setIsDisabled] = useState(true);
   const [counter, setCounter] = useState(0);

   const isCheckedStar = (e) => {
      if (e.target.checked) {
         e.currentTarget.style.background = `url(${stars}) center / cover no-repeat`;
         let count = counter + 1;
         setCounter(count);
         isDisabledBtn(count);
      } else {
         e.currentTarget.style.background = `url(${notStars}) center / cover no-repeat`;
         let count = counter - 1;
         setCounter(count);
         isDisabledBtn(count);
      }
   }

   const validateName = (name) => {
      return name.length > 1;
   }

   const validateComment = (comment) => {
      return comment.length > 1;
   }
   
   const onNameChange = (e) => {
      let name = e.target.value;
      let valid = validateName(name);
      setValidName(valid);
      setUserName(name);
      isDisabledBtn();
   }

   const onCommentChange = (e) => {
      let comment = e.target.value;
      let valid = validateComment(comment);
      setValidComment(valid);
      setUserСomment(comment);
      isDisabledBtn();
   }

   const isDisabledBtn = (count) => {

      if (validName === true && validComment === true && count >= 1 || !isLoading) {
         setIsDisabled(false);
      } else {
         setIsDisabled(true);
         console.log(isDisabled)
      }
   }

   const handlerChange = async () => {
      await submitProductReview({
         "id": `${inf.id}`,
         "name": `${userName}`,
         "text": `${userComment}`,
         "rating": counter,
      }).unwrap();
   }

   return (
      <div className="write-review-wrapper">
         <div className="write-review" data-test-id="review-modal">
            <span className="write-review-title">Write a review</span> 
            <div className="stars">
               <label htmlFor="starOne" className="starLabel" onChange={isCheckedStar} style={{background: `url(${notStars}) center / cover no-repeat`}}>
                  <input type="checkbox" id="starOne" name="starOne" className="star"/>
               </label>
               <label htmlFor="starTwo" className="starLabel" onChange={isCheckedStar}  style={{background: `url(${notStars}) center / cover no-repeat`}}> 
                  <input type="checkbox" id="starTwo" name="starTwo" className="star"/>
               </label>
               <label htmlFor="starThree" className="starLabel" onChange={isCheckedStar} style={{background: `url(${notStars}) center / cover no-repeat`}}>
                  <input type="checkbox" id="starThree" name="starThree" className="star"/>
               </label>
               <label htmlFor="starFour" className="starLabel" onChange={isCheckedStar} style={{background: `url(${notStars}) center / cover no-repeat`}}>
                  <input type="checkbox" id="starFour" name="starFour" className="star"/>
               </label>
               <label htmlFor="starFive" className="starLabel" onChange={isCheckedStar} style={{background: `url(${notStars}) center / cover no-repeat`}}> 
                  <input type="checkbox" id="starFive" name="starFive" className="star"/>
               </label>
            </div>
            <form className="write-review-form" onSubmit={handlerChange} data-test-id="review-submit-button">
               <input type="text" name="name" placeholder="Имя" onChange={onNameChange} className="write-review-name" data-test-id="review-name-field"/>
               <textarea type="input" name="comment" placeholder="Комментарий" onChange={onCommentChange} className="write-review-comment" data-test-id="review-text-field"/>
               <button type="submit" name="submit" disabled={isDisabled} className={classNames("write-review-btn", {active: isDisabled === false})}>
                  {isLoading && <LoadingSub />}
                  Send
               </button>
            </form>
            {isError && <span className="isError">Ошибка при отправке отзыва</span>}
         </div>
      </div>
   )
}

export { FormWriteReview }