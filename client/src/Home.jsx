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
        This is the branch developer and it is our base branch next to main
        until development, so this is where we will be merging the
        'testing-that-test' so use what in here.!
      </p>
      <p>MAKE SURE YOU CHECK THE BRANCH IN YOUR TERMINAL!</p>
    </div>
  );
}

export default Home;
