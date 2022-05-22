interface Veiculo{
    nome: string
    placa: string
    entrada: Date|string
}

function action1(){ 
    const $ = (query:string): HTMLInputElement | null =>
    document.querySelector(query)

    function patio(){
        function ler(): Veiculo[]{
            return localStorage.patio ? JSON.parse(localStorage.patio) : []

        }
        function calcTempo(mil: number){
            const min = Math.floor(mil / 60000)
            const sec = Math.floor((mil % 60000)/1000)
            return `${min}m e ${sec}`
        }
        function salvar(veiculo: Veiculo[]) {
            localStorage.setItem('patio', JSON.stringify(veiculo))
            console.log(veiculo)

        }
        
        function adicionar(veiculo: Veiculo, salva?: boolean){
            const row = document.createElement("tr")

            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.entrada}</td>
                <td>
                    <button class="delete" data-placa="${veiculo.placa}">X</button>               
                </td>`
            
            row.querySelector('.delete').addEventListener('click', function(){ 
                remover(this.dataset.placa)
            })

            $('#patio')?.appendChild(row) 

            if(salva)salvar([...ler(), veiculo])

        }
        
        function remover(placa: string){
            const {entrada, nome} = ler().find(
                (veiculo) => veiculo.placa === placa
            )
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime())
            if(
                !confirm(`O veiculo ${nome} permaneceu por ${tempo}. Deseja encerrar?`)
            )return
            salvar(ler().filter((veiculo)=> veiculo.placa !== placa))
            render()
        }
        
        

        function render(){
            $('#patio')!.innerHTML = ""
            const patio = ler()
            if(patio.length){
                patio.forEach((veiculo) => adicionar(veiculo))
            }   
        }
        return {ler, adicionar, remover, salvar, render}
    }
    
    
    const nome = $('#nome')?.value
    const placa = $('#placa')?.value

    if(!nome || !placa){
        alert("Os campos nome e placa são obrigatórios")
        return
    }
    else{patio().adicionar({nome, placa, entrada: new Date().toISOString()}, true)}
   
}

function action2(){
    const $ = (query:string): HTMLInputElement | null =>
    document.querySelector(query)

    function ler(): Veiculo[]{
        return localStorage.patio ? JSON.parse(localStorage.patio) : []

    }

    function salvar(veiculo: Veiculo[]) {
        localStorage.setItem('patio', JSON.stringify(veiculo))
        console.log(veiculo)

    }
    
    function adicionar(veiculo: Veiculo, salva?: boolean){
        const row = document.createElement("tr")

        row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class="delete" data-placa="${veiculo.placa}">X</button>               
            </td>`
        $('#patio')?.appendChild(row) 
        console.log(veiculo)

        if(salva)salvar([...ler(), veiculo])

    }

    function render(){
        $('#patio')!.innerHTML = ""
        const patio = ler()
        if(patio.length){
            patio.forEach((veiculo) => adicionar(veiculo))
        }   
    }
    render()
}

function action3(){    
    const $ = (query:string): HTMLInputElement | null =>
    document.querySelector(query)
    function ler(): Veiculo[]{
        return localStorage.patio ? JSON.parse(localStorage.patio) : []

    }
    function calcTempo(mil: number){
        const min = Math.floor(mil / 60000)
        const sec = Math.floor((mil % 60000)/1000)
        return `${min}m e ${sec}`
    }
    function salvar(veiculo: Veiculo[]) {
        localStorage.setItem('patio', JSON.stringify(veiculo))
        console.log(veiculo)

    }
    function adicionar(veiculo: Veiculo, salva?: boolean){
        const row = document.createElement("tr")

        row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class="delete" data-placa="${veiculo.placa}" onclick="action3()">X</button>               
            </td>`
            row.querySelector('.delete').addEventListener('click', function(){ 
            remover(this.dataset.placa)})

        $('#patio')?.appendChild(row) 
        console.log(veiculo)

        if(salva)salvar([...ler(), veiculo])

    }
    function remover1(){
        remover(this.dataset.placa)
    }
    function remover(placa: string){
        const {entrada, nome} = ler().find(
            (veiculo) => veiculo.placa === placa
        )
        const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime())
        if(
            !confirm(`O veiculo ${nome} permaneceu por ${tempo}. Deseja encerrar?`)
        )return
        salvar(ler().filter((veiculo)=> veiculo.placa !== placa))
        render()
    }
    function render(){
        $('#patio')!.innerHTML = ""
        const patio = ler()
        if(patio.length){
            patio.forEach((veiculo) => adicionar(veiculo))
        }   
    }
    
}