import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title, Thumbnail } from 'native-base';


import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ServiceScreen from '../screens/ServiceScreen';
import NewsScreen from '../screens/NewsScreen';
import ContactScreen from '../screens/ContactScreen';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonIcons from 'react-native-vector-icons/Ionicons' ;


const HomeTabNav = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => {
                return (
                    <IconMaterialIcons
                        name='home'
                        size={26}
                        color={tintColor}
                    />
                )
            }
        })
    },
    About: {
        screen: AboutScreen,
        navigationOptions: () => ({
            title: 'About Us',
            tabBarIcon: ({ tintColor }) => {
                return (
                    <IconIonIcons
                        name='ios-contacts-outline'
                        size={26}
                        color={tintColor}
                    />
                )
            }
        })
    },
    Service: {
        screen: ServiceScreen,
        navigationOptions: () => ({
            title: 'Our Service',
            tabBarIcon: ({ tintColor }) => {
                return (
                    <IconIonIcons
                        name='ios-contacts-outline'
                        size={26}
                        color={tintColor}
                    />
                )
            }
        })
    }
});

const HomeNavigator = createStackNavigator({
    Home: {
        screen: HomeTabNav,
        navigationOptions:(props) => ({
            title: 'Home',
            headerLeft:
            <View>
                <Button transparent onPress={() => props.navigation.openDrawer()}>
                    <Icon name='ios-menu' />
                </Button>
            </View>,
            headerRight: 
            <View>
            <Button transparent>
                        <Icon name='search' />
                        </Button>
            </View>
        })
    }
});

const NewsNavigator = createStackNavigator({
    News: {
        screen: NewsScreen,
        navigationOptions: (props) => ({
            title: 'News',
            headerLeft:
            <View>
                <Button transparent onPress={() => props.navigation.openDrawer()}>
                    <Icon name='ios-menu' />
                </Button>
            </View>,
            headerRight: 
            <View>
            <Button transparent>
                        <Icon name='search' />
                        </Button>
            </View>
        })
    }
});

const ContactNavigator = createStackNavigator({
    Contact: {
        screen: ContactScreen,
        navigationOptions: (props) => ({
            title: 'Contact Us',
            headerLeft:
            <View>
                <Button transparent onPress={() => props.navigation.openDrawer()}>
                    <Icon name='ios-menu' />
                </Button>
            </View>,
            headerRight: 
            <View>
            <Button transparent>
                        <Icon name='search' />
                        </Button>
            </View>
        })
    }
});

const CustomDrawerContentComponent = (props) =>(
    <Container>
        <Header style={{ height:120 }}>
            <Body>
            <Thumbnail style={StyleSheet.drawerImage} source={require('../../assets/banner.png')} />
                
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
)

styles = StyleSheet.create({
    drawerImage:{
        height:350,
        borderRadius:75        
    }
});

const DrawerNavigator = createDrawerNavigator({
    Menu_Home: {
        screen: HomeNavigator,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: () => (
              <IconMaterialIcons name={'home'} size={22} />
              )
          },
    },
    Menu_News: {
        screen: NewsNavigator,
        navigationOptions: {
            drawerLabel: 'News',
            drawerIcon: () => (
              <IconIonIcons name={'ios-paper'} size={22} />
              )
        },
    },
    Menu_Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            drawerLabel: 'Contact Us',
            drawerIcon: () => (
              <IconIonIcons name={'ios-paper'} size={22} />
              )
        },
    },
},{
    initialRouteName:'Menu_Home',
    contentComponent: CustomDrawerContentComponent
    
});

export default DrawerNavigator;