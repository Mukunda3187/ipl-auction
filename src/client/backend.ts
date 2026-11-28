const RAW = ((import.meta as any).env?.VITE_BACKEND_URL as string | undefined)?.trim() ?? '';

export const BACKEND_URL = RAW.replace(/\/+$/, '');

export function backendUrl(path?: string): string | undefined {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  return `${BACKEND_URL}${path}`;
}

export function backendWsUrl(): string {
  if (BACKEND_URL) return `${BACKEND_URL.replace(/^http/i, 'ws')}/ws`;
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  return `${protocol}//${window.location.host}/ws`;
}
