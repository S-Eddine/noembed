export const getDuration = (duration: number) => {
  return duration > 3600
    ? new Date(duration * 1000).toISOString().substring(11, 8)
    : new Date(duration * 1000).toISOString().substring(14, 19);
};

export const formatDate = (stringDate: string) => {
  const event = new Date(stringDate);
  return event.toLocaleTimeString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

type diff = {
  sec: number;
  min: number;
  hour: number;
  day: number;
  month: number;
  year: number;
};

export const getUploadTime = (stringDate: string) => {
  const publicationDate = new Date(stringDate);
  let Time = new Date().getTime() - publicationDate.getTime();
  var diff = { sec: 0, min: 0, hour: 0, day: 0, month: 0, year: 0 };

  Time = Math.floor(Time / 1000);
  diff.sec = Time % 60;

  Time = Math.floor((Time - diff.sec) / 60);
  diff.min = Time % 60;

  Time = Math.floor((Time - diff.min) / 60);
  diff.hour = Time % 24;

  Time = Math.floor((Time - diff.hour) / 24);
  diff.day = Time % 31;

  Time = Math.floor((Time - diff.day) / 31);
  diff.month = Time % 12;

  Time = Math.floor((Time - diff.day) / 12);
  diff.year = Time;

  return displayDiff(diff);
};

export const displayDiff = (diff: diff) => {
  if (diff.year > 0) {
    return `Publié il y a ${diff.year} ans`;
  } else if (diff.month > 0) {
    return `Publié il y a ${diff.month} mois`;
  } else if (diff.day > 0) {
    return `Publié il y a ${diff.day} jour(s)`;
  } else if (diff.hour > 0) {
    return `Publié il y a ${diff.hour} heure(s)`;
  } else {
    return `Publié il y a ${diff.min} minute(s) et ${diff.sec} seconde(s)`;
  }
};
