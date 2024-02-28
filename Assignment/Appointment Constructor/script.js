function Appointment(aptDate) {
  // write your code here
  this.date = new Date(aptDate);
  this.location = "";

  this.setLocation = function (location) {
    this.location = location;
  };

  this.getLocation = function () {
    return this.location;
  };

  this.toString = function () {
    const dateStr = this.date.toDateString();
    return `Appointment on ${dateStr} at ${this.location}`;
  };
}
