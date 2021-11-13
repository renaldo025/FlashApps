import { StyleSheet } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    nextHeaderContainer: {
        flexDirection: 'column',
        marginTop: 20,
    },
    titleSection: {
        flexDirection: 'row',
        width: width('100%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    scrollView: {
        paddingLeft: 15,
    },
    leftTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    rightTitle: {
        fontSize: 16,
        color: 'red'
    },
    scheduleBox: {
        width: width('80%'),
        backgroundColor: 'rgb(244,244,244)',
        borderRadius: 8,
        paddingHorizontal: 9,
        paddingVertical: 8,
        alignSelf: 'center',
        marginRight: 10,
        marginBottom: 5,
        marginLeft: 3,

    },
    insideBoxTitle: {
        fontWeight: '500',
        fontSize: 18,
        color: 'black',
        marginBottom: 3
    },
    timeBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeBoxText: {
        marginLeft: 8,
        color: 'black',
        fontSize: 15,
        bottom: 1
    },
    dayText: {
        fontSize: 16,
        marginBottom: 2,
        color: 'grey'
    },
    dateText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
    },

    todayHeaderContainer: {
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
    inOutContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    inOutbox: {
        marginBottom: 10,
    },
    clockInOut: {
        width: width('22.5%'),
        padding: 5,
        alignItems: 'center',
        borderRadius: 6
    },
    clockInOutTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white'
    },
    clockInOutTime: {
        fontSize: 25,
        fontWeight: '400',
        color: 'black',
        marginTop: 3
    },

    mainContainer: {
        width: width('100%'),
        backgroundColor: 'rgb(255,222,0)',
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        paddingBottom: 40
    },

    headerContainer: {
        marginTop: height('4%'),
        marginBottom: height('1.5%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    secondContainer: {
        flexDirection: 'column',
    },

    titleText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        marginTop: height('3.5%'),
        textAlign: 'center'
    },

    hours: {
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },

    date: {
        fontSize: 12.5,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },

    profileImg: {
        width: width('13%'),
        height: height('10%'),
    },

    bellIcon: {
        width: width('7%'),
        height: height('10%')
    },

    iconContainer: {
        width: width('20%'),
    },

    titleContainer: {
        width: width('60%'),
    },

    boxShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 4,
    },

    footerContainer: {
        marginTop: height('3%'),
        marginBottom: height('3%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    buttonContainer: {
        width: width('40%'),
        height: height('6.5%'),
        backgroundColor: 'rgba(125,125,125,0.7)',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    
    splashPicture: {
        width: width('100%'),
        height: height('100%')
    },
})

export default styles