import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "../redux/notification/notificationSlice";

export default function Notification() {
    const dispatch = useDispatch();
    const textNoti = useSelector(state => state.notification.textNoti);

    useEffect(() => {
        setTimeout(() => {
            dispatch(hideNotification());
        }, 2000);
    }, []);

    return (
        <div className="notification-bg">
            <div className="notification">
                <h3><b>Notification</b></h3>
                <p>{textNoti}</p>
            </div>
        </div>
    )
}
