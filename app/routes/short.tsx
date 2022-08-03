import type { ActionFunction, LinksFunction } from "@remix-run/node";
import stylesUrl from '~/styles/index.css';
import { Form, useActionData } from "@remix-run/react";
import { nanoid } from 'nanoid'
import { json } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const action: ActionFunction = async ({
  request,
}) => {

  const as = await request.formData();
  console.log(as);

  const name = as.get("slug");

  // Use a regex to see if it a valid webadress
  if (!name || name !== typeof "string") {
  return json({ message: `Please write something!`})
    // throw new Response("Not accepted input", { status: 404 })
    // return json({ message: `Please write something!` })
  };

  const slug = nanoid(9);
  return json({ message: `https://shrink.net/${slug}` });

  // const data = await request.text();
  //
  // const slug = nanoid(9);
  // console.log({ data });
  // console.log({ slug });
  //
  // return json({message: `Hello, ${name}`});
  // return slug;

}

export default function Index() {
  const slug = useActionData();
  console.log({ slug });


  return (
    <div style={{ margin: "auto", textAlign: "center", fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Short it!</h1>
      <Form method="post" action="/short">
        <input name="slug" pattern={"^[-a-zA-Z0-9]+$"}
          title="Only alphanumeric characters and hypens are allowed. No spaces."
          type="text" placeholder="Link to shorten" />
        <button type="submit" style={{ display: "block", margin: "0 auto", marginTop: "3rem" }}>Shrink it!</button>
      </Form>
      <div id="result" style={{ marginTop: "2rem", display: "block" }}>{slug !== undefined ? slug.message : ''}</div>
    </div>
  );
}

