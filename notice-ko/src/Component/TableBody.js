import React from 'react';
import './TableRow.css';

export class TableBody extends React.Component{


    render(){
        return(
            <tr className={"row-body " && this.props.className}>
                <td colSpan="2" className="row-content ">{this.props.content}</td>
            </tr>
        )
    }
}