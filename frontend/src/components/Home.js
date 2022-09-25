
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [id, setId] = useState()
    const [mahasiswa, setMahasiswa] = useState([])
    // const { paramId } = useParams()

    useEffect(() => {
        axios.get('http://localhost:4000/mahasiswa')
            .then(res => {
                setMahasiswa(res.data)
            })
    }, [])

    function handleSubmit() {
        axios.delete(`http://localhost:4000/mahasiswa/${id}`)
            .then(res => {
                alert(res.message);
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="nama" onChange={(e) => setId(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {mahasiswa.map((data, index) => (
                <p key={index}>{data.name}</p>
            ))}
        </div>
    )
}

export default Home

