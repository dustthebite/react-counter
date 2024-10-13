import { useState } from "react";

function Counter()
{
    const [clicks, setClicks] = useState(0)
    function addClick()
    {
        setClicks(clicks+1)
    }

    function removeClick()
    {
        if(clicks > 0)
            setClicks(clicks-1)
    }

    function resetClicks()
    {
        setClicks(0)
    }
    
    return (<>
    
        <div className="counter" >
            <ol className="button-holder">
            <h1>Counter: {clicks}</h1>
            <li> <button
                className="add-button"
                onClick={() => addClick()}
            >
                Add click
            </button></li>
            <li> <button
                className="remove-button"
                onClick={() => removeClick()}
            >
                Remove click
            </button></li>
            <li> <button
                className="reset-button"
                onClick={() => resetClicks()}
            >
                Reset clicks
            </button></li>
            </ol>
        </div>
    
    </>)
}

export default Counter