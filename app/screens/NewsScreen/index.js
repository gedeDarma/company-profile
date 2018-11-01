import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title, Thumbnail, Card, CardItem } from 'native-base';

class NewsScreen extends React.Component {
    render() {
        return (
            <Container>
                <Card>
                    <CardItem>
                    <Left>
                        <Thumbnail source={require('../../../assets/banner.png')} />
                        <Body>
                        <Text>NativeBase</Text>
                        <Text note>GeekyAnts</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem cardBody>
                    <Image source={require('../../../assets/banner.png')} style={{height: 250, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                    <Left>
                        <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                    </CardItem>
                </Card> 
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

export default NewsScreen;