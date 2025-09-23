import './Button.css';
function Button({text , onClick}) {
	return (
		<button className="button acent" onClick={onClick}>{text}</button>
	);
}

export default Button;
