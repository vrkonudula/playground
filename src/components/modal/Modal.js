import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import propTypes from 'prop-types';

const ModalExample = (props) => {
  const {
    buttonLabel,
      className,
      title,
      buttonColor,
      doSomethingButton,
      cancelButton,
      children,
      handleSubmitForm,
      modal,
      toggle,
      showFooter
  } = props;

  return (
    <div>
      {/* <Button color={buttonColor} onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
              {
                   showFooter ? <ModalFooter>
                      <Button color="primary" onClick={() => {
                          handleSubmitForm();
                          toggle();
                      }
                      }>{doSomethingButton}</Button>{' '}
                      <Button color="info" onClick={toggle}>{cancelButton}</Button>
                  </ModalFooter> : ''
              }
      </Modal>
    </div>
  );
}

export default ModalExample;

ModalExample.defaultProps = {
    buttonColor: "danger",
    doSomethingButton: "Submit",
    cancelButton: "Cancel"
}

ModalExample.propTypes = {
    title: propTypes.string.isRequired,
    body: propTypes.string,
    buttonColor: propTypes.string
}