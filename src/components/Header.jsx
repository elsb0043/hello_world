import Counter from "./Counter"
import Name from "./Name"
import Timer from "./Timer"

function Header(){

    return (
        <div>

            <Name name="World"/>
            <Counter />
            <Timer />

        </div>
    )
}

export default Header