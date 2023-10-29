const name = 'Luiz';

function sayName() {
    console.log(name);
}

function useSayName() {
    const name = 'Benito';
    sayName();
}

useSayName();
