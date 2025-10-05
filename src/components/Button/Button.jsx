import './Button.css';
function Button({children , onClick}) {
	return (
		<button className="button acent" onClick={onClick}>{children}</button>
	);
}

export default Button;
