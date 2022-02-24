
# Projeto Interruptor com Javascript

Projeto inteiramente feito voltado a estudos e práticas de código com HTML, CSS e Javascript. O projeto em sí é uma tentaviva de construir do zero uma interface onde é possível realizar as ações de ligar e desligar uma lâmpada através de um botão/interruptor. 


## Autor

- [Denner Henrique Céu Rodrigues - Linkedin](https://www.linkedin.com/in/dennerhcrodrigues/)


## Contribuindo

Contribuições são sempre bem-vindas, sintam-se a vontade!


## Feedback

Se você tiver algum feedback, por favor não hesite em contactarme via Linkedin ou pelo email: dennerceu01449@gmail.com


## Aprendizados

Com esse projeto pude aprender muito sobre Javascript e suas funcionalidades, além de, claro, aperfeiçoar minhas habilidades e técnicas de programação envolvendo HTML, CSS e Javascript.


## Stack utilizada

**Front-end:** HTML, CSS, Javascript.


## Uso/Exemplos

```javascript
function clique(){
  
    let body = document.querySelector("body")
    let imagem = document.getElementById('imagem').src;
    let lampadaDesligada = "https://i.ibb.co/6bz3GN1/bulb-off.png";
    let lampadaLigada = "https://i.ibb.co/sWPkDc0/bulb-on.png";
    let audio = new Audio('Áudio/audio.mp3');
    
    audio.play()
    body.classList.toggle('body');
  
    if(imagem === lampadaLigada){
      document.getElementById('imagem').src = lampadaDesligada;
      alert("Você desligou a lampada!!");
  
    } else {
     document.getElementById('imagem').src = lampadaLigada;
     alert("Você ligou a lampada!!");
  
    }
    window.navigator.vibrate([200]);
  }
```

