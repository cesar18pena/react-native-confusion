import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

 class ContactUs extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    };

    sendMail() {
      MailComposer.composeAsync({
          recipients: ['confusion@food.net'],
          subject: 'Enquiry',
          body: 'To whom it may concern:'
      });
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
          <Button
            title="Send Email"
            buttonStyle={{backgroundColor: "#512DA8"}}
            icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
            onPress={this.sendMail}
          />
        </Card>
        </Animatable.View>
      );
    }
}

 export default ContactUs; 
