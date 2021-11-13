import { StyleSheet } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'column',
        marginTop: 30,
        marginBottom: 10
    },
    titleSection: {
        flexDirection: 'row',
        width: width('100%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    leftTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    scheduleBox: {
        width: width('90%'),
        backgroundColor: 'rgb(244,244,244)',
        borderRadius: 8,
        paddingHorizontal: 9,
        paddingVertical: 8,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    imageContainer: {
        marginRight: 10,
        width: width('20%')
    },
    addressBox: {
        width: width('62%'),
        flexDirection: 'column'
    },
    storeImage: {
        width: 70,
        height: 70,
        borderRadius: 10
    },
    timeBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeBoxText: {
        marginLeft: 8,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        bottom: 1,
        marginLeft: 10
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        marginRight: 10,
        marginBottom: 5,
        marginLeft: 8,
        elevation: 2,
    },
    locationText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    detailLocation: {
        fontSize: 14,
        color: 'grey',
        marginTop: 13,
        marginBottom: 15
    },
    buttonMaps: {
        borderWidth: 1,
        borderColor: '#fa275a',
        width: 100,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    headerBox: {
        backgroundColor: 'rgb(255,222,0)',
        height: 100,
        paddingTop: 55,
        paddingLeft: 35,
        flexDirection: 'row'
    },
    buttonRight: {
        height: 20,
        right: 20
    },
    secondContainer: {
        width: width('70%'),
        alignItems: 'center',
    },
    dateText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        bottom: 3
    }
})

export default styles