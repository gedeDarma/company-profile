import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title, Thumbnail } from 'native-base';

class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <Text>This is screen Home</Text>
                    </View> 
                </View>
            </Container>            
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

export default HomeScreen;