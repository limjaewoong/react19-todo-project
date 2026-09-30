
import {useThemeAction} from "../../hooks/theme/useTheme.tsx";

function ThemeButton() {
    console.log('ThemeButton render')
    const {changeTheme} = useThemeAction();
    return (
        <div>
            <button onClick={changeTheme}>클릭</button>
        </div>
    );
}

export default ThemeButton;