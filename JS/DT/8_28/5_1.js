function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let space = "";

        for (let j = 1; j <= n - i; j++) {
            space += " ";
        }

        let num = "";

        for (let j = 1; j <= 2 * i - 1; ++j) {
            num += j;
        }

        console.log(space+num);
    }
}

pattern(5);
