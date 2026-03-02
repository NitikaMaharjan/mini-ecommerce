import { useDispatch } from 'react-redux'
import { changeTheme } from '../redux/theme/themeSlice'

export default function ThemeContent() {
    const dispatch = useDispatch();
    return (
        <div style={{border: "1px solid black", marginBottom:"12px"}}>
            <h3>Theme Content</h3>
            <button onClick={()=>dispatch(changeTheme({ bgColor: "red", txtColor: "green"}))}>Red-Green</button>
            <button onClick={()=>dispatch(changeTheme({ bgColor: "yellow", txtColor: "purple"}))}>Yellow-Purple</button>
            <button onClick={()=>dispatch(changeTheme({ bgColor: "blue", txtColor: "orange"}))}>Blue-Orange</button>
        </div>
    )
}
