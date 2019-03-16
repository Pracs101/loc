import React from 'react';

import classes from './Notice.module.css';
import Bell from '../../Icons/Bell/Bell';

const notice = (props) => {
    let notice = 'Apply of application on MahaDBT Portal is extended till date 21th March 2019';

    return (
        <div className={classes.mainDiv}>
            <div className={classes.subDiv}>
                <div className={classes.NoticeTitle}>
                    <div className={classes.Symbol}>
                        <Bell />
                    </div>
                    <div className={classes.Noticetag}>Notice</div>
                </div>
                <div className={classes.NoticeBody}>{notice}</div>
            </div>
        </div> 
    );
}

export default notice;