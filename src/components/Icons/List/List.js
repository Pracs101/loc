import React from 'react';

import { IoIosList } from "react-icons/io";
import classes from './List.module.css';

const list = (props) => {
    return (
        <div className={classes.mainDiv}>
            <IoIosList /> 
        </div>
    );
}

export default list;