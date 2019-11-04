import React from 'react';
import NavBar from '../Tool/navBar';
import Contact from '../Tool/contactUs';
import EditMenu from '../Tool/editMenu';
import {useSelector} from 'react-redux';
import Form from './Form';

export default function Selected()  {
    const BGcolor = useSelector(state => state.BGcolor);
    const TXcolor = useSelector(state => state.TXcolor);
    return (
        <div>
            <NavBar logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} /><br />
            <EditMenu bgcolor={BGcolor} />
            <Form bgcolor={BGcolor} />
            <div>
                <Contact bgcolor={BGcolor} />
            </div>
        </div>
    );
}