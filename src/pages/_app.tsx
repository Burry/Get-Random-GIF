import { AppProps } from 'next/app'
import Head from 'next/head'
import 'normalize.css'

const title = 'Get Random GIF'
const description = 'Redirect to a random GIF on GIPHY'
const brandColor = '#FF0000'
const hostname = 'https://gif.burry.dev'
const homepage = 'https://grantburry.com'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content={brandColor} />
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={hostname} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image" content={`${homepage}/open-graph.png`} />
            {/* Favicons */}
            {[16, 32].map(size => {
                const dimensions = `${size}x${size}`
                return (
                    <link
                        key={size}
                        rel="icon"
                        type="image/png"
                        sizes={dimensions}
                        href={`${homepage}/favicon-${dimensions}.png`}
                    />
                )
            })}
            {/* Apple */}
            <link
                rel="apple-touch-icon"
                sizes="300x300"
                href={`${homepage}/apple-touch-icon.png`}
            />
            <link
                rel="mask-icon"
                href={`${homepage}/safari-pinned-tab.svg`}
                color={brandColor}
            />
        </Head>
        <Component {...pageProps} />
        <style jsx global>
            {`
                html,
                body {
                    height: 100vh;
                }

                body {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font: 16px/1.5 -apple-system, BlinkMacSystemFont,
                        avenir next, avenir, helvetica neue, helvetica, Ubuntu,
                        roboto, noto, segoe ui, arial, sans-serif;
                }

                main {
                    width: 100%;
                    max-width: 600px;
                    margin: 1rem;
                }

                section {
                    padding: 1rem;
                    border: solid 1px #f00;
                    border-radius: 0.5rem;
                }

                code {
                    font-family: SFMono-Regular, Menlo, Consolas, Monaco,
                        Liberation Mono, Lucida Console, Courier, monospace;
                }
            `}
        </style>
    </>
)

export default App
