import { useState } from "react"
import InvoiceModal from "../Modal/InvoiceModal";
import { useNavigate } from "react-router-dom";

const Invoice = () => {

    const [show, setShow] = useState<boolean>(false);
    const navigate = useNavigate();

    const onclickShowHide = (value: boolean) => {
        setShow(value);
        navigate("/create-invoice");
    }

    return (
        <>
            <button onClick={() => onclickShowHide(true)}>Create a Invoice</button>
            {
                show && (
                    <InvoiceModal />
                )
            }
        </>
    )
}
export default Invoice