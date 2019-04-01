import { createBottomTabNavigator, createAppContainer }from 'react-navigation';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const TabNavigator = createBottomTabNavigator(
    {
        People: PeopleList,
        Add: AddPerson,
        Company: CompanyList,
    },
    {
        initialRouteName: 'People',
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#80cbc4',
            showLabel: false,
            style: {
                backgroundColor: '#26a69a'
            }
        },
    }
);

export default createAppContainer(TabNavigator);
