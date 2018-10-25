import memoize from 'fast-memoize';

const getHours = timeStr => parseInt(timeStr.split(':')[0]) || 0;
const getMinutes = timeStr => parseInt(timeStr.split(':')[1]) || 0;
const to12Hour = hour => {
  if (hour === 0) { return 12; }
  return hour > 12 ? hour - 12 : hour;
}

const calculateBellTolls = function(start, end, total=0) {
  const startAs12Hour = to12Hour(start);
  const endAs12Hour = to12Hour(end);

  const updatedTotal = total + startAs12Hour;

  switch(true) {
    case start === end && total !== 0:
      return updatedTotal; 
    case start + 1 > 23:
      return calculateBellTolls(0, end, updatedTotal);
    default:
      return calculateBellTolls(start + 1, end, updatedTotal);
  }
};

const totalBellTollsCalculator = (startTime, endTime) => {
  const startTimeMinutes = getMinutes(startTime); 
  const startTimeHours = getHours(startTime) + (startTimeMinutes > 0 ? 1 : 0); 
  const endTimeHours = getHours(endTime);

  return calculateBellTolls(startTimeHours, endTimeHours);
};

export const totalBellTolls = memoize(totalBellTollsCalculator);
