import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import MainHeader from './main_header';
import MainSideBar from './main_sidebar';
import ContentWrapper from './content_wrapper';
import MainFooter from './main_footer';
import ControlSideBar from './control_sidebar';

import './AdminLTE_Config'; // to activate the animation of the Admin LTE theme


class Wrapper extends Component{
    render(){
        return(
            <div className="wrapper">
                <MainHeader />
                <MainSideBar />
                <ContentWrapper />
                <MainFooter />
                <ControlSideBar />
                <div className="control-sidebar-bg"></div>
            </div>
        );
    }
}

export default Wrapper;
