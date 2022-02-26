import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css';

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id
  return (
    <div className={s.dialogItem + ' ' + s.active}>
      <img className={s.image} alt="avatar of user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJcm2G6Oa2D_m7mEvB1H3QPOHJGgloTJrGw&usqp=CAU"></img>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;