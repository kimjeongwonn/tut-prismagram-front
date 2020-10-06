export declare global {
  interface NexusGenInputs {
    CommentWhereUniqueInput: {
      // input type
      id?: number | null; // Int
    };
    FileWhereUniqueInput: {
      // input type
      id?: number | null; // Int
    };
    MessageWhereUniqueInput: {
      // input type
      id?: number | null; // Int
    };
    PostWhereUniqueInput: {
      // input type
      id?: number | null; // Int
    };
    UserWhereUniqueInput: {
      // input type
      email?: string | null; // String
      id?: string | null; // String
      username?: string | null; // String
    };
  }

  interface NexusGenEnums {
    PostAction: 'DELETE' | 'EDIT';
  }

  interface NexusGenScalars {
    String: string;
    Int: number;
    Float: number;
    Boolean: boolean;
    ID: string;
    DateTime: any;
  }

  interface NexusGenRootTypes {
    AutoPayload: {
      // root type
      approvedUser: NexusGenRootTypes['User']; // User!
      token: string; // String!
    };
    Comment: {
      // root type
      id: number; // Int!
      text: string; // String!
    };
    File: {
      // root type
      id: number; // Int!
      url: string; // String!
    };
    Message: {
      // root type
      id: number; // Int!
      text: string; // String!
      timeStamp: NexusGenScalars['DateTime']; // DateTime!
    };
    Mutation: {};
    Post: {
      // root type
      caption?: string | null; // String
      id: number; // Int!
      location?: string | null; // String
      postAt: NexusGenScalars['DateTime']; // DateTime!
    };
    Query: {};
    Room: {
      // root type
      id: number; // Int!
    };
    Subscription: {};
    User: {
      // root type
      bio?: string | null; // String
      firstName?: string | null; // String
      id: string; // String!
      lastName?: string | null; // String
      profileImage?: string | null; // String
      username: string; // String!
    };
  }

  interface NexusGenAllTypes extends NexusGenRootTypes {
    CommentWhereUniqueInput: NexusGenInputs['CommentWhereUniqueInput'];
    FileWhereUniqueInput: NexusGenInputs['FileWhereUniqueInput'];
    MessageWhereUniqueInput: NexusGenInputs['MessageWhereUniqueInput'];
    PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput'];
    UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
    PostAction: NexusGenEnums['PostAction'];
    String: NexusGenScalars['String'];
    Int: NexusGenScalars['Int'];
    Float: NexusGenScalars['Float'];
    Boolean: NexusGenScalars['Boolean'];
    ID: NexusGenScalars['ID'];
    DateTime: NexusGenScalars['DateTime'];
  }

  interface NexusGenFieldTypes {
    AutoPayload: {
      // field return type
      approvedUser: NexusGenRootTypes['User']; // User!
      token: string; // String!
    };
    Comment: {
      // field return type
      id: number; // Int!
      post: NexusGenRootTypes['Post']; // Post!
      text: string; // String!
      user: NexusGenRootTypes['User']; // User!
    };
    File: {
      // field return type
      id: number; // Int!
      post: NexusGenRootTypes['Post']; // Post!
      url: string; // String!
    };
    Message: {
      // field return type
      fromUser: NexusGenRootTypes['User']; // User!
      id: number; // Int!
      room: NexusGenRootTypes['Room']; // Room!
      text: string; // String!
      timeStamp: NexusGenScalars['DateTime']; // DateTime!
    };
    Mutation: {
      // field return type
      addComment: NexusGenRootTypes['Comment']; // Comment!
      confirmSecret: string; // String!
      createAccount: boolean; // Boolean!
      editUser: NexusGenRootTypes['User']; // User!
      followToggle: boolean; // Boolean!
      modifyPost: NexusGenRootTypes['Post'] | null; // Post
      requestSecret: boolean; // Boolean!
      SendMessage: NexusGenRootTypes['Message']; // Message!
      toggleLike: boolean; // Boolean!
      writePost: NexusGenRootTypes['Post']; // Post!
    };
    Post: {
      // field return type
      caption: string | null; // String
      comments: NexusGenRootTypes['Comment'][]; // [Comment!]!
      commentsCount: number; // Int!
      files: NexusGenRootTypes['File'][]; // [File!]!
      id: number; // Int!
      isLike: boolean; // Boolean!
      likes: NexusGenRootTypes['User'][]; // [User!]!
      likesCount: number; // Int!
      location: string | null; // String
      postAt: NexusGenScalars['DateTime']; // DateTime!
      user: NexusGenRootTypes['User']; // User!
    };
    Query: {
      // field return type
      allUsers: NexusGenRootTypes['User'][]; // [User!]!
      checkUser: boolean; // Boolean!
      searchPost: NexusGenRootTypes['Post'][]; // [Post!]!
      searchUsers: NexusGenRootTypes['User'][]; // [User!]!
      seeFeed: NexusGenRootTypes['Post'][]; // [Post!]!
      seeMy: NexusGenRootTypes['User']; // User!
      seeMyPosts: NexusGenRootTypes['Post'][]; // [Post!]!
      seeMyRooms: NexusGenRootTypes['Room'][]; // [Room!]!
      seePost: NexusGenRootTypes['Post']; // Post!
      seeUser: NexusGenRootTypes['User']; // User!
      seeUserPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    };
    Room: {
      // field return type
      id: number; // Int!
      messages: NexusGenRootTypes['Message'][]; // [Message!]!
      participant: NexusGenRootTypes['User'][]; // [User!]!
      seeMessages: NexusGenRootTypes['Message'][]; // [Message!]!
    };
    Subscription: {
      // field return type
      newMessage: NexusGenRootTypes['Message']; // Message!
    };
    User: {
      // field return type
      bio: string | null; // String
      firstName: string | null; // String
      followers: NexusGenRootTypes['User'][]; // [User!]!
      followersCount: number; // Int!
      followings: NexusGenRootTypes['User'][]; // [User!]!
      followingsCount: number; // Int!
      fullName: string; // String!
      id: string; // String!
      isFollowing: boolean; // Boolean!
      isSelf: boolean; // Boolean!
      lastName: string | null; // String
      posts: NexusGenRootTypes['Post'][]; // [Post!]!
      postsCount: number; // Int!
      profileImage: string | null; // String
      username: string; // String!
    };
  }

  interface NexusGenArgTypes {
    Mutation: {
      addComment: {
        // args
        postId: number; // Int!
        text: string; // String!
      };
      confirmSecret: {
        // args
        email: string; // String!
        secret: string; // String!
      };
      createAccount: {
        // args
        email: string; // String!
        firstName?: string | null; // String
        lastName?: string | null; // String
        username: string; // String!
      };
      editUser: {
        // args
        bio?: string | null; // String
        firstName?: string | null; // String
        lastName?: string | null; // String
        username?: string | null; // String
      };
      followToggle: {
        // args
        followId: string; // String!
      };
      modifyPost: {
        // args
        action: NexusGenEnums['PostAction']; // PostAction!
        caption?: string | null; // String
        location?: string | null; // String
        postId: number; // Int!
      };
      requestSecret: {
        // args
        email: string; // String!
      };
      SendMessage: {
        // args
        roomId?: number | null; // Int
        text: string; // String!
        toUserId?: string | null; // ID
        toUserName: string; // String!
      };
      toggleLike: {
        // args
        postId: number; // Int!
      };
      writePost: {
        // args
        caption?: string | null; // String
        location?: string | null; // String
        url: string[]; // [String!]!
      };
    };
    Post: {
      comments: {
        // args
        after?: NexusGenInputs['CommentWhereUniqueInput'] | null; // CommentWhereUniqueInput
        before?: NexusGenInputs['CommentWhereUniqueInput'] | null; // CommentWhereUniqueInput
        first?: number | null; // Int
        last?: number | null; // Int
      };
      files: {
        // args
        after?: NexusGenInputs['FileWhereUniqueInput'] | null; // FileWhereUniqueInput
        before?: NexusGenInputs['FileWhereUniqueInput'] | null; // FileWhereUniqueInput
        first?: number | null; // Int
        last?: number | null; // Int
      };
      likes: {
        // args
        after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
        before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
        first?: number | null; // Int
        last?: number | null; // Int
      };
    };
    Query: {
      checkUser: {
        // args
        email?: string | null; // String
        username?: string | null; // String
      };
      searchPost: {
        // args
        keyword: string; // String!
      };
      searchUsers: {
        // args
        keyword: string; // String!
      };
      seeFeed: {
        // args
        cursor?: number | null; // Int
      };
      seePost: {
        // args
        postId: number; // Int!
      };
      seeUser: {
        // args
        id: string; // String!
      };
      seeUserPosts: {
        // args
        userId: string; // ID!
      };
    };
    Room: {
      messages: {
        // args
        after?: NexusGenInputs['MessageWhereUniqueInput'] | null; // MessageWhereUniqueInput
        before?: NexusGenInputs['MessageWhereUniqueInput'] | null; // MessageWhereUniqueInput
        first?: number | null; // Int
        last?: number | null; // Int
      };
      participant: {
        // args
        after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
        before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
        first?: number | null; // Int
        last?: number | null; // Int
      };
      seeMessages: {
        // args
        cursor?: number | null; // Int
      };
    };
    Subscription: {
      newMessage: {
        // args
        roomId: number; // Int!
      };
    };
    User: {
      followers: {
        // args
        after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
        before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
        first?: number | null; // Int
        last?: number | null; // Int
      };
      followings: {
        // args
        after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
        before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
        first?: number | null; // Int
        last?: number | null; // Int
      };
      posts: {
        // args
        after?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
        before?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
        first?: number | null; // Int
        last?: number | null; // Int
      };
    };
  }

  interface NexusGenAbstractResolveReturnTypes {}

  interface NexusGenInheritedFields {}

  type NexusGenObjectNames =
    | 'AutoPayload'
    | 'Comment'
    | 'File'
    | 'Message'
    | 'Mutation'
    | 'Post'
    | 'Query'
    | 'Room'
    | 'Subscription'
    | 'User';

  type NexusGenInputNames =
    | 'CommentWhereUniqueInput'
    | 'FileWhereUniqueInput'
    | 'MessageWhereUniqueInput'
    | 'PostWhereUniqueInput'
    | 'UserWhereUniqueInput';

  type NexusGenEnumNames = 'PostAction';

  type NexusGenInterfaceNames = never;

  type NexusGenScalarNames = 'Boolean' | 'DateTime' | 'Float' | 'ID' | 'Int' | 'String';

  type NexusGenUnionNames = never;
}
