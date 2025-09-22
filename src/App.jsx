import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import './App.css';

function App() {
	const data = [
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
	const change = (event) => {
		console.log(event);
		console.log(event.target.value);
	};
	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					<CardButton>
						<JournalItem
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>
				<input type="text" onChange={change}></input>
			</Body>
		</div>
	);
}

export default App;
