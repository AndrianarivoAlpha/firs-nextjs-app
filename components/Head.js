import React from 'react'
import Head from 'next/head'

const HeadComponent = ({title}) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{ title }</title>
        
      </Head>
    </>
  )
}

export default HeadComponent