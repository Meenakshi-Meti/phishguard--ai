import { useState } from "react";
import BootSequence from "./BootSequence";
import Stats from "./Stats";

function Hero() {

    const [loaded, setLoaded] = useState(false);

    if(!loaded){
        return <BootSequence onComplete={() => setLoaded(true)} />;
    }

    return(
        <div>
            
        </div>
    )
}

export default Hero;