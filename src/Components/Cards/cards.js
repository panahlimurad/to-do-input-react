import React from "react";
import style from "./cards.module.css"
import { FiEdit, FiTrash2 } from "react-icons/fi";

export class Cards extends React.Component{
  render() {

    console.log(this.props);
    
        return (
          <div className={style.cards}>
            <div className={style.cardsText}>
              <p>{this.props.list }</p>
            </div>
            <div className={style.icons}>
              <span>
                <FiEdit />
              </span>
              <span>
                <FiTrash2 />
              </span>
            </div>
          </div>
        );
    }
}