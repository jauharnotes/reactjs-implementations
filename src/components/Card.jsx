
export default function Card() {

    return (
        <div style={container}>
            <p>Baju Muslim</p>
            <button>Add</button>
        </div>
    )
}

const container = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    height: '350px',
    backgroundColor: 'yellow',
    borderRadius: '10px'
}