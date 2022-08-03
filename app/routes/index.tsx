import type { LinksFunction } from '@remix-run/node';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <div style={{ margin: "auto", textAlign: "center", fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Short it!</h1>
      <form method="POST" action="/short">
        <input name="slug" type="text" placeholder="Link to shorten" />
        <button type="submit" style={{ display: "block", margin: "0 auto", marginTop: "3rem" }}>Shrink it!</button>
      </form>
      <div id="result" style={{ marginTop: "2rem", display: "block" }}></div>
    </div>
  );
}
