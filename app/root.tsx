import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";

import tailwindStyles from "./styles/generated/tailwind.css";

import { MainLayout } from "./components/MainLayout";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "DiEvent",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
];

type LoaderData = {
  user: any;
};

export const loader: LoaderFunction = () => {
  return { user: null };
};

export default function App() {
  const { user } = useLoaderData<LoaderData>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MainLayout user={user}>
          <Outlet />
        </MainLayout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
