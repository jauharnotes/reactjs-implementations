import { useContext } from "react";
import { CardContext } from "../components/CardContext";

export default function About() {
    const datacontext = useContext(CardContext);
    return (
        <div>
            <h2>Ini adalah halaman about, {datacontext}</h2>
        </div>
    );
}