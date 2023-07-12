import React from "react";
import style from "./mainCard.module.css"
import { InputSection } from "../InputSection/inputSection";
import { CardBox } from "../CardBox/cardBox";

export class MainCard extends React.Component {

    constructor() {
        super();
        this.state = {
            list: []
        };

        this.addToDo = this.addToDo.bind(this)

    }

    addToDo(text) {

        const newList = [text, ...this.state.list]

        this.setState({ list: newList })
        
    }

    render() {
        return (
            <div className={style.mainCard}>
                <InputSection addToDo={this.addToDo} />
                <CardBox list={this.state.list} />
            </div>
        )
    }
}