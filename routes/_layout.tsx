import { define } from "../utils.ts";

export default define.layout(({ Component, url }) => {
  return (
    <div>
      <header class="header">
        <nav>
          <ul>
            <li><a href="/">EntreVoisins!</a></li>
            <li><a href="/forum">Le Forum</a></li>
            <li><a href="#">Le Marché</a></li>
          </ul>
        </nav>
    </header>
      <div>
        <Component />
      </div>
      <footer class="footer">
        &copy; 2026
      </footer>
    </div>
  );
});