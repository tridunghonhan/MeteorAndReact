import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from '../imports/ui/components/wrapper';


const App = () => {
  return (
    <Wrapper />
  );
};

Meteor.startup(()=>{
  ReactDOM.render(<App />, document.querySelector('.root-div'));
});