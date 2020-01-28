import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Logoimg from '../img/pdt-logo.png';

const Login = p => {
  if (localStorage.token) {
    p.history.push();
  }
  // fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState('');

  const handleSubmit = () => {
    const url = 'https://reqres.in/api/login';
    const data = {
      email: 'eve.holt@reqres.in',
      password: 'pestol'
    };

    try {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res.token) {
            localStorage.setItem('token', res.token);
            console.log('token:', res.token);
            p.history.push('/');
            // alert('Login Successfully');
          } else {
            alert('Enter valid Email or Password');
          }
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  console.log('email', email, 'password', password);
  return (
    <div
      className="page-header login-page header-filter"
      filter-color="black"
      style={{
        backgroundImage: 'url(img/loginbg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        alignItems: 'center'
      }}
      data-color="purple"
    >
      <div className="container" style={{ height: 'auto', zIndex: '9999' }}>
        <div className="row align-items-center mb-50">
          <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
            <form
              className="form"
              onSubmit={handleSubmit}
              action="javascript:simpleCart.checkout()"
            >
              <div className="card card-login mb-3">
                <div className="card-header card-header text-center">
                  <img src={Logoimg} className="card-logo" alt="logo" />
                </div>
                <div className="card-body">
                  <div className="bmd-form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="material-icons">email</i>
                        </span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={
                          email ? 'form-control' : 'form-control unfilled'
                        }
                        placeholder="Email..."
                        required
                      />
                    </div>
                  </div>
                  <div className="bmd-form-group mt-3 mb-2">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="material-icons">lock_outline</i>
                        </span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className={
                          password ? 'form-control' : 'form-control unfilled'
                        }
                        placeholder="Password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LfA7MkUAAAAAB5lWa-0jCUJTyJ4Ssr4iW6wNik4"
                      data-callback="verifyRecaptchaCallback"
                      data-expired-callback="expiredRecaptchaCallback"
                    />
                    <input
                      className="form-control d-none"
                      data-recaptcha="true"
                      data-error="Please complete the Captcha"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-check mr-auto ml-3 mt-3 pl-0">
                    <label className="form-check-label">
                      <input
                        className="form-check-input invisible"
                        type="checkbox"
                        name="remember"
                        required=""
                        cheked={remember}
                        onClick={() => setRemember(!remember)}
                      />
                      &nbsp;&nbsp; Remember me
                      <span className="form-check-sign">
                        <span className="check" />
                      </span>
                    </label>
                  </div>
                </div>

                <div className="card-footer text-center">
                  <input
                    type="submit"
                    className="btn btn-secondary btn-link btn-lg"
                    value="Login"
                  />
                </div>
              </div>
            </form>

            <div className="row">
              <div className="col-6">
                <a href="#" className="text-light f-pass">
                  <small>Forgot password?</small>
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="navbar navbar-transparent footer1 mb-0">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Login;
