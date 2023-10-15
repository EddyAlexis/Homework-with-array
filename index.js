listeItem = []

function additionner() {
  let item = document.getElementById("item").value
      listeItem.push(item)
      nettoyer()
      imprimer()
    
}

function nettoyer(){
  document.getElementById("item").value =""
}

function imprimer() {
  document.getElementById("liste").innerText = listeItem.join(" / ")
}
