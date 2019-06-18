import React, { Component } from 'react';
import {addTodo} from './../actions/index';
import { connect } from 'react-redux';

class AddTodo extends Component {

    render() {

        let input = '';

        return (
            <div>
                <input ref={(node) => { input = node }}></input>
                <div>
                    <button
                        onClick={() => {
                            this.props.dispatch(addTodo(input.value));
                            input.value = '';
                        }
                        }>
                        Add Todo
                    </button>
                </div>
            </div >
        );
    }
}


export default connect()(AddTodo);

