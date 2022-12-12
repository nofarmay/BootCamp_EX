import { getFakeData } from '../services/fakeData.service.js';

export const testController = (req, res) => {
  const data = getFakeData();
  res.send(data);
};
