import React from 'react';
import { Text, List, ListItem, Body, Button } from 'native-base';
import Screen from '../components/Screen';
import { fetchPosts } from '../apis/postApi';

const renderList = (userList) => (
  userList.map((user) => (
    <ListItem>
      <Body>
        <Text>{user.id}</Text>
        <Text>{user.name}</Text>
      </Body>
    </ListItem>
  ))

  // fetchPosts().then((response) => (response.json())).then((resp) => (
  //   <Text>
  //     {resp.gender}
  //   </Text>
  // ))
)

const Home = () => {
  const userList = [
    {
      id: 1,
      name: 'Ali'
    },
    {
      id: 2,
      name: 'Veli'
    },
    {
      id: 3,
      name: 'Mehmet'
    },
    {
      id: 4,
      name: 'Ahmet'
    }
  ];

  return (
    <Screen hasBackButton>
      <Text>HOME MODULE</Text>
      <List>{renderList(userList)}</List>
    </Screen>
  )
}

export default Home;