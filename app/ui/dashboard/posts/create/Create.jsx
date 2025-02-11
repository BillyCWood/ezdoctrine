import { getCategories } from '../../../../lib/GraphQL/queries';
import CreateForm from './CreateForm';


export default async function Create() {


    const categories = await getCategories();

    async function createPost(formData){
        'use server';

        const rawFormData = {
            title: formData.get('title'),
            mainCategory: formData.get('main-category'),
            slug: formData.get('main-category') + '/' + formData.get('title').toLowerCase().replaceAll(' ', '-'),
            excerpt: formData.get('excerpt'),
            content: formData.get('content'),
            categories: formData.getAll('categories'),

        }

        console.log(rawFormData);
    } 

    return (
        <CreateForm categories={categories}/>
    )
}
