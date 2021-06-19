import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return (
        <div className="row w-50">
            <div  className="col-2">
                <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
            </div>
            <div className="col">
                <button onClick={()=> this.props.onAddOne(this.props.counter)} className="btn btn-secondary btn-sm m-2" >+</button>
                <button disabled={this.props.counter.value<1} onClick={()=> this.props.onSubOne(this.props.counter)} className="btn btn-secondary btn-sm m-2" >-</button>
                <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">x</button>
            </div>
        </div>
        );
    }
    // line:20 => in real world app key is and unique id of object

    getBadgeClasses() {
        let classesSpan = "badge m-2 bg-";
        classesSpan += (this.props.counter.value === 0) ? "danger" : "primary";
        return classesSpan;
    }

    formatCount() {
        const { value } = this.props.counter // distructor
        return value===0? "zero":value;
    }

    // randerTags(){
    //     if(this.state.arr.length===0) return <b>Array is empty..</b>
    //     return <ul> {this.state.arr.map(item=> <li key={item}>{item}</li> )} </ul>
    // }

}

export default Counter;