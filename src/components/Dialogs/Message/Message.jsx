import React from "react";
import s from './Message.module.css';



const Message = (props) => {
  return (
    <div className={s.messages}>
      <img className={s.image} src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" alt="girl"></img>
      <span className={s.text}>{props.message}</span>
    </div>
  )
}


export default Message;