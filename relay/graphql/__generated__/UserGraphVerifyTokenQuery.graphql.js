/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserGraphVerifyTokenQueryVariables = {||};
export type UserGraphVerifyTokenQueryResponse = {|
  +UserGraphVerifyToken: {|
    +token: string,
    +refreshToken: ?string,
    +user: {|
      +name: string,
      +email: string,
      +phone: number,
    |},
  |}
|};
export type UserGraphVerifyTokenQuery = {|
  variables: UserGraphVerifyTokenQueryVariables,
  response: UserGraphVerifyTokenQueryResponse,
|};
*/


/*
query UserGraphVerifyTokenQuery {
  UserGraphVerifyToken {
    token
    refreshToken
    user {
      name
      email
      phone
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UserPayload",
    "kind": "LinkedField",
    "name": "UserGraphVerifyToken",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "refreshToken",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phone",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserGraphVerifyTokenQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserGraphVerifyTokenQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UserGraphVerifyTokenQuery",
    "operationKind": "query",
    "text": "query UserGraphVerifyTokenQuery {\n  UserGraphVerifyToken {\n    token\n    refreshToken\n    user {\n      name\n      email\n      phone\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1cda857208493edbaec2fbb5c40baae1';

module.exports = node;
