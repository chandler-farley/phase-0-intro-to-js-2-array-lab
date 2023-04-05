// Write your solution here!
/* const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat(name) {
    cats.pop();
};

function destructivelyRemoveFirstCat(name) {
    cats.shift();
};

function appendCat(name) {
    const newCats = [...cats, "Broom"];
    return newCats;
};

function prependCat(name) {
    const newCats1 = ["Arnold", ...cats];
    return newCats1;
};

function removeLastCat(name) {
    const newCats2 = cats.slice(0, -1);
    return newCats2;
};

function removeFirstCat(name) {
    const newCats3 = cats.slice(1);
    return newCats3;
}; */

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    return cats.push('Ralph');
}

function destructivelyPrependCat() {
    return cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat() {
    const moreCats = [...cats, "Broom"];
    return moreCats;
}

function prependCat() {
    const evenMoreCats = ['Arnold', ...cats];
    return evenMoreCats;
}

function removeLastCat() {
    const lessCats = cats.slice(0, 2);
    return lessCats;
}

function removeFirstCat() {
    const lessCats1 = cats.slice(1);
    return lessCats1;
}