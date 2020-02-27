import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native';

import AddTodo from './addTodo';
import IconWithBadge from '../../../components/IconWithBadge';
import {
  getAllTodosAction,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
} from '../../../actions/todos';

class Todos extends PureComponent {
  componentDidMount() {
    this.props.getAllTodosAction();
  }
  render() {
    let {todos} = this.props.todos;

    return (
      <ScrollView style={{flex: 1}}>
        <AddTodo doAdd={this.props.addTodoAction} />
        <TodoContainer>
          {todos.map(item => {
            return (
              <TodoItem
                onPress={this.doChange.bind(this, item.id)}
                key={item.id}
                completed={item.completed}>
                <TodoText completed={item.completed}>{item.title}</TodoText>
                <IconWarp onPress={this.deleteTodo.bind(this, item.id)}>
                  <IconWithBadge name="delete" size={18} color="#fff" />
                </IconWarp>
              </TodoItem>
            );
          })}
        </TodoContainer>
      </ScrollView>
    );
  }
  doChange(id) {
    console.log('to doChange', id);
    this.props.updateTodoAction(id);
  }
  deleteTodo(id, ev) {
    console.log(id, 'id');
    ev.stopPropagation();
    this.props.deleteTodoAction(id);
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  getAllTodosAction,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todos);

const TodoContainer = styled.View`
  padding: 5px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TodoItem = styled.TouchableOpacity`
  width: 172px;
  height: 100px;
  margin: 5px;
  position: relative;
  padding: 20px;
  background-color: ${props => (props.completed ? '#ccc' : '#42b983')};
  border-radius: 5px;
  overflow: hidden;
`;

const TodoText = styled.Text`
  font-size: 16px;
  color: ${props => (props.completed ? '#999' : '#fff')};
  text-decoration: ${props => (props.completed ? 'line-through' : '')};
  text-decoration-color: #999;
`;

const IconWarp = styled.TouchableOpacity`
  position: absolute;
  right: -2px;
  bottom: -2px;
`;
