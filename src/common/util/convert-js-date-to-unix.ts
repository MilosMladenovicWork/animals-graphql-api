const convertJsDateToUnix = ({ date }: { date: Date }) =>
  Math.floor(date.getTime() / 1000);
