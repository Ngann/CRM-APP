import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleItem from './PeopleItem';
import PeopleDetail from './PeopleDetail';
import {loadIntialContacts} from '../actions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    }
});

//Flatlist is a react native that takes a prop call data, and inside data we can pass props.people.
// To maps it to people, then renders the items, and this will show as many items.
// Shows all the people and all items for the people.
class PeopleList extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'user'} size={50} color={tintColor} />
        )
    }

    componentWillMount(){
        this.props.loadIntialContacts();
    }

    renderInitialView() {
        if (this.props.detailView === true) {
            return (
                <PeopleDetail />
            )
        } else {
            return (
                <FlatList
                    data={this.props.people}
                    renderItem={({item}) => <PeopleItem people={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderInitialView()}
            </View>
        )
    }
}
const mapStateToProps = state => {
    return { 
        people: state.people,
        detailView: state.detailView, 
    }
}

export default connect(mapStateToProps, {loadIntialContacts})(PeopleList);

//This above function uses connect to mapStateToProps and running the function to People List
//Key extractor is a prop inside of the flatlist component to.. 