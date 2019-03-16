import React from 'react';

import classes from './Bell.module.css';
import { GoBell } from 'react-icons/go';

const bell = (props) => {
    return (
        <div className={classes.mainDiv}>
            <GoBell />
        </div>
    );
}

export default bell;