import { useContext, useState } from "react";
import { CardContext } from "./CardContext";

export default function ShoppingCart(props) {
    const {value, setValue} = useContext(CardContext);
    console.log(value);

    return(
        <div style={styles}>
            <p>1</p>
        </div>
    );
}

const styles = {
    color: '#ffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    backgroundColor: 'red',
    borderRadius: '8px',
}