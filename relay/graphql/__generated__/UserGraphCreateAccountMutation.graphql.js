/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserInput = {|
  name: string,
  password: string,
  email: string,
  phone: number,
|};
export type UserGraphCreateAccountMutationVariables = {|
  input: CreateUserInput
|};
export type UserGraphCreateAccountMutationResponse = {|
  +UserGraphSignUp: {|
    +token: string,
    +refreshToken: ?string,
    +user: {|
      +name: string,
      +email: string,
      +phone: number,
    |},
  |}
|};
export type UserGraphCreateAccountMutation = {|
  variables: UserGraphCreateAccountMutationVariables,
  response: UserGraphCreateAccountMutationResponse,
|};
*/


/*
mutation UserGraphCreateAccountMutation(
  $input: CreateUserInput!
) {
  UserGraphSignUp(input: $input) {
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateUserInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserPayload",
    "kind": "LinkedField",
    "name": "UserGraphSignUp",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserGraphCreateAccountMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserGraphCreateAccountMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UserGraphCreateAccountMutation",
    "operationKind": "mutation",
    "text": "mutation UserGraphCreateAccountMutation(\n  $input: CreateUserInput!\n) {\n  UserGraphSignUp(input: $input) {\n    token\n    refreshToken\n    user {\n      name\n      email\n      phone\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f0ff08f67c644bfcd8983e2f0fef65e0';

module.exports = node;
