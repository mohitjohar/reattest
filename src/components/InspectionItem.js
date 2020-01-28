import React, { useState } from 'react';
import InspectionModal from './InspectionModal';
import AtachmentIcon from '../img/attachment.png';

const InspectionItem = ({ item, i }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <tr>
        <td onClick={toggle} style={{ cursor: 'pointer' }} title="Click here">
          {item.Date}
        </td>
        <td onClick={toggle} style={{ cursor: 'pointer' }} title="Click here">
          {item.SiteAbb}
        </td>
        <td onClick={toggle} style={{ cursor: 'pointer' }} title="Click here">
          {item.EquipmentID}
        </td>
        <td onClick={toggle} style={{ cursor: 'pointer' }} title="Click here">
          {item.Equipment}
        </td>
        <td onClick={toggle} style={{ cursor: 'pointer' }} title="Click here">
          {item.Manufacturer}
        </td>
        <td>{item.Status}</td>
        <td>
          <a href={item.ReportL} target="new" title="download PDF" />
          <img src={AtachmentIcon} alt="attachmentIcon" />
          {item.Report}
        </td>
        <td>
          <a href={item.DocumentL} target="new" title="download PDF" />
          <img src={AtachmentIcon} alt="attachmentIcon" />
          {item.Document}
        </td>
        <td>{item.Prioritisation}</td>
      </tr>

      {/* Inspection Detail Model */}
      <InspectionModal
        Date={item.Date}
        SiteAbb={item.SiteAbb}
        Equipment={item.Equipment}
        EquipmentID={item.EquipmentID}
        Manufacturer={item.Manufacturer}
        Status={item.Status}
        Report={item.Report}
        ReportL={item.ReportL}
        Document={item.Document}
        DocumentL={item.DocumentL}
        Prioritisation={item.Prioritisation}
        id={`modal${i + 1}`}
        modal={modal}
        toggle={toggle}
      />
    </>
  );
};

export default InspectionItem;
