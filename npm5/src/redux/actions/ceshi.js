import { DEMO } from '../constant'




export const ceshi = personObj => ({ type: DEMO, data: personObj })

//异步
export const ceshiAsync = personObj => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(ceshi(personObj))
    }, 1000)
  }
}