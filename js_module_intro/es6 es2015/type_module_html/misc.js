export default function extend(a, b) {
    for(const key in b) {
        a[key] = b[key];
    }
    return a;
}