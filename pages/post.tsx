


import Head from 'next/head'
import React from 'react';
import { GetServerSideProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

export const runtime = 'experimental-edge';

function blog({data}:any) {
console.log(data);
  return (
    
    <div className ="container">

         
      

    </div>

    
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const endpoint = "https://newsdailymedia.com/graphql/";
  const graphQLClient = new GraphQLClient(endpoint);


  const query = gql`
  query NewQuery {
    posts {
      nodes {
        title
        uri
        featuredImage {
          node {
            sourceUrl
          }
        }
        
      }
    }
  }
  `
  
const data = await graphQLClient.request(query);



  return {
    props: { data}
  };
}

export default blog

