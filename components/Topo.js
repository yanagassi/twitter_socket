import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native'; 
import {
    EvilIcons,
    AntDesign
} from '@expo/vector-icons';



export default class Topo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <View style={styles.view}>
                <Image source={require("../assets/topo_twitter.png")} style={styles.logo}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        height:70,
        width:"100%",
        backgroundColor:"#16202A",
        alignItems:"center",
        justifyContent: 'center',
        borderBottomWidth:1,
        borderBottomColor:"#374451"
    },
    logo:{
        width:30,
        height:30,
        resizeMode:"contain", 
        marginTop:15
    }     
})