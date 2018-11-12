function save(bbb, tttt) {
    localStorage.setItem(bbb, tttt);
};

function get(name) {
    const value = localStorage.getItem(name);

    if (value === null) {
        console.log("There is no data");
    }
};

function reset() {
    localStorage.clear();
};


save("car", "ANA");
save("carica", "Ana");
get("car");
// reset();