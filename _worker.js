export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let res = await env.ASSETS.fetch(request);
    if (res.status === 404 && !url.pathname.split('/').pop().includes('.')) {
      return env.ASSETS.fetch(new URL('/index.html', request.url));
    }
    return res;
  }
};
