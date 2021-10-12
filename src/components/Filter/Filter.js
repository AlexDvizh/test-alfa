import './Filter.css';

function Filter() {

  return (
    <div className="filter">
        <input 
            className="filter__input" 
            name="likes"
            type="checkbox" 
            id="likes"
        ></input>
        <label className="filter__lable" htmlFor="likes"></label>
        <p className="filter__text">Избранное</p>
    </div>
  );
}

export default Filter;