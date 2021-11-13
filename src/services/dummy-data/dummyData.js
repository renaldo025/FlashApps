import moment from "moment";
import 'moment/locale/en-sg'
moment.locale('en-sg')
export function getData(value, length) {
    if (value == 'todaySchedule') {
        let data = {
            location: 'Mediterania Garden Residence',
            detailLocation: 'Main Lobby, Apartment Mediterania Garden Residence 1 ( Bougenville Tanjung Duren Raya )',
            startTime: '08:00',
            endTime: '17:00',
            clockIn: '07:50',
            clockOut: ''
        }
        return data

    }
    if (value == 'nextSchedule' || value == 'upcomingSchedule') {
        let data = []
        let start = value === 'nextSchedule' ? 1 : 0
        for (let i = start; i <= length; i++) {
            data.push(
                {
                    isShowMonth: moment().add(i, 'days').format('DD') === '01' || moment().format('DD MM') === moment().add(i, 'days').format('DD MM')  ? true : false ,
                    month: moment().add(i, 'days').format('DD MM YYYY') === moment().endOf('month').format('DD MM YYYY') ? moment().format('MMMM YYYY') : moment().add(i, 'days').format('MMMM YYYY'),
                    day: start === 1 ? moment().add(i, 'days').format('dddd') : moment().add(i, 'days').format('ddd').toUpperCase(),
                    date: start === 1 ? moment().add(i, 'days').format('DD MMM') : moment().add(i, 'days').format('DD'),
                    location: 'Mediterania Garden Residence',
                    startTime: '08:00',
                    endTime: '17:00',
                    isToday: moment().add(i, 'days').format('DD MMM') === moment().format('DD MMM') ? true : false
                }
            )
        }
        return data
    }
}