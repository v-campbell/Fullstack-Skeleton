import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.fillDemo = this.fillDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.handleForm(user).then(() => this.props.closeModal());
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  renderErrors() {
    return (
      <ul className="errorBox">
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  fillDemo(e) {
    e.preventDefault();
    this.props
      .handleForm({ username: "demo_username", password: "demo_password" })
      .then(() => this.props.closeModal());
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div>
        <div onClick={this.props.closeModal}>
          ×
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>{this.props.formType}</div>
          {this.props.formType === "Sign Up" ? (
            <div>
              {this.renderErrors()}
                <div>First Name*</div>
                <input
                  type="text"
                  className="input"
                  value={this.state.firstName}
                  autoFocus="autoFocus"
                  onChange={this.update("first_name")}
                />

                <div>Username*</div>
                <input
                  type="text"
                  className="input"
                  value={this.state.username}
                  onChange={this.update("username")}
                />

                <div>Password* - minimum 6 characters</div>
                <input
                  type="password"
                  className="input"
                  value={this.state.password}
                  onChange={this.update("password")}
                />

              <input
                type="submit"
                className="final-button"
                value={this.props.formType}
              />

              <div>
                Already have an account? {this.props.otherForm}
              </div>
            </div>
          ) : (
            <div>
              {this.renderErrors()}
                  <div>Username</div>
                  <input
                    type="text"
                    className="input"
                    value={this.state.username}
                    autoFocus="autoFocus"
                    onChange={this.update("username")}
                  />
                  <div>Password</div>
                  <input
                    type="password"
                    className="input"
                    value={this.state.password}
                    onChange={this.update("password")}
                  />
              <input
                type="submit"
                className="final-button"
                value={this.props.formType}
              />

              <div>
                Need an account? {this.props.otherForm}
                Or sign in with a demo account
                <button onClick={this.fillDemo}>Demo</button>
              </div>
              
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default SessionForm;
