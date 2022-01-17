const Button = ({ onToggle, showForm }) => {

		let title = "Add";
		if(showForm === true){
			title = "Close";
		}
    return (
			<button className={`${showForm === true? 'close-btn': 'add-btn'}`} onClick={() => onToggle()} > {title} </button>
    )
}

export default Button
