import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AddUser = p => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phonee, setPhonee] = useState(false);
  const [department, setDepartment] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [role, setRole] = useState('');
  if (phone.length > 10) {
    setPhonee(true);
    alert('Enter valid Phone Nunmber');
    setPhone('');
    return false;
  }
  const handleSubmit = () => {
    if (phone.length != 10) {
      alert('Enter valid Phone Nunmber');
      setPhonee(true);
      return false;
    }
    setPhonee(false);
    alert('Your Username and Password have been sent to your email');
  };

  console.log('department', department, 'role', role);

  return (
    <>
      <Header props={p} />
      <div className="content pdtb-50">
        <div className="container">
          <form
            className="row maxw-500 corner-top-right corner-bottom-left"
            action="javascript:simpleCart.checkout()"
            onSubmit={handleSubmit}
          >
            <div className="col-12">
              <h4 className="text-center text-dark font-weight-normal">
                <i className="fa fa-user-plus" />
                &nbsp;Add User
              </h4>
            </div>
            <div className="col-12 col-xs-12">
              <label>First Name</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  className={fname ? 'form-control' : 'form-control unfilled'}
                  // placeholder="First Name"
                  value={fname}
                  onChange={e => setFname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-xs-12">
              <label>Last Name</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  className={lname ? 'form-control' : 'form-control unfilled'}
                  // placeholder="Last Name"
                  value={lname}
                  onChange={e => setLname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-xs-12">
              <label>Phone Number</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-phone" />
                  </span>
                </div>
                <input
                  type="number"
                  className={phone ? 'form-control' : 'form-control unfilled'}
                  invalid={phonee ? 'true' : 'false'}
                  // placeholder="Phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-xs-12">
              <label>Email</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope" />
                  </span>
                </div>
                <input
                  type="email"
                  className={email ? 'form-control' : 'form-control unfilled'}
                  // placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-xs-12">
              <label>Department</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-building" />
                  </span>
                </div>
                <select
                  className="form-control"
                  // placeholder="Department"
                  className={
                    department ? 'form-control' : 'form-control unfilled'
                  }
                  onChange={e => setDepartment(e.target.value)}
                  required
                >
                  <option value="">Department</option>
                  <option value="Warehouse">Warehouse</option>
                  <option value="RepairWarranties">
                    Repairs &amp; Warranties
                  </option>
                  <option value="Inventory">Inventory</option>
                  <option value="Process Control">Process Control</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-xs-12">
              <label>Employee Id</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-id-card" />
                  </span>
                </div>
                <input
                  type="text"
                  className={
                    employeeId ? 'form-control' : 'form-control unfilled'
                  }
                  // placeholder="Employee ID"
                  value={employeeId}
                  onChange={e => setEmployeeId(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-xs-12">
              <label>Role</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user-circle" />
                  </span>
                </div>
                <select
                  className="form-control"
                  // placeholder="Role"
                  onChange={e => setRole(e.target.value)}
                  className={role ? 'form-control' : 'form-control unfilled'}
                  required
                >
                  <option value="">Role</option>
                  <option value="admin">Admin</option>
                  <option value="sub-admin">Sub-Admin</option>
                  <option value="inspector">Inspector</option>
                </select>
              </div>
            </div>
            <div className="col-12 text-right">
              <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
      <footer className="navbar navbar-transparent footer2 mb-0">
        <Footer />
      </footer>
    </>
  );
};

export default AddUser;
