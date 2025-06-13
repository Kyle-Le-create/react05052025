import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../reducers/themeReducer";

function ThemeToggle() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleTheme())} className="toggle-button">
      Switch to {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeToggle;
