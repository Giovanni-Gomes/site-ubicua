import L from 'leaflet';
import mapMarkerImg from '/assets/chatbot/robot.svg';

export default L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [48, 58],
  iconAnchor: [24, 58],
  popupAnchor: [0, -60]
});
