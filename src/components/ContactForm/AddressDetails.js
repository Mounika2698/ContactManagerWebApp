import { useState, useEffect } from "react";
import AddressForm from "./AddressForm";
const AddressDetails = ({ onChange, contactState }) => {
  const [billing_address, setBilling_address] = useState({});
  const [shipping_address, setShipping_address] = useState({});

  const onChangeBill = (e) => {
    setBilling_address({
      ...billing_address,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeShip = (e) => {
    setShipping_address({
      ...shipping_address,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    onChange({
      ...contactState,
      billing_address,
      shipping_address,
    });
  }, [billing_address, shipping_address]);
  return (
    <form
      noValidate
      autoComplete="off"
      className="d-flex justify-content-between"
    >
      <AddressForm
        title={"Shipping address"}
        {...{ onChange: onChangeBill, contactState }}
      />
      <AddressForm
        title={"Billing address"}
        {...{ onChange: onChangeShip, contactState }}
      />
    </form>
  );
};
export default AddressDetails;
