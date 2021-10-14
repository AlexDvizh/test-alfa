import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Filter.css';

function Filter() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked)
  }


  return (
    <div className="filter">
        {/* <input 
            className="filter__input" 
            name="likes"
            type="checkbox" 
        ></input> */}
        <input 
            type="checkbox" 
            checked={checked}
            onChange={handleChange}

        ></input>

        {/* <label className="filter__lable" htmlFor="likes"></label> */}
        <p className="filter__text">{checked ? "Показать все карточки" : "Показать лайкнутые карточки"}</p>
    </div>
  );
}

export default Filter;