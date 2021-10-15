import './Filter.css';

function Filter(props) {
    const isActive = props.isActive;

    const handleChange = (checked) => {
        props.onChange(checked);
    }

    return (
        <div className="filter">
            <input 
                className="filter__input"
                type="checkbox" 
                checked={isActive} 
                onChange={() => { handleChange(!isActive); }} 
            />
            <p className="filter__text">{isActive ? "Вернуть все карточки" : "Избранное"}</p>
        </div>
    );
}

export default Filter;