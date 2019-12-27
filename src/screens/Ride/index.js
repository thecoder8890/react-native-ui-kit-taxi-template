import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import styles from './style';
import { MapView } from 'expo';
import {
    Container,
    Tab,
    Tabs,
} from 'native-base';
import Economy from './Tabs/Economy/index';
import ExtraSeats from './Tabs/Extraseats/index';
import Luxury from './Tabs/Luxury/index';
import Icon from "react-native-vector-icons/FontAwesome";

export default class Ride extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 23.0321,
                            longitude: 72.5252,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                    <View style={styles.menubuttoncontainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Homescreen')}>
                            <View style={styles.menucontainer}>
                                <Image source={require('../../images/left-arrow.png')} style={{ width: 15, height: 15, }} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.searchBox}>
                        <View style={styles.searchBoxview}>
                            <View style={styles.searchBoxinnerview}>
                                <TouchableOpacity style={styles.pickuplocation}>
                                    <View>
                                        <Text style={styles.locationtxt}>7th Ave & 221b </Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.directionarrow}>
                                    <Icon size={15} name='arrow-right' style={{ color: '#A0A0A0' }} />
                                </View>
                                <TouchableOpacity style={styles.droplocation}>
                                    <View>
                                        <Text style={styles.locationtxt}>New York Public Library-Steph</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
                <Container>
                    <Tabs
                        tabBarUnderlineStyle={{ backgroundColor: 'white' }}
                    >
                        <Tab
                            activeTabStyle={{ backgroundColor: 'white' }}
                            heading="ECONOMY"
                            activeTextStyle={{ color: 'black', fontSize: 12 }}
                            tabStyle={{ backgroundColor: 'white' }}
                            textStyle={{ color: '#A0A0A0', fontSize: 12 }}
                        >
                            <Economy navigation={this.props.navigation} navigation1={this.props.navigation1} />
                        </Tab>
                        <Tab
                            activeTabStyle={{ backgroundColor: 'white' }}
                            heading="LUXURY"
                            tabStyle={{ backgroundColor: 'white' }}
                            textStyle={{ color: '#A0A0A0', fontSize: 12 }}
                            activeTextStyle={{ color: 'black', fontSize: 12 }}
                        >
                            <Luxury navigation={this.props.navigation} navigation1={this.props.navigation1} />
                        </Tab>
                        <Tab
                            activeTabStyle={{ backgroundColor: 'white' }}
                            heading="EXTRA SEATS"
                            tabStyle={{ backgroundColor: 'white' }}
                            textStyle={{ color: '#A0A0A0', fontSize: 12 }}
                            activeTextStyle={{ color: 'black', fontSize: 12 }}
                        >
                            <ExtraSeats navigation={this.props.navigation} navigation1={this.props.navigation1} />
                        </Tab>
                    </Tabs>
                </Container>
            </View>
        );
    }
}
