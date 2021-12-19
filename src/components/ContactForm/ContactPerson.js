import React, { useState, useEffect } from 'react';

const SingleContact = ({
  onChange,
  contactState,
  index,
  allContacts,
  setAllContacts,
}) => {
  return (
    <form noValidate autoComplete='off'>
      <div className='form-group row'>
        <label
          htmlFor='customerType'
          className='custom-label col-sm-2 col-form-label'
        >
          First Name{' '}
        </label>
        <div class='col-sm-6 pl-0'>
          <input
            type='text'
            name='first_name'
            value={contactState?.first_name}
            onChange={onChange}
            class='form-control'
            id='colFormLabelSm'
          />
        </div>
      </div>
      <div className='form-group row'>
        <label
          htmlFor='customerType'
          className='custom-label col-sm-2 col-form-label'
        >
          Last Name{' '}
        </label>
        <div class='col-sm-6 pl-0'>
          <input
            type='text'
            name='last_name'
            value={contactState?.last_name}
            onChange={onChange}
            class='form-control'
            id='colFormLabelSm'
          />
        </div>
      </div>
      <div className='form-group row'>
        <label
          htmlFor='customerType'
          className='custom-label col-sm-2 col-form-label'
        >
          Salutation{' '}
        </label>
        <div class='col-sm-6 pl-0'>
          <select
            name='salutation'
            value={contactState?.salutation}
            onChange={onChange}
            class='form-control'
            placeholder='Salutation'
          >
            <option value='' disabled selected>
              Salutation
            </option>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
            <option>Miss.</option>
            <option>Dr.</option>
          </select>
        </div>
      </div>

      <div className='form-group row'>
        <label
          htmlFor='customerType'
          className='custom-label col-sm-2 col-form-label'
        >
          customer email{' '}
        </label>
        <div class='col-sm-6 pl-0'>
          <input
            type='email'
            name='email'
            value={contactState?.email}
            onChange={onChange}
            class='form-control'
            id='colFormLabelSm'
          />
        </div>
      </div>
      <div className='form-group row'>
        <label
          htmlFor='customerType'
          className='custom-label col-sm-2 col-form-label'
        >
          {' '}
          phone{' '}
        </label>
        <div class='col-sm-3 pl-0'>
          <input
            type='tel'
            name='phone'
            value={contactState?.phone}
            onChange={onChange}
            class='form-control'
            id='colFormLabelSm'
            placeholder='Work Phone'
          />
        </div>
        <div class='col-sm-3 pl-0'>
          <input
            type='tel'
            name='mobile'
            value={contactState?.mobile}
            onChange={onChange}
            class='form-control'
            id='colFormLabelSm'
            placeholder='Mobile'
          />
        </div>
      </div>
      {allContacts.length - 1 == index && (
        <button
          type='button'
          onClick={() => {
            const cloneContracts = [...allContacts];
            cloneContracts.push({});
            setAllContacts(cloneContracts);
          }}
          className='btn mt-3'
        >
          Add Contact Person
        </button>
      )}
    </form>
  );
};

const ContactPerson = ({ onChange, contactState }) => {
  const [allContacts, setAllContacts] = useState([{}]);
  const onChangeSingleContact = (e, index) => {
    const cloneAllContacts = [...allContacts];
    cloneAllContacts[index] = {
      ...cloneAllContacts[index],
      [e.target.name]: e.target.value,
    };
    setAllContacts(cloneAllContacts);
  };
  useEffect(() => {
    onChange({
      ...contactState,
      contact_persons: allContacts,
    });
  }, [allContacts]);

  return allContacts.map((singleContactState, index) => {
    return (
      <SingleContact
        index={index}
        allContacts={allContacts}
        setAllContacts={setAllContacts}
        contactState={singleContactState}
        onChange={(e) => onChangeSingleContact(e, index)}
      />
    );
  });
};
export default ContactPerson;
