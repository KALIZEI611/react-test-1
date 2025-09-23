
import './JournalForm.css';
import Button from '../Button/Button';

function JournalForm({onSubmit}) {

    const addJournalItem = (e)=>{
        const formData= new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        e.preventDefault();
        onSubmit(formProps);
    }
    return (
        <form className='journalForm' onSubmit={addJournalItem}>
            <input type="text" name='title'  />
            <input type="date" name='date'/>
            <input type="text" name='tag' />
            <textarea cols="30" rows="10" name='text' />   
            <Button text="Сохранить" onClick={()=>{console.log("Нажали");}} />  
        </form>
    );
}

export default JournalForm;