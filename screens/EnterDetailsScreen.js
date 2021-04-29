import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from "react-native";
import firebase from "firebase";
import db from "../config";
import { FloatingLabelInput } from "react-native-floating-label-input";
export default class EnterDetailsScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      location: "",
      image: "",
      hobbies: "",
    };
  }
  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
      
          <Image
            style={styles.bgImage}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCTNyYX4mgOZRNGHOdUkkKerGBbFtJ0Nm-pbmndK80uQZLPeBkqfsjZyIfOb5w0hUN8s&usqp=CAU",
            }}
          />
        
         <View style={styles.inputContainer}>
            <FloatingLabelInput
        
              label="Name"
              value={this.state.name}
             // mask="99/99/9999"
              keyboardType="default"
              onChangeText={(value) => this.setState({ name: value })}
            />
            </View>
            <View style={styles.inputContainer}>
            <FloatingLabelInput
            //  style={[styles.container,{marginBottom:10}]}
              label="Age"
              value={this.state.age}
              mask="00"
              keyboardType="numeric"
              onChangeText={(value) => this.setState({ age: value })}
            />
          </View>
          <View style={styles.inputContainer}>
            <FloatingLabelInput
        
              label="Location"
              value={this.state.location}
             // mask="99/99/9999"
              keyboardType="default"
              onChangeText={(value) => this.setState({ location: value })}
            />
            </View>
      </ScrollView>
    );
  }
}

const resizeMode = "center";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",

    //  backgroundColor: "#DCDCDC",
  },
  inputContainer: {
     
   // borderBottomColor: "#F5FCFF",
    backgroundColor: "pink",
   // borderRadius: 30,
  //  borderBottomWidth: 1,
    width: "100%",
    height: 45,
    marginBottom: 20,
    flexDirection: "column",
    alignItems: "center",

   // shadowColor: "#808080",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

  //  elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  btnForgotPassword: {
    height: 25,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 10,
    width: 300,
    backgroundColor: "transparent",
  },
  loginButton: {
    backgroundColor: "purple",
    marginTop: 10,
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: "white",
    fontSize: 20,
  },
  bgImage: {
    flex: 1,
    //resizeMode,

    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: "white",
  },
});
