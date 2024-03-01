// Date -----

// 1. Todays date .....

// const todaysDate = new Date();

// console.log(todaysDate, "todaysDate");

// 2. Zero day date -: 1 jan 1070 00:00:00

// const zeroDayDate = new Date(0);

// console.log(date, "zeroDayDate");

// 3. String date to Object Date

// const date = "12-24-1996";

// const dateobj = new Date(date);
// console.log(dateobj);

// 4. TIme in milliseconds from EPOC (1st jan 1970)
// console.log(new Date().getTime());

// ---------- UTC  vs IST ----------------
// Universal TIme...
// NOTE: DANGER: !!!!! we always store UTC time inside my databases. NO OTHER TIME

// Ist -> Indian time

// Indiatime  = UTC + 5:30 (5 hours 40 min )
// California time = UTC - 8:00 (8 hours).

// ist to ustime
// ist -  austraial

// ------------ find difference between 2 dates -------

const date1 = new Date("12-24-1995");
const date2 = new Date();

console.log(date2 - date1); // time in milli seconds that has been elapsed between these 2 dates

// convert millseconds to seconds -> /1000 (divide by 1000)

// convert seconds in min -> /60 (divide by 60)
// convert min in hours -> /60
// convert hours in days -> /24
// convert days in years -> /365

// SUGGESTION: moment Library (handles dates very well)
// in real life we use Date Class less and moment library more.
