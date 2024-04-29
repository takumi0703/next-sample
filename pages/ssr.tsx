
import Head from "next/head"
import { GetServerSideProps, NextPage, NextPageContext } from "next"

type SSRProps = {
  message: string
}

const SSR: NextPage<SSRProps> = (props) => {
  const {message} = props

  return (
    <>
      <Head>
        <title>SSR</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <div>
        <h1>SSRページだよ</h1>
        <p>{message}</p>
      </div>
    </>
  )
}

// SSGとは、getStaticProps: GetStaticProps の部分が変わっただけ
export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました`
  console.log(message)

  // ()ではなく、{}なの、注意だね
  return {
    props: {message}
  }
}

export default SSR