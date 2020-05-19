import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import fetch from 'isomorphic-unfetch'

let relayEnvironment = null

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
  }).then(response => response.json())
}

export default function initEnvironment ({ records = {} } = {}) {
  const network = Network.create(fetchQuery)
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