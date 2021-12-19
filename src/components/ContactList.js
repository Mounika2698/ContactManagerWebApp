import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";
import QueryString from "query-string";
import Header from "./Header";
import { Modal, Button } from "react-bootstrap";

const REDIRECT_URL = "https://contactmanagerwebapp.netlify.app";
const CLIENT_ID = "1000.Z93TAUSXJBEU9ENH3TN47OQGO5USMQ" 

const ContactList = ({ history, location }) => {
  const parsed = QueryString.parse(location.hash);
  const [contactListData, setContactListData] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [contactIdtoDelete, setContactIdtoDelete] = useState();

  const redirectToAccount = (noRedirect) => {
   if(noRedirect){
     return;
   }
   window.location.href =
     `https://accounts.zoho.com/oauth/v2/auth?client_id=${CLIENT_ID}&response_type=token&scope=ZohoInvoice.contacts.Create,ZohoInvoice.contacts.UPDATE,ZohoInvoice.contacts.READ,ZohoInvoice.contacts.DELETE&redirect_uri=${REDIRECT_URL}`;
  };
  const getContacts = () => {
    const headers = {
      Authorization: "Zoho-oauthtoken " + localStorage.getItem("token"),
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    };
    axios
      .get("https://invoice.zoho.com/api/v3/contacts", { headers })
      .then((res) => {
        setContactListData(res.data.contacts);
      })
      .catch((err) => {
        if(err.response.data.code === 9017){
          alert(`Please create organization to proceeed. Once organization is created pls visit ${REDIRECT_URL}`)
          window.location.href = "https://invoice.zoho.in/home#/quicksetup?from_org_creation=true"
        }else{
          redirectToAccount(parsed.noRedirect);
        }
      });
  };

  const ModalView = () => {
    return (
      <>
        <Modal
          show={true}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body>Are you sure want to delete ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  const handleContactListView = (details) => {
    history.push({
      pathname: "/contactDetails",
      state: details,
    });
  };

  const handleDelete = () => {
    const headers = {
      Authorization: "Zoho-oauthtoken " + localStorage.getItem("token"),
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    };

    axios
      .delete(`https://invoice.zoho.com/api/v3/contacts/${contactIdtoDelete}`, {
        headers,
      })
      .then((res) => {
        setShow(false);
        getContacts();
      });
  };

  useEffect(() => {
    if (Object.keys(parsed).length !== 0) {
      localStorage.setItem("token", parsed.access_token);
    }
    if (
      localStorage.getItem("token") === "undefined" ||
      !localStorage.getItem("token")
    ) {
      redirectToAccount(parsed.noRedirect);
      return;
    }
    getContacts();
  }, []);

  return (
    <>
      <Header />
      {show ? <ModalView /> : null}

      <div className="container">
        <div className="contact-list-page">
          <div className="w-100 d-flex justify-content-end">
            <button
              type="button"
              className="btn text-capitalize bg-primary mb-5 text-white"
              onClick={() => history.push("/contact")}
            >
              Create new contact
            </button>
            <button
              hidden={!parsed.noRedirect}
              style={{marginLeft : 10}}
              type="button"
              className="btn text-capitalize bg-primary mb-5 text-white"
              onClick={() => redirectToAccount(false)}
            >
              Get Token
            </button>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Company Name</th>
              <th>Contact Name</th>
              <th>Contact Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactListData &&
              contactListData.map((contact, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{contact.company_name}</td>
                    <td>{contact.contact_name}</td>
                    <td>{contact.contact_type}</td>
                    <td>
                      <span className="mr-4">
                      <i
                        onClick={() => handleContactListView(contact)}
                        class="fa fa-eye"
                        aria-hidden="true"
                      ></i></span>
                      <span>
                      
                      <i
                        onClick={() => {
                          setContactIdtoDelete(contact.contact_id);
                          setShow(true);
                        }}
                        class="fa fa-trash"
                        aria-hidden="true"
                      ></i>
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default withRouter(ContactList);
