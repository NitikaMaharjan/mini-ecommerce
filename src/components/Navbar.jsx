import { useSelector } from 'react-redux'

export default function Navbar() {
    const count = useSelector(state => state.counter.value); 
    const bgColor = useSelector(state => state.theme.bgColor);
    const txtColor = useSelector(state => state.theme.txtColor);
    return (
        <div style={{border: "1px solid black", marginBottom:"12px"}}>
            <h3>Navbar</h3>
            <p>Count = {count}</p>
            <div style={{height: "50px", width: "50px", border: "1px solid black", backgroundColor: bgColor, color: txtColor}}>{bgColor}-{txtColor}</div>
        </div>
    )
}
