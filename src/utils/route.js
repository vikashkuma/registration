let HISTORY;
export function saveHistory(history) {
  HISTORY = history;
}
export function getHistory() {
  return HISTORY;
}

export function pushHistory(obj) {
  HISTORY.push(obj);
}

export function goBack() {
  return HISTORY.goBack();
}
