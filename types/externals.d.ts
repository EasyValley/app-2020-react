declare module '*.less' {
  const resource: { [key: string]: string };
  export = resource;
}

declare module '*.txt' {
  let resource: string;
  export = resource;
}
