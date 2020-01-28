import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalBox = item => {
  return (
    <>
      <Modal
        isOpen={item.modal}
        toggle={item.toggle}
        className={item.className}
      >
        <ModalHeader toggle={item.toggle}>{item.title}</ModalHeader>
        <ModalBody>{item.text}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={item.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default ModalBox;
