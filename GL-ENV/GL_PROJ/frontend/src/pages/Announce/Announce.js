import './Announce.css';
import {UserNavbar, Card, Footer} from '../../components/index'
import images from '../../assets/Images/index'
import React, { useState, useEffect } from 'react'
  
  const Announce = ({ match, history }) => {
    let announceId = match.params.id
    let [announce, setAnnounce] = useState(null)

    useEffect(() => {
        getAnnounce()
    }, [announceId])


    let getAnnounce = async () => {
        if (announceId === 'new') return

        let response = await fetch(`http://127.0.0.1:8000/api/announces/${announceId}/`)
        let data = await response.json()
        setAnnounce(data)
    }

    let createAnnounce = async () => {
        fetch(`http://127.0.0.1:8000/api/announces/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(announce)
        })
    }


    let updateAnnounce = async () => {
        fetch(`http://127.0.0.1:8000/api/announce/${announceId}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(announce)
        })
    }


    let deleteAnnounce = async () => {
        fetch(`http://127.0.0.1:8000/api/announces/${announceId}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        history.push('/')
    }

    let handleSubmit = () => {
        console.log('announce:', announce)
        if (announceId !== 'new' && announce.body == '') {
            deleteAnnounce()
        } else if (announceId !== 'new') {
            updateAnnounce()
        } else if (announceId === 'new' && announce.body !== null) {
            createAnnounce()
        }
        history.push('/')
    }

    let handleChange = (value) => {
        setAnnounce(announce => ({ ...announce, 'body': value }))
        console.log('Handle Change:', announce)
    }
    return (
      <>
        <UserNavbar />
        
        <Footer />
      </>
    );
  }
  
export default Announce;