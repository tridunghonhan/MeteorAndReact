import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

class AccountRegister extends Component{
    componentDidMount(){
        console.log('componentDidMount');
        const oldClass = document.body.className;
        console.log(oldClass);
        document.body.className = "hold-transition register-page";

        // console.log('all input: ' + $('input').length );
        // $('input').iCheck({
        //     checkboxClass: 'icheckbox_square-blue',
        //     radioClass: 'iradio_square-blue',
        //     increaseArea: '20%' // optional
        // });
    }
    componentUnmount(){}

    render(){
        return (
           <div className="register-box">
  <div className="register-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>

  <div className="register-box-body">
    <p className="login-box-msg">Register a new membership</p>

    <form action="../../index.html" method="post">
      <div className="form-group has-feedback">
        <input type="text" className="form-control" placeholder="Full name"/>
        <span className="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div className="form-group has-feedback">
        <input type="email" className="form-control" placeholder="Email"/>
        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div className="form-group has-feedback">
        <input type="password" className="form-control" placeholder="Password"/>
        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div className="form-group has-feedback">
        <input type="password" className="form-control" placeholder="Retype password"/>
        <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
      </div>
      <div className="row">
        <div className="col-xs-8">
          <div className="checkbox icheck">
            <label>
              <div className="icheckbox disabled">
                <input type={'checkbox'} name="quux[1]" disabled/>
            </div>
  
              I agree to the <a href="#">terms</a>
            </label>
          </div>
        </div>
        <div className="col-xs-4">
          <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
        </div>
      </div>
    </form>

    <div className="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign up using
        Facebook</a>
      <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign up using
        Google+</a>
    </div>

    <a href="login.html" className="text-center">I already have a membership</a>
  </div>
</div>

        );
    }
}
export default AccountRegister;

