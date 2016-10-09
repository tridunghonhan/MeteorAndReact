import React, {Component} from 'react';
import Accounts from './accounts';
import {Link,browserHistory} from 'react-router';

class Header extends Component {
    onBinsClick(event){
        event.preventDefault();
        Meteor.call('bins.insert',(error,binId)=>{
            browserHistory.push(`/bins/${binId}`);
        });
    }


    render() {
        return (
            <nav className="nav navbar-default">
                <div className="narbar-header">
                    <Link to="/">Markbin</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Accounts />
                    </li>
                    <li>
                        <a href="#" onClick={this.onBinsClick.bind(this)}>Create bin</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;