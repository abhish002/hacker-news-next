import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang='en'>
                <Head>                    
                    <link rel="manifest" href="/manifest.json" />

                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="application-name" content="hacker-news" />
                    <meta name="apple-mobile-web-app-title" content="hacker-news" />
                    <meta name="theme-color" content="#f60" />
                    <meta name="msapplication-navbutton-color" content="#f60" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="msapplication-starturl" content="/" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
                    <link
                        href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
                        rel='stylesheet'
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>{`
                    body {
                        font-family: 'Open Sans', sans-serif;
                    }
                `}</style>
            </html>
        )
    }
}

