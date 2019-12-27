import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './style'

export default class Savelocations extends Component {

    render() {
        return (
            <TouchableOpacity>
                <View style={styles.locationcontainer}>
                    <View style={styles.locationimage}>
                        <Image source={this.props.icon} style={styles.image} />
                    </View>
                    <View style={styles.locationname}>
                        <Text style={styles.locationtxt}>{this.props.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
