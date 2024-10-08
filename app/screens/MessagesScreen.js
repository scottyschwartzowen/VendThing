import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from '../components/lists';

const initialMessages = [
  {
    id: 1,
    title: 'Scotty Schwartz-Owen',
    description:
      'Hey! Is that red jacket still available? And is it lined on the inside?',
    image: require('../assets/scotty.jpg'),
  },
  {
    id: 2,
    title: 'Scotty Schwartz-Owen',
    description:
      'How worn is the sofa? Do you have any close up pics of the fabric you cna share?',
    image: require('../assets/scotty.jpg'),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/scotty.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {},
});

export default MessagesScreen;
