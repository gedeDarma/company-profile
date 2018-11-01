import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title, Thumbnail } from 'native-base';

class ContactScreen extends React.Component {
    render() {
        return (
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Contact Screen !</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ContactScreen;