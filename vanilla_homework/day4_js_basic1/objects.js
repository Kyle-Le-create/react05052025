export function combineObjects(obj1, obj2) {
  const result = {};
  for (let key in obj1) {
    result[key] = obj1[key];
  }
  for (let key in obj2) {
    result[key] = obj2[key];
  }
  return result;
}

export function changeValueOf(obj, key, value) {
  obj[key] = value;
}

export function cancelExpiredEvents(events) {
  const today = new Date();
  for (let i = 0; i < events.length; i++) {
    const evt = events[i];
    if (new Date(evt.date) < today) {
      evt.isCanceled = true;
    }
  }
}

export function findEventByType(events, type) {
  const result = [];
  for (let i = 0; i < events.length; i++) {
    if (events[i].type === type) {
      result[result.length] = events[i];
    }
  }
  return result;
}
