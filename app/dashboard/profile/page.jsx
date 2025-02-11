import { getSession } from '@auth0/nextjs-auth0';
import { getAuthor } from '../../lib/GraphQL/queries';
import ProfilePicture from '../../ui/dashboard/profile/ProfilePicture';


export default async function Profile() {
    try{

        const session = await getSession();
        const id = session?.user.name;
        const author = await getAuthor({id});
        
        return ( 
            <div className='pt-16 pl-16'>
                <div className='flex items-center'>
                    <ProfilePicture picture={author.picture} name={author.name} />
                    <div className='ml-2'>
                        <p className='text-xl'>{author.name}</p>
                        <p className='text-xs'>Author ID: {author.id}</p>
                    </div>
                </div>
                    
                <div>
                    <p className='mt-10'>Biography:</p>
                    <p className='mt-2 border-[1px] p-2 border-black w-4/5'>{author.bio}</p>
                </div>
            </div>
        );
    }
    catch(e){
        console.log(e);
    }
}

