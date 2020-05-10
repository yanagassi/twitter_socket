import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Top from './components/Topo';
import BlockResponse from './components/BlockResponse';
import Bottom from './components/Bottom';
import NewPost from './components/NewPost';
import { socket } from './service/socket';


export default class App extends React.Component {
  state = {
    isConnected: false,
    feedData: [],
  };
  componentDidMount() {

    socket.on('connect', () => {
      this.setState({ isConnected: true });
    });

    socket.on('syncData', res => {
      this.setState({
        feedData: res.data
      })
    });
  }

  render() {
    const { feedData } = this.state;
    return (
      <View style={styles.contain}>
        <Top />
        <ScrollView>
          {feedData ? 
            feedData.map((element) => (
              <BlockResponse  data={element}/>
            )) 
          : null}
        </ScrollView>
        <NewPost />
        <Bottom />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    backgroundColor: "#16202A",
    height: "100%"
  }
})