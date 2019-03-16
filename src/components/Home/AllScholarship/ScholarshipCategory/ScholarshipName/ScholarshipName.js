import React, { Component } from 'react';

import classes from './ScholarshipName.module.css';
import SideArrow from '../../../../Icons/SideArrow/SideArrow';

const scholarshipName = (props) => {
    return (
        <div className={classes.scholarshipMainDiv}>
            <div className={classes.scholarshipSubDiv}>
                <div className={classes.Arrow}><SideArrow /></div>
                <div className={classes.scholarshipsName}>{props.scholarshipsName}</div>
            </div>
        </div>
    );
}

export default scholarshipName;