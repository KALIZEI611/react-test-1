
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import './App.css';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Горные походы вместе с Павлом и нашей группой П23 в Сочи',
			date: new Date(),
			body:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ipsam nobis quis quaerat blanditiis porro modi adipisci in cupiditate expedita inventore, quisquam iusto non vitae, minima assumenda architecto sit est!'
		},
		{
			title: 'Отдых  ',
			text: 'Походы в кальяную с Павлом ',
			date: new Date()
		}
];

function App() {
	const [items,setItems]=useState(INITIAL_DATA);
	
	const addItem=item =>{
		setItems(oldItems => [...oldItems,{
			text:item.text,
			title:item.title,
			date:new Date(item.date)
		}]);
	};

	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					{items.map(el => (
						<CardButton>
						<JournalItem
							title={el.title}
							text={el.text}
							date={el.date}
						/>
						</CardButton>
						
					))}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</div>
	);
}

export default App;
