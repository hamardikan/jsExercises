const add = () => {console.log("Hello!")};

add();

const runtwice = (func) => {
    func();
    func();
};

runtwice(add);