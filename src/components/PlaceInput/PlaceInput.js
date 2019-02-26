import React, {Component} from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";


class PlaceInput extends Component{
  state = {
    placeName: ""
  };
  componentDidMount() {

  }

  placeNameChange = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmit = () => {
    if(this.state.placeName.trim() === "") {
      return alert('Agregar un lugar!');
    }
    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return(
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agrega un lugar!"
          value={this.state.placeName}
          onChangeText={this.placeNameChange}
          style={styles.placeInput} />
        <Button
          title="ADD"
          style={styles.placeButton}
          onPress={this.placeSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
})
export default PlaceInput;
