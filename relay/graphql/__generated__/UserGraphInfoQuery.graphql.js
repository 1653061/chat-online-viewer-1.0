/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserGraphInfoQueryVariables = {||};
export type UserGraphInfoQueryResponse = {|
  +UserGraphInfo: {|
    +message: string,
    +statusCode: number,
  |}
|};
export type UserGraphInfoQuery = {|
  variables: UserGraphInfoQueryVariables,
  response: UserGraphInfoQueryResponse,
|};
*/


/*
query UserGraphInfoQuery {
  UserGraphInfo {
    message
    statusCode
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicResponse",
    "kind": "LinkedField",
    "name": "UserGraphInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "message",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "statusCode",
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
    "name": "UserGraphInfoQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserGraphInfoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UserGraphInfoQuery",
    "operationKind": "query",
    "text": "query UserGraphInfoQuery {\n  UserGraphInfo {\n    message\n    statusCode\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1d39b72352957265a990d9b562be3c0b';

module.exports = node;
