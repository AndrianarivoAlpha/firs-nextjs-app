/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FiMapPin } from 'react-icons/fi'
import Layout from '../components/Layout'
import Users from '../components/Users';

export default function Home ( { usersData } )
{

  return (
    <Layout>
      <Users usersData={ usersData }/>
    </Layout>
  )
}

export async function getServerSideProps ()
{
  // Fetch data from external API
  const res = await fetch( `https://dummyjson.com/users/?limit=10` )
  const usersData = await res.json()

  // Pass data to the page via props
  return { props: { usersData } }
}