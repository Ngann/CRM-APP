import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

class AddPerson extends Component {
    static navigationOptions ={
        tabBarIcon: ({tintColor}) => (
            <Icon name={'plus'} size={50} color={tintColor}/>
        )
    }
    render() {
        return (
            <View >
                <Text>Add person screen</Text>
            </View>
        )
    }
}

export default connect(null, actions)(AddPerson);
