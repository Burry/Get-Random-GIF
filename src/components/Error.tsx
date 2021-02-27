import Head from 'next/head'
import { ErrorProps } from 'next/error'
import authError from '../lib/authError'

const friendlyError = (statusCode: ErrorProps['statusCode']) => {
    switch (statusCode) {
        case 401:
            return authError.title
        case 404:
            return 'Not Found'
        case 400:
            return 'Bad Request'
        case 500:
            return 'Server Error'
        default:
            return 'Unknown Error'
    }
}

const Error: React.FC<ErrorProps> = ({ statusCode, title }) => {
    const isAuthError = statusCode === 401
    const message = title || friendlyError(statusCode)
    const statusTitle = `${statusCode} Error`
    return (
        <>
            <Head>
                <title>{statusTitle}</title>
            </Head>
            <main>
                <h1>{statusTitle}</h1>
                <section>
                    {isAuthError ? (
                        <>
                            {authError.title}
                            {'. '}
                            {authError.prefix}
                            <code>{authError.param}</code>
                            {authError.suffix}
                            <br />
                            <br />
                            <a
                                href={authError.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {authError.link}
                            </a>
                            <br />
                            <br />
                            <img src="https://media.giphy.com/media/lvQe7YwEEJoaIluvs6/source.gif" />
                        </>
                    ) : (
                        message
                    )}
                </section>
            </main>
        </>
    )
}

export default Error
