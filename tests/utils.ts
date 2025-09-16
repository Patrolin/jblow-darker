export function sprintf(fmt: string, ...args: any[]): string {
  let i = 0;
  return fmt.replace(/%v/g, () => {
    return args[i++];
  });
}
export function printf(fmt: string, ...args: any[]) {
  console.log(sprintf(fmt, ...args));
}
export function hello() {
  return "Hello!";
}
export function encodeQuery(query: Record<string, any>) {
  return "...";
}
