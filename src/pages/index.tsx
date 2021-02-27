import { GetServerSideProps } from 'next'
import { ErrorProps } from 'next/error'
import { ServerResponse } from 'http'
import { ParsedUrlQuery } from 'querystring'
import { URLSearchParams } from 'url'
import authError from '../lib/authError'
import Error from '../components/Error'

const Index: React.FC<ErrorProps> = ({ statusCode, title }) => (
    <Error statusCode={statusCode} title={title} />
)

export default Index

type Query = ParsedUrlQuery & {
    rendition?: string
}

export const getServerSideProps: GetServerSideProps = async ({
    res,
    query: {
        rendition = process.env.GIPHY_RENDITION || 'original',
        ...customParams
    }
}: {
    res: ServerResponse
    query: Query
}) => {
    const throwError = (statusCode = 502, statusMessage = 'Bad Gateway') => {
        if (res) {
            res.statusCode = statusCode
            res.statusMessage = statusMessage
        }
        return {
            props: {
                statusCode,
                title: statusMessage
            }
        }
    }

    let gifUrl: string

    try {
        // Check for API key
        const apiKey = process.env.GIPHY_API_KEY
        if (!apiKey) {
            const statusMessage = `${authError.prefix}${authError.param}${authError.suffix} ${authError.link}`
            return throwError(401, statusMessage)
        }

        // Build request
        const endpoint = 'http://api.giphy.com/v1/gifs/random'
        const params = {
            api_key: process.env.GIPHY_API_KEY,
            tag: process.env.GIPHY_TAG ?? 'success',
            rating: process.env.GIPHY_RATING ?? 'g',
            ...customParams
        }
        const requestUrl = `${endpoint}?${new URLSearchParams(
            params
        ).toString()}`

        // Make request
        const gifRes = await fetch(requestUrl)
        if (!gifRes.ok) return throwError(gifRes.status, gifRes.statusText)
        const gifJson = await gifRes.json()

        // Set GIF URL
        gifUrl = gifJson.data.images[rendition].url
    } catch (error) {
        return throwError(500, error.message)
    }

    return {
        redirect: {
            destination: gifUrl,
            permanent: false
        }
    }
}
