import { getSession } from '@auth0/nextjs-auth0';
import { getAuthor } from '../../lib/GraphQL/queries';


export default async function Profile() {

  const session = await getSession();
  const id = session?.user.name;
  const author = await getAuthor({id});

  return ( 
    <div>
      <p>
        {author.name}'s Profile
      </p>
      <p>
        author id: {author.id}
      </p>
      <img src={author.picture.url} width={100} height={100} />
      <p>{author.bio}</p>
    </div>
  );
}

