import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import css from './Header.module.css'
import {Switch} from "@mui/material";

const Header = () => {

    const [checked,setChecked] = useState(true);


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className={css.Header}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <NavLink to={'search'}>Search</NavLink>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <PermIdentityIcon/>


        </div>
    );
};

export {Header};