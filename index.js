const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um banco de dados",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para escrever em um elemento HTML em JavaScript?",
      respostas: [
        "document.writeElement()",
        "document.write()",
        "document.innerHTML()",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "var nomeVariavel;",
        "variable nomeVariavel;",
        "v nomeVariavel;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses é um loop válido em JavaScript?",
      respostas: [
        "for (i <= 10; i++)",
        "for (i = 0; i <= 10; i++)",
        "loop (i = 0; i <= 10; i++)",
      ],
      correta: 1
    },
    {
      pergunta: "Como você pode adicionar um comentário em JavaScript?",
      respostas: [
        "'Este é um comentário",
        "//Este é um comentário",
        "<!--Este é um comentário-->",
      ],
      correta: 1
    },
    {
      pergunta: "Como você cria uma função em JavaScript?",
      respostas: [
        "function minhaFuncao()",
        "create function minhaFuncao()",
        "function: minhaFuncao()",
      ],
      correta: 0
    },
    {
      pergunta: "Como você chama uma função chamada 'minhaFuncao'?",
      respostas: [
        "call minhaFuncao()",
        "invoke minhaFuncao()",
        "minhaFuncao()",
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve uma condicional IF em JavaScript?",
      respostas: [
        "if i = 5 then",
        "if i == 5",
        "if (i == 5)",
      ],
      correta: 2
    },
    {
      pergunta: "Como você pode adicionar um comentário de múltiplas linhas em JavaScript?",
      respostas: [
        "//Este é um comentário de múltiplas linhas//",
        "/*Este é um comentário de múltiplas linhas*/",
        "<!--Este é um comentário de múltiplas linhas-->",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para atribuir um valor a uma variável?",
      respostas: [
        "=",
        "==",
        "===",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergnta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }