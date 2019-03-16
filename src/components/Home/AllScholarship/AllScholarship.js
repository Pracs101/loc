import React from 'react';

import classes from './AllScholarship.module.css';
import Compass from '../../Icons/Compass/Compass';
import ScholarshipCategory from './ScholarshipCategory/ScholarshipCategory';

const allScholarship = (props) => {
    let scholarshipData = {
        DeptName: 'Department of Technical Education',
        ScholarshipName: 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna',
        Overview: 'The objective of the Scheme is to provide financial assistance to the Economic Backward Class who are admitted to Diploma / Degree / Postgraduate Professional courses through Centralized Admission Process (CAP).',
        Benefits: '50 % of Tuition Fees and 50 % of Exam Fee.',
        Eligibility: [ { type: 'minicome', value: '500000' } ],
        DocRequired: ['Mark sheet of 10th (S.S.C) & Onwards.'],
        link: 'https://www.thefuse.in'
    }
    return (
        <div className={classes.mainDiv}>
            <div className={classes.subDiv}>
                <div className={classes.Title}>
                    <div className={classes.Symbol}>
                        <Compass />
                    </div>
                    <div className={classes.Noticetag}>All Scholarships</div>
                </div>
                <div className={classes.others}>
                    <ScholarshipCategory 
                        ScholarshipCategoryName={scholarshipData.DeptName}
                        scholarshipsName={scholarshipData.ScholarshipName}
                        scholarshipOverview={scholarshipData.Overview}
                        scholarshipBenefits={scholarshipData.Benefits}
                        scholarshipEligibility={scholarshipData.Eligibility}
                        scholarshipDocRequired={scholarshipData.DocRequired}
                        scholarshipLink={scholarshipData.Link} />
                </div>
            </div>
        </div>
    );
}

export default allScholarship;