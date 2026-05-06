const searchTarget = document.getElementById("searchTarget");
const startSearch = document.getElementById("startSearch");
const searchResult = document.getElementById("searchResult");

//Populate Selection with Options
systemsQuantity = 16;
for(a=1; a<=systemsQuantity; a++){
  for(b=0; b<locationDATA[a].length; b++){
    for(c=0; c<locationDATA[a][b].Resources.length; c++){
      willAdd = true //why is this not being repeated
      const target = document.getElementById("searchTarget")
      for (const child of target.children){
        if(child.value == locationDATA[a][b].Resources[c]){
          willAdd = false
          break
        }
      }
      if(willAdd){
        opt = document.createElement('option');
        opt.value = locationDATA[a][b].Resources[c];
        opt.innerHTML = locationDATA[a][b].Resources[c];
        target.appendChild(opt);
      //console.log("added resource " + locationDATA[a][b].Resources[c]);
    }else{
      willAdd = true; //why is this being skipped?
      //console.log(locationDATA[a][b].Resources[c] + " is already an option")
    }
   //console.log(locationDATA[a][b].Resources[c])
  }
  }
}

startSearch.addEventListener("click", function(){
  let planetCount = 0
  for(a=1; a<=systemsQuantity; a++){
  for(b=0; b<locationDATA[a].length; b++){
    for(c=0; c<locationDATA[a][b].Resources.length; c++){
      if(searchTarget.value == locationDATA[a][b].Resources[c]){
        planetCount++;
        break;
      }
  }
  }
}
searchResult.textContent = "There are " + planetCount + " planets that contain your search."
})