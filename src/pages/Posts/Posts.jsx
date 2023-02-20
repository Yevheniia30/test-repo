import { Component, useEffect, useRef } from 'react';
import { getImagesReq1, getPosts } from 'services/api';
import { Link } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    showLoadMore: true,
  };

  // =============USEREF=============

  // const firstRender=useRef(true)
  // console.log(firstRender.current);

  //   useEffect(() => {
  //     if(firstRender.current){
  //       firstRender.current=false
  //     } else {
  //       handleGetPosts()
  //     }
  //   }, [page])

  // ========================

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         posts: res,
  //       });
  //     });
  // }

  componentDidMount() {
    console.log('componentDidMount');
    this.handleGetPosts();
  }

  componentDidUpdate(_, prevState) {
    console.log('componentDidUpdate');

    // if (prevState.page !== this.state.page || prevState?.limit !== this.state.limit) {
    //   this.handleGetPosts();
    // }
  }

  handleGetPosts = async () => {
    const { page, limit } = this.state;
    this.setState({ loading: true, error: null });
    try {
      const posts = await getPosts(page, limit);
      if (posts?.length < limit) {
        this.setState({
          showLoadMore: false,
        });
      }
      this.setState(prev => ({
        posts: [...prev.posts, ...posts],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  handleChange = e => {
    console.log('e target', e.target.value);
    this.setState({
      limit: e.target.value,
      page: 1,
      posts: [],
    });
  };

  render() {
    // console.log('render');
    const { posts, loading, error, page, limit } = this.state;

    return (
      <>
        {loading && <p>...loading</p>}
        {error && <p>{error.message}</p>}
        <label>
          Choose limit
          <select name="limit" value={limit} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </label>
        {posts?.length > 0 && (
          <>
            <ul>
              {posts.map(post => (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>
                    {' '}
                    <b>{post.title}</b>
                  </Link>

                  {/* <p>{post.body}</p> */}
                </li>
              ))}
            </ul>
            {this.state.showLoadMore && (
              <button type="button" onClick={this.handleLoadMore}>
                Load more
              </button>
            )}
          </>
        )}
      </>
    );
  }
}

export default Posts;
