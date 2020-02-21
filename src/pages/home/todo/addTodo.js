import React, {PureComponent} from 'react';
import styled from 'styled-components';

export default class AddTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.addTodo = this.addTodo.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  render() {
    return (
      <>
        <Title>
          <HeaderText>Todos</HeaderText>
        </Title>
        <Container>
          <TextInput onChangeText={this.inputChange} />
          <TouchableOpacity onPress={this.addTodo}>
            <Text>Add</Text>
          </TouchableOpacity>
        </Container>
      </>
    );
  }
  inputChange(text) {
    this.setState({
      text,
    });
  }
  addTodo() {
    this.props.doAdd({
      title: this.state.text,
    });
  }
}

const Container = styled.View`
  margin-top: 10px;
  height: 40px;
  padding: 0 10px;
  flex-direction: row;
`;

const Title = styled.View`
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 20px;
`;

const TextInput = styled.TextInput`
  flex: 4;
  padding: 0 8px;
  border: 1px solid #dedede;
  border-radius: 6px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const TouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 2;
  border: 1px solid #42b983;
  border-radius: 6px;
  background: #42b983;
  overflow: hidden;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Text = styled.Text`
  color: #fff;
`;
