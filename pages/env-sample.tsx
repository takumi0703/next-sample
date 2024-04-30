import { GetServerSideProps, NextPage } from "next";

type Props = {
  process: string;
}
const EnvSample: NextPage<Props> = (props) => {
  // サーバーのみなので、この関数内で、process.env.TEST として呼び出すことはできない
  console.log(process.env.NEXT_PUBLIC_TEST);

  return (
    <div>
      <h1>EnvSample</h1>
      <p>process.env.TEST: {props.process}</p>
      <p>process.env.NEXT_PUBLIC_TEST: {process.env.NEXT_PUBLIC_TEST}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {props: {process: process.env.TEST}}
}

export default EnvSample;

