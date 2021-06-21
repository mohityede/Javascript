import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {

    renderCell = (item, col)=>{
        if(col.contant) return col.contant(item);
        return _.get(item,col.column);
    };

    render() {
        const {data, columns} = this.props
        return (
        <tbody>
        {data.map(i=>(
            <tr key={i._id}>
                {columns.map(col=>(
                    <td key={col.column || col.key}> { this.renderCell(i,col) } </td>
                ))}

            </tr>
        ))}
        </tbody>
        )
    }
}

export default TableBody;