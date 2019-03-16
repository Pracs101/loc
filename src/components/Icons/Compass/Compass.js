import React from 'react';

import { IoIosCompass } from "react-icons/io";
import classes from './Compass.module.css';

const list = (props) => {
    return (
        <div className={classes.mainDiv}>
            <IoIosCompass /> 
        </div>
    );
}

export default list;