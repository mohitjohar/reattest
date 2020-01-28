import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pdf from '../pdf/report.pdf';
import InspectionItem from '../components/InspectionItem';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

const Inspection = [
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: 'J1589-01-00',
    Equipment: 'Gearbox',
    Manufacturer: 'Rossi',
    Status: 'Completed',
    Report: '202005015 Inspection Report',
    ReportL: Pdf,
    Document: 'JRA_JHA J1589-01-00',
    DocumentL: Pdf,
    Prioritisation: 10
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: 'CC 3-CC4-CSS',
    Equipment: 'Drive Assembly',
    Manufacturer: 'Flender',
    Status: 'Completed',
    Report: '43952 CC3-CC4-CC5',
    ReportL: Pdf,
    Document: 'JRA_JHA CC3-CC4-CC5',
    DocumentL: Pdf,
    Prioritisation: 10
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: '2BF1353',
    Equipment: 'Vacuum Pump',
    Manufacturer: 'Greentech',
    Status: 'Pending',
    Report: '43952 2BE1353',
    ReportL: Pdf,
    Document: 'JRA_JHA 2BE1353',
    DocumentL: Pdf,
    Prioritisation: 8
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: 'MASSZCHNG B3SH 13',
    Equipment: 'Motor',
    Manufacturer: 'Flender',
    Status: 'Pending',
    Report: '3952 MASSZCHNG B3SH 13',
    ReportL: Pdf,
    Document: 'JRA_JHA MASSZCHNG B3SH 13',
    DocumentL: Pdf,
    Prioritisation: 8
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: '6-097-424',
    Equipment: 'Geared Drive',
    Manufacturer: 'Santasalo',
    Status: 'Pending',
    Report: '43952 6-097-424',
    ReportL: Pdf,
    Document: 'JRA_JHA 6-097-424',
    DocumentL: Pdf,
    Prioritisation: 8
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: '07H178',
    Equipment: 'Hydraulic Cylinder',
    Manufacturer: 'Caterpillar',
    Status: 'Pending',
    Report: '43952 07H178',
    ReportL: Pdf,
    Document: 'JRA_JHA 07H178',
    DocumentL: Pdf,
    Prioritisation: 8
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: 'YA-0000-M000-10',
    Equipment: 'Gearbox',
    Manufacturer: 'Sumitomo',
    Status: 'Pending',
    Report: '43952 YA-0000-M000-10',
    ReportL: Pdf,
    Document: 'JRA_JHA YA-0000-M000-10',
    DocumentL: Pdf,
    Prioritisation: 8
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: 'CC3-CC4-CC67',
    Equipment: 'Gearbox',
    Manufacturer: 'Flender Gears',
    Status: 'Pending',
    Report: '43952 CC3-CC4-CC67',
    ReportL: Pdf,
    Document: 'JRA_JHA CC3-CC4-CC67',
    DocumentL: Pdf,
    Prioritisation: 8
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: 'MASSZCHNG B3SH 13',
    Equipment: 'Motor',
    Manufacturer: 'Flender',
    Status: 'Complete',
    Report: '43952 MASSZCHNG B3SH 13',
    ReportL: Pdf,
    Document: 'JRA_JHA MASSZCHNG B3SH 13',
    DocumentL: Pdf,
    Prioritisation: 8
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: 'MASSZCHNG B3SH 13',
    Equipment: 'Motor',
    Manufacturer: 'Flender',
    Status: 'Complete',
    Report: '43952 MASSZCHNG B3SH 13',
    ReportL: Pdf,
    Document: 'JRA_JHA MASSZCHNG B3SH 13',
    DocumentL: Pdf,
    Prioritisation: 8
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: '2BE1362',
    Equipment: 'Vacuum Pump',
    Manufacturer: 'Greentech',
    Status: 'Complete',
    Report: '43952 2BE1362',
    ReportL: Pdf,
    Document: 'JRA_JHA 2BE1362',
    DocumentL: Pdf,
    Prioritisation: 8
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: 'B3SH13',
    Equipment: 'Drive Assembly',
    Manufacturer: 'Sumitomo',
    Status: 'Complete',
    Report: '43936 B3SH13',
    ReportL: Pdf,
    Document: 'JRA_JHA B3SH13',
    DocumentL: Pdf,
    Prioritisation: 8
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '15H217',
    Equipment: '10" Flanged Mount',
    Manufacturer: 'Emerson',
    Status: 'Complete',
    Report: '43936 15H217',
    ReportL: Pdf,
    Document: 'JRA_JHA 15H217',
    DocumentL: Pdf,
    Prioritisation: 8
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '15H218',
    Equipment: '6" Flanged Mount',
    Manufacturer: 'Emerson',
    Status: 'Complete',
    Report: '43936 15H218',
    ReportL: Pdf,
    Document: 'JRA_JHA 15H218',
    DocumentL: Pdf,
    Prioritisation: 6
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '07D15',
    Equipment: 'Transformer',
    Manufacturer: 'Siemens',
    Status: 'Complete',
    Report: '43936 07D15',
    ReportL: Pdf,
    Document: 'JRA_JHA 07D15',
    DocumentL: Pdf,
    Prioritisation: 6
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '154356',
    Equipment: 'Transformer',
    Manufacturer: 'ABB',
    Status: 'Complete',
    Report: '43936 154356',
    ReportL: Pdf,
    Document: 'JRA_JHA 154356',
    DocumentL: Pdf,
    Prioritisation: 6
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: 'SP215-8-7',
    Equipment: 'Bore Pump',
    Manufacturer: 'Grundfos',
    Status: 'Complete',
    Report: '43936 SP215-8-7',
    ReportL: Pdf,
    Document: 'JRA_JHA SP215-8-7',
    DocumentL: Pdf,
    Prioritisation: 6
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: 'SP46-15-24',
    Equipment: 'Bore Pump',
    Manufacturer: 'Grundfos',
    Status: 'Complete',
    Report: '43936 SP46-15-24',
    ReportL: Pdf,
    Document: 'JRA_JHA SP46-15-24',
    DocumentL: Pdf,
    Prioritisation: 6
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: 'L1850',
    Equipment: 'Cylinder Hoist',
    Manufacturer: 'LeTourneau',
    Status: 'Complete',
    Report: '43936 L1850',
    ReportL: Pdf,
    Document: 'JRA_JHA L1850',
    DocumentL: Pdf,
    Prioritisation: 6
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: 'R2900',
    Equipment: 'Tilt Link',
    Manufacturer: 'Komatsu',
    Status: 'Complete',
    Report: '43936 R2900',
    ReportL: Pdf,
    Document: 'JRA_JHA R2900',
    DocumentL: Pdf,
    Prioritisation: 4
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '15H211',
    Equipment: 'Boom Cylinder',
    Manufacturer: 'Hitachi',
    Status: 'Complete',
    Report: '43936 15H211',
    ReportL: Pdf,
    Document: 'JRA_JHA 15H211',
    DocumentL: Pdf,
    Prioritisation: 4
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '15H212',
    Equipment: 'Arm Cylinder',
    Manufacturer: 'Hitachi',
    Status: 'Complete',
    Report: '43936 15H212',
    ReportL: Pdf,
    Document: 'JRA_JHA 15H212',
    DocumentL: Pdf,
    Prioritisation: 4
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '15D4',
    Equipment: 'Arm Cylinder',
    Manufacturer: 'Hitachi',
    Status: 'Complete',
    Report: '43936 15D4',
    ReportL: Pdf,
    Document: 'JRA_JHA 15D4',
    DocumentL: Pdf,
    Prioritisation: 4
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '15HH192',
    Equipment: 'Backhoe Boom',
    Manufacturer: 'Komatsu',
    Status: 'Complete',
    Report: '43936 15HH192',
    ReportL: Pdf,
    Document: 'JRA_JHA 15HH192',
    DocumentL: Pdf,
    Prioritisation: 4
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '15HH193',
    Equipment: 'Backhoe Bucket',
    Manufacturer: 'Komatsu',
    Status: 'Pending',
    Report: '43936 15HH193',
    ReportL: Pdf,
    Document: 'JRA_JHA 15HH193',
    DocumentL: Pdf,
    Prioritisation: 4
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '15HH980',
    Equipment: 'Loading Shovel Arm',
    Manufacturer: 'Komatsu',
    Status: 'Pending',
    Report: '43936 15HH980',
    ReportL: Pdf,
    Document: 'JRA_JHA 15HH980',
    DocumentL: Pdf,
    Prioritisation: 4
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '07H119',
    Equipment: 'Tilt Cylinder',
    Manufacturer: 'Caterpillar',
    Status: 'Pending',
    Report: '43936 07H119',
    ReportL: Pdf,
    Document: 'JRA_JHA 07H119',
    DocumentL: Pdf,
    Prioritisation: 4
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '15HH192',
    Equipment: 'Backhoe Arm',
    Manufacturer: 'Komatsu',
    Status: 'Pending',
    Report: '43936 15HH192',
    ReportL: Pdf,
    Document: 'JRA_JHA 15HH192',
    DocumentL: Pdf,
    Prioritisation: 4
  },
  {
    Date: '15/4/20',
    SiteAbb: 'OD',
    EquipmentID: '07H1192',
    Equipment: 'Tilt Cylinder, Double',
    Manufacturer: 'Caterpillar',
    Status: 'Pending',
    Report: '43936 07H1192',
    ReportL: Pdf,
    Document: 'JRA_JHA 07H1192',
    DocumentL: Pdf,
    Prioritisation: 4
  }
];

const Inspections = p => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  // Date Filter
  const [searchDate, setSearchDate] = useState({
    startDate: null,
    endDate: null
  });
  const [focusedInput, setFocusedInput] = useState(null);

  console.log('focusedInput : ', focusedInput, 'setSearchDate : ', searchDate);

  return (
    <div className="page">
      <Header props={p} />
      <div className="content min-height-500 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 filter-area">
              <button
                className="btn btn-trasparent mb-2 bold p-0"
                onClick={toggle}
              >
                <input type="checkbox" className="minus i" checked={isOpen} />
                &nbsp;Filters
              </button>
              <Collapse isOpen={isOpen}>
                <div className="filter-dropdown row">
                  <div className="col-lg-3 col-md-6">
                    <label>Search</label>
                    <div className="searchform">
                      <input
                        type="text"
                        placeholder="Search Equipment"
                        className="form-control mb-3"
                      />
                      <i className="fa fa-search" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <label>Location</label>
                    <select className="form-control mb-3">
                      <option value="1">Australia</option>
                      <option value="2">BMA</option>
                      <option value="3">BMC</option>
                      <option value="4">NEC</option>
                      <option value="5">OD</option>
                      <option value="6">WAIO</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <label>Status</label>
                    <select className="form-control mb-3">
                      <option value="0">All</option>
                      <option value="1">Completed</option>
                      <option value="2">Pending</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 mkDatePicker mb-3">
                    <label>Date</label>
                    <DateRangePicker
                      customInputIcon={
                        <i className="fa fa-calendar-o" aria-hidden="true" />
                      }
                      startDatePlaceholderText="02/02/2019"
                      endDatePlaceholderText="08/02/2019"
                      startDateId="startDate"
                      endDateId="endDate"
                      startDate={searchDate.startDate}
                      endDate={searchDate.endDate}
                      onDatesChange={({ startDate, endDate }) => {
                        setSearchDate({ startDate, endDate });
                      }}
                      focusedInput={focusedInput}
                      onFocusChange={focusedInput => {
                        setFocusedInput(focusedInput);
                      }}
                    />
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="">
            <div className="col-sm-12">
              <div className="overflow-auto-table">
                <table className="list-table w-100">
                  <tr>
                    <th>Date</th>
                    <th className="site-abb" title="Site Abbreviation">
                      Site
                    </th>
                    <th className="equipmentid">Equipment ID</th>
                    <th className="equipment" title="Equipment Name">
                      Equipment
                    </th>
                    <th className="equipment">Manufacturer</th>
                    <th className="status">Status</th>
                    <th className="inspection">Inspection Report</th>
                    <th className="document">Risk Document</th>
                    <th
                      className="prioritisation"
                      title="Prioritisation Of Corrective Action"
                    >
                      PCA <i className="fa fa-sort-down" />
                    </th>
                  </tr>

                  {Inspection.map((item, i) => {
                    return (
                      <>
                        <InspectionItem item={item} i={i} />
                      </>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="navbar navbar-transparent footer2 mb-0">
        <Footer />
      </footer>
    </div>
  );
};

export default Inspections;
