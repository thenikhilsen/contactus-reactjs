import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import contactImg from '../../images/contact.svg';

const ContactForm = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [text,setText] = useState("");

  


  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    // email = event.target[1].value;
    // text = event.target[2].value;

    console.log(event.target[0].value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text={"VIA SUPPRT CHAT"}
            icon={<MdMessage fontSize="24px" />} 
          />
          <Button text={"VIA CALL"} icon={<MdCall fontSize="24px" />} />
        </div>
        <Button 
        isOutline={true}
        text={"VIA EMAIL FORM"} icon={<MdEmail fontSize="24px" />} />

  <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name"></input>
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email"></input>
            </div>
            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows="8"></textarea>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "end"
            }}>
            <Button text={"SUBMIT BUTTON"}/>
            </div>

            <div>
              {name + " " + email + " " + text}
            </div>
  </form>



      </div>
      <div className={styles.contactImage}>
        <img src={contactImg} alt="contact image"/>
      </div>
    </div>
  );
};

export default ContactForm;
