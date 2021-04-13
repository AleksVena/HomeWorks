class ok {
    name;
    count;
}

function maxItemAssotiation() {
    //const startArray = [["e", "d"], ["a", "b"], ["a", "c"], ["d", "e"], ["e", "a"] ];
    const startArray = [["a", "b"], ["a", "c"], ["d", "e"]];

    let countElement = [];
    const finalList = [];
    startArray.forEach(element => {
        element.forEach(x => {
            let el = countElement.find(item => item.name == x);
            if (!el) {
                const r = new ok();
                r.name = x;
                r.count = 1;
                countElement.push(r);
            }
            else {
                el.count++;
            }
        });
    });

    

    countElement.sort((a, b) => b.count - a.count);

    const fe = countElement[0];
    finalList.push(fe);

    countElement = countElement.slice(1, countElement.length);

    while (countElement.find(item => item.count == fe.count)) {
        const se = countElement[0];
        finalList.push(se);
        countElement = countElement.slice(1, countElement.length);
    }

    finalList.sort((a, b) => a.name.localeCompare(b.name));

    const feLast = finalList[0];

    const firstGroup = [];
    const secondGroup = [];

    startArray.forEach(element => {
        element.forEach(e => {
            if (e == feLast.name) {
                //console.log(element);   
                element.forEach(r => {
                    if (firstGroup.findIndex(i => i == r) == -1) {
                        firstGroup.push(r);
                    }
                });
            }
        });
    });

    startArray.forEach(element => {
        element.forEach(e => {
            if (firstGroup.findIndex(i => i == e) == -1) {
                if (secondGroup.findIndex(i => i == e) == -1) {
                    secondGroup.push(e);
                }
            }
        });
    });

    firstGroup.sort((a, b) => a.localeCompare(b));
    secondGroup.sort((a, b) => a.localeCompare(b));

    console.log("Ответ:", firstGroup);
    console.log("Группа 2:", secondGroup);
}

maxItemAssotiation();