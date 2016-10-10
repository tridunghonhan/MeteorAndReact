import React from 'react';
import ReactDOM from 'react-dom';
import CPULoad from './components/cpu_load';


const App = () => {
  return (
    <div>
      <CPULoad />
    </div>
  );
};

Meteor.startup(()=>{
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});