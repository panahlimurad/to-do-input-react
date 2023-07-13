import React from "react";
import style from "../CardBox/cardBox.module.css"
import { FiEdit, FiTrash2 } from "react-icons/fi";

export class Card extends React.Component{
    render() {

        const { text, onClick } = this.props
        
        return (
          <div className={style.cards}>
            <div className={style.cardsText}>
              <p>{text}</p>
            </div>
            <div className={style.icons}>
              <span>
                <FiEdit />
              </span>
              <span onClick={onClick}>
                <FiTrash2 />
              </span>
            </div>
          </div>
        );
    }
}