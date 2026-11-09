import './Button.css'

function Button({ children, type = 'button', onClick, variant = 'blue', wide = false }) {
  const className = [
    'button',
    variant === 'red' ? 'button--red' : 'button--blue',
    wide ? 'button--wide' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
