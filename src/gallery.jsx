import React from 'react'
import Item from './item'
import { postings } from './postings'

function Gallery() {
    console.log(postings)
    return (
        <div style={{padding: '50px'}}>
            <div>
                <select>
                    <option value={'gallery'}>gallery</option>
                </select>
            </div>
            <div></div>
        <h1>Gallery</h1>
        <div>
            {postings.map((data, i) => < Item data={data} key={i} />)}
        </div>
        </div>


    )
}

export default Gallery