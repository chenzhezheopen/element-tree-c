import { DEMO } from '../constant'

export default function cehsi2(perState = 123, action) {
  console.log(action);
  const { type, data } = action
  switch (type) {
    case DEMO:
      console.log('DEMO');
      return perState + data

    default:
      return perState
  }
}