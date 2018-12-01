export const generateRandomNum = (number) => {
	return Math.floor(Math.random() * number);
};

export const getTime = (timestamp) => {
  const time = new Date(timestamp);
  return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};

export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('postman_whatsapp_web');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

export const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  sessionStorage.setItem('postman_whatsapp_web', serializedState);
};
