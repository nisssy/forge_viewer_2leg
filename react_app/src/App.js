
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';


const App = () => {
  const [url, setUrl] = useState()
  const [disable, setDisable] = useState(true)
  useEffect(() => {
    if(typeof url !== 'undefined') {
      setDisable(false)
    }
  },[url])
  const handlePress = () => {
    axios.get(`http://localhost:8080/`)
      .then(res => {
        const data = res.data;
        const url = `http://localhost:8080/viewer?accessToken=${data.access_token}&urn=${data.urn}`
        console.log(data)
        setUrl(url);
      })
  }
  const handlePress2 = () => {
    window.location.href = url;
  }
  return (
    <div className="default">
      <div className="container">
        <p className="title">
          ForgeViewer
        </p>
        <div className="buttonGroup">
          <Button variant="contained" color="primary" onClick={handlePress}>
            Get URL
          </Button>
          <div className="margin"></div>
          <Button variant="contained" color="primary" onClick={handlePress2} disabled={disable}>
            Start
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
