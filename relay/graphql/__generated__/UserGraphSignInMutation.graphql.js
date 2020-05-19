/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInUserInput = {|
  email: string,
  password: string,
|};
export type UserGraphSignInMutationVariables = {|
  input: SignInUserInput
|};
export type UserGraphSignInMutationResponse = {|
  +UserGraphSignIn: {|
    +token: string,
    +refreshToken: ?string,
    +user: {|
      +name: string,
      +email: string,
      +phone: number,
    |},
  |}
|};
export type UserGraphSignInMutation = {|
  variables: UserGraphSignInMutationVariables,
  response: UserGraphSignInMutationResponse,
|};
*/


/*
mutation UserGraphSignInMutation(
  $input: SignInUserInput!
) {
  UserGraphSignIn(input: $input) {
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
    "type": "SignInUserInput!"
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
    "name": "UserGraphSignIn",
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
    "name": "UserGraphSignInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserGraphSignInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UserGraphSignInMutation",
    "operationKind": "mutation",
    "text": "mutation UserGraphSignInMutation(\n  $input: SignInUserInput!\n) {\n  UserGraphSignIn(input: $input) {\n    token\n    refreshToken\n    user {\n      name\n      email\n      phone\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '21301f8377b6569f0dff5dc16d0a29f4';

module.exports = node;
