import React, {Component} from 'react'
import './styles/table.css';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courseList: [
                {id: 'CSC-360', name: 'Formal Languages & Automata', profID: 'Rosoff'},
                {id: 'MAT-150', name: 'Formal Languages & Automata', profID: 'Rosoff'}

            ]
        }
    }
    

    renderTableData() {
        return this.state.courseList.map((course, index) => {
            const {id, name, profID} = course
            return(
                <tr className="flex-row" role="rowgroup" key = {id}>
                    <td className="flex-cell" role="cell">{id}</td>
                    <td className="flex-cell" role="cell">{name}</td>
                    <td className="flex-cell" role="cell">{profID}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.courseList[0])
        return header.map((key, index) =>{
            return <th className="flex-table-header" role="columnheader" key={index}>{key.toUpperCase()}</th>
        })
    }


    render() {
        return (
            <div>
                <table className="table-container" role="table" aria-label="Destinations">
                    <caption>{this.props.term}</caption>
                    <thead><tr className="flex-table-header" role="rowgroup" >{this.renderTableHeader()}</tr></thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table