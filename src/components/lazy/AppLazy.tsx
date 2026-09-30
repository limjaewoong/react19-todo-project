//import ChildA from "./ChildA.tsx";
//import ChildB from "./ChildB.tsx";
import {Suspense, useState} from "react";
import {lazy} from "react";
//import {ErrorBoundary} from "react-error-boundary";

const ChildA = lazy(()=>import("./ChildA.tsx"));
//const ChildB = lazy(()=>import("./ChildB.tsx"));

/*function Fallback({error, resetErrorBoundary} : {error: Error, resetErrorBoundary: () => void}){

    return(
        <div role={"alert"}>
            <p>Something went wrong</p>
            <pre style={{color:"red"}}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}*/


function AppLazy() {
    const [isShow, setIsShow] =useState(false);
    const handleClick = ()=>{
        setIsShow(true);
    }
    

    return (
        <div>
            <button type={"button"} onClick={handleClick}>isShow</button>
            {isShow && (
                    <>
                        <Suspense fallback={<div>Loading...</div>}>
                            <ChildA/>
                        </Suspense>
                        {/*<ErrorBoundary FallbackComponent={Fallback}>
                            <Suspense fallback={<div>Loading2...</div>}>
                        <ChildB/>
                        </Suspense>
                        </ErrorBoundary>*/}
                    </>
                )}
        </div>
    );
}

export default AppLazy;