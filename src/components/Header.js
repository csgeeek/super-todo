import Button from "./Button"
const Header = ({ onToggle, showForm }) => {
    return (
        <div className="header">
          <h1 className="heading">To-do List</h1>
          <Button onToggle={onToggle} showForm={showForm} />
        </div>
    )
}

export default Header
