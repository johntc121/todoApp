import React, {Component} from 'react'


export class AddTodo extends Component {

    state = {
        title: ''
    }

    //Component level state, not app level
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value //tite: e.target.value
    }) 

    render(){
        return (
            <form style={{display: 'flex'}}>
                <input 
                    type='text' 
                    name='title' 
                    placeholder='Add Todo' 
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type='submit' 
                    value='Submit' 
                    className='btn' 
                    style={{flex: '1'}}
                />
        
            </form>
          )
    }
}

export default AddTodo;

