import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { filterDefault, filterActive, filterSold } from "../../redux/actions"

import "./Filter.scss"

const Filter = () => {
    const dispatch = useDispatch()
    const [allChecked, setAllChecked] = useState(true)
    const [activeChecked, setActiveChecked] = useState(false)
    const [soldChecked, setSoldChecked] = useState(false)

    useEffect(() => {
        dispatch(filterDefault())
        if (allChecked) {
            dispatch(filterDefault())
        } else if (activeChecked) { 
            dispatch(filterActive())
        } else if (soldChecked) { 
            dispatch(filterSold())
        } 
    }, [allChecked, activeChecked, soldChecked])

    return (
        <div className="filter">
            Filters:
            <div className="checkboxes">
                <label>
                    <input 
                        type="checkbox" 
                        checked={allChecked} 
                        onChange={() => {
                            setAllChecked(!allChecked)
                            setActiveChecked(false)
                            setSoldChecked(false)
                        }}
                    />
                    All
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        checked={activeChecked} 
                        onChange={() => {
                            setActiveChecked(!activeChecked)
                            setAllChecked(false)
                            setSoldChecked(false)
                        }}
                    />
                    Active
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        checked={soldChecked} 
                        onChange={() => {
                            setSoldChecked(!soldChecked)
                            setActiveChecked(false)
                            setAllChecked(false)
                        }}
                    />
                    Sold
                </label>
            </div>
        </div>
    )
}

export default Filter