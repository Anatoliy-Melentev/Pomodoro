export const sendNotify = (text: string, icon: string) => {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      const n = new Notification(text, { icon, silent: true });
      setTimeout(n.close.bind(n), 4000);
    }
  });
};
