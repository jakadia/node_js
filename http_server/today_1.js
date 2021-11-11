module.exports.getDate = function getDate() {
    var aestTime = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});
    return new Date(aestTime);
}

module.exports.getName = function getName() {
    var personName = "Jake Posch";
    return personName;
}