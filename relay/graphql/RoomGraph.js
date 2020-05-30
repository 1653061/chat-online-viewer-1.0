import { graphql } from 'react-relay';

// export const GetAllRoomFragment = graphql`
// fragment RoomGraph_GetAllRoomFragment on RoomsViewer
// @argumentDefinitions(
//     count: {type: "Float!", defaultValue: 10}
//     cursor: {type: "String!"}
// ) {
//   allRooms(
//         first: $count
//         after: $cursor
//     ) @connection(key: "GetAllRoomChatList_allRooms") {
//       edges {
//         cursor
//         node {
//           id
//           lastMessage
//           title
//           users {
//             name
//             phone
//             email
//           }
//         }
//       }
//       pageInfo {
//         hasPreviousPage
//         hasNextPage
//         startCursor
//         endCursor
//       }
//       statusCode
//     }
//   }
// `;

export const GetAllRoom = graphql`
query RoomGraphGetAllRoomQuery ($count: Float!, $cursor: String!) {
  RoomGraphGetAllRoom(
        first: $count
        after: $cursor
    ) {
      edges {
        cursor
        node {
          _id
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

// export const GetAllRoomPaging = graphql`
// query RoomGraphGetAllRoomPagingQuery($count: Float!, $cursor: String!) {
//     RoomGraphGetAllRoom(
//         first: $count
//         after: $cursor
//       ) {
//         ...RoomGraph_GetAllRoomFragment@arguments(count: $count, cursor: $cursor)
//       }
//     }
// `;

export const CreateConnection = graphql`
  mutation RoomGraphCreateConnectionMutation($email: String!) {
    RoomGraphCreateRoom(email: $email) {
      message
      statusCode
    }
  }
`;