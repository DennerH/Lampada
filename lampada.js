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