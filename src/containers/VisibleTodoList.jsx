import React, { Component } from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { getVisibleTodos, getErrorMessage,getIsFetching } from './../reducers/index';
import * as actions from './../actions/index';
import { withRouter } from 'react-router-dom';
import FetchError from './FetchError';

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(preProps) {
        if (this.props.filter !== preProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const { filter, fetchTodos } = this.props;
        console.log('props:',this.props);
        console.log('FetchTodos:',fetchTodos);
        fetchTodos(filter).then(() => console.log('done'));
    }

    render() {
        const { toggleTodoAction, errorMessage, todos, isFetching } = this.props;
        if (isFetching && !todos.length) {
            return <p>...Loading</p>;
        }
        if (errorMessage && !todos.length) {
            return (
                <FetchError
                    message={errorMessage}
                    onRetry={() => this.fetchData()}>
                </FetchError>
            )
        }
        return (<TodoList todos={todos} onTodoClick={toggleTodoAction} />);
    }
}

const mapStateToProps = (state, ownProps) => {
    const filter = ownProps.match.params.filter || 'all';
    return {
        todos: getVisibleTodos(state, filter),
        errorMessage:getErrorMessage(state,filter),
        isFetching: getIsFetching(state, filter),
        filter
    }
}



VisibleTodoList = withRouter(connect(mapStateToProps, actions)(VisibleTodoList));

export default VisibleTodoList;
