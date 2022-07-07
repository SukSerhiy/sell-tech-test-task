import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://152.228.215.94:81/api'
});

const authenticate = async () => {
  const result = await fetch('http://152.228.215.94:81/auth/login', {
    body: "{\"email\":\"test@test.com\", \"password\":\"1234567Qa\"}",
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
  return await result.json();
}

let token: string, tokenDate: number, expiresIn: number;

const authLink = setContext((_, { headers }) => {
  const getHeadersWithToken = (token: string) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  });
  if (token && tokenDate && expiresIn) {
    const now = new Date();
    const expireDate = new Date(tokenDate + expiresIn)
    if (now.getTime() < expireDate.getTime()) {
      return getHeadersWithToken(token);
    }
  } else {
    return authenticate().then((data) => {
      token = data.accessToken;
      tokenDate = new Date().getTime();
      expiresIn = data.expiresIn;
      return getHeadersWithToken(token);
    })
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client;
