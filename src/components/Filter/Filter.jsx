import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/filterSlice'
import { selectFilter } from '../../redux/selectors'

import css from './Filter.module.css'


const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleFilter = ({ target: { value } }) => { 
        // sort - по порядку 
		dispatch(setFilter(value));
	}

    return (
        <div className={css.wrapper}>
            <p className={css.text}>Find contact by name:</p>
            <input type="text" name="filter" className={css.input} value={filter} onChange={handleFilter} />
        </div>
    )
}


export default Filter