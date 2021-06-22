import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from '../common/input';
import g from 'joi-browser';

class Form extends Component {
    state = {
        data:{},
        errors:{}
    }

    validate = ()=>{
        const result = Joi.validate(this.state.data,this.schema, {abortEarly: false})

        if(!result.error) return null;

        const errors={};
        for(let item of result.error.details)
            errors[item.path[0]] = item.message;

        return errors;

        // OR

        // const errors = {}
        // // const { data } = this.state

        // // if(data.email === '')
        // //     errors.email = 'Email is required.'
        // // if(data.password === '')
        // //     errors.password = 'Password is required.'

        // // return (Object.keys(errors).length===0)?null:errors;
    }

    handleSubmit = e =>{
        e.preventDefault();

        const errors = this.validate();

        this.setState({ errors:errors || {} });

        if(errors) return;

        this.doSubmit();
    };

    validateProperty = ({name, value})=>{
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};

        const {error} = Joi.validate(obj, schema);

        return error ? error.details[0].message : null;

        // OR

        // if(name==='email' && value.trim()==='') return "Email is required";
        // if(name==='password' && value.trim()==='') return "Password is required";
    }

    handleChange = ({ currentTarget: input })=>{
        const errors = {...this.state.errors};

        const errorMsg = this.validateProperty(input);
        if(errorMsg) errors[input.name] = errorMsg;
        else delete errors[input.name];

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data, errors});
    }

    renderButton(label){
        return <button disabled={this.validate()} className="btn btn-primary m-2">{label}</button>
    }

    renderInput(value,label, type="text"){
        const {errors, data} = this.state;
        return (
            <Input
                type={type}
                value={data[value]}
                error={errors[value]}
                handleChange={this.handleChange}
                name={value}
                label={label}
            />
        )
    }

    renderSelect(name,values,label){ /// values is array of options
        const {errors, data} = this.state;
        console.log("data in select",data)
        return(
        <div className="form-group">
            <label htmlFor={name} className="form-label">{label}</label>
            <select name={name} onChange={this.handleChange} value={data[name]} className="form-select">
            <option value="select">Select</option>
                {values.map(g=>
                    <option key={g.name} value={g.name}>{g.name}</option>
                    )}
            </select>

            { errors[name] && <div className="alert alert-danger">{errors[name]}</div> }
        </div>)
    }
}

export default Form;