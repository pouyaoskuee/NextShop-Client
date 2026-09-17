function TextField({ label, name, value, onChange , errors }) {
  return (
    <div>
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>
        <p className={'text-xs text-error mb-2'}>{errors}</p>
      <input
        autoComplete="off"
        className="textField__input"
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default TextField;
