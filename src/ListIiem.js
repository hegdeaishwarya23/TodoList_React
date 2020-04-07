import React from 'react'
import './Listitem.css'
import FlipMove from 'react-flip-move'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export default function ListIiem(props) {
    const items=props.items
    const listItems=items.map(item=>{
        return <div className='list' key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} 
                onChange={
                    (e)=>{
                        props.setUpdate(e.target.value,item.key)
                    }
                }/>
            <span>
                <FontAwesomeIcon className="faicons" icon='trash'
                 onClick={()=>props.deleteItem(item.key)}/>
            </span>
            </p>
            
        </div>
    })
    return (
        <div>
            <FlipMove duration={500} easing="ease-in-out">
            {listItems}
            </FlipMove>
        </div>
    )
}
