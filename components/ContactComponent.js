import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

 class ContactUs extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    };
    
    render() {
      return (
        <Animatable.View 
          animation="fadeInDown" 
          duration={2000} 
          delay={1000}>  
        <Card title='Contact Information'>
          <Text>
            121, Clear Water Bay Road {"\n"}
          </Text>
          <Text>
            Clear Water Bay, Kowloon {"\n"}
          </Text>
          <Text>
            HONG KONG {"\n"}
          </Text>
          <Text>
            Tel: +852 1234 5678 {"\n"}
          </Text>
          <Text>
            Fax: +852 8765 4321 {"\n"}
          </Text>
          <Text>
            Email:confusion@food.net
          </Text>
        </Card>
        </Animatable.View>
      );
    }
}

 export default ContactUs; 
