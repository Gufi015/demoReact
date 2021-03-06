
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import { addPlace, deletePlace, selectPlace, deselectPlace} from "./src/store/actions/index";

class App extends Component {

  placeAdd = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDelete = () => {
    this.props.onDeletePlace();
  };

  modalClose = () => {
    this.props.onDeselectPlace();
  };

  placeSelected = key =>{
    this.props.onSelectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDelete}
          onModalClosed={this.modalClose} />
        <PlaceInput onPlaceAdded={this.placeAdd} />
        <PlaceList
          places={this.props.places}
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


const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
