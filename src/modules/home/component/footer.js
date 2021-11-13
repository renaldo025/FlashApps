import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles/style'
import CONSTANT from '../../../constant/constant'

function Footer() {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#5bc4ba' }]}>
                <Text style={styles.buttonText}>{CONSTANT.CLOCK_IN}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{CONSTANT.CLOCK_IN}</Text>
            </TouchableOpacity>
        </View>

    );
}

export default Footer