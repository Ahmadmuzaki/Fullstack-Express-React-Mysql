import React from 'react'
import { useParams } from 'react-router-dom';
const AmbilParam = () => {
    const { id } = useParams()
    return (
        <div>{id}</div>
    )
}

export default AmbilParam