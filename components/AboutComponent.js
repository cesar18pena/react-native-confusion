import React, { Component } from 'react';
import { FlatList, ScrollView, Text, View} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
  return {
    leaders: state.leaders
  }
}

 const History = () => {
    return (
      <Card title='Our History'>
        <View>
          <Text>
            Started in 2010, Ristorante con Fusion quickly established itself
            as a culinary icon par excellence in Hong Kong.
            With its unique brand of world fusion cuisine that can be found nowhere else,
            it enjoys patronage from the A-list clientele in Hong Kong.
            Featuring four of the best three-star Michelin chefs in the world,
            you never know what will arrive on your plate the next time you visit us. {"\n"}
          </Text>
        </View>
        <View>
          <Text>
            The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO,
            Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
          </Text>
        </View>
      </Card>
    );
};

class AboutUs extends Component {
    
     static navigationOptions = {
        title: 'About Us'
    };

    render() {
      const renderLeaderItem = ({ item, index }) => {
        return (
          <ListItem
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            leftAvatar={{ source: {
              uri: baseUrl + item.image
            }}}
          />
        );
      };

      if (this.props.leaders.isLoading) {
        return(
          <ScrollView>
            <History />
            <Card
              title='Corporate Leadership'>
              <Loading />
            </Card>
          </ScrollView>
        );
      }
      else if (this.props.leaders.errMess) {
        return(
          <ScrollView>
            <History />
            <Card
              title='Corporate Leadership'>
              <Text>{this.props.leaders.errMess}</Text>
            </Card>
          </ScrollView>
        );
      }
      else {
        return(
          <ScrollView>
            <History />
            <Card
              title='Corporate Leadership'>
            <FlatList 
              data={this.props.leaders.leaders}
              renderItem={renderLeaderItem}
              keyExtractor={item => item.id.toString()}
            />
            </Card>
          </ScrollView>
        );
      }
  }
}

export default connect(mapStateToProps)(AboutUs);
