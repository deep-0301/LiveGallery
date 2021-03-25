import React, { Component, useState } from 'react';
import Progressbar from './Progressbar'

const UploadFrom = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpg', 'image/webp', 'image/jpeg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        else {
            setFile(null);
            setError('please select an image file(png or jpg)');
        }

    }

    return (
        <>
            <form>
                <label>
                    <input type='file' onChange={changeHandler} />
                    <span>+</span>
                </label>
                <div className='output'>
                    {error && <div className='error'>{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <Progressbar file={file} setFile={setFile} />}

                </div>
            </form>
        </>
    );
}

export default UploadFrom;