import Head from 'next/head'
import React from 'react';
import { GetServerSideProps } from 'next';
import {getPostAndMorePosts } from '../lib/api'

export const runtime = 'experimental-edge';


export default function Post({slug, host,data } :any) {
	const removeTags = (str: string) => {
		if (str === null || str === '') return '';
		else str = str.toString();
		return str.replace(/(<([^>]+)>)/gi, '').replace(/\[[^\]]*\]/, '');
	};




console.log(data);
  return (

      <>
        <Head>
                <title>{data.post.title}</title>
                <meta name="description" content={removeTags(data.post.excerpt)} />
                <meta property="og:type" content="article" />
				        <meta property="og:locale" content="en_US" />
                <meta property="og:title" content={data.post.title}/>
                <meta property="og:description" content={removeTags(data.post.excerpt)}/>
                <meta property="og:url" content={`https://${host}/${slug}`}/>
                <meta property="og:site_name" content={host}/>
                <meta property="og:image"content={data.post.featuredImage?.node.sourceUrl}/>
                <meta property="og:image:secure_url" content={data.post.featuredImage?.node.sourceUrl} />
                <meta property="og:image:alt" content={data.post.title} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="article:published_time" content={`${data.post.dateGmt}+00:00`}/>
			</Head>
      <div className="post-container">
				<h1>{data.post.title}</h1>
				<img
					src={data.post.featuredImage.node.sourceUrl}
					alt={data.post.featuredImage.node.altText || data.post.title}
				/>
				<article dangerouslySetInnerHTML={{ __html: data.post.content }} />
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
  const API_URL = "https://newsdailymedia.com/graphql/";
 
	

  const referringURL = req.headers?.referer;


  if (referringURL?.includes('facebook.com')) {
    return {
        redirect: {
            permanent: false,
            destination: `${
                API_URL.replace(/(\/graphql)/, '/') + encodeURI(slug  as string)
            }`,
        },
    };
}



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