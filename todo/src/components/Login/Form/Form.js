import React from "react";
import { FormInput } from "../../SignUp/Form/FormInput";
import { FormButton } from "../../SignUp/Form/FormButton";
import { Link } from "react-router-dom";

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    isValid: false,
    emailValid: false,
    nameValid: false,
    passwordlValid: false,
  };

  onChangeNameHandler = (event) => {
    this.setState({ name: event.target.value });
    if (event.target.value.length > 2) {
      this.setState({ nameValid: true });
    }
  };

  onChangeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
    if (event.target.value.length > 5) {
      this.setState({ emailValid: true });
    }
  };

  onChangePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
    if (event.target.value.length > 8) {
      this.setState({ passwordlValid: true });
    }
  };

  clickDoneHandler = () => {
    this.props.clickDoneHandler(
      this.state.name,
      this.state.email,
      this.state.password
    );
  };

  render() {
    return (
      <div>

        <FormInput
          description="Email"
          placeholder="Enter your email"
          type="email"
          value={this.state.email}
          change={(event) => this.onChangeEmailHandler(event)}
        />
        <FormInput
          description="Password"
          placeholder="Enter your password"
          type="password"
          value={this.state.password}
          change={(event) => this.onChangePasswordHandler(event)}
        />

        {/* <Link to="/"> */}
        <FormButton
          click={this.clickDoneHandler}
          title="Log in"
          disabled={
            !(
              this.state.emailValid &&
              this.state.passwordlValid
            )
          }
        />
        {/* </Link> */}
      </div>
    );
  }
}

export default Form;
