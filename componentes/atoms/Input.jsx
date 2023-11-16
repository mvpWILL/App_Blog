 

const Input = ({ type, id, name, label, required }) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label">
      {label}:
    </label>
    <input type={type} id={id} name={name} className="form-control" required={required} />
  </div>
);

export default Input;
