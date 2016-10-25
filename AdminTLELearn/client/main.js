import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from '../imports/ui/components/wrapper';
import AccountRegister from '../imports/ui/components/accounts/register';


const App = () => {
  return (
    // <Wrapper />
    <AccountRegister />
  );
};

Meteor.startup(()=>{
  ReactDOM.render(<App />, document.querySelector('.root-div'));
});