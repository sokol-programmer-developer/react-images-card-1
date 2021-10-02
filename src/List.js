import React, { useState } from "react";
import {DataContent} from "./data";
import './App.css';
const List = () => {
    const [people, setPeople] = useState(DataContent);
    const [value, setValue] = useState(DataContent.length);
    const handleClick = () => {
        setPeople([]);
        setValue(0);
    };
    const handleDel = (id) => {
        let newPeople = people.filter((newPerson) => newPerson.id !== id);
        setValue(value - 1);
        setPeople(newPeople);
    };
    return (
        <>
            <article className="container">
                <h3>Today's Birthdays: {value}</h3>

                <div className="content">{people.map((person) => {
                    const { name, age, image, id } = person;
                    return (
                        <section key={id} className="person">
                            <img  className="pic" src={image} alt="" />
                            <div className="box">
                                <h4>{name}</h4>
                                <p>{age} years old</p>
                                <button onClick={() => handleDel(id)} className="butt">
                                    delete
                                </button>
                            </div>
                        </section>
                    );
                })}</div>
                <button onClick={handleClick} className="butt-clear">
                       clear all
                </button>
            </article>
        </>
    );
};

export default List;