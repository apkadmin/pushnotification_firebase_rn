import { AppRegistry,Text,View,Button } from 'react-native';
// import App from './App';
import React from 'react';
import firebase from 'react-native-firebase';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            token:null
        }
    }
    async componentWillMount(){
        const fcmToken = await firebase.messaging().getToken();
if (fcmToken) {
  this.setState({token:fcmToken});
} else {
  console.log("error");
}
    }

    onClick(){
//         console.log("click");
        const message = new firebase.messaging.RemoteMessage()
  .setMessageId("0")
  .setTo('435626143294@gcm.googleapis.com')
  .setData({

   key: "hello",
  })
  .setTtl(0)
  
  ;
// // Send the message
firebase.messaging().sendMessage(message);
    }


    render(){
        return(<View><Button title="click" onPress={()=>{this.onClick()}}/><Text>hello</Text></View>)
    }
}
AppRegistry.registerComponent('mvapp', () => App);
