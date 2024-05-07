import React, {useEffect} from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../hooks/UseTelegram";
import './Header.css'


const Header = () => {

    const {user, onClose} = useTelegram()

    return (
        <div className={'Header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;