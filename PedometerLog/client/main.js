import React from 'react';
import ReactDOM from 'react-dom';
import LogViewer from './components/log_viewer';


const App = () => {
  return (
    <div>
      <LogViewer />
    </div>
  );
};


Meteor.startup(()=>{
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});