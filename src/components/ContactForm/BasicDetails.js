const BasicDetails = ({ onChange, contactState }) => {
  return (
    <form noValidate autoComplete='off'>
      <div className='form-group row'>
        <label
          htmlFor='customerType'
          className='custom-label col-sm-2 col-form-label'
        >
          Contact Name{' '}
        </label>
        <div class='col-sm-6 pl-0'>
          <input type='text' name="contact_name" value={contactState?.contact_name} onChange={onChange} class='form-control' id='colFormLabelSm' />
        </div>
      </div>
      <div className='form-group row'>
        <label
          htmlFor='customerType'
          className='custom-label col-sm-2 col-form-label'
        >
          Company Name{' '}
        </label>
        <div class='col-sm-6 pl-0'>
          <input type='text' name="company_name" value={contactState?.company_name} onChange={onChange}  class='form-control' id='colFormLabelSm' />
        </div>
      </div>
      <div className='form-group row'>
        <label
          htmlFor='customerType'
          className='custom-label col-sm-2 col-form-label'
        >
          website{' '}
        </label>
        <div class='col-sm-6 pl-0'>
          <input type='url' name="website" value={contactState?.website} onChange={onChange} class='form-control' id='colFormLabelSm' />
        </div>
      </div>
    </form>
  );
};
export default BasicDetails;
