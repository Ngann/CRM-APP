import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKTextField, MKColor, MKButton} from 'react-native-material-kit';
import * as actions from '../actions';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
    },
    addButton: {
        marginTop: 20,
    },
});

const AddButton = MKButton.coloredButton()
    .withText('ADD')
    .build();

class AddPerson extends Component {
    static navigationOptions ={
        tabBarIcon: ({tintColor}) => (
            <Icon name={'plus'} size={50} color={tintColor}/>
        )
    }

    onAddPress(){
        const  {firstName, lastName, phone,email, company, project, notes} = this.props;
        this.props.createNewContact(firstName,lastName,phone,email, company, project, notes)
        this.props.navigation.navigate('PeopleList')
        }
    render() {
        return (
           <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text>Add a new contact</Text>
                    <MKTextField
                        textInputStyle= {styles.feildStyles}
                        placeholder={'First name...'}
                        tintColor={MKColor.Teal}
                        value = {this.props.firstName}
                        onChangeText={value => this.props.formUpdate({ prop: 'firstName', value})}
                    />
                    <MKTextField
                        textInputStyle= {styles.feildStyles}
                        placeholder={'Last name...'}
                        tintColor={MKColor.Teal}
                        value = {this.props.lastName}
                        onChangeText={value => this.props.formUpdate({ prop: 'lastName', value})}
                    />
                    <MKTextField
                        textInputStyle= {styles.feildStyles}
                        placeholder={'Phone number'}
                        tintColor={MKColor.Teal}
                        value = {this.props.phone}
                        onChangeText={value => this.props.formUpdate({ prop: 'phone', value})}
                    />
                    <MKTextField
                        textInputStyle= {styles.feildStyles}
                        placeholder={'Email...'}
                        tintColor={MKColor.Teal}
                        value = {this.props.email}
                        onChangeText={value => this.props.formUpdate({ prop: 'email', value})}
                    />
                    <MKTextField
                        textInputStyle= {styles.feildStyles}
                        placeholder={'Company...'}
                        tintColor={MKColor.Teal}
                        value = {this.props.company}
                        onChangeText={value => this.props.formUpdate({ prop: 'company', value})}
                    />
                    <MKTextField
                        textInputStyle= {styles.feildStyles}
                        placeholder={'Project...'}
                        tintColor={MKColor.Teal}
                        value = {this.props.project}
                        onChangeText={value => this.props.formUpdate({ prop: 'project', value})}
                    />
                    <MKTextField
                        textInputStyle= {styles.feildStyles}
                        placeholder={'Notes...'}
                        tintColor={MKColor.Teal}
                        value = {this.props.notes}
                        onChangeText={value => this.props.formUpdate({ prop: 'notes', value})}
                    />
                    <View style={styles.addButton}>
                        <AddButton/>
                    </View>
                </View>
           </ScrollView>
        )
    }
}

export default connect(null, actions)(AddPerson);
