import { useContext } from "react";
import { CardContext } from "../components/CardContext";

export default function Contact() {
    const datacontext = useContext(CardContext);
    return (
        <div>
            <h2>Ini adalah halaman contact, {datacontext}</h2>
        </div>
    );
}