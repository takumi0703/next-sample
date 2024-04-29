
import Head from "next/head"
import { GetStaticProps, NextPage, NextPageContext } from "next"
import Link from "next/link"
import Image from "next/image"

type SSGProps = {
  message: string
}

const SSG: NextPage<SSGProps> = (props) => {
  const {message} = props

  return (
    <>
      <Head>
        <title>SSG</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <div>
        <h1>SSGページだよ</h1>
        {/* Linkコンポーネントを使って、リンクを作成 */}
        {/* 必要なデータをあらかじめ非同期で取得しているため、aタグを利用するより高速 */}
        <Link href="/ssr">
          SSRに行きます
        </Link>
        {/* Imageも同様、サーバー側で読み込みが行われ、高速に表示できるらしい */}
        <Image src="/next.svg" alt="Next.js Logo" width={200} height={300} />
        <p>{message}</p>
      </div>
    </>
  )
}

// ビルド時に getStaticProps が実行される。
// 実行後のpropsは、本ファイルのメインのコンポーネントに渡される。
// contextは、ビルド時に受け取れる引数(サンプルコードでは使用されていない)
// export と async は必須なので、下記の記述は毎回同じ。なはず。(変数名も意味がある)
// export const getStaticProps: GetStaticProps<> = async (context) => {

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました`
  console.log(message)

  // ()ではなく、{}なの、注意だね
  return {
    props: {message}
  }
}

export default SSG