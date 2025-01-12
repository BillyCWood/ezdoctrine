import { GraphQLClient, gql } from 'graphql-request';


const hygraph = new GraphQLClient(process.env.NEXT_HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});


// Create

/* 
    RichTextAST = {
        children: [
            {
                type: "paragraph", 
                children: [
                    {
                        text: "This is paragraph 1 for EZDoctrine Testing Create Post"
                    }
                ]
            }
        ]
    } 
*/

/*
Rich Text type from Hygraph

type RichText {
  raw: RichTextAST!
  html: String!
  markdown: String!
  text: String!
  json: RichTextAST!
}
  
*/

export const createPost = async (id, content, slug, title, excerpt, connect) => {
    const mutation = gql`
        mutation CreatePost($id: ID, $content: RichTextAST, $slug: String , $title: String , $excerpt: String , $connect: [CategoryWhereUniqueInput!] = [{name: "Hermeneutics", slug: "hermeneutics"}, {name: "Theology", slug: "theology"}, {name: "Ecclesiology", slug: "ecclesiology"}, {name: "Calvinism", slug: "calvinism"}]) {
            createPost(
                data: {featuredPost: false, author: {connect: {id: $id}}, category: {connect: $connect}, content: $content, slug: $slug, title: $title, excerpt: $excerpt}
            ) 
            {
                author {
                    bio
                    id
                    name
                }
                createdAt
                category {
                    name
                    slug
                }
                slug
                title
                content {
                    text
                }
                excerpt
                id
            }
        }
    `;

    try {

        await hygraph.request(mutation, id, content, slug, title, excerpt, connect);

    } catch (err) {
        return err;
    }
}

// Publish
export const publishPost = async (id) => {
    const mutation = gql`
        mutation PublishPost($id: ID) {
            publishPost(where: {id: $id}, to: PUBLISHED) {
                id
            }
        }
    `;

    try {
        await hygraph.request(mutation, id, content, slug, title, excerpt, connect);
    } catch (err) {
        return err;
    }
}


// Unpublish
export const unpublishPost = async (id) => {
    const mutation = gql`
        mutation UnpublishPost($id: ID) {
            unpublishPost(where: {id: $id}, from: PUBLISHED) {
                id
            }
        }
    `;

    try {
        await hygraph.request(mutation, id, content, slug, title, excerpt, connect);
    } catch (err) {
        return err;
    }
}

// Update

// Delete
