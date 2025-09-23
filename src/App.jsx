
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import './App.css';
import JournalForm from './components/JournalForm/JournalForm';

function App() {

    const data = [
        {
            title: 'Подготовка к обновлению курсов',
            text: 'Горные походы вместе с Павлом и нашей группой П23 в Сочи',
            date: new Date()
        },
        {
            title: 'Отдых',
            text: 'Походы в кальяную с Павлом',
            date: new Date()
        }
    ];
    
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
                <JournalForm />
            </Body>
        </div>
    );

}

export default App;
