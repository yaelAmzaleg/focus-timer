import { useTheme } from "../ThemeContext";

function SessionItem({ session }) {
  const [theme] = useTheme();

  return (
    <li className={`session-item ${theme}`}>
      <strong>{session.topic}</strong> — {session.seconds} seconds,{" "}
      {session.distractions} distractions
    </li>
  );
}

export default SessionItem;