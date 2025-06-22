import React, {FC, useEffect, useState} from "react";

const Counter: FC = () => {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        const counterId = setInterval(() => {
            setCounter(counter + 1);
        }, 1000);
        return () => clearInterval(counterId);
    });

    return (
        <div>
            It's been {counter} seconds since you opened the page!
        </div>
    );
}

export default Counter;