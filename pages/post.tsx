import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getAllPostsForHome } from '../lib/api'

export const runtime = 'experimental-edge';

export default function Index({ allPosts, preview }: any ) {
 
  console.log(allPosts)
  return (
      <>
        <div>

        </div>
      </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    
  }
}
