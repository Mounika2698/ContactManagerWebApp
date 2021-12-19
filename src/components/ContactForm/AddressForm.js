const AddressForm = ({ onChange, contactState, title }) => {
  return (
    <div className="w-50 billing-addr-section">
      <h4 className="text-capitalize mb-5 text-muted">{title}</h4>
      <div className="form-group row">
        <label
          htmlFor="customerType"
          className="custom-label col-sm-3 col-form-label"
        >
          Country / Region{" "}
        </label>
        <div class="col-sm-8 pl-0">
          <select
            name="country"
            value={contactState?.country}
            onChange={onChange}
            class="form-control"
            placeholder="Select"
          >
            <option value="" disabled selected>
              Select
            </option>
            <option>India</option>
          </select>
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="customerType"
          className="custom-label col-sm-3 col-form-label"
        >
          street{" "}
        </label>
        <div class="col-sm-8 pl-0">
          <input
            type="text"
            name="street"
            value={contactState?.street}
            onChange={onChange}
            class="form-control"
            id="colFormLabelSm"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="customerType"
          className="custom-label col-sm-3 col-form-label"
        >
          city{" "}
        </label>
        <div class="col-sm-8 pl-0">
          <input
            type="text"
            name="city"
            value={contactState?.city}
            onChange={onChange}
            class="form-control"
            id="colFormLabelSm"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="customerType"
          className="custom-label col-sm-3 col-form-label"
        >
          state{" "}
        </label>
        <div class="col-sm-8 pl-0">
          <input
            type="text"
            name="state"
            value={contactState?.state}
            onChange={onChange}
            class="form-control"
            id="colFormLabelSm"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="customerType"
          className="custom-label col-sm-3 col-form-label"
        >
          zip code{" "}
        </label>
        <div class="col-sm-8 pl-0">
          <input
            type="text"
            name="zip"
            value={contactState?.zip}
            onChange={onChange}
            class="form-control"
            id="colFormLabelSm"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
