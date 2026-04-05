const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path) {
  if (!path) {
    return path;
  }

  if (/^(https?:)?\/\//.test(path)) {
    return path;
  }

  return `${basePath}${path}`;
}
