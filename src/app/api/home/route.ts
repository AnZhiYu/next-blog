
// import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  console.log('request', request)
  // console.log('API endpoint hit!'); // 添加这行来确认API是否被调用
  return NextResponse.json({  message: 'Hello from GET!'})
  // return Response.json({ message: 'Hello from GET!' })
}


// export default function handler(req: NextApiRequest, res: NextApiResponse) {

//   console.log('NextApiRequest', req, res)
//   if (req.method === 'GET') {
//     res.status(200).json({ message: 'Hello from GET!' });
//   } else if (req.method === 'POST') {
//     const { name } = req.body; // 从请求体中获取数据
//     res.status(200).json({ message: `Hello, ${name}!` });
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }