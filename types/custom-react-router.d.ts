declare namespace Route {
  type LinksFunction = () => Array<
    | { rel: string; href: string; crossOrigin?: string }
    | { rel: string; href: string }
  >;

  interface ErrorBoundaryProps {
    error: unknown;
  }
}

declare module "@react-router/dev/config" {
  export interface Config {
    ssr?: boolean;
    // add other config options as needed
  }
  const config: Config;
  export default config;
}