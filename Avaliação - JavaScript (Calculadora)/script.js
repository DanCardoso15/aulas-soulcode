function insert(num) {
    const n = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = n + num;
};

function clean() {
    document.getElementById("resultado").innerHTML = "";
};

function fatorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
};

function porcentagem(n1, n2) {
    return (n1 / 100) * n2;
};

function resultado() {
    const expressao = document.getElementById("resultado").innerHTML;
    if (expressao.includes("!")) {
        const n = parseInt(expressao.replace("!", ""));
        document.getElementById("resultado").innerHTML = fatorial(n);
        return;
    }

    if (expressao.includes("√")) {
        const n = parseFloat(expressao.replace("√", ""));
        document.getElementById("resultado").innerHTML = Math.sqrt(n);
        return;
    }

    if (expressao.includes("%")) {
        const valores = expressao.split("%");
        if (valores.length == 2) {
            const n1 = valores[0]; 
            const n2 = valores[1]; 
            document.getElementById("resultado").innerHTML = porcentagem(n1, n2);
            return;
        }
    }
    
    if (/[+\-*/]/.test(expressao)) {
        document.getElementById("resultado").innerHTML = eval(expressao);
    } 
};




