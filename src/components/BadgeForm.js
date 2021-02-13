import React, { Component } from 'react'

export default class BadgeForm extends Component {
    state = {

    };

    handleClick = e =>{
        console.log('Button has clicked')
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log('form was submit')
        console.log(this.state)
    }
    // handleChange = e =>{
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value,
    //     // })
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
        
    // }
    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit} action="">

                    <div className="form-group">
                        <label >First Name</label>
                        <input 
                            name="firstName" 
                            onChange={this.props.onChange} 
                            type="text" 
                            className="form-control"
                            value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label >Last Name</label>
                        <input 
                            name="lastName" 
                            onChange={this.props.onChange} 
                            type="text" 
                            className="form-control"
                            value={this.props.formValues.lastName}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label >Email</label>
                        <input 
                            name="email" 
                            onChange={this.props.onChange} 
                            type="email" 
                            className="form-control"
                            value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label >Job Title </label>
                        <input 
                            name="jobTitle" 
                            onChange={this.props.onChange} 
                            type="text" 
                            className="form-control"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label >Twitter</label>
                        <input 
                            name="twitter" 
                            onChange={this.props.onChange} 
                            type="text" 
                            className="form-control"
                            value={this.props.formValues.twitter}
                        /> 
                    </div>
                    


                    <button onClick={this.handleClick} className="btn btn-primary">
                        Save
                    </button>

                </form>
            </div> 
        ) 
    }
}
