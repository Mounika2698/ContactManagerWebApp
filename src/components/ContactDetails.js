import { Row, Col, Container } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import Header from "./Header";
const ContactDetails = ({ history,location }) => {

const contact = location.state || {
    "contact_id": "2977913000000079002",
    "contact_name": " Sample",
    "customer_name": " Sample",
    "vendor_name": " Sample",
    "company_name": "Bowman and Co",
    "website": "www.zylker.org",
    "language_code": "",
    "language_code_formatted": "",
    "contact_type": "customer",
    "contact_type_formatted": "Customer",
    "status": "active",
    "customer_sub_type": "business",
    "source": "api",
    "is_linked_with_zohocrm": false,
    "payment_terms": 15,
    "payment_terms_label": "Net 15",
    "currency_id": "2977913000000000099",
    "twitter": "",
    "facebook": "",
    "currency_code": "INR",
    "outstanding_receivable_amount": 0,
    "outstanding_receivable_amount_bcy": 0,
    "unused_credits_receivable_amount": 0,
    "first_name": "",
    "last_name": "",
    "email": "",
    "phone": "",
    "mobile": "",
    "portal_status": "disabled",
    "created_time": "2021-12-15T15:47:57+0530",
    "created_time_formatted": "15/12/2021",
    "last_modified_time": "2021-12-15T15:47:57+0530",
    "last_modified_time_formatted": "15/12/2021",
    "custom_fields": [],
    "custom_field_hash": {},
    "ach_supported": false,
    "has_attachment": false
};
  return (
    <>
      <Header />
      <div className="container">
        <div className="create-customer-page">
        <div className='w-100 d-flex justify-content-end'>
            <button
              type='button'
              className='btn text-capitalize bg-primary mb-5 text-white'
              onClick={()=> history.push("/")}
            >
              Back
            </button>
          </div>
      
          <div className="create-customer-card shadow-lg">
              <br/>
            <Container>
              <Row className="justify-content-md-center">
                <Col>
                  <label className="contact-details-head">Contact Name</label>
                  <p>{contact.contact_name}</p>
                </Col>
                <Col>
                  <label className="contact-details-head">Customer Name</label>
                  <p>{contact.customer_name}</p>
                </Col>
                <Col>
                  <label className="contact-details-head">Company Name</label>
                  <p>{contact.company_name}</p>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col>
                  <label className="contact-details-head"> First name</label>
                  <p>{contact.first_name}</p>
                </Col>
                <Col>
                  <label className="contact-details-head">Last name</label>
                  <p>{contact.last_name}</p>
                </Col>
                <Col>
                  <label className="contact-details-head"> Email</label>
                  <p>{contact.email}</p>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                
                <Col>
                  <label className="contact-details-head">Phone</label>
                  <p>{contact.phone}</p>
                </Col>
                <Col>
                  <label className="contact-details-head">Vendor Name</label>
                  <p>{contact.vendor_name}</p>
                </Col>
                <Col>
                  <label className="contact-details-head">Status</label>
                  <p>{contact.status}</p>
                </Col>
              </Row>

              <Row className="justify-content-md-center">
                
                <Col>
                  <label className="contact-details-head">Website</label>
                  <p>{contact.website}</p>
                </Col>
                <Col>
                  <label className="contact-details-head">Portal status</label>
                  <p>{contact.portal_status}</p>
                </Col>
                <Col>
                  <label className="contact-details-head"> Contact Type</label>
                  <p>{contact.contact_type}</p>
                </Col>
              </Row>

              <Row className="justify-content-md-center">
                
                <Col>
                  <label className="contact-details-head">Contact type formater</label>
                  <p>{contact.contact_type_formatted}</p>
                </Col>
                <Col>
                  <label className="contact-details-head"> Customer sub type</label>
                  <p>{contact.contact_name}</p>
                </Col>
                <Col>
                  <label className="contact-details-head">Currency code</label>
                  <p>{contact.currency_code}</p>
                </Col>
              </Row>
              <br/>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ContactDetails);
