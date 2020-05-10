import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
    Fontisto,
    EvilIcons,
    Octicons
} from '@expo/vector-icons';


export default class Bottom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.view}>
                <Fontisto name="home" size={20} color="#1DA1F3" />
                <EvilIcons name="search" size={30} color="gray" />
                <EvilIcons name="bell" size={33} color="gray" />
                <Octicons name="mail" size={27} color="gray" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#16202A",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: "10%",
        paddingLeft: "10%",
        padding:"2%",
        color: "white",
        borderTopWidth:1,
        borderTopColor:"#374451"
    },
    logo: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        marginTop: 15
    }
})