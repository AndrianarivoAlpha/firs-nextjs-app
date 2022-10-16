/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Layout from '../../components/Layout'
import HeadComponent from '../../components/Head'
import { FiMapPin } from 'react-icons/fi'

const ProfileUSer = ( { user } ) =>
{
  console.log( user );
  return (
    <Layout>
      <div className='container'>
        <HeadComponent title={ `${ user.firstName } || Profile` } />
        <div className="profile-card">
          <img
            className="card-img"
            src={ user.image }
            alt={ user.firstName }
          />

          <div className="name-address">
            <h1>
              { user.firstName } { user.lastName }
            </h1>
            <h2>
              <FiMapPin /> { user.address.address }
            </h2>
          </div>

          <div className="bio">
            <div className="bio-title">
              <p>email:</p>
              <p>city:</p>
              <p>state:</p>
              <p>country:</p>
              <p>phone:</p>
            </div>
            <div className="bio-bio">
              <a href={ `mailto:${ user.email }` }>
                <p>{ user.email }</p>
              </a>
              <p>{ user.address.city }</p>
              <p>{ user.address.state }</p>
              <p>America</p>
              <a href={ `tel:${ user.phone }` }>
                <p>{ user.phone }</p>
              </a>
            </div>
          </div>

        </div>
      </div>

    </Layout>

  )
}

// This function gets called at build time
export async function getStaticPaths ()
{
  // Call an external API endpoint to get posts
  const res = await fetch( 'https://dummyjson.com/users' )
  const fetchedData = await res.json()
  const usersData = await fetchedData.users

  // Get the paths we want to pre-render based on posts
  const paths = usersData.map( ( user ) => (
    {
      params: {
        id: user.id.toString()
      }
    } ) )

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ( { params } )
{
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch( `https://dummyjson.com/users/${ params.id }` )
  const user = await res.json()

  // Pass post data to the page via props
  return { props: { user } }
}

export default ProfileUSer