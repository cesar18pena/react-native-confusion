import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { withNavigation } from 'react-navigation';

class Menu extends Component {

  static navigationOptions = {
    title: 'Menu'
  };

  render() {
    const { navigate } = this.props.navigation;

    const renderMenuItem = ({ item, index}) => {
      return (
        <Tile
          key={index}
          title={item.name}
          caption={item.description}
          featured
          onPress={() => navigate('DishDetail', { dishId: item.id })}
          imageSrc={{ uri: baseUrl + item.image}}
        />
      )
    }

    if (this.props.dishes.isLoading) {
      return(
        <Loading />
      );
    }

    else if (this.props.dishes.errMess) {
      return(
        <View>            
          <Text>{this.props.dishes.errMess}</Text>
        </View>            
      );
    }

    else {
      return (
        <FlatList
          data={this.props.dishes.dishes}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id.toString()}
        />
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.dishes
  }
}

export default withNavigation(connect(mapStateToProps)(Menu));
