"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setScheduleData = exports.setData = void 0;

var _toolkit = require("@reduxjs/toolkit");

var setData = (0, _toolkit.createSlice)({
  name: 'reducer',
  initialState: {
    value: []
  },
  reducers: {
    setScheduleData: function setScheduleData(state, action) {
      state.value = action.payload;
    }
  }
}); // Action creators are generated for each case reducer function

exports.setData = setData;
var setScheduleData = setData.actions.setScheduleData;
exports.setScheduleData = setScheduleData;
var _default = setData.reducer;
exports["default"] = _default;