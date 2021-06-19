import React, { Component } from 'react';
import Counter from './counter'

class Counter2 extends Component {

    render() {
        // Destructring argument
        const { handleReset, counters, handleDelete, addOne, subOne } = this.props;
        return (
        <div>
            <button onClick={handleReset} className="btn btn-sm btn-warning m-2">Reset</button>
            {counters.map(c=><Counter key={c.id} onDelete={handleDelete} onAddOne={addOne} onSubOne={subOne} counter={c}>
            </Counter>)}
        </div>
        );
    }
}

export default Counter2;