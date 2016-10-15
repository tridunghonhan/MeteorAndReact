import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

class ContentWrapper extends Component{
    render(){
        return(
            <div className="content-wrapper">
                <section className="content-header">
                <h1>
                    Page Header
                    <small>Optional description</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
                    <li className="active">Here</li>
                </ol>
                </section>

                <section className="content">

                </section>
            </div>
        );
    }
}
export default ContentWrapper;