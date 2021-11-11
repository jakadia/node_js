var date = new Date();

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Test', 'Test1'];

exports.dayOfWeek = function () {
    return days[ date.getDate() - 1];
};
