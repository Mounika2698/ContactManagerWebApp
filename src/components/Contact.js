import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import BasicDetails from './ContactForm/BasicDetails';
import AddressDetails from './ContactForm/AddressDetails';
import ContactPerson from './ContactForm/ContactPerson';

const Contact = ({history}) =>{
  const [contactState, setContactState] = useState({});
  const onChange = (e) => {
    setContactState({
      ...contactState,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateContact = () => {
    const formData = new FormData();
    formData.append('JSONString', JSON.stringify(contactState));
    axios({
      method: 'post',
      url: 'https://invoice.zoho.com/api/v3/contacts',
      data: formData,
      headers: {
        Authorization: 'Zoho-oauthtoken ' + localStorage.getItem('token'),
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((res) => {
        alert("Contact added.");
        history.push("/")
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  console.log('contactState', contactState);
  return (
    <>
      <Header />
      <div className='container'>
        <div className='create-customer-page'>
        <div className='w-100 d-flex justify-content-end'>
            <button
              type='button'
              className='btn text-capitalize bg-primary mb-5 text-white'
              onClick={()=> history.push("/")}
            >
              View contact list
            </button>
          </div>
          <div className='create-customer-card shadow-lg'>
            <ul class='nav nav-tabs custom-nav-tab' id='myTab' role='tablist'>
              <li class='nav-item'>
                <a
                  class='nav-link active'
                  id='basic-tab'
                  data-toggle='tab'
                  href='#basic'
                  role='tab'
                  aria-controls='basic'
                  aria-selected='true'
                >
                  Basic details
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link'
                  id='address-tab'
                  data-toggle='tab'
                  href='#address'
                  role='tab'
                  aria-controls='address'
                  aria-selected='false'
                >
                  Address
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link'
                  id='contact-tab'
                  data-toggle='tab'
                  href='#contact'
                  role='tab'
                  aria-controls='contact'
                  aria-selected='false'
                >
                  Contact persons
                </a>
              </li>
            </ul>
            <div class='tab-content' id='myTabContent'>
              <div
                class='tab-pane fade show active'
                id='basic'
                role='tabpanel'
                aria-labelledby='basic-tab'
              >
                <div className='form-section'>
                  <BasicDetails
                    onChange={onChange}
                    contactState={contactState}
                  />
                </div>
              </div>
              <div
                class='tab-pane fade'
                id='address'
                role='tabpanel'
                aria-labelledby='address-tab'
              >
                <div className='form-section'>
                  <AddressDetails
                    onChange={setContactState}
                    contactState={contactState}
                  />
                </div>
              </div>
              <div
                class='tab-pane fade'
                id='contact'
                role='tabpanel'
                aria-labelledby='contact-tab'
              >
                <div className='form-section'>
                  <ContactPerson
                    onChange={setContactState}
                    contactState={contactState}
                  />
                </div>
              </div>
            </div>
            <div className='w-100 d-flex justify-content-center align-items-center pb-5'>
              <button type='button' className='btn bg-muted text-dark mr-4'>
                Cancel
              </button>
              <button
                type='button'
                className='btn bg-success text-white'
                onClick={handleCreateContact}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Contact)
