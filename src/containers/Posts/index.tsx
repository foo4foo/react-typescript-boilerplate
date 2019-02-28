import React, { useEffect, useState } from 'react'
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Column, Table } from 'react-virtualized'
import { useEffectAsync } from '../../lib/hooks'
import { sleep } from '../../lib/utils'
import { getAll, getPost } from '../../store/actions/posts'
import './Posts.css'
import 'react-virtualized/styles.css'

interface Props {
  posts: [],
  post: object,
  loading: boolean,
  error: string,
  getAll: () => void,
  getPost: (postId: string | number) => void
}

const Posts = ({ posts, post, loading, error, getAll, getPost }: Props) => {
  const [testing, setTesting] = useState(true)

  // simple mock with sleep for async effect hook
  useEffectAsync(async () => {
    await sleep(2000)
    setTesting(false)
    getAll()
  }, [])

  if (testing) {
    return <p>Testing ...</p>
  }

  return (
    <div>
      {loading ?
        <p>loading ...</p>
        : <Table
        width={window.innerWidth - 25}
        height={300}
        headerHeight={20}
        rowHeight={30}
        rowCount={posts.length}
        rowGetter={({ index }) => posts[index]}
      >
        <Column
          label='ID'
          dataKey='id'
          width={100}
        />
        <Column
          width={100}
          label='User ID'
          dataKey='userId'
        />
        <Column width={600} label="Title" dataKey="title" />
        <Column width={1100} label="Body" dataKey="body" />
      </Table>
      }
      {Boolean(error) && <p>{error}</p>}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  loading: state.posts.loading,
  error: state.posts.error,
  posts: state.posts.list,
  post: state.posts.data
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ getAll, getPost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
