import Head from 'next/head'
import React from 'react';
import { GetServerSideProps } from 'next';
import { getAllPostsForHome } from '../lib/api'

export const runtime = 'experimental-edge';
export default function Index({ allPosts, preview }:any) {
 
console.log(allPosts)
    return (
      <div className ="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {allPosts.edges.map((allPosts:any) => (
      
      <div className ="container_conten" key={allPosts.node.slug} >
            <div className ="left">
              <img src={allPosts.node.featuredImage?.node.sourceUrl}/>
            </div>

            <div className="right">
                  <a href={allPosts.node.slug}> {allPosts.node.title}</a>
              </div>
              <div className="clear"></div>
      </div>
      
    ))}

    </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    
  }
}
