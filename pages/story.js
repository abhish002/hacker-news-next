import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Layout from '../components/layout/layout.component';
import CommentList from '../components/comment-list/comment-list.component';

function Story({ story }) {
  if (!story) {
    return <Error statusCode='503' />
  }

  const { title, url, points, comments_count, time_ago, comments } = story;

  return (
    <Layout title={title}>
      <main>
        <h1 className='story-title'>
          <a href={url} target='_blank'>{title}</a>
        </h1>
        <div className='story-details'>
          <strong>{points} points</strong>
          <strong>{comments_count} comments</strong>
          <strong>{time_ago}</strong>
        </div>
        {
          comments.length > 0 ?
            <CommentList comments={comments} /> :
            <div>No comments for this story.</div>
        }
      </main>
      <style jsx>{`
        main {
          padding: 1em;
        }
        .story-title {
          font-size: 1.2rem;
          margin: 0;
          font-weight: 300;
          padding-bottom: 0.5em;
        }
        .story-title a {
          color: #333;
          text-decoration: none;
        }
        .story-title a:hover {          
          text-decoration: underline;
        }
        .story-details {
          font-size: 0.8rem;
          padding-botton: 1em;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          margin-bottom: 1em;
        }
        .story-details strong {
          margin-right: 1em;
        }
        .story-details a {
          color: #f60;
        }
      `}</style>
    </Layout>
  )
}

Story.getInitialProps = async ({ req, res, query }) => {
  const storyId = query.id;
  let story = null;
  try {
    const res = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
    story = await res.json();
  } catch (e) {
    console.log(e);
  }

  return { story }
}


export default Story;