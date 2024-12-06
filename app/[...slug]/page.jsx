import { getPost } from '../lib/GraphQL/queries';
import Post from '@/app/ui/posts/Post';

export default async function Page({ params })  {
  const slug = (await params).slug.join('/');
  const post = await getPost({slug});
  return (
    <div className='w-full container'>
        <Post post={post} />
    </div>
  )
}

