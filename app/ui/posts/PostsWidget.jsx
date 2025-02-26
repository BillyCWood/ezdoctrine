import { getRelatedPosts, getRecentPosts } from '../../lib/GraphQL/queries';

import PostCard from './PostCard';


export default async function PostsWidget({ slug, currentSlug }) {
  

  const relatedPosts = slug ? await getRelatedPosts({ slug, currentSlug }) : [];
  const recentPosts = await getRecentPosts();
  
  const hasRelated = relatedPosts.length > 0 ? true : false;

  return (
    <div className='w-full mb-28'>

      <div className={`${slug && hasRelated ? '' : 'hidden'}`}>
        <p className='dm-display text-3xl mt-16'>Related Articles</p>
        <div className='
          flex flex-col gap-y-10 mt-6
          md:grid md:grid-cols-2 md:gap-6
          lg:grid-cols-3
          '>
            {relatedPosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div> 
        
      <p className='dm-display text-3xl mt-16'>Recent Articles</p>
      <div className='
        flex flex-col gap-y-10 mt-6
        md:grid md:grid-cols-2 md:gap-6
        lg:grid-cols-3
        '>

          {recentPosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
      </div>
    </div>
  )
}