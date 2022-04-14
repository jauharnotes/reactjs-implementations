import { Headers, List, Logo } from "./Header.styled";

function Header() {
  return (
    <Headers>
      <Logo>
        <h1>JR Movie API</h1>
      </Logo>
      <List>
        <a href="/">Genre</a>
        <a href="/">Country</a>
        <a href="/">TV</a>
        <a href="/">Anime</a>
      </List>
      <button>Sign In</button>
    </Headers>
  );
}

export default Header;
