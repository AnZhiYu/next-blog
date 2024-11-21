'use client'
import React  from "react"
import { useEffect, useState } from 'react';


export default function HomeTitle() {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/api/home');
        const result = await response.json();
        console.log('response', response)
        setData(result.message);
      };
  
      fetchData();
    }, []);

    return <div>{data}</div>
}