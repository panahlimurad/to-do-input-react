import React from "react";
import style from "./mainCard.module.css"
import { InputSection } from "../InputSection/inputSection";
import { CardBox } from "../CardBox/cardBox";
import Swal from "sweetalert2";

export class MainCard extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
        };

        this.removeToDo = this.removeToDo.bind(this);
        this.addToDo = this.addToDo.bind(this);
    }

    removeToDo(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                
                Swal.fire("Deleted!", "Your file has been deleted.", "success");

                let newData = [...this.state.list];
        
                const filterData = newData.filter((item) => item.id !== id);
        
                this.setState({ list: filterData });
            }
        });
        
    }

    addToDo(text) {

        const newList = [text, ...this.state.list];

        this.setState({ list: newList });
    }

    render() {
        return (
            <div className={style.mainCard}>
                <InputSection addToDo={this.addToDo} />
                <CardBox list={this.state.list} removeToDo={this.removeToDo} />
            </div>
        );
    }
}