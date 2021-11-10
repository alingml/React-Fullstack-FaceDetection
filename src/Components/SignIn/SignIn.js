import React from "react";

import "./SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (e) => {
    this.setState({ signInEmail: e.target.value });
  };
  onPasswordChange = (e) => {
    this.setState({ signInPassword: e.target.value });
  };
  onSubmitSignIn = () => {
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
          this.props.onRouteChange("home");
        }
      });
  };
  render() {
    return (
      <div className="container">
        <div className="signInForm shadow-5">
          <form className="measure center" />
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0" />
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">
              Email
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email-address"
              id="email-address"
              onChange={this.onEmailChange}
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">
              Password
            </label>
            <input
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="password"
              id="password"
              onChange={this.onPasswordChange}
            />
          </div>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="SIGN IN"
              style={{ border: "1px solid white" }}
              onClick={this.onSubmitSignIn}
            />
          </div>
          <div className="lh-copy mt3">
            <a
              href="#0"
              className="f6 link dim db"
              style={{ color: "white", fontWeight: "700", textAlign: "right" }}
              onClick={() => this.props.onRouteChange("register")}
            >
              REGISTER
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
