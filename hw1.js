function maxItemAssotiation() {
    //const startArray = [["e", "d"], ["a", "b"], ["a", "c"], ["d", "e"], ["e", "a"] ];
    //const startArray = [["a", "b"], ["a", "c"], ["d", "e"]];
    let startArray = [
        ['d', 'e'],
        ['e', 'n'],
        ['a', 'b'],
        ['a', 'c'],
        ['c', 'q'],
        ['x', 'r']
    ];

    const finalArray = [];

    while (startArray.length > 0) {
       const req = [];
       const r = startArray[0];
       req.push(...r);
       startArray.splice(0, 1);
       let i = 0;
       while (i < req.length){
           const t = req[i];
           startArray.forEach(x => {
               if(x.indexOf(t) > -1){
                   x.forEach(r => {
                       if(req.indexOf(r) == -1){
                           req.push(r);
                       }
                   });
                   startArray.splice(x.indexOf(t), 1);
               }
           });
           i++;
       }
       req.sort((a, b) => a.localeCompare(b));
       if (req.length > 0)
       finalArray.push(req);
    }

    finalArray.sort((a, b) => b.length - a.length );
    
    if (finalArray.length > 0){
        console.log('Ответ', finalArray[0])
        if (finalArray.length > 1){
            console.log('Остальное', finalArray.slice(1));
        }
    }

}

maxItemAssotiation();