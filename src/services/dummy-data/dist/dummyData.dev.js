"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/en-sg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_moment["default"].locale('en-sg');

function getData(value, length) {
  if (value == 'todaySchedule') {
    var data = {
      location: 'Mediterania Garden Residence',
      detailLocation: 'Main Lobby, Apartment Mediterania Garden Residence 1 ( Bougenville Tanjung Duren Raya )',
      startTime: '08:00',
      endTime: '17:00',
      clockIn: '-- : --',
      clockOut: ''
    };
    return data;
  }

  if (value == 'nextSchedule' || value == 'upcomingSchedule') {
    var _data = [];
    var start = value === 'nextSchedule' ? 1 : 0;

    for (var i = start; i <= length; i++) {
      _data.push({
        isShowMonth: (0, _moment["default"])().add(i, 'days').format('DD') === '01' || (0, _moment["default"])().format('DD MM') === (0, _moment["default"])().add(i, 'days').format('DD MM') ? true : false,
        month: (0, _moment["default"])().add(i, 'days').format('DD MM YYYY') === (0, _moment["default"])().endOf('month').format('DD MM YYYY') ? (0, _moment["default"])().format('MMMM YYYY') : (0, _moment["default"])().add(i, 'days').format('MMMM YYYY'),
        day: start === 1 ? (0, _moment["default"])().add(i, 'days').format('dddd') : (0, _moment["default"])().add(i, 'days').format('ddd').toUpperCase(),
        date: start === 1 ? (0, _moment["default"])().add(i, 'days').format('DD MMM') : (0, _moment["default"])().add(i, 'days').format('DD'),
        location: 'Mediterania Garden Residence',
        startTime: '08:00',
        endTime: '17:00',
        dateFull: (0, _moment["default"])().add(i, 'days').format('DD MMMM YYYY').toUpperCase(),
        isToday: (0, _moment["default"])().add(i, 'days').format('DD MMM') === (0, _moment["default"])().format('DD MMM') ? true : false
      });
    }

    return _data;
  }
}