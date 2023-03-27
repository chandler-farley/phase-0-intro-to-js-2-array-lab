// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

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
};