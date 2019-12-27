import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Platform,
    Image
} from 'react-native'
import styles from './style';
import Ridedetails from '../../../../components/Ridecar/index';
import Footerdetails from '../../../../components/Ridefooter/index';

export default class Extraseats extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView>
                    <Ridedetails
                        carimage={require('../../../../images/car.jpg')}
                        cartype='Lyft'
                        availablepersons='6'
                        price='US $ 19.01'
                        time='8:58 PM'
                    />
                    <Footerdetails
                        iconname1='credit-card-alt'
                        textname1='Add payment'
                        iconname2='calendar'
                        textname2='Schedule'
                        navigation={() => this.props.navigation.navigate('Addpayments')}
                        navigation1={() => this.props.navigation.navigate('Scheduleiride')}
                    />
                    <View style={styles.buttoncontainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Rideconfirm')}>
                            <Text style={styles.btntxt}>Request Lyft XL</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}