import React from 'react';
import './TableRow.css';

export class TableHead extends React.Component{


    render(){
        return(
            <tr className="row-head" onClick={this.props.onClick}>
                <td className="row-title">{this.props.title}</td>
                <td className="row-date">{this.props.date}</td>
            </tr>
        )
    }
}