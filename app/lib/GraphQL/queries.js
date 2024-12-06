import { GraphQLClient, gql } from 'graphql-request';


const hygraph = new GraphQLClient(process.env.NEXT_HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

// Featured Posts
export const getFeaturedPosts = async () => {
  
  const query = gql`
    query GetFeaturedPosts {
      postsConnection(where: {featuredPost: true}) {
        edges {
          node {
            author {
              id
              name
              bio
            }
            createdAt
            excerpt
            slug
            title
            category {
              slug
              name
            }
          }
        }
      }
    }
  `;

  const response = await hygraph.request(query);
  return response.postsConnection.edges;
};

// Post
export const getPost = async (slug) => {
  
  const query = gql`
    query GetPost($slug:String!) {
      post(where: {slug: $slug}) {
        author {
          name
          id
          bio
        }
        createdAt
        slug
        title
        category {
          name
        }
        content {
          text
        }
      }
    }
  `;
  try {

    const response = await hygraph.request(query, slug);
    return response.post;
  }
  catch (err) {
    return err;
  }

};

// Related Posts
export const getRelatedPosts = async (variables) => {
  const query = gql`
    query getRelatedPosts($slug:String!, $currentSlug:String!) {
      posts(where: {slug_starts_with:$slug, slug_not_contains:$currentSlug }, last: 4) {
        author {
          name
        }
        slug
        title
        createdAt
        excerpt
      }
    }
  `;

  

  try {
    const response = await hygraph.request(query, variables);
    return response.posts;
  }
  catch (err) {
    return err;
  }
  
}


// Recent Posts
export const getRecentPosts = async () => {
  const query = gql`
    query GetRecentPosts {
      posts(last: 4, orderBy: createdAt_DESC) {
        author {
          name
        }
        slug
        title
        createdAt
        excerpt
      }
    }
  `;

  try {
    const response = await hygraph.request(query);
    return response.posts;
  }
  catch (err) {
    return err;
  }

}

// Get Post by Category

// Get Author's Drafts
// Get Author's Published Posts

// Get Categories
export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  try {
    const response = await hygraph.request(query);
    return response.categories;
  }
  catch (err) {
    return err;
  }
}
