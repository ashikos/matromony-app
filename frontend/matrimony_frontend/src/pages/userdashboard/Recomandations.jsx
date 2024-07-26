import React, { useState } from 'react'
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/SyncLoader";
import Loader from '../../components/widgets/Loader';



const Recomandations = () => {

  const [message, setMessage] = useState("this is first message")
  const isSender = true
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("red");


  return (

    <>
      <Loader />
    </>

  )
}

export default Recomandations