import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import history from '../../history.js';
import {connect} from "react-redux";
import {ApiManager as UserApiManager} from '../../reducer/user/user.js';
import Header from '../header/header.jsx';

class SignInPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {logIn} = this.props;

    evt.preventDefault();

    logIn({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });

    history.push(`/`);
  }

  render() {

    return <div className="page page--gray page--login">
      <Header/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" onSubmit={this.handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" ref={this.loginRef}></input>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" ref={this.passwordRef}></input>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>;
  }
}

SignInPage.propTypes = {
  logIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logIn(authData) {
    dispatch(UserApiManager.logIn(authData));
  }
});

export default connect(null, mapDispatchToProps)(SignInPage);
