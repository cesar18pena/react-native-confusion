import React, { Component } from 'react';
import { View, Platform, Image, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import Contact from './ContactComponent';
import AboutUs from './AboutComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';

const MenuNavigator = createStackNavigator({
  Menu: { 
    screen: Menu,
    navigationOptions: ({navigation}) => ({
      headerLeft: <Icon 
        name='menu' 
        size={24} 
        color='white' 
        onPress={() => navigation.toggleDrawer()} />
    })
  },
  DishDetail: { screen: DishDetail }
}, {
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#512DA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff'
    }
  }
});

const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff",
    headerLeft: <Icon 
        name='menu' 
        size={24} 
        color='white' 
        onPress={() => navigation.toggleDrawer()} />  
  })
});

const ContactNavigator = createStackNavigator({
  Contact: { screen: Contact }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff",
    headerLeft: <Icon 
        name='menu' 
        size={24} 
        color='white' 
        onPress={() => navigation.toggleDrawer()} />    
  })
});

const AboutUsNavigator = createStackNavigator({
  AboutUs: { screen: AboutUs}
},
{
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#512DA8'
    },
    headerTitleStyle: {
      color: '#fff'
    },
    headerTintColor: '#fff',
    headerLeft: <Icon 
        name='menu' 
        size={24} 
        color='white' 
        onPress={() => navigation.toggleDrawer()} />  
  })
});

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
        <View style={{flex:1}}>
        <Image source={require('./images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Icon 
            name='home'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    About:
      {
        screen: AboutUsNavigator,
        navigationOptions: {
          title: 'About Us',
          drawerLabel: 'About Us',
          drawerIcon: ({ tintColor }) => (
            <Icon 
              name='info-circle'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }
      },
    Menu: 
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu',
          drawerIcon: ({ tintColor }) => (
            <Icon 
              name='list'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }, 
      },
    Contact:
      {
        screen: ContactNavigator,
        navigationOptions: {
          title: 'Contact Us',
          drawerLabel: 'Contact Us',
          drawerIcon: ({ tintColor }) => (
            <Icon 
              name='address-card'
              type='font-awesome'
              size={22}
              color={tintColor}
            />
          )
        }
      }
}, {
  drawerBackgroundColor: '#D1C4E9',
  contentComponent: CustomDrawerContentComponent
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    alignItems: 'center',
    backgroundColor: '#512DA8',
    flex: 1,
    flexDirection: 'row',
    height: 140,
    justifyContent: 'center'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    height: 60,
    margin: 10,
    width: 80
  }
});

class Main extends Component {
 
  render() {
    return (
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>        
        <MainNavigator />
      </View>
    )
  }
}

export default Main;
