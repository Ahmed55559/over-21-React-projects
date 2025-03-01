import React, { useCallback, useState } from 'react';
import data from './data';
import './accordian.css';

function Accordian() {
    const [selected, setSelected] = useState([]);
    const [multiple, setMultiple] = useState(false);
    const handleSelection = useCallback((getCurrentId) => {
        if (multiple === false) {
            setSelected(selected.includes(getCurrentId) ? [] : [getCurrentId])
        } else {
            setSelected(selected.includes(getCurrentId) ? selected.filter(id => id !== getCurrentId) : [...selected, getCurrentId])
        }
    }, [selected,multiple])

    return (
        <div className="wrapper">
            <div className='header'>
            <h1>Accordian</h1>
            <button className="accordian" onClick={()=>setMultiple(!multiple)}> Multiple Selection {multiple === true ? 'on' : 'off'}</button>
            </div>
            {data && data.length > 0 ? (
                data.map(item => {
                    return (<div key={item.id} className="item">
                        <div className="title" onClick={() => handleSelection(item.id)}>
                            <h3>{item.title}</h3>
                            <span>{selected.includes(item.id) ? '-' : '+'}</span>
                        </div>
                        {selected.includes(item.id) ? <div className={`content ${selected.includes(item.id) ? 'show' : ''}`}>
                            <p>{item.content}</p>
                        </div> : null
                        }
                    </div>
                    )
                })
            ) : <p>No data found</p>}
        </div>
    )
}

export default Accordian;