import React from 'react';
import './TableRow.css';
import {TableHead} from './TableHead';
import {TableBody} from './TableBody'

export class TableRow extends React.Component{
    constructor(props){
        super(props)
        this.state = {hide:true};
        this.toggleHide = this.toggleHide.bind(this);

    }

    toggleHide(){
        const show = this.state.hide? false : true;
        this.setState({hide : show});
    }

    render(){
        return(
            <tbody className="item">
                <TableHead onClick={this.toggleHide} title={this.props.title} date={this.props.date}/>
                <TableBody className = {this.state.hide? "hide":""} content={this.props.content}/>
            </tbody>
        )
    }
}