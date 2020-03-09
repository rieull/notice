import React from 'react';
import './TableRow.css';

export class TableBody extends React.Component{

    render(){ 
        let str=this.props.content.split('<br/>');
                let con = str.map((s)=>{
                    return <span>{s}<br/></span>;
                });
        return(
            <tr className={"row-body " && this.props.className}>
                <td colSpan="2" className="row-content ">{con}</td>
            </tr>
        )
    }
}