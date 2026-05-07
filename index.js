const searchTarget = document.getElementById("searchTarget");
const startSearch = document.getElementById("startSearch");
const searchResult = document.getElementById("searchResult");

//Populate Static Information
systemsQuantity = 16;
for(a=1; a<=systemsQuantity; a++){
  const currentSector = document.getElementById(locationDATA[a][0].Sector);
  system = document.createElement('p');
  system.id = "System";
  system.innerHTML = locationDATA[a][0].Name.slice(0, -2)
  currentSector.appendChild(system);
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

//Surface level search of how many planets Match
startSearch.addEventListener("click", function(){
  let planetCount = 0
  const area = document.getElementById("resultHolder")
  area.innerHTML = '';
  for(a=1; a<=systemsQuantity; a++){
  for(b=0; b<locationDATA[a].length; b++){
    for(c=0; c<locationDATA[a][b].Resources.length; c++){
      if(searchTarget.value == locationDATA[a][b].Resources[c]){
        planetCount++;
        result = document.createElement('p')
        result.id = "result"
        result.innerHTML = locationDATA[a][b].Name;
        area.appendChild(result);
        break;
      }
  }
  }
}
searchResult.textContent = "There are " + planetCount + " planets that contain your search."
})