async function add (x, y) {
    return x + y;
}

async function time (x) {
    let value = await add(2, 3);
    return x * value;
}

add(2, 3).then(
    result => console.log(result)
)

time(3).then(
    result => console.log(result)
)