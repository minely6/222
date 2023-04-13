import medicineLogos from './medicineLogos';

function getRandomMedicineLogo() {
  const randomIndex = Math.floor(Math.random() * medicineLogos.length);
  return medicineLogos[randomIndex];
}

export default getRandomMedicineLogo;