function getClothing(isCold) {
    if (isCold) {
        let freezing = 'Grab a jacket!';
    } else {
        let hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}

getClothing(false);

// ReferenceError: freezing is not defined