import React, { Component } from 'react';

import classes from './ScholarshipCategory.module.css';
import List from '../../../Icons/List/List';
import DownArrow from '../../../Icons/DownArrow/DownArrow';
import UpArrow from '../../../Icons/UpArrow/UpArrow';
import ScholarshipName from './ScholarshipName/ScholarshipName';

class ScholarshipCategory extends Component {
    state = {
        viewItems: false
    }

    viewItems = () => {
        this.setState({viewItems: !this.state.viewItems});
        console.log(this.state.viewItems);
    }
    
    render () {
        let renUp = null;
        let renDown = null;
        let view = null;
        renDown = (
            <div className={classes.mainDiv}>
               <div className={classes.subDiv}>
                    <div className={classes.Title} onClick={this.viewItems}>
                        <div className={classes.Symbol}>
                            <List />
                        </div>
                        <div className={classes.Tag}>{this.props.ScholarshipCategoryName}</div>
                        <div className={classes.arrow}>
                            <DownArrow />
                        </div>
                    </div>
                </div>
            </div>
        );
        renUp = (
            <div className={classes.mainDiv}>
               <div className={classes.subDiv}>
                    <div className={classes.Title} onClick={this.viewItems}>
                        <div className={classes.Symbol}>
                            <List />
                        </div>
                        <div className={classes.Tag}>{this.props.ScholarshipCategoryName}</div>
                        <div className={classes.arrow}>
                            <UpArrow />
                        </div>
                    </div>
                </div>
            </div>
        );

        if(this.state.viewItems) {
            view = (
                <div>
                    {renUp}
                    <ScholarshipName 
                        scholarshipsName={this.props.scholarshipsName}
                        scholarshipOverview={this.props.Overview}
                        scholarshipBenefits={this.props.Benefits}
                        scholarshipEligibility={this.props.Eligibility}
                        scholarshipDocRequired={this.props.DocRequired}
                        scholarshipLink={this.props.Link} />
                </div>
            )
        }
        else {
            view = (
                <div>
                    {renDown}
                </div>
            )
        }

        return view;
    }
}

export default ScholarshipCategory;