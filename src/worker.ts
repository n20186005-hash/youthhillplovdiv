interface AssetsFetcher {
  fetch: (request: Request) => Promise<Response>;
}

interface Env {
  ASSETS: AssetsFetcher;
}

const APEX_HOST = 'youthhillplovdiv.com';
const WWW_HOST = 'www.youthhillplovdiv.com';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname.toLowerCase() === APEX_HOST) {
      url.hostname = WWW_HOST;
      return Response.redirect(url.toString(), 308);
    }

    return env.ASSETS.fetch(request);
  },
};
