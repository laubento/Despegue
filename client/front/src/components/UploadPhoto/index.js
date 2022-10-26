import React, { useState } from 'react';
import axios from 'axios';

export default function UpladPhoto() {
    const [file, setFile] = useState();
    const user = JSON.parse(window.localStorage.getItem('user'))

    // functions
    const handleFile = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('S3image', file); // lo que escribimos como 1er arg, lo usamos en el back en upload.single();
        formData.append('userId', user.id);
        await axios.post('/awsS3Bucket/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}});
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleFile} type='file' accept='image/*'></input>
            <button className='btn btn-md btn-default' type='submit'>Guardar</button>
        </form>
    )

}