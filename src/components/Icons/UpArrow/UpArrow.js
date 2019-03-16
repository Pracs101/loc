import React from 'react';

import classes from './UpArrow.module.css';
import { IoIosArrowUp } from "react-icons/io";

const UpArrow = (props) => {
    return (
        <div className={classes.mainDiv}>
            <IoIosArrowUp />
        </div>
    );
}

export default UpArrow;