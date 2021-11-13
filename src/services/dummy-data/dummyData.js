import moment from "moment";
import 'moment/locale/en-sg'
moment.locale('en-sg')
export function getData(value) {
    if (value == 'todaySchedule') {
        let data = {
            location: 'Mediterania Garden Residence',
            startTime: '08:00',
            endTime: '17:00',
            clockIn: '07:50',
            clockOut: ''
        }
        return data

    }
    if (value == 'nextSchedule') {
        let data = []
        for (let i = 1; i < 10; i++) {
            data.push(
                {
                    day: moment().add(i, 'days').format('dddd'),
                    date: moment().add(i, 'days').format('DD MMM'),
                    location: 'Mediterania Garden Residence',
                    startTime: '08:00',
                    endTime: '17:00'
                }
            )
        }
        return data
    }
}