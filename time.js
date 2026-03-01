function displayTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

console.log(`${hours}:${minutes}:${seconds}`);
}