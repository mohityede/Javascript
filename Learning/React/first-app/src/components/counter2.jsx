import React, { Component } from 'react';
import Counter from './counter'

class Counter2 extends Component {

    render() {
        return (
        <div>
            <button onClick={this.props.handleReset} className="btn btn-sm btn-warning m-2">Reset</button>
            {this.props.counters.map(c=><Counter key={c.id} onDelete={this.props.handleDelete} onAddOne={this.props.addOne} counter={c}>

            </Counter>)}
        </div>
        );
    }
}

export default Counter2;