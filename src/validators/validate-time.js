const Pattern24HourTime = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

export const validate24HourTime = time =>
  Pattern24HourTime.test(time) ? '' : 'Invalid time format';
