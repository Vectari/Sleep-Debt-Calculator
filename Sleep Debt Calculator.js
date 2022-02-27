const getSleepHours = day => {
if (day === 'monday') {
  return 8;
} else if (day === 'tuesday') {
  return 7;
} else if (day === 'wednesday') {
  return 6;
} else if (day === 'thursday') {
  return 5;
} else if (day === 'friday') {
  return 4;
} else if (day === 'saturday') {
  return 3;
} else if (day === 'sunday') {
  return 2;
}
};
const getActualSleepHours = () => 8 + 7 + 6 + 5 + 4 + 3+ 2;
const getIdealSleepHours = () => {
const idealHours = 8;
return idealHours * 7;
};
const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();
if (actualSleepHours === idealSleepHours) {
  console.log('Perfect amount of sleep!')
} else if (actualSleepHours > idealSleepHours) {
  console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you need.')
} else if (actualSleepHours < idealSleepHours) {
  console.log('You should sleep ' + (idealSleepHours - actualSleepHours) + ' hour(s) more!')
}
};
calculateSleepDebt();
