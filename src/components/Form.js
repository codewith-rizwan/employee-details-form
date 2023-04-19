function Form({ onValChange, formObject, onFormSubmit }) {
  return (
    <div className="for">
      <div className="nam">
        <label>
          Name:
          <input
            type="text"
            className="form-control"
            onChange={onValChange}
            value={formObject.name}
            name="name"
          />
        </label>
      </div>
      <br />
      <div className="nam">
        <label>
          Email:
          <input
            type="email"
            className="form-control"
            onChange={onValChange}
            value={formObject.email}
            name="email"
          />
        </label>
      </div>
      <br />
      <div className="nam">
        <label>
          Mobile:
          <input
            type="number"
            className="form-control"
            onChange={onValChange}
            value={formObject.mobail}
            name="mobail"
          />
        </label>
      </div>
      <br />
      <div className="nam">
        <label>
          Address:
          <input
            type="text"
            className="form-control"
            onChange={onValChange}
            value={formObject.address}
            name="address"
          />
        </label>
      </div>
      <br />
      <div className="did">
        <input type="submit" onClick={onFormSubmit} className="btn" />
      </div>
    </div>
  );
}
export default Form;
