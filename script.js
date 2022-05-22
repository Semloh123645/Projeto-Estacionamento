function action1() {
    var _a, _b;
    const $ = (query) => document.querySelector(query);
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function calcTempo(mil) {
            const min = Math.floor(mil / 60000);
            const sec = Math.floor((mil % 60000) / 1000);
            return `${min}m e ${sec}`;
        }
        function salvar(veiculo) {
            localStorage.setItem('patio', JSON.stringify(veiculo));
            console.log(veiculo);
        }
        function adicionar(veiculo, salva) {
            var _a;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.entrada}</td>
                <td>
                    <button class="delete" data-placa="${veiculo.placa}">X</button>               
                </td>`;
            row.querySelector('.delete').addEventListener('click', function () {
                remover(this.dataset.placa);
            });
            (_a = $('#patio')) === null || _a === void 0 ? void 0 : _a.appendChild(row);
            if (salva)
                salvar([...ler(), veiculo]);
        }
        function remover(placa) {
            const { entrada, nome } = ler().find((veiculo) => veiculo.placa === placa);
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
            if (!confirm(`O veiculo ${nome} permaneceu por ${tempo}. Deseja encerrar?`))
                return;
            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }
        function render() {
            $('#patio').innerHTML = "";
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        }
        return { ler, adicionar, remover, salvar, render };
    }
    const nome = (_a = $('#nome')) === null || _a === void 0 ? void 0 : _a.value;
    const placa = (_b = $('#placa')) === null || _b === void 0 ? void 0 : _b.value;
    if (!nome || !placa) {
        alert("Os campos nome e placa são obrigatórios");
        return;
    }
    else {
        patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
    }
}
function action2() {
    const $ = (query) => document.querySelector(query);
    function ler() {
        return localStorage.patio ? JSON.parse(localStorage.patio) : [];
    }
    function salvar(veiculo) {
        localStorage.setItem('patio', JSON.stringify(veiculo));
        console.log(veiculo);
    }
    function adicionar(veiculo, salva) {
        var _a;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class="delete" data-placa="${veiculo.placa}">X</button>               
            </td>`;
        (_a = $('#patio')) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        console.log(veiculo);
        if (salva)
            salvar([...ler(), veiculo]);
    }
    function render() {
        $('#patio').innerHTML = "";
        const patio = ler();
        if (patio.length) {
            patio.forEach((veiculo) => adicionar(veiculo));
        }
    }
    render();
}
function action3() {
    const $ = (query) => document.querySelector(query);
    function ler() {
        return localStorage.patio ? JSON.parse(localStorage.patio) : [];
    }
    function calcTempo(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);
        return `${min}m e ${sec}`;
    }
    function salvar(veiculo) {
        localStorage.setItem('patio', JSON.stringify(veiculo));
        console.log(veiculo);
    }
    function adicionar(veiculo, salva) {
        var _a;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class="delete" data-placa="${veiculo.placa}" onclick="action3()">X</button>               
            </td>`;
        row.querySelector('.delete').addEventListener('click', function () {
            remover(this.dataset.placa);
        });
        (_a = $('#patio')) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        console.log(veiculo);
        if (salva)
            salvar([...ler(), veiculo]);
    }
    function remover1() {
        remover(this.dataset.placa);
    }
    function remover(placa) {
        const { entrada, nome } = ler().find((veiculo) => veiculo.placa === placa);
        const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
        if (!confirm(`O veiculo ${nome} permaneceu por ${tempo}. Deseja encerrar?`))
            return;
        salvar(ler().filter((veiculo) => veiculo.placa !== placa));
        render();
    }
    function render() {
        $('#patio').innerHTML = "";
        const patio = ler();
        if (patio.length) {
            patio.forEach((veiculo) => adicionar(veiculo));
        }
    }
}
