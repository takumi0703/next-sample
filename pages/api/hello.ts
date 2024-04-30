import { NextApiRequest, NextApiResponse } from "next";

type HelloResponse = {
  name: string;
}

// NextApiRequestとNextApiResponseはAPIリクエストとレスポンスを扱うための基本的な型
const handler = (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  res.status(200).json({ name: 'John Doe' });
}

export default handler;