import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {TouchableOpacity, ScrollView} from 'react-native';

import AddTodo from './addTodo';
import IconWithBadge from '../../../components/IconWithBadge';
import {getAllTodos, addTodoAction} from '../../../actions/todos';

class Todos extends PureComponent {
  componentDidMount() {
    this.props.getAllTodos();
  }
  render() {
    let {todos} = this.props.todos;

    return (
      <ScrollView>
        <AddTodo doAdd={this.props.addTodoAction} />
        <TodoContainer>
          {todos.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                onPress={this.doChange}>
                <TodoItem completed={item.completed}>
                  <TodoText completed={item.completed}>{item.title}</TodoText>
                  <IconWarp>
                    <IconWithBadge name="delete" size={18} color="#fff" />
                  </IconWarp>
                </TodoItem>
              </TouchableOpacity>
            );
          })}
        </TodoContainer>
      </ScrollView>
    );
  }
  doChange = () => {
    console.log('doChange');
  };
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  getAllTodos,
  addTodoAction,
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

const TodoItem = styled.View`
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

const IconWarp = styled.View`
  position: absolute;
  right: -2px;
  bottom: -2px;
`;
