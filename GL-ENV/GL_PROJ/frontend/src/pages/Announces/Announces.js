import './Announces.css';
import {UserNavbar, Card, Footer} from '../../components/index'
import React, { useState, useEffect } from 'react'
import images from '../../assets/Images/index'

function Announces() {
  let [announces, setAnnounces] = useState([])

    useEffect(() => {
        getAnnounces()
    }, [])


    let getAnnounces = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/announces/')
        let data = await response.json()
        setAnnounces(data)
    }
  return (
    <>
      <UserNavbar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[50px] m-[50px]">
        {announces.map((announce, index) => (
          <Card key={index} announce={announce}/>
        ))}
      </div>
      <Footer />
    </>
  );
}
  
export default Announces;