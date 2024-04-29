
// SSGとSSRのいいとこ取り君
import Head from "next/head"
import { GetStaticProps, NextPage, NextPageContext } from "next"

type ISRProps = {
  message: string
}

const ISR: NextPage<ISRProps> = (props) => {
  const {message} = props

  return (
    <>
      <Head>
        <title>ISR</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <div>
        <h1>ISRページだよ</h1>
        <p>{message}</p>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました`
  console.log(message)

  // revalidateに指定した秒数間は、キャッシュを使い続け
  // 指定した秒数を過ぎた後に、リロード(リクエスト)があった場合に、サーバーに通信を行う(10後自動で通信されるわけではない)
  return {
    props: {message},
    revalidate: 10
  }
}

export default ISR