export async function fetchNumber() {
    await new Promise(() => setTimeout(() => {throw Error("Sorry")}, 5000));
}
