import Head from 'next/head'
import React from 'react';
import { GetServerSideProps } from 'next';


export const runtime = 'experimental-edge';



export default function Post({data,host}: any) {


  return (
    
   

          <>
             
             <Head>
                <meta property="og:type" content="article" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content={host}/>
    </Head>


                <div className="post-container">
                  
                <h1 dangerouslySetInnerHTML={{__html: data.title}}></h1>
                <img
                src={data.image}
                alt={data.title}
                />
                <article  dangerouslySetInnerHTML={{__html: data.content}}></article>
              </div>
           
           
          </>
        )
  
}

export const getServerSideProps: GetServerSideProps = async ({req,params}) => {
    const host = req.headers.host;
    const slug = params?.slug;
    const res = await fetch('https://newsdailymedia.com/api.php?id='+ encodeURI( slug  as string))
    const data  = await res.json()
    return {
        props: {
        data:data,
        host
        }
    }
}