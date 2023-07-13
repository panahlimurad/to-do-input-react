import React from "react";
import { nanoid } from "nanoid";
import { PropTypes } from "prop-types";
import style from "./inputSection.module.css"

export class InputSection extends React.Component{

    constructor() {
        super();
        this.state = {
            text:""
        };

        this.addText = this.addText.bind(this)
        this.submitText = this.submitText.bind(this);
    }

    addText(e) {
        const text = e.target.value
        
        this.setState({text})
    }

    submitText() {

        const newObj = {
            id: nanoid(),
            text: this.state.text
        }

        this.props.addToDo(newObj)

        this.setState({text:""})
    }

    render() {
        
        return <div className={style.inputSection}>
            <input value={this.state.text} onChange={this.addText}/>
            <button onClick={this.submitText}>Add To Do</button>
        </div>;
    }
}

InputSection.propTypes = {
    addToDo : PropTypes.func,
}