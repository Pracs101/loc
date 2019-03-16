import React, { Component } from 'react';

import classes from './Home.module.css';
import Notice from './Notice/Notice';
import Scholarship from './AllScholarship/AllScholarship';

class Home extends Component {
    render () {
        return (
            <div className={classes.mainDiv}>
                <Notice />
                <Scholarship />
            </div>
        );
    }
}

export default Home;