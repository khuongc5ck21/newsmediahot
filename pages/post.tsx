import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { getAllPostsForHome } from '../lib/api'


export default function Index({ allPosts, preview }) {
 
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
