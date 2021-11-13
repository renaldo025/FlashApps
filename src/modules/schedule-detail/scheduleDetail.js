import React from 'react';
import { View } from 'react-native';
import DetailItem from './component/detail-items'
import styles from './styles/style'

function ScheduleDetail() {
    return (
        <View style={styles.container} >
            <DetailItem />
        </View >
    )
}

export default ScheduleDetail