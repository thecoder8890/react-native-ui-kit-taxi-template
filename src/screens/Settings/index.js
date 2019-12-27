import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Platform
} from 'react-native';
import styles from './style'
import Drawermenu from '../../components/Drawermenu/index'
import ToggleSwitch from 'toggle-switch-react-native'
import { Drawer } from 'native-base'
import SideBar from '../Drawer/index';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnDefaultToggleSwitch: false,
        };
    }
    openDrawer() {
        this.drawer._root.open()
    };
    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigation={this.props.navigation} />}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerimagecontainer}>
                            <TouchableOpacity onPress={() => this.openDrawer()}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../images/menu.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.titlecontainer}>
                            <View>
                                <Text style={styles.titletxt}>Settings</Text>
                            </View>
                        </View>
                    </View>

                    <ScrollView>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: 10 }}>
                                <View style={{ flex: 1.5, justifyContent: 'center', marginBottom: 10 }}>
                                    <Image style={{ width: Platform.OS === 'ios' ? 40 : 30, height: Platform.OS === 'ios' ? 40 : 30, borderRadius: Platform.OS === 'ios' ? 20 : 60, }} source={require('../../images/sherlock.jpg')} />
                                </View>
                                <View style={{ flex: 8.5, justifyContent: 'center', marginBottom: 10, paddingLeft: 6 }}>
                                    <Text style={{ fontSize: 15, fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto' }}>Sherlock</Text>
                                </View>
                            </View>

                            <View style={{ marginLeft: 5 }}>
                                <Drawermenu iconname='envelope' titlename='sherlock221b@gmail.com' />
                                <Drawermenu iconname='phone' titlename='+91 1234567890' />
                                <Drawermenu iconname='building' titlename='Business profile' />
                                <Text style={{ fontSize: 10, color: '#A0A0A0', marginLeft: 62, bottom: 12 }}>Create a Business profile</Text>
                            </View>
                            <View style={{ borderTopWidth: 0.5, borderTopColor: '#A0A0A0', marginTop: 10 }}></View>

                            <View style={{ marginLeft: 5, marginTop: 6 }}>
                                <Drawermenu iconname='car' titlename='Drive with Lyft' />
                            </View>
                            <View style={{ borderTopWidth: 0.5, borderTopColor: '#A0A0A0', marginTop: 10 }}></View>

                            <View style={{ marginLeft: 5, marginTop: 6 }}>
                                <Drawermenu iconname='snowflake-o' titlename='Services' />
                            </View>
                            <View style={{ borderTopWidth: 0.5, borderTopColor: '#A0A0A0', marginTop: 10 }}></View>

                            <View style={{ marginLeft: 5, marginTop: 6 }}>
                                <Drawermenu iconname='search' titlename='Contacts' />
                                <View style={{ position: 'absolute', right: 0, top: 15, marginRight: 15 }}>
                                    <ToggleSwitch
                                        size='small'
                                        onColor='#0080FF'
                                        isOn={this.state.isOnDefaultToggleSwitch}
                                        onToggle={isOnDefaultToggleSwitch => {
                                            this.setState({ isOnDefaultToggleSwitch });
                                        }}
                                    />
                                </View>
                            </View>
                            <Text style={{ fontSize: 12, color: '#A0A0A0', marginHorizontal: 68, bottom: 12, fontFamily: 'proximanova-regular' }}>
                                Lyft can recommend friends that haven't used Lyft if you sync your contacts. see Lyft's terms of services for more information
                        </Text>
                            <View style={{ borderTopWidth: 0.5, borderTopColor: '#A0A0A0', marginTop: 10 }}></View>

                            <View style={{ marginLeft: 5, marginTop: 6 }}>
                                <Drawermenu iconname='bell' titlename='Notification Preferences' />
                            </View>
                            <View style={{ borderTopWidth: 0.5, borderTopColor: '#A0A0A0', marginTop: 10 }}></View>

                            <View style={{ marginLeft: 6 }}>
                                <Drawermenu titlename='Legal' />
                            </View>
                            <View style={{ borderTopWidth: 0.5, borderTopColor: '#A0A0A0', marginTop: 10 }}></View>

                            <View style={{ marginLeft: 5, marginTop: 6 }}>
                                <Drawermenu iconname='sign-out' titlename='Log Out' navigation={() => this.props.navigation.navigate('Login')} />
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </Drawer>
        );
    }
}
