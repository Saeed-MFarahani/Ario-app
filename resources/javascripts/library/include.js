async function Include(src, node) {
    const data = await (await fetch(src)).text();
    node.innerHTML = node.innerHTML + data;
}
async function IncludeBefore(src, node) {
    const data = await (await fetch(src)).text();
    node.innerHTML = data + node.innerHTML;
}
