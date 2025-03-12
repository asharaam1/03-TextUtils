import React from 'react'
import './btn.css'
function Btn({ title, func }) {


    return (
        <div>
            <button onClick={func} className='buttonStyle'>{title}</button>
        </div>
    )
}

export default Btn