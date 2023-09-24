import Head from 'next/head'
import React from 'react';
import { GetServerSideProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

export const runtime = 'experimental-edge';

function blog({data}:any) {
  console.log(data)

  return (
    
    <div className ="container">
        {data}

    </div>

    
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const endpoint = process.env.GRAPHQL_ENDPOINT as string;




  return {
    props: { endpoint }
  };
}

export default blog