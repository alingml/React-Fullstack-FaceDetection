import React from "react"

class Register extends React.Component {
  constructor(props) {
    super()
    this.state = {
      name: "",
      email: "",
      password: "",
    }
  }

  onNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  onEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  onSubmitRegister = () => {
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange("home")
        }
      })
  }

  render() {
    return (
      <div className="container">
        <div className="signInForm shadow-5">
          <form className="measure center" />
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0" />
          <legend className="f4 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="username">
              Username
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="username"
              id="username"
              onChange={this.onNameChange}
            />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">
              Email
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email-address"
              id="email-address"
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
              value="REGISTER"
              style={{ border: "1px solid white" }}
              onClick={this.onSubmitRegister}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Register
