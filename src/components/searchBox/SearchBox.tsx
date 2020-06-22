import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchField } from '../../redux/actions';

export default function SearchBox() {

    const dispatch = useDispatch();
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
        dispatch(setSearchField(e.target.value.trim())); 
    }

    return (
        <div>
            <input 
            placeholder='search robots'  
            onChange={onChange}
            />
        </div>
    )
}
