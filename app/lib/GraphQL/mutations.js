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

/** POSTS MUTATIONS **/

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
                    html
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

/**  PROFILE MUTATIONS **/

// Upload Profile Picture
export const uploadProfilePicture = async (file) => {
    const mutation = gql`
        mutation uploadProfilePicture {
            createAsset(data: {}) {
                id
                url
                upload {
                    status
                    expiresAt
                    error {
                        code
                        message
                    }
                    requestPostData {
                        url
                        date
                        key
                        signature
                        algorithm
                        policy
                        credential
                        securityToken
                    }
                }
            }
        }
    `;

    /* 
    Data that I need to post as Form Data via fetch using POST method
    const form = new FormData();
    form.append('X-Amz-Date', );
    form.append('key', );
    form.append('X-Amz-Signature', );
    form.append('X-Amz-Algorithm', );
    form.append('policy', );
    form.append('X-Amz-Credential', );
    form.append('X-Amz-Security-Token', );
    form.append('file', File(['<data goes here>'], './test.jpg'));

    fetch('http://', {
        method: 'POST',
        body: form
    });
    */
}