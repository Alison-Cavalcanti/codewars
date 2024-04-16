function flickSwitch(arr) {
    let isTrue = true; /* Inicializa uma variável isTrue como true */

    for (let i = 0; i < arr.length; i++) { /* Loop para iterar sobre cada elemento do array */
        if (arr[i] == 'flick') { /* Verifica se o elemento atual é igual a 'flick' */
            if (isTrue == false) { /* Se isTrue for false */
                isTrue = true; /* Atribui true a isTrue */
            } else { /* Se isTrue não for false (ou seja, é true)*/
                isTrue = false; /* Atribui false a isTrue*/
            }
        }
        arr[i] = isTrue; /* Atribui o valor de isTrue ao elemento atual do array */
    }
    
    return arr; /* Retorna o array modificado */
}