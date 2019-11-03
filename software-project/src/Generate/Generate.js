import React from 'react'
import {Button} from 'reactstrap'
import './Generate.css'
import TableInfo from './TableInfo'
class Generate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            key: 'Please Click Generate',
            Tel: ''
        };
    }

    clickHandle = (e) => {
        let form = document.querySelector('#table-info');
        let tel = form.Tel.value;
        let name = form.Name.value;
        let brand = form.Brand.value;
        let version = form.Version.value;
        e.preventDefault();
        if(tel === '' || name === '' || brand === '' || version === ''){
            this.setState({key: 'Please check your information.',
        });
        }else{
            this.setState({
                key: 'Your key is: ' + Math.random()*(10**16),
                Tel: 'Telephone number : ' + form.Tel.value
            });
            form.Tel.value = ''
            form.Name.value = ''
            form.Brand.value = ''
            form.Version.value = ''
        }
    }

    render(){
        return(
        <div className = 'cover'>
            <TableInfo />
            <form>
            <div>
                <Button color = 'danger' onClick = {this.clickHandle}>Generate</Button> 
            </div>
            <div>
                {this.state.Tel}<br />
                {this.state.key}<br />
            </div>
            </form>
        </div>
        );
    }
}

export default Generate;