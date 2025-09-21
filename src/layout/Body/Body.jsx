import './Body.css';
import LayoutDate from '../LayoutDate/LayoutDate';

function Body({ title, body, date }) {
	return (
		<>
			<div className="body">
				<h1 className="body-item__header">{title}</h1>
				<p>
					<LayoutDate date={date} />
				</p>
				<div className="body-item__text">{body}</div>
			</div>
		</>
	);
}

export default Body;
