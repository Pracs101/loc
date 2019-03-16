import React from 'react';

import { IoIosArrowForward } from "react-icons/io";
import classes from './SideArrow.module.css';

const list = (props) => {
    return (
        <div className={classes.mainDiv}>
            <IoIosArrowForward />
        </div>
    );
}

export default list;