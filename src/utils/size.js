export const isMobile = typeof window.orientation !== 'undefined';

export const getWindowWidth = () => {
  const screenElectron = window.electron && window.electron.screen;
  if (screenElectron) {
    const mainScreen = screenElectron.getPrimaryDisplay();
    const dimensions = mainScreen.size;
    return dimensions.width;
  }
  return window.innerWidth;
}