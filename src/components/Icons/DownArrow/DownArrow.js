import React from 'react';

import classes from './DownArrow.module.css';
import { IoIosArrowDown } from "react-icons/io";

const DownArrow = (props) => {
    return (
        <div className={classes.mainDiv}>
            <IoIosArrowDown />
        </div>
    );
}

export default DownArrow;