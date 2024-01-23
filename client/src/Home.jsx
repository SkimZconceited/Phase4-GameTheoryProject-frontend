import React from "react";
// import { useEffect, useState } from 'react';

function Home() {
  // const [info, setInfo] = useState({})

  // useEffect(() => {
  //     fetch('http://127.0.0.1:5555')
  //     .then(res => res.json())
  //     .then(data => {
  //     setInfo(data)
  // })
  // }, [])

  // console.log(typeof(info))
  // console.log(info.name)

  return (
    <div>
      {/* <p>The data is: {info.name}</p> */}
      <p>Hello web developer!</p>
      <p>
        Dont delete the commented code it will be used to connect our server!
        Next branch to this is 'developer'
      </p>
    </div>
  );
}

export default Home;
