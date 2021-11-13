import { StyleSheet } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        marginTop: height('3%'),
        marginBottom: height('3%'),
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingHorizontal: 10
    },
    scheduleContainer: {
        flexDirection: 'row',
        width: width('100%'),
        alignSelf: 'center',
        paddingHorizontal: 10,
        marginBottom: 15
    },
    scheduleBox: {
        width: width('78%'),
        backgroundColor: 'rgb(244,244,244)',
        paddingHorizontal: 13,
        paddingVertical: 8,
        borderRadius: 8,
    },
    noScheduleBox: {
        width: width('78%'),
        padding: 20,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'rgba(125,125,125,0.3)',
        borderStyle: 'dashed',
    },
    dateBox: {
        alignItems: 'center',
        marginTop: 6,
        paddingRight: 10,
        width: width('15%')
    },
    dateText: {
        fontSize: 18,
        color: 'grey'
    },
    textBold: {
        color: 'black',
        fontWeight: 'bold'
    },
    locationText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    timeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7
    },
    timeBoxText: {
        marginLeft: 8,
        color: 'black',
        fontSize: 15,
        bottom: 1
    },
    todayBox: {
        width: width('22.5%'),
        padding: 5,
        alignItems: 'center',
        borderRadius: 6,
        marginLeft: 10
    },
    todayBoxTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white'
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
        elevation: 5,
        marginLeft: 1
    },

})

export default styles