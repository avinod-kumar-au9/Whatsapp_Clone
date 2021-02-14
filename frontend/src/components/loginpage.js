import React from "react";

import LoginDetail from "./loginpageDisplay";
import { withRouter } from "react-router-dom";
class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      usersDataList: "",
      login: true,
      register: false,
      signup: {
        name: "",
        email: "",
        password: "",
      },
      signin: {
        email: "",
        password: "",
      },
      signupError: "",
      signinError: "",
    };
  }

  componentDidMount() {
    fetch("https://api.npoint.io/5979890673a42680aee6")
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          ...this.state,
          usersDataList: data,
        })
      );
  }

  registerHandler = () => {
    const input = this.state.signup;
    input.email = "";
    input.name = "";
    input.password = "";
    this.setState({
      ...this.state,
      register: true,
      login: false,
      input,
    });
  };
  loginHandler = () => {
    this.setState({
      ...this.state,
      register: false,
      login: true,
    });
    fetch("https://api.npoint.io/5979890673a42680aee6")
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          ...this.state,
          usersDataList: data,
        })
      );
  };

  signinInputEmail = (e) => {
    const input = this.state.signin;
    input.email = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };
  signinInputPassword = (e) => {
    const input = this.state.signin;
    input.password = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };

  signInHandler = () => {
    if (this.state.usersDataList.signup.length > 0) {
      for (var i = 0; i < this.state.usersDataList.signup.length; i++) {
        if (
          this.state.usersDataList.signup[i].email !==
            this.state.signin.email ||
          this.state.usersDataList.signup[i].password !==
            this.state.signin.password
        ) {
          this.setState({
            ...this.state,
            signinError: "Enter Valid Credentials",
          });
        } else if (
          this.state.usersDataList.signup[i].email === this.state.signin.email
        ) {
          sessionStorage.setItem(
            "name",
            JSON.stringify(this.state.usersDataList.signup[i].name)
          );
          sessionStorage.setItem(
            "email",
            JSON.stringify(this.state.usersDataList.signup[i].email)
          );
          const input = this.state.signin;
          input.email = "";
          input.password = "";
          this.setState({
            ...this.state,
            signinError: "",
            input,
          });
          this.props.history.push("/home");
        }
      }
    }
  };

  signupInputName = (e) => {
    const input = this.state.signup;
    input.name = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };
  signupInputPassword = (e) => {
    const input = this.state.signup;
    input.password = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };
  signupInputEmail = (e) => {
    const input = this.state.signup;
    input.email = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };

  signupHandler = () => {
    if (
      !this.state.signup.email ||
      !this.state.signup.name ||
      !this.state.signup.password
    ) {
      this.setState({
        ...this.state,
        signupError: "Fill all the fields",
      });
    } else {
      const val = this.state.usersDataList;
      const array = val.signup;
      const length = this.state.usersDataList.signup.length;
      array[length] = this.state.signup;

      this.setState({
        ...this.state,
        usersDataList: val,
        signupError: "",
        login: true,
        register: false,
      });

      fetch("https://api.npoint.io/5979890673a42680aee6", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.usersDataList),
      });
    }
  };

  render() {
    
    return (
      <div>
        <LoginDetail
          registerHandler={this.registerHandler}
          loginHandler={this.loginHandler}
          login={this.state.login}
          register={this.state.register}
          signupHandler={this.signupHandler}
          signupInputName={this.signupInputName}
          signupInputEmail={this.signupInputEmail}
          signupInputPassword={this.signupInputPassword}
          signupError={this.state.signupError}
          signinInputEmail={this.signinInputEmail}
          signinInputPassword={this.signinInputPassword}
          signinError={this.state.signinError}
          signInHandler={this.signInHandler}
        />
      </div>
    );
  }
}

export default withRouter(LoginPage);