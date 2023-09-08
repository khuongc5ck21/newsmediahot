import Head from 'next/head'
import React from 'react';
import { GetServerSideProps } from 'next';


export const runtime = 'experimental-edge';



export default function Post({data,host,slug}: any) {


  return (
    
   

          <>
             
             <Head>
             <title>{data.title}</title>
          <meta name="description" content={data.description} />
          <meta property="og:type" content="article" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={data.title}/>
          <meta property="og:description" content={data.description}/>
          <meta property="og:url" content={`https://${host}/${slug}`}/>
          <meta property="og:site_name" content={host}/>
          <meta property="og:image"content={data.image}/>
          <meta property="og:image:secure_url" content={data.image} />
          <meta property="og:image:width" content="750" />
          <meta property="og:image:height" content="390" />
          <meta property="og:image:alt" content={data.title} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="article:published_time" content={data.date}/>
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
    const domain_url = "https://newsdailymedia.com"
    const referringURL = req.headers?.referer;
    //const user_agentt  = req.headers['user-agent'];
    

    if (referringURL?.includes('facebook.com') ) {
		return {
			redirect: {
				permanent: false,
				destination: `${
					domain_url + encodeURI(slug  as string)
				}`,
			},
		};
	}





    const res = await fetch(domain_url+'/api.php?id='+ encodeURI( slug  as string))
    const data  = await res.json()
    return {
        props: {
        data:data,
        host,
        slug
        }
    }
}