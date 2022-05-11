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
import type { User } from "@prisma/client";

import { getUserById } from "./services/user";

import { MainLayout } from "./components/MainLayout";

import tailwindStyles from "./styles/generated/tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "DiEvent",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
];

type LoaderData = {
  user: User | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const { user } = await getUserById(request);

  return { user };
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
