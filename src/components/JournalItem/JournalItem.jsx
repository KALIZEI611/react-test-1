import JournalItemDate from '../JournalItemDate/JournalItemDate';
import './JournalItem.css';
function JournalItem({ title, date, post }) {
	return (
		<>
			<h2 className="journal-item__header">{title}</h2>
			<h2 className="journal-item__body">
				<div className="journal-item__date">
					<JournalItemDate date={date} />
				</div>
				<div className="journal-item__text">{post}</div>
			</h2>
		</>
	);
}

export default JournalItem;
