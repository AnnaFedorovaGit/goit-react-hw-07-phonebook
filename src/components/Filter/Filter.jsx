import { useDispatch } from 'react-redux'
import { setFilter } from '../../redux/filterSlice'

import css from './Filter.module.css'


const Filter = () => {
    const dispatch = useDispatch();

    const filterContact = ({ target: { value } }) => { 
		dispatch(setFilter(value));
	}

    return (
        <div className={css.wrapper}>
            <p className={css.text}>Find contact by name:</p>
            <input type="text" name="filter" className={css.input} onChange={filterContact} />
        </div>
    )
}


export default Filter