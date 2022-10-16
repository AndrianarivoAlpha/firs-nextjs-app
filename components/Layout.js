import React from 'react'
import Link from 'next/link'
import HeadComponent from './Head'

const Layout = ( { children } ) =>
{
    const siteTitle = "Welcome to my site..."
    return (
        <div>
            <HeadComponent title="Home" />
            <header>
                <Link href="/">
                    <a><h1>Home</h1></a>
                </Link>
            </header>
            <main>
                { children }
            </main>
        </div>
    )
}

export default Layout