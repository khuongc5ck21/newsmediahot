import Head from 'next/head'
import React from 'react';
import { GetServerSideProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

//export const runtime = 'experimental-edge';

function blog({endpoint}:any) {
  console.log(endpoint);
  

  return (
    
    <div className ="container">

    {endpoint}
    </div>

    
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const endpoint = process.env.GRAPHQL_ENDPOINT as string;
  //const graphQLClient = new GraphQLClient(endpoint);







  return {
    props: {endpoint}
  };
}

export default blog