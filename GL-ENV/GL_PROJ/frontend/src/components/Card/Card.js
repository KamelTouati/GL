import './Card.css'
import images from '../../assets/Images/index'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Card = ({ match, history }) => {
    let announceId = match.params.id
    let [announce, setAnnounce] = useState(null)

    useEffect(() => {
        getAnnounce()
    }, [announceId])


    let getAnnounce = async () => {
        if (announceId === 'new') return

        let response = await fetch(`/api/announces/${announceId}/`)
        let data = await response.json()
        setAnnounce(data)
    }

    let createAnnounce = async () => {
        fetch(`/api/announces/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(announce)
        })
    }


    let updateAnnounce = async () => {
        fetch(`/api/announce/${announceId}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(announce)
        })
    }


    let deleteAnnounce = async () => {
        fetch(`/api/announces/${announceId}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        history.push('/')
    }

    let handleSubmit = () => {
        console.log('NOTE:', announce)
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
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src={images[22]} />
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aissaoui Noureddine</p>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mathematic Cours</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, expedita ipsa iusto eos dolores labore nemo, laboriosam</p>
                        <div class="grid grid-cols-3">
                            <h5 class="col-span-2 font-bold">Mathematic</h5>
                            <h5 class="right-0 font-bold">Lycee</h5>
                        </div>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1500DA</h5>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Card