import { useAlertContext } from "../context/AlertContext"; 

export default function Alert() {
    const {alertData, setAlertData} = useAlertContext();
    console.log(alertData);
    const {type, message} = alertData;

    if(!message) return null;
    
    return (
        <div className={`alert alert-${type} alert-dismissible`} role="alert">
            <div>{message}</div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}