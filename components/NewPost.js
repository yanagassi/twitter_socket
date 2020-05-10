import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Modal, Text, TextInput, Image } from 'react-native';
import {
    Feather,
    MaterialCommunityIcons
} from '@expo/vector-icons'; 
import { socket } from '../service/socket';
 


export default class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    close = ( ) =>{
        this.setState({
            modalVisible:false,
            text:null
        })
    }

    sendMessage() {
        const { text } = this.state;
        if (!text)
            return;
        socket.emit('newPost',{
                name: "@babybay",
                time: "3m",
                text:text
        })
        this.close()
    }

    render() {
        const { modalVisible } = this.state
        if (!modalVisible)
            return (
                <TouchableOpacity style={styles.view} onPress={() => this.setState({ modalVisible: true })}>
                    <MaterialCommunityIcons name="feather" size={30} style={{ marginTop: 15 }} color="white" />
                </TouchableOpacity>
            );
        else
            return (
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible} >
                        <View style={styles.modalView}>
                            <View style={styles.viewData}>
                                <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => this.setState({ modalVisible: false })}>
                                    <Feather name="x" size={24} color="#1DA1F3" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.exits} onPress={()=>this.sendMessage()}>
                                    <Text style={styles.tweet}>Tweet</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={{ uri: "https://abrilveja.files.wordpress.com/2016/12/o-mussum-570-e1517485354782.jpg?quality=70&strip=info&w=570" }} style={styles.logo} />
                                <TextInput
                                    multiline={true}
                                    style={styles.textInput}
                                    numberOfLines={4}
                                    placeholder={"What`s happening?"}
                                    style={{ color: "white" }}
                                    autoFocus={true}
                                    onChangeText={(text) => this.setState({ text })}
                                    value={this.state.text} />
                            </View>
                        </View>
                    </Modal>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    modalView: {
        width: "100%",
        height: "100%",
        backgroundColor: "#16202A",
        paddingTop: 20
    },
    exits: {
        marginRight: 20,
        backgroundColor: "#1DA1F3",
        height: 35,
        paddingLeft: 10,
        paddingRight: 15,
        borderRadius: 20
    },
    viewData: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    view: {
        position: "absolute",
        bottom: "10%",
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "#1DA1F3",
        alignContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: "cover",
        marginTop: 5,
        borderRadius: 55,
        marginRight: 20,
        marginLeft: 10,
        marginTop: 20
    },
    tweet: {
        color: "white",
        fontSize: 16,
        marginTop: 4,
        alignSelf: "center"
    },
    textInput: {
        fontSize: 20,
        borderColor: "red",
        borderWidth: 1
    }

})