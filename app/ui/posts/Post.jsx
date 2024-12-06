import moment from 'moment';

import Title from './Title';
import Author from './Author';
import Date from './Date';
import PostContent from './PostContent';
import Categories from './Categories';
import PostsWidget from './PostsWidget';

const PostDetail = ({ post }) => {

  return (
    <div className='w-full pt-16'>
      <div className='w-full flex flex-col'>
        <Title title={post.title} />
        <div className='flex gap-x-6 dm-sans font-thin mt-2'>
          <Author author={post.author.name} />
          <Date date={moment(post.createdAt).format('MMMM D, YYYY')} />
        </div>
      </div>
      <PostContent content={post.content.text} />
      <Categories categories={post.category} />
      <PostsWidget slug={post.slug.split('/')[0]} currentSlug={post.slug}  />
    </div>
    
  )
}

export default PostDetail