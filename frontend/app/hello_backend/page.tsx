'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page() {
  const [data,setData] = useState({message: ''})

  useEffect(() => {
    // アクセスするのはホストのブラウザから。
    // ホスト側のローカルホストにポートフォワードされたbackendに向かってAPIを投げる
    axios.get('http://localhost:8000/api/hello/backend/')
    .then((res) => res.data)
    .then((data) => {
      setData(data)
    })
  })

  return <div>hello {data.message}!</div>
}
