
export const User = gql`query {
    user(id: $id) {
      id
      username
      email
      address {
        geo {
          lat
          lng
        }
      }
    }
  }
  `;

  export const UserPost = gql`query {
    user(id: $id) {
      posts {
        data {
          id
          title
        }
      }
    }
  }`