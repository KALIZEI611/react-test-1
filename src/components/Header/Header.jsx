import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import { useCallback, useState } from 'react';
import Logo from '../Logo/Logo';

const logos=['/logo.svg','/vite.svg'];

function Header() {
	const[logoIndex,setLogoIndex]=useState(0);
	const loggletLogo=()=>{
		setLogoIndex(state => Number(!state));
	};

	return (
	<>
		<Logo image={logos[logoIndex]}/>
		<SelectUser />
		<Button onClick={loggletLogo}>Сменить лого</Button>
	</>
	);
}

export default Header;