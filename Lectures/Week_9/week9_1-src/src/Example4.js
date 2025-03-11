import { useState } from "react";

function Example4() {
    const [user, setUser] = useState("John");
    return (
        <div>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </div>
    );
}

function Component2(props1) {
    return (
        <div>
            <h1>Component 2</h1>
            <Component3 user2={props1.user} />
        </div>
    );
}

function Component3({user2}) {
    return (
        <div>
            <h1>Component 3</h1>
            <h2>{`Hello ${user2} from Component 3!`}</h2>
        </div>
    );
}

export default Example4;
