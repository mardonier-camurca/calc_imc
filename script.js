document.getElementById("imc-form").addEventListener("submit", (e) => {
    e.preventDefault()
  
    // Limpar erros anteriores
    document.getElementById("peso-error").style.display = "none"
    document.getElementById("altura-error").style.display = "none"
  
    // Obter valores
    const peso = Number.parseFloat(document.getElementById("peso").value)
    const altura = Number.parseFloat(document.getElementById("altura").value)
  
    // Validar entradas
    let isValid = true
  
    if (isNaN(peso) || peso <= 0) {
      document.getElementById("peso-error").style.display = "block"
      isValid = false
    }
  
    if (isNaN(altura) || altura <= 0) {
      document.getElementById("altura-error").style.display = "block"
      isValid = false
    }
  
    if (!isValid) return
  
    // Calcular IMC
    const imc = calcularIMC(peso, altura)
    const classificacao = getClassificacaoIMC(imc)
  
    // Exibir resultado
    document.getElementById("imc-value").textContent = imc.toFixed(2)
  
    const classificacaoElement = document.getElementById("imc-classification")
    classificacaoElement.textContent = classificacao.texto
    classificacaoElement.style.color = classificacao.cor
  
    document.getElementById("result").style.display = "block"
  })
  
  function calcularIMC(peso, altura) {
    return peso / (altura * altura)
  }
  
  function getClassificacaoIMC(imc) {
    if (imc < 18.5) {
      return { texto: "Abaixo do peso", cor: "#3498db" }
    } else if (imc < 25) {
      return { texto: "Peso normal", cor: "var(--success-color)" }
    } else if (imc < 30) {
      return { texto: "Sobrepeso", cor: "#f39c12" }
    } else if (imc < 35) {
      return { texto: "Obesidade grau 1", cor: "#e67e22" }
    } else if (imc < 40) {
      return { texto: "Obesidade grau 2", cor: "#d35400" }
    } else {
      return { texto: "Obesidade grau 3", cor: "var(--error-color)" }
    }
  }
  