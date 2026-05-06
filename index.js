/*async function loadJson() {
  try {
    const response = await fetch('location_data.json');
    
    // Check if request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const locationData = await response.json();
    console.log(locationData);
    return locationData;
  } catch (err) {
    console.error('Error loading JSON:', err);
    throw err; // Re-throw so caller can handle it
  }
}*/

//Populate Selection with Options
systemsQuantity = 16;
for(a=1; a<=systemsQuantity; a++){
  for(b=0; b<locationDATA[a].length; b++){
    for(c=0; c<locationDATA[a][b].Resources.length; c++){
      willAdd = true //why is this not being repeated
      const target = document.getElementById("searchTarget")
      for (const child of target.children){
        if(child.value = locationDATA[a][b].Resources[c]){
          willAdd = false
          break
        }
      }
      if(willAdd){
        opt = document.createElement('option');
        opt.value = locationDATA[a][b].Resources[c];
        opt.innerHTML = locationDATA[a][b].Resources[c];
        target.appendChild(opt);
      console.log("added resource " + locationDATA[a][b].Resources[c]);
    }else{
      willAdd = true; //why is this being skipped?
      console.log(locationDATA[a][b].Resources[c] + " is already an option")
    }
   //console.log(locationDATA[a][b].Resources[c])
  }
  }
}