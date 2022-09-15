const Input = ({ formik, name, label, type = "text" }) => {
  return (
    <div className="formControl">
      <div className="labelBox">
        <label htmlFor={name}>{label}</label>
        {formik.touched[name] && formik.errors[name] && (
          <p>{formik.errors[name]}</p>
        )}
      </div>
      <input
        type={type}
        {...formik.getFieldProps({ name })}
        name={name}
        id={name}
      ></input>
    </div>
  );
};

export default Input;
