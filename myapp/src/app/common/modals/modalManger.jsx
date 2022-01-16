import React from 'react';
import { useSelector } from 'react-redux';
import TestModal from '../../features/sandbox/testmodal';
import LoginForm from '../../features/auth/loginForm';

const ModalManager = () => {
  const modallookup = {
      TestModal,
      LoginForm
  };
  const currentModal = useSelector(state => state.modals);
  let renderModal;
  if(currentModal) {
      const {modalType, modalProps} = currentModal;
      const ModalComponent = modallookup[modalType];
    //   alert(ModalComponent);
      renderModal = <ModalComponent  {...modalProps}/>
  }
  return <span>{renderModal}</span>
};

export default ModalManager;