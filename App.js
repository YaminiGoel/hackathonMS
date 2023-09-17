import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { ReactMultiEmail } from 'react-multi-email';

function App() {
  const [managerID, setManagerID] = useState('');
  const [managerName, setManagerName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [teamMembers, setTeamMembers] = useState(['']);
  const [formErrors, setFormErrors] = useState({});
  const [teamMembersDetails, setTeamMembersDetails] = useState([]);

  const addNewMember = () => {
    setTeamMembersDetails([...teamMembersDetails, { email: '', dob: '', doj: '' }]);
  };
  const handleMemberChange = (index, field, value) => {
    const newMembers = [...teamMembersDetails];
    newMembers[index][field] = value;
    setTeamMembersDetails(newMembers);
  };
  function deleteMember(index) {
    const newMembers = [...teamMembersDetails];
    newMembers.splice(index, 1);
    setTeamMembersDetails(newMembers);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = {};
    if (managerID.trim() === '') {
      errors.managerID = 'Manager ID is required';
    }
    if (managerName.trim() === '') {
      errors.managerName = 'Manager name is required';
    }
    if (teamName.trim() === '') {
      errors.teamName = 'Team name is required';
    }
    if (email.trim() === '') {
      errors.email = 'Email is required';
    }
    if (teamMembers.length === 0) {
      errors.teamMembers = 'At least one team member is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    }

    const managerID = event.target.elements.managerID.value;
      const managerName = event.target.elements.managerName.value;
      const teamName = event.target.elements.teamName.value;
      const isBirthdayNotificationEnabled = event.target.elements.birthdays.checked;
      const isWorkAnniNotificationEnabled = event.target.elements.workAnniversary.checked;
      const recepientEmailIds = event.target.elements.email.value//[event.target.elements.email.value, ...teamMembersDetails.map((member) => member.email)];
      const teamMemberDetailsArray = teamMembersDetails.map((member) => ({
        employeeId: member.id,
        name: member.name,
        employeeEmail: member.email,
        dob: member.dob,
        doj: member.doj,
        isActive: true,
      }));

      const body = JSON.stringify({
        managerID,
        managerName,
        teamName,
        isBirthdayNotificationEnabled,
        isWorkAnniNotificationEnabled,
        recepientEmailIds,
        teamMemberDetailsArray
      })
      console.log(body);

      // const response = await fetch('https://apidetails', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: body,
      // });

      // const data = await response.json();
      // console.log(data);

  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Let's celebrate the special days!
        </p>
      </header>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div class="form-row">
          <label htmlFor="managerName" className="form-label">Manager ID:</label>
          <input
            type="text"
            id="managerID"
            name="managerID"
            value={managerID}
            onChange={(event) => setManagerID(event.target.value)}
            className="form-input"
          />
          {formErrors.managerID && <div className="form-error">{formErrors.managerID}</div>}
        </div>

        <div class="form-row">
          <label htmlFor="managerName" className="form-label">Manager Name:</label>
          <input
            type="text"
            id="managerName"
            name="managerName"
            value={managerName}
            onChange={(event) => setManagerName(event.target.value)}
            className="form-input"
          />
          {formErrors.managerName && <div className="form-error">{formErrors.managerName}</div>}
        </div>
        <div class="form-row">
          <label htmlFor="teamName" className="form-label">Team Name:</label>
          <input
            type="text"
            id="teamName"
            name="teamName"
            value={teamName}
            onChange={(event) => setTeamName(event.target.value)}
            className="form-input"
          />
          {formErrors.teamName && <div className="form-error">{formErrors.teamName}</div>}
        </div>

        {/* <div class="form-row">
          <label htmlFor="name" className="form-label">No. of Members:</label>
          <input
            type="number"
            id="numMembers"
            min={0}
            name="numMembers"
            value={numMembers}
            onChange={(event) => setNumMembers(event.target.value)}
            className="form-input"
          />
          {formErrors.numMembers && <div className="form-error">{formErrors.numMembers}</div>}
        </div> */}

        <div class="form-row">
          <label htmlFor="email" className="form-label">
            Audience Email:
            {/* <span className="required">*</span>: */}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-input"
            required
          />
          {formErrors.managerName && <div className="form-error">{formErrors.managerName}</div>}
        </div>

        {/* <div className="form-row">
          <label htmlFor="teamMembers" className="form-label">Team Members:</label>
          <ReactMultiEmail
          id="email"
          name="email"
          value={teamMembers}
          onChange={setTeamMembers}
          className="form-emailList-input"
          getLabel={(email, index, removeEmail) => {
            return (
              <div data-tag key={index}>
                <div data-tag-item>{email}</div>
                <span data-tag-handle onClick={() => removeEmail(index)}>
                  ×
                </span>
              </div>
            );
          }}
          />
           {formErrors.teamMembers && <div className="form-error">{formErrors.teamMembers}</div>}
        </div> */}

        <div className="form-row">
          <label htmlFor="specialDays" className="form-label">Special Days:</label>
          <div className="form-checkbox-group">
            <label htmlFor="workAnniversary" className="form-checkbox-label">
              <input
                type="checkbox"
                id="workAnniversary"
                name="workAnniversary"
                value="Work Anniversary"
                className="form-checkbox-input"
              />
              Work Anniversary
            </label>
            <label htmlFor="birthdays" className="form-checkbox-label">
              <input
                type="checkbox"
                id="birthdays"
                name="birthdays"
                value="Birthdays"
                className="form-checkbox-input"
              />
              Birthdays
            </label>
          </div>
          {formErrors.managerName && <div className="form-error">{formErrors.managerName}</div>}
        </div>

        <div class="form-row">
          <label htmlFor="numMembers" className="form-label">Add Team Member Details <button type="button" onClick={addNewMember}>Add</button></label>
          {teamMembersDetails.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>DOB</th>
                  <th>Date of Joining</th>
                </tr>
              </thead>
              <tbody>
                {teamMembersDetails.map((member, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        value={member.id}
                        onChange={(event) => handleMemberChange(index, 'id', event.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(event) => handleMemberChange(index, 'name', event.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        value={member.email}
                        onChange={(event) => handleMemberChange(index, 'email', event.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={member.dob}
                        onChange={(event) => handleMemberChange(index, 'dob', event.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={member.doj}
                        onChange={(event) => handleMemberChange(index, 'doj', event.target.value)}
                      />
                    </td>
                    <td>
                      <button onClick={() => deleteMember(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>


        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
}

export default App;
