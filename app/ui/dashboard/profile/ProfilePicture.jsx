import { CameraIcon } from '@heroicons/react/24/outline';

const ProfilePicture = ({ picture, name }) => {
    const initials = name.split(' ')
  return (
    <>
        {
            picture ? 
                <div className='group hover:cursor-pointer relative w-[100px] h-[100px] hover:bg-gray-500/60 rounded-full transition-colors duration-100 content-center'>
                    <img src={picture.url} width={100} height={100} className='rounded-full group-hover:opacity-60' />
                    <CameraIcon className='opacity-0 group-hover:opacity-100 transition-opacity duration-100 w-full p-8 text-white absolute top-0 left-0 border-2 border-white rounded-full' />
                </div>
            :
                <div className='group w-[100px] h-[100px] bg-blue-500 hover:bg-gray-500/60 transition-colors duration-100 hover:cursor-pointer rounded-full content-center text-center relative'>
                    <p className='text-5xl group-hover:opacity-60'>{ initials[0][0] }{ initials[1][0] }</p>
                    <CameraIcon className='opacity-0 group-hover:opacity-100 transition-opacity duration-100 w-full p-8 text-white absolute top-0 left-0 border-2 border-white rounded-full' />
                </div>
        }
    </>
  )
}

export default ProfilePicture;