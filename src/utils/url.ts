export function getAbsoluteUrl(path: string): string {
  const base = import.meta.env.BASE_URL == "/" ? "" : import.meta.env.BASE_URL || "";
  return `${base}${path}`.replace(/\/{2}/, '/');
}
