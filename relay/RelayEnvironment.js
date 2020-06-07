import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { execute } from 'apollo-link'
import { SubscriptionClient, addGraphQLSubscriptions} from 'subscriptions-transport-ws'
import { WebSocketLink } from 'apollo-link-ws'
import fetch from 'isomorphic-unfetch'
import ws from 'websocket'

let relayEnvironment = null

const subscriptionClient = new SubscriptionClient(process.env.SOCKET_GRAPHQL_ENDPOINT, {
  reconnect: true
}, ws.client)

const subscriptionLink = process.browser ? new WebSocketLink(subscriptionClient) : null;

const networkSubscriptions = (operation, variables) =>
  execute(subscriptionLink, {
    query: operation.text,
    variables,
    operationName: operation.name,
  })

function fetchQuery (
    operation,
    variables,
    cacheConfig,
    uploadables,
) {
  return fetch(process.env.GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
      refreshtoken: `Bearer ${localStorage.getItem('refreshToken')}`,
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => response.json()).then(responeJson => {
    if (responeJson.errors) {
      throw responeJson.errors[0].message;
    }
    return responeJson
  })
}

export default function initEnvironment ({ records = {} } = {}) {
  const network = Network.create(fetchQuery, networkSubscriptions)
  const store = new Store(new RecordSource(records))

  if (!process.browser) {
    return new Environment({
      network,
      store
    })
  }

  if (!relayEnvironment) {
    relayEnvironment = new Environment({
      network,
      store
    })
  }

  return relayEnvironment
}