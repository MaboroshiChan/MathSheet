const Button = ({onClick, label, className}) => (
    <button onClick={onClick} className={className}>{label}</button>
);

export default Button;