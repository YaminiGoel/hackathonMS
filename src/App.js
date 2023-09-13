import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {ReactMultiEmail} from 'react-multi-email';

function App() {
  const [managerName, setManagerName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [teamMembers, setTeamMembers] = useState(['']);
  const [formErrors, setFormErrors] = useState({});

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(`Manager Name: ${managerName}, Email: ${email}, Team Members: ${teamMembers.join(', ')}`);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
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
    } else {
      console.log(`Manager Name: ${managerName}, Email: ${email}, Team Members: ${teamMembers.join(', ')}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Register your team!
        </p>
      </header>
      <br></br>
      <form onSubmit={handleSubmit}>
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
         {formErrors.teamName  && <div className="form-error">{formErrors.teamName }</div>}
        </div>

        <div class="form-row">
        <label htmlFor="name" className="form-label">No. of Members:</label>
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

        <div className="form-row">
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
        </div>

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
        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
