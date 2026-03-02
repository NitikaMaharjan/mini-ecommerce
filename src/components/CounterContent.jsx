import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../redux/counter/counterSlice'

export default function Content() {
    const dispatch = useDispatch()
    const bgColor = useSelector(state => state.theme.bgColor)
    const txtColor = useSelector(state => state.theme.txtColor)
    return (
        <div style={{border: "1px solid black", marginBottom:"12px"}}>
            <h3 style={{backgroundColor: bgColor, color: txtColor}}>Counter Content</h3>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(incrementByAmount(100))}>+ by 100</button>
            <button onClick={()=>dispatch(incrementByAmount(200))}>+ by 200</button>
        </div>
    )
}
