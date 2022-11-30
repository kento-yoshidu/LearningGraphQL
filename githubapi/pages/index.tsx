import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

/*
query contributions {
  user(login: "kento-yoshidu") {
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }
  }
}
*/

const Home: NextPage = ({ result }) => {
  const { data: { locations } } = result

  return (
    <>
      {Array.from(locations).map((location) => (
        <div key={location.id}>
          <p>{location.id}</p>
          <p>{location.name}</p>
          <p>{location.description}</p>
        </div>
      ))}
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  const client = new ApolloClient({
    // uri: "https://api.github.com/graphql",
    uri: 'https://flyby-gateway.herokuapp.com/',
    cache: new InMemoryCache(),
  });


  const result = await client
    .query({
      query: gql`
        query GetLocations {
          locations {
            id
            name
            description
          }
        }
      `,
    })

  return {
    props: { result }
  }
}

/* https://zenn.dev/ksyunnnn/scraps/9ee679c5b288fd */
