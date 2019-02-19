
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";


export default class App extends Component {
  state = {
    places: []
  };

  placeAdd = placeName => {
    this.setState(prevState => {
      return{
        places: prevState.places.concat(placeName)
      };
    });
  };

  placeDelete = index =>{
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
        })
      };
    });
  };


  render() {
    return(
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAdd} />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDelete}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});