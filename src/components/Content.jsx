import { useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../redux/counter/counterSlice'

export default function Content() {
    const dispatch = useDispatch()
    return (
        <div style={{border: "1px solid black", marginBottom:"12px"}}>
            <h3>Content</h3>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(incrementByAmount(100))}>+ by 100</button>
        </div>
    )
}
