import React from 'react';
import './Product.css';
import NavBar from '../Homepage/navbar/navBar';
import TableCategory from './TableCategory';
import TableProduct from './TableProduct';
import { Row, Col } from 'reactstrap';
import { Table } from '@material-ui/core';

class Product extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                <div className='page'>
                    <div><TableCategory /></div>
                    <div><TableProduct /></div>
                </div>
            </div>
        );
    }
}

export default Product;