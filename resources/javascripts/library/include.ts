export async function Include(src: string, node?: HTMLElement) {
  const data = await (await fetch(src)).text();
  node.innerHTML = node.innerHTML + data;
}
export async function IncludeBefore(src: string, node?: HTMLElement) {
  const data = await (await fetch(src)).text();
  node.innerHTML = data + node.innerHTML;
}
