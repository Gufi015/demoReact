
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAdd = placeName => {
    this.setState(prevState => {
      return {
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

  placeDelete = () => {
    this.setState(prevState => {
        return {
          places: prevState.places.filter(place => {
            return place.key !== prevState.selectedPlace.key;
          }),
          selectedPlace: null
        };
    });
  };

  modalClose = () => {
    this.setState({
      selectedPlace: null
    });
  };

  placeSelected = key =>{
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };


  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDelete}
          onModalClosed={this.modalClose} />
        <PlaceInput onPlaceAdded={this.placeAdd} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelected}
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
