

import React from "react";
import { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";
const Question = ({ item }) => {
  const { id, question, answer } = item;
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
    };
    return (
        <div className="card-group">
            {show ? (
                <div className="card">
                    <div className="ques-answer">
                        <h5>
                            {id}-{question}
                        </h5>
                        <button className="btn-minus" onClick={handleToggle}>
                            {arrowup}
                        </button>
                    </div>
                    <p>{answer}</p>
                </div>
            ) : (
                <div className="card">
                    <div className="ques">
                        <h5>
                            {id}-{question}
                        </h5>
                        <button className="btn-plus" onClick={handleToggle}>
                            {arrowdown}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Question;
