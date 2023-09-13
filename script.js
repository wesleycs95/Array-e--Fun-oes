
    let entrada = document.getElementById('entrada')
    let lista = document.getElementById('flista')
    let res = document.getElementById('res')
    let valores = []

    function isNumero(n){ //função que verifica se o dado inserido é numero e se é maior que 1 e menor que 100
        if(Number(n) >= 1 && Number(n) <=100){
            return true
        } else {
            return false
        }
    }

    function inLista(n, l){ //função que verifica se o dado inserido já esta dentro da lista
        if (l.indexOf(Number(n)) != -1){
            return true
        } else{
            return false
        }
    }

    function adicionar() {// função que chama as duas funcoes a cima e adiciona o incremento dentro do array
        if (isNumero(entrada.value) && !inLista(entrada.value, valores)) {
            valores.push(Number(entrada.value))
            let item = document.createElement('option')
            item.text = `Valor ${entrada.value} adicionado`
            lista.appendChild(item)
            res.innerHTML = ''
        } else{
            alert('Valor inválido ou já encontrado na lista.')
    }
         entrada.value=''
         entrada.focus()
    }

    function finalizar(){ //Função para validar os dados e mostrar na tela
        if(valores.length == 0){
            alert('Adicione valores antes de finalizar')
        } else{
            let total = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0

            for (let pos in valores){
                soma += valores[pos]
                if (valores[pos] > maior)
                    maior = valores [pos]
                if (valores[pos] < menor)
                    menor = valores [pos]
            }
            media = soma / total
            res.innerHTML =''
            res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados. </p>`
            res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
            res.innerHTML += `<p> A soma dos valorres informado foi ${soma}.</p>`
            res.innerHTML += `<p> A média valores informado foi ${media}.</p>`
        }


     }