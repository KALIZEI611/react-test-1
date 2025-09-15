import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Горные походы вместе с Павлом и нашей группой П23 в Сочи',
			date: new Date()
		},
		{
			title: 'Отдых  ',
			text: 'Походы в кальяную с Павлом ',
			date: new Date()
		}
	];
	return (
		<>
			<Button />
			<CardButton>Новое воспоминание</CardButton>
			<CardButton>
				<JournalItem
					title={data[0].title}
					text={data[0].text}
					date={data[0].date}
				/>
			</CardButton>

			<CardButton>
				<JournalItem
					title={data[0].title}
					text={data[0].text}
					date={data[0].date}
				/>
			</CardButton>
		</>
	);
}

export default App;
