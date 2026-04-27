const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

const isExternal = (path) => /^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:');

export const withBase = (path = '/') => {
  if (!path || path.startsWith('#') || isExternal(path)) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}` || normalizedPath;
};

export const stripBase = (pathname = '/') => {
  if (!basePath) {
    return pathname || '/';
  }

  if (pathname === basePath) {
    return '/';
  }

  if (pathname.startsWith(`${basePath}/`)) {
    return pathname.slice(basePath.length) || '/';
  }

  return pathname || '/';
};

export const canonicalFromPath = (pathname, siteUrl) => {
  const baseUrl = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`;
  const normalizedPath = pathname === '/' ? '' : pathname.replace(/^\//, '');
  return new URL(normalizedPath, baseUrl).href;
};
