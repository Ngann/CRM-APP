import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/EvilIcons';
import SimpleIcon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { getTheme } from 'react-native-material-kit';

const theme = getTheme();

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
class PeopleDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image
                        source={ require('../image/background.jpg')}
                        style={[theme.cardImageStyle, styles.image]}
                    />
                    <EvilIcon name={ 'user'} size={100} style={styles.icon} />
                    <SimpleIcon name={'close'} size={30} style={style.closeIcon}
                    onPress={() => this.props.noneSelected()}/>
                    <Text style={[theme.cardTitleStyle, styles.title]}>{this.props.person.firstName}{this.props.person.lastName}</Text>
                    <Text style={[theme.cardTitleStyle, styles.title]}>from {this.props.person.company}</Text>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'phone'} size={40} style={style.textIcons}/>
                        <Text style={theme.cardContentStyle}>{this.props.person.phone}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'email'} size={40} style={style.textIcons}/>
                        <Text style={theme.cardContentStyle}>{this.props.person.email}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'assignment'} size={40} style={style.textIcons}/>
                        <Text style={theme.cardContentStyle}>{this.props.person.project}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'mode-edit'} size={40} style={style.textIcons}/>
                        <Text style={theme.cardContentStyle}>{this.props.person.notes}</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image
                                source={require('../images/call@2x.png.png')}
                                style={styles.actionImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../images/call@2x.png.png')}
                                style={styles.actionImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../images/call@2x.png.png')}
                                style={styles.actionImage}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return { 
        people: state.people,
        personSelected: state.personSelected
    }
}

export default connect(mapStateToProps)(PeopleDetail);

//This above function uses connect to mapStateToProps and running the function to People List