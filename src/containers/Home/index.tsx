import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { Store } from '../../store'
import Button from '../../components/Button'
import { resetCounter, updateCounter } from '../../store/actions/counter'

interface Props {
  counter: number,
  updateCounter: () => void,
  resetCounter: () => void
}

const Home = ({ counter, updateCounter, resetCounter }: Props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return <div><p>loading ...</p></div>
  }

  return (
    <div>
      <p>{counter}</p>
      <Button onClick={updateCounter}>
        <p>Update me!</p>
      </Button>
      <Button onClick={resetCounter} />
    </div>
  )
}

const mapStateToProps = ({ counter }: Store) => ({
  counter: counter.value
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ resetCounter, updateCounter }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
