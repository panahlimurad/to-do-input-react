import React from "react";
import style from "./cardBox.module.css"
import { Cards } from "../Cards/cards";

export class CardBox extends React.Component{
    render() {
        
        const {list} = this.props
        console.log(list);
        const obj = {}
        list.forEach((value,index) => {
            obj[index] = value
        });
        console.log(obj);


        return (
          <div className={style.cardBox}>
            {list.map((text, index) => (
                <Cards key={index} {...text} />
            ))}
          </div>
        );
    }
}