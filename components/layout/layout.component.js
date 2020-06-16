import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export const Layout = ({ children, title = '', description }) => {
    return (
        <div className='container'>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <nav>
                <Link href='/'>
                    <a><span className='main-title'>Hacker News</span></a>
                </Link>
            </nav>
            {children}
            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: auto;
                    background: #f6f6ef;
                }
                nav {
                    background: #f60;
                    padding: 1em;
                }
                nav > * {
                    display: inline-block;
                    color: black;
                }
                nav a {
                    text-decoration: none;
                }
                .main-title {
                    font-weight: bold;
                }
            `}</style>
            <style global jsx>{`
                body {
                    background: white;
                    font-family: Verdana, Geneva, sans-serif;
                }
            `}</style>
        </div>
    )
}

export default Layout;
