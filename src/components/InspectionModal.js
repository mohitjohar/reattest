import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from 'reactstrap';
import AtachmentIcon from '../img/attachment.png';

const InspectionModal = item => {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handelSubmit = () => {
    item.toggle();
    setModal(!modal);
  };
  return (
    <>
      {/* Inspection Detail Modal */}
      <Modal isOpen={item.modal} toggle={item.toggle} id={item.id}>
        <ModalHeader toggle={item.toggle}>Inspection Detail</ModalHeader>
        <ModalBody>
          <div className="detail-list">
            <div className="d-flex justify-content-center">
              <strong className="w-100">Date</strong>
              <div className="w-100">{item.Date}</div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100" title="Site Abbreviation">
                Site
              </strong>
              <div className="w-100">{item.SiteAbb}</div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100">Equipment id</strong>
              <div className="w-100">{item.EquipmentID}</div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100" title="Equipment Name">
                Equipment
              </strong>
              <div className="w-100">{item.Equipment}</div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100">Manufacturer</strong>
              <div className="w-100">{item.Manufacturer}</div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100">Status</strong>
              <div className="w-100">{item.Status}</div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100">Inspection Report</strong>
              <div className="w-100">
                <a href={item.ReportL} target="new" title="download PDF">
                  <img src={AtachmentIcon} alt="attachmentIcon" />
                  {item.Report}
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100">Risk Document</strong>
              <div className="w-100">
                <a href={item.DocumentL} target="new" title="download PDF">
                  <img src={AtachmentIcon} alt="attachmentIcon" />
                  {item.Document}
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <strong
                className="w-100"
                title="Prioritisation Of Corrective Action"
              >
                PCA
              </strong>
              <div className="w-100">{item.Prioritisation}</div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="justify-content-between">
          <Button color="danger" onClick={toggle}>
            Take Action
          </Button>
          <Button color="secondary" onClick={item.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* Take Action Modal */}
      <Modal isOpen={modal} toggle={toggle} className="actionModal">
        <ModalHeader toggle={toggle}>Action</ModalHeader>
        <ModalBody>
          <label>Name</label>
          <Input
            type="text"
            className={name ? 'mb-3' : 'unfilled mb-3'}
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <label>Reason for action</label>
          <Input
            type="textarea"
            className={reason ? '' : 'unfilled'}
            value={reason}
            onChange={e => setReason(e.target.value)}
            required
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handelSubmit}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default InspectionModal;
