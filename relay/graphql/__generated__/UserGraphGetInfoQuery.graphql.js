/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserGraphGetInfoQueryVariables = {||};
export type UserGraphGetInfoQueryResponse = {|
  +UserGraphGetInfo: {|
    +name: string,
    +email: string,
    +phone: number,
  |}
|};
export type UserGraphGetInfoQuery = {|
  variables: UserGraphGetInfoQueryVariables,
  response: UserGraphGetInfoQueryResponse,
|};
*/


/*
query UserGraphGetInfoQuery {
  UserGraphGetInfo {
    name
    email
    phone
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "UserGraphGetInfo",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserGraphGetInfoQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserGraphGetInfoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UserGraphGetInfoQuery",
    "operationKind": "query",
    "text": "query UserGraphGetInfoQuery {\n  UserGraphGetInfo {\n    name\n    email\n    phone\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bebf880f47b8fc8bf28e43b6689ec298';

module.exports = node;
