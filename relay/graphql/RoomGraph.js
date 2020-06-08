import { graphql } from 'react-relay';

export const GetAllRoomFragment = graphql`
fragment RoomGraph_GetAllRoomFragment on RoomList
@argumentDefinitions(
    count: {type: "Float!", defaultValue: 10}
    cursor: {type: "String!"}
) {
  allRooms(
        first: $count
        after: $cursor
    ) @connection(key: "GetAllRoomChatList_allRooms", filters: []) {
      edges {
        cursor
        node {
          _id
          id
          lastMessage
          title
          users {
            _id
            name
            phone
            email
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      statusCode
    }
  }
`;

export const GetAllRoom = graphql`
query RoomGraphGetAllRoomQuery ($count: Float!, $cursor: String!) {
    RoomGraphGetAllRoom {
      ...RoomGraph_GetAllRoomFragment @arguments(count: $count, cursor: $cursor)
    }
  }
`;

export const GetAllRoomPaging = graphql`
query RoomGraphGetAllRoomPagingQuery($count: Float!, $cursor: String!) {
  RoomGraphGetAllRoom {
    ...RoomGraph_GetAllRoomFragment @arguments(count: $count, cursor: $cursor)
  }
}
`;

export const CreateConnection = graphql`
  mutation RoomGraphCreateConnectionMutation($email: String!) {
    RoomGraphCreateRoom(email: $email) {
      basicResponse {
        message
        statusCode
      }
      room {
        cursor
        node {
          _id
          id
          lastMessage
          title
          users {
            _id
            name
            phone
            email
          }
        }
      }
    }
  }
`;

export const CreateMessage = graphql`
  mutation RoomGraphCreateMessageMutation($message: String!, $roomId: String!) {
    RoomGraphAddNewChat(message: $message, roomId: $roomId) {
      message
      statusCode
    }
  }
`;

export const ConnectVideoCall = graphql`
  query RoomGraphConnectVideoQuery($roomId: String!, $peerId: String!) {
    RoomGraphConnectVideo(roomId: $roomId, peerId: $peerId) {
      message
      statusCode
    }
  }
`;

export const GetAllMessageFragment = graphql`
fragment RoomGraph_GetAllMessageFragment on ChatList
@argumentDefinitions(
    count: {type: "Float!", defaultValue: 10}
    cursor: {type: "String!"}
) {
  allChat(
        last: $count
        before: $cursor
    ) @connection(key: "GetAllRoomChatList_allChat", filters: []) {
      edges {
        cursor
        node {
          _id
          id
          ownerId
          message
          ownerName
          createdAt
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      statusCode
    }
  }
`;

export const GetAllMessage = graphql`
query RoomGraphGetAllMessageQuery ($count: Float!, $cursor: String!, $roomId: String!) {
  RoomGraphGetAllMessage(roomId: $roomId) {
      ...RoomGraph_GetAllMessageFragment @arguments(count: $count, cursor: $cursor)
    }
  }
`;

export const GetAllMessagePaging = graphql`
query RoomGraphGetAllMessagePagingQuery($count: Float!, $cursor: String!, $roomId: String!) {
  RoomGraphGetAllMessage(roomId: $roomId) {
    ...RoomGraph_GetAllMessageFragment @arguments(count: $count, cursor: $cursor)
  }
}
`;

export const SubscriptionNewMessage = graphql`
  subscription RoomGraphChatAddedSubscription($roomId: String!) {
    chatAdded(roomId: $roomId) {
        cursor
        node {
          _id
          id
          ownerId
          message
          ownerName
          createdAt
        }
    }
  }
`;

export const SubscriptionNewRoom = graphql`
  subscription RoomGraphRoomAddedSubscription($clientId: String!) {
    roomAdded(clientId: $clientId) {
      cursor
      node {
        _id
        id
        lastMessage
        title
        users {
          _id
          name
          phone
          email
        }
      }
    }
  }
`;

export const SubscriptionVideoCall = graphql`
  subscription RoomGraphVideoCallSubscription($roomId: String!) {
    videoCall(roomId: $roomId) {
        rejectId
        peerId
    }
  }
`;

export const SubscriptionLastMessage = graphql`
  subscription RoomGraphLastMessageSubscription($clientId: String!) {
    updateLastMessage(clientId: $clientId) {
        lastMessage
        roomId
    }
  }
`;