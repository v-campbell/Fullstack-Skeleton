import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';


function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;

    switch (modal) {
        case 'LOG IN':
            component = <LoginContainer />;
            break;
        case 'SIGN UP':
            component = <SignupContainer />;
            break;
        default:
            return null;
    }

    return (
        <div>   
            <div onClick={closeModal}></div>
            <div onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );

}
const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
