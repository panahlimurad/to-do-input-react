import React from "react";
import style from "./cardBox.module.css"
import { PropTypes } from "prop-types";
import { Card } from "../Card/card";

export class CardBox extends React.Component {
 

  render() {
    
    const { list, removeToDo } = this.props;
    return (
      <div className={style.cardBox}>
        {list.map((text) => (
          <Card key={text.id} text={text.text} onClick={()=>removeToDo(text.id)} />
        ))}
      </div>
    );
  }
}

CardBox.propTypes = {
  list: PropTypes.array
}