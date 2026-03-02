import { useSelector } from 'react-redux'

export default function Navbar() {
    const count = useSelector(state => state.counter.value)    
    return (
        <div style={{border: "1px solid black", marginBottom:"12px"}}>
            <h3>Navbar</h3>
            <p>Count = {count}</p>
        </div>
    )
}
