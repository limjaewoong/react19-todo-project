
import {useTheme} from "../../hooks/theme/useTheme.tsx";

function Theme() {

    const {theme} = useTheme();


    return (
        <div>
            <h1>Theme: {theme}</h1>
        </div>
    );
}

export default Theme;