import { useState } from "react";

function ChildB() {
    const [shouldThrow] = useState(() => {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        return randomNumber === 1;
    });

    if (shouldThrow) {
        throw new Error("Random error in ChildB");
    }

    return (
        <div>
            ChildB
        </div>
    );
}

export default ChildB;