import React from 'react';
import './App.css';
import {TableRow} from './Component/TableRow';


export class App extends React.Component {
  state = {rows: []}

  componentDidMount() {
    fetch('/dbs_ko')
      .then(res => {
        // console.log("AA",res);
        return res.json()}
        )
      .then(rows => {
        
        this.setState({rows})
      });
  }

  render() {

    let rowss= this.state.rows.map((row)=>{

      var dt = new Date(row.UPLOADDATE);
      var formattingDt = dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate();

      return <TableRow key ={row.IDX} title={row.TITLE} date={formattingDt} content={row.CONTENTS}/>;
    
    });

    return (
      <div className="App">
        <table>
          {rowss}
        </table>
      </div>
    );
  }
}

