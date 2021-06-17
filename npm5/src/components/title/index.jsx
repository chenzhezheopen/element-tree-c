import './index.scss'
import rewordImg from '../../assets'
import { connect } from 'react-redux'
import { ceshi, ceshiAsync } from '../../redux/actions/ceshi'

function shihsi(props) {
  props.ceshiAsync(123)
}

function Title(props) {
  return (
    <div onClick={() => shihsi(props)}>
      <div className="serviceTop">
        <span>{props.num}</span>
        <div className="serviceTop-title">
          <img src={rewordImg('img/title.png')} alt="" />
        </div>
      </div>
      <div style={{ height: '71px' }}></div>
    </div>
  )
}

export default connect(
  state => ({ num: state.he }),
  {
    ceshi: ceshi,
    ceshiAsync: ceshiAsync
  }
)(Title)