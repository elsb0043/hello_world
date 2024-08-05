import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0) // Vi starter tælleren ved 0

    return (
        <div>
            <p>Du har klikket {count} gange</p>
            <button onClick={() => setCount(count + 1)}>Klik</button>
        </div>
    )
}

export default Counter