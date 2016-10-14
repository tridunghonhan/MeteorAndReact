import React from 'react';
import ReactDOM from 'react-dom';
import MainHeader from './components/header';
import CPULoad from './components/cpu_load';


const App = () => {
  return (
    <div>
      <MainHeader />
      <CPULoad />
    </div>
  );
};

Meteor.startup(()=>{
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});