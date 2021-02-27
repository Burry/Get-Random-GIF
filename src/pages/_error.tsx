import { NextPage } from 'next'
import { ErrorProps } from 'next/error'
import Error from '../components/Error'

const ErrorPage: NextPage<ErrorProps> = ({ statusCode, title }) => (
    <Error statusCode={statusCode} title={title} />
)

ErrorPage.getInitialProps = ({ res, err }) => {
    let statusCode
    if (res) statusCode = res.statusCode
    else if (err) statusCode = err.statusCode
    return { statusCode: statusCode || 500 }
}

export default ErrorPage
