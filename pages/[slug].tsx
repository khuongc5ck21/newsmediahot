import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GetServerSideProps } from 'next';
import {getPostAndMorePosts } from '../lib/api'




export default function Post({slug, host,data } :any) {
console.log(data);
  return (
    
      <>
        <div>
          {slug}
        </div>
      </>
    
  )
}


//////////////


export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
  preview = false,
  previewData,

}) => {

  const slug = params?.slug as string;

 
  const host = req.headers.host;
 
	

  const referringURL = req.headers?.referer || null;
  const domain_url = process.env.WORDPRESS_API_URL as string;
  const data = await getPostAndMorePosts(slug)

  return {
    props: {
      slug,
      host,
      data,
    }
  }
}
