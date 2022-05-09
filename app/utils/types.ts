export type ExtendedError = Error & {
  code: string;
  meta: { target: string[] };
};

export type UnknownObject = { [x: string]: string };
