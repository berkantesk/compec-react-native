import React from 'react';
import { Text, List, ListItem, Body, Left, Icon } from 'native-base';
import Screen from '../components/Screen';
import { fetchPosts } from '../apis/postApi';

class Home extends React.Component {
  state = {
    postList: []
  }

  componentDidMount() {
    this.renderList();
  }

  renderList = () => {
    fetchPosts().then((response) => {
      this.setState({
        postList: response
      })
    });
  }

  render() {
    return (
      <Screen hasBackButton>
        <Text>HOME MODULE</Text>
        <List>
          {this.state.postList && this.state.postList.map((post, index) => (
            <ListItem key={index}>
              <Left>
                <Icon type="FontAwesome" name="paw" />
                <Text>{post.id}</Text>
              </Left>
              <Body>
                <Text>{post.title}</Text>
                <Text note numberOfLines={1}>{post.body}</Text>
              </Body>
            </ListItem>
          ))}
        </List>
      </Screen>
    )
  }
}
export default Home;