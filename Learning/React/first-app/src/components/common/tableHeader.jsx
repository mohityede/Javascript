import React, { Component } from 'react';

class TableHeader extends Component {

    raiseSort = column =>{
        const sortCol = {...this.props.sortColumn}
        if(sortCol.column === column)
          sortCol.order = (sortCol.order === 'asc') ? 'desc' : 'asc';
        else{
          sortCol.column = column;
          sortCol.order = 'asc';
        }
        this.props.handleSort(sortCol);
    }

    sortIcon = col =>{
        if(col.column != this.props.sortColumn.column) return null;
        if(this.props.sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }

    render() {
        return (
            <thead className="thead-dark">
                <tr>
                    {this.props.columns.map(col=> <th
                    key= {col.column || col.key}
                    style={{cursor:"pointer"}}
                    onClick={()=> this.raiseSort(col.column)}
                    >{col.label} {this.sortIcon(col)}</th>)}
                </tr>
            </thead>

        )
    }
}

export default TableHeader;