import React, { Component } from 'react';
class AddContact extends Component{
    state = {
        name : '',
        email : '',
    }

    add = (e) => {
        e.preventDeafault();
        if(this.state.name === '' && this.state.email === '' ){
            alert("Please enter a valeu  :) ");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name : '' , email : ''})
    }
    render(){
        return(
            <div className='ui main'>
                <h2>Add Contact</h2>
                    <form className='ui form' onSubmit ={this.add}>
                        <div className='ui field'>
                            <label>Name</label>
                            <input type='text' name='name' placeholder='name' value = {this.state.value} onChange = {(e) => this.usaState({name : e.target.value })} />
                            <label>Email</label>
                            <input type='text' name='email' placeholder='email' value = {this.state.value} onChange = {(e) => this.usaState({email : e.target.value })} />
                            <button className='ui button blue'>Add</button>
                        </div>                        
                    </form>
            </div>
        )
    }
}
export default AddContact;