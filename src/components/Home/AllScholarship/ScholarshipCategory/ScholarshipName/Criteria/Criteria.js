import React from 'react';

import classes from './Criteria.module.css';

const criteria = (props) => {
    let scholarshipData = {
        DeptName: 'Department of Technical Education',
        ScholarshipName: 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna',
        Overview: 'The objective of the Scheme is to provide financial assistance to the Economic Backward Class who are admitted to Diploma / Degree / Postgraduate Professional courses through Centralized Admission Process (CAP).',
        Benefits: '50 % of Tuition Fees and 50 % of Exam Fee.',
        Eligibility: [ { type: 'minimum', value: '500000' } ],
        DocRequired: ['Mark sheet of 10th (S.S.C) & Onwards.'],
        link: 'https://www.thefuse.in'
    }
    return (
        <div className={classes.mainDiv}>
            <div className={classes.subDiv}>
                <div className={classes.heading}>
                    <h1>{scholarshipData.ScholarshipName}</h1>
                </div>
                <div className={classes.aboutScholarship}>
                    <div className={classes.scheme}>About Scheme</div>
                    <div className={classes.super}>
                        <div className={classes.Tag}>Department Name</div>
                        <div className={classes.content}>{scholarshipData.DeptName}</div>
                    </div>
                    <div className={classes.super}>
                        <div className={classes.Tag}>Overview</div>
                        <div className={classes.content}>{scholarshipData.Overview}</div>
                    </div>
                    <div className={classes.super}>
                        <div className={classes.Tag}>Benefits</div>
                        <div className={classes.content}>{scholarshipData.Benefits}</div>
                    </div>
                    <div className={classes.super}>
                        <div className={classes.Tag}>Eligibility</div>
                        {scholarshipData.Eligibility.map((e, i) => {
                            return (
                                <div key={i} className={classes.content}>{e.type + e.value}</div>
                            );
                        })}
                    </div>
                    <div className={classes.super}>
                        <div className={classes.Tag}>Documents Required</div>
                        {scholarshipData.DocRequired.map((e, i) => {
                            return (
                                <div className={classes.docbullets}>
                                    <ul>
                                        <li><div key={i} className={classes.content}>{e}</div></li>
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                    <div className={classes.super}>
                        <div className={classes.Tag}>Link to official website</div>
                        <div className={classes.content}><a target='_' href="https://www.thefuse.in">{scholarshipData.link}</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default criteria;