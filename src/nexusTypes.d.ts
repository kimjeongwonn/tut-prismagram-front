export declare global {
  interface NexusGenFieldTypes {
    AutoPayload: {
      // field return type
      approvedUser: NexusGenFieldTypes['User']; // User!
      token: string; // String!
    };
    Comment: {
      // field return type
      id: number; // Int!
      post: NexusGenFieldTypes['Post']; // Post!
      text: string; // String!
      user: NexusGenFieldTypes['User']; // User!
      __typename: string;
    };
    File: {
      // field return type
      id: number; // Int!
      post: NexusGenFieldTypes['Post']; // Post!
      url: string; // String!
      __typename: string;
    };
    Message: {
      // field return type
      fromUser: NexusGenFieldTypes['User']; // User!
      id: number; // Int!
      room: NexusGenFieldTypes['Room']; // Room!
      text: string; // String!
      timeStamp: NexusGenScalars['DateTime']; // DateTime!
      __typename: string;
    };
    Mutation: {
      // field return type
      addComment: NexusGenFieldTypes['Comment']; // Comment!
      confirmSecret: string; // String!
      createAccount: boolean; // Boolean!
      editUser: NexusGenFieldTypes['User']; // User!
      followToggle: boolean; // Boolean!
      modifyPost: NexusGenFieldTypes['Post'] | null; // Post
      requestSecret: boolean; // Boolean!
      SendMessage: NexusGenFieldTypes['Message']; // Message!
      toggleLike: boolean; // Boolean!
      writePost: NexusGenFieldTypes['Post']; // Post!
    };
    Post: {
      // field return type
      caption: string | null; // String
      comments: NexusGenFieldTypes['Comment'][]; // [Comment!]!
      commentsCount: number; // Int!
      files: NexusGenFieldTypes['File'][]; // [File!]!
      id: number; // Int!
      isLike: boolean; // Boolean!
      likes: NexusGenFieldTypes['User'][]; // [User!]!
      likesCount: number; // Int!
      location: string | null; // String
      postAt: NexusGenScalars['DateTime']; // DateTime!
      user: NexusGenFieldTypes['User']; // User!
      __typename: string;
    };
    Query: {
      // field return type
      allUsers: NexusGenFieldTypes['User'][]; // [User!]!
      checkUser: boolean; // Boolean!
      searchPost: NexusGenFieldTypes['Post'][]; // [Post!]!
      searchUsers: NexusGenFieldTypes['User'][]; // [User!]!
      seeFeed: NexusGenFieldTypes['Post'][]; // [Post!]!
      seeMy: NexusGenFieldTypes['User']; // User!
      seeMyPosts: NexusGenFieldTypes['Post'][]; // [Post!]!
      seeMyRooms: NexusGenFieldTypes['Room'][]; // [Room!]!
      seePost: NexusGenFieldTypes['Post']; // Post!
      seeUser: NexusGenFieldTypes['User']; // User!
      seeUserPosts: NexusGenFieldTypes['Post'][]; // [Post!]!
    };
    Room: {
      // field return type
      id: number; // Int!
      messages: NexusGenFieldTypes['Message'][]; // [Message!]!
      participant: NexusGenFieldTypes['User'][]; // [User!]!
      seeMessages: NexusGenFieldTypes['Message'][]; // [Message!]!
      __typename: string;
    };
    Subscription: {
      // field return type
      newMessage: NexusGenFieldTypes['Message']; // Message!
    };
    User: {
      // field return type
      bio: string | null; // String
      firstName: string | null; // String
      followers: NexusGenFieldTypes['User'][]; // [User!]!
      followersCount: number; // Int!
      followings: NexusGenFieldTypes['User'][]; // [User!]!
      followingsCount: number; // Int!
      fullName: string; // String!
      id: string; // String!
      isFollowing: boolean; // Boolean!
      isSelf: boolean; // Boolean!
      lastName: string | null; // String
      posts: NexusGenFieldTypes['Post'][]; // [Post!]!
      postsCount: number; // Int!
      profileImage: string | null; // String
      username: string; // String!
      __typename: string;
    };
  }
}
