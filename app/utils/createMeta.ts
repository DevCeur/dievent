import type { MetaFunction } from "@remix-run/node";

type CreateMetaOptions = {
  title: string;
  description?: string;
};

export const createMeta = ({ title, description }: CreateMetaOptions) => {
  const innerMeta: MetaFunction = () => ({
    title: `DiEvent - ${title}`,
    description,
  });

  return innerMeta;
};
