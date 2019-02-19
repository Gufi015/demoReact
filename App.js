
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
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        })
      };
    });
  };

  placeDelete = key =>{
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
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
