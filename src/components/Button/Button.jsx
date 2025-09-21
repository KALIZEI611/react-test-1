import './Button.css';
import { useState } from 'react';
function Button() {
	//let text = 'Сохранить';
	const [text, setText] = useState('Сохранить');
	const click = () => {
		setText('Закрыть');
		console.log('click');
	};
	return (
		<button onClick={click} className="button acent">
			{text}
		</button>
	);
}

export default Button;
