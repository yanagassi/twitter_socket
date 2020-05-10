import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import {
    EvilIcons
} from '@expo/vector-icons';


export default class BlockResponse extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {data} = this.props;

        return (
            <View style={styles.view}>
                <View style={styles.firsView}>
                    <Image source={{ uri: "https://abrilveja.files.wordpress.com/2016/12/o-mussum-570-e1517485354782.jpg?quality=70&strip=info&w=570" }} style={styles.logo} />
                    <View style={{ marginLeft: 10, width: "85%" }}>
                        <Text style={styles.people}>{data.name} · {data.time}</Text>
                        <Text style={styles.peopleResponse}>{data.text}</Text>
                        
                        <View style={styles.actions}>
                            <EvilIcons name="comment" size={24} color="gray" />
                            <EvilIcons name="retweet" size={24} color="gray" />
                            <EvilIcons name="heart" size={24} color="gray" />
                            <EvilIcons name="share-google" size={24} color="gray" />
                        </View>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        width: "100%",
        backgroundColor: "#16202A",
        borderBottomWidth: 1,
        borderBottomColor: "#374451",
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: "cover",
        marginTop: 5,
        borderRadius: 55
    },
    people: {
        color: "gray",
        marginTop: 5,
        fontSize: 11
    },
    firsView: {
        padding: "5%",
        flexDirection: "row"
    },
    peopleResponse: {
        marginTop: 3,
        color: "white",
    },

    actions: {
        flexDirection: "row",
        justifyContent:"space-between",
        paddingRight: "5%",
        marginTop:10
    }
})