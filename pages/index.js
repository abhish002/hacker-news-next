import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from '../components/story-list/story-list.component';
import Layout from '../components/layout/layout.component';
import Link from 'next/link';

class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let stories = [];
    let page = 1;
    try {
      page = Number(query.page) || 1;
      const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
      stories = await res.json();
    } catch (e) {
      console.log(e)
    }

    return { stories, page }
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful', registration)
        })
        .catch(e => console.warn('service registration failed.', e.message))
    }
  }

  render() {
    const { stories, page } = this.props;
    return stories.length === 0 ?
      <Error statusCode={503} />
      :
      (
        <div>
          <Layout title='Hacker Next' description='A news app built with next.js' backButton={page > 1 ? true : false}>
            <StoryList stories={stories} />
          </Layout>
          <footer>
            {
              page > 1 &&
              (<Link href={`/?page=${page - 1}`}>
                <a>{`< ${page - 1} prev`}</a>
              </Link>)
            }
            <span className='page-number'>{page}</span>
            <Link href={`/?page=${page + 1}`}>
              <a>{`next ${page + 1} >`}</a>
            </Link>
          </footer>
          <style jsx>{`
            footer {
              padding: 1em 0;
              display: flex;
              flex-direction: row;              
              justify-content: center;
            }
            footer a {
              font-weight: bold;
              color: black;
              text-decoration: none;              
            }
            footer a:hover {
              text-decoration: underline;
            }
            .page-number {
              margin: 0 1em;
            }
          `}</style>
        </div>
      )
  }
}

export default Index;
