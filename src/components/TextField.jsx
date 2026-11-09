import './TextField.css'

function TextField({ id, label, value, onChange, placeholder }) {
  return (
    <label className="text-field" htmlFor={id}>
      <span className="text-field__label">{label}</span>
      <input
        id={id}
        className="text-field__input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  )
}

export default TextField
