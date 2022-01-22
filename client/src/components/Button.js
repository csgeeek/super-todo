const Button = ({ onToggle, showForm }) => {

		let title = (showForm === true)? 'Close': 'Add';
    return (
			<button className={`btn ${showForm === true? 'close': 'add'}`} onClick={() => onToggle()} > {title} </button>
    );
}

export default Button;
