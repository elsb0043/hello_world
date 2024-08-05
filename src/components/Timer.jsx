import { useEffect, useState } from "react"

function Timer(){
    const [seconds, setSeconds] = useState(0) // Vi starter timeren ved 0

    useEffect(() => {
        // Start en timer, der tæller op hvert sekund
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)

        // Ryd op efter timeren, når komponenten fjernes
        return () => clearInterval(interval)
    }, []) // Tomt array betyder, at dette kun sker en gang, når komponenten vises


    return (
        <div>
            <p>Timer: {seconds} sekunder</p>
        </div>
    )
}

export default Timer