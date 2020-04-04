import React from "react";
import { connect } from "react-redux";

import { signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
  errors: state.errors.sessionErrors,
  formType: "Sign Up",
});

const mapDispatchToProps = (dispatch) => ({
  handleForm: (user) => dispatch(signup(user)),
  // takes user to other form
  otherForm: (
    <button onClick={() => dispatch(openModal("LOG IN"))}>Log In</button>
  ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
