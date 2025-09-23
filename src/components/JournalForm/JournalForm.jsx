import { useState } from 'react';
import './JournalForm.css';
import Button from '../Button/Button';

function JournalForm() {
    const [inputData, setInputData] = useState('');

    const change = (event) => {
        setInputData(event.target.value);
    };
    
    const addJournalItem = (e)=>{
        const formData= new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        e.preventDefault();
        console.log(formProps);
    }
    return (
        <form className='journalForm' onSubmit={addJournalItem}>
            <input type="text" name='title'  />
            <input type="date" name='date'/>
            <input type="text" name='tag' value={inputData} onChange={change} />
            <textarea cols="30" rows="10" name='post' />   
            <Button text="Сохранить"/>    
        </form>
    );
}

export default JournalForm;