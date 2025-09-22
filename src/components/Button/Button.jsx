import './Button.css';
import { useState } from 'react';
function Button() {
	//let text = 'Сохранить';
	const [text, setText] = useState('Сохранить');
	const click = () => {
		setText(t=>t+'!');
		console.log(text);
	};
	return (
		<button onClick={click} className="button acent">
			{text}
		</button>
	);
}

export default Button;
