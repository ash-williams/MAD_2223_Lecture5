import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';

export default class FlatListDemo extends Component{

    constructor(props){
        super(props);

        this.state = {
            conversation: [
                {id: 1, user_id: 1, name: "Ash", message: "Tell me why?"},
                {id: 2, user_id: 2, name: "Ronan", message: "Ain't nothing by a heartache"},
                {id: 3, user_id: 1, name: "Ash", message: "Tell me why?"},
                {id: 4, user_id: 2, name: "Ronan", message: "Ain't nothing by a mistake"},
                {id: 5, user_id: 1, name: "Ash", message: "Tell me why?"},
                {id: 6, user_id: 2, name: "Ronan", message: "I never want to hear you say"},
                {id: 7, user_id: 1, name: "Ash", message: "I want it that way"},
                {id: 8, user_id: 2, name: "Ronan", message: "Am I your fire? Your one desire?"},
                {id: 9, user_id: 1, name: "Ash", message: "No, don't call here no more creep!"},
            ]
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Convo with Ronan</Text>
                <View style={styles.wrapper}>
                    <FlatList 
                        data={this.state.conversation}
                        renderItem={({item}) => (
                            <View style={[styles.message, item.user_id === 1 ? styles.from_me : styles.other]}>
                                <Text style={styles.author}>{item.name}</Text>
                                <Text style={styles.content}>{item.message}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },  
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'steelblue',
        flex: 1,
        padding: 5,
        backgroundColor: 'skyblue',
        marginBottom: 10
    },
    wrapper: {
        flex: 19,
    },
    message: {
        borderRadius: 15,
        padding: 5,
        margin: 5,
        width: '40%' 
    },
    author: {
        fontWeight: 'bold',
        color: '#333'
    },
    content: {
        fontStyle: 'italic',
        color: '#ffffff'
    },
    other: {
        alignSelf: 'flex-end',
        backgroundColor: 'limegreen', 
    },
    from_me: {
        backgroundColor: 'skyblue'
    }
})