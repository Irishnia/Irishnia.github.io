document.addEventListener("DOMContentLoaded", function() {
  const startResourceSearch = document.getElementById("startResourceSearch");
  const startDepositSearch = document.getElementById("startDepositSearch");
  const searchResult = document.getElementById("searchResult");
  const resourceSearchTarget = document.getElementById("resourceSearchTarget");
  const depositSearchTarget = document.getElementById("depositSearchTarget");

  const systemsQuantity = 3;
  for (let a = 1; a <= systemsQuantity; a++) {
    const currentSector = document.getElementById(locationDATA[a][0].Sector);
    if (!currentSector) {
      continue;
    }

    const sectorBody = currentSector.querySelector('.sector-body') || currentSector;
    const system = document.createElement('p');
    system.id = "System";
    system.textContent = locationDATA[a][0].Name.slice(0, -2);
    sectorBody.appendChild(system);

    for (let b = 0; b < locationDATA[a].length; b++) {
      for (let c = 0; c < locationDATA[a][b].Resources.length; c++) {
        let willAdd = true;
        for (const child of resourceSearchTarget.children) {
          if (child.value === locationDATA[a][b].Resources[c]) {
            willAdd = false;
            break;
          }
        }

        if (willAdd) {
          const opt = document.createElement('option');
          opt.value = locationDATA[a][b].Resources[c];
          opt.innerHTML = locationDATA[a][b].Resources[c];
          resourceSearchTarget.appendChild(opt);
        }
      }
    }
  }

  for (let a = 1; a <= systemsQuantity; a++) {
    for (let b = 0; b < locationDATA[a].length; b++) {
      for (let c = 0; c < locationDATA[a][b].Deposits.length; c++) {
        let willAdd = true;
        for (const child of depositSearchTarget.children) {
          if (child.value === locationDATA[a][b].Deposits[c]) {
            willAdd = false;
            break;
          }
        }

        if (willAdd) {
          const opt = document.createElement('option');
          opt.value = locationDATA[a][b].Deposits[c];
          opt.innerHTML = locationDATA[a][b].Deposits[c];
          depositSearchTarget.appendChild(opt);
        }
      }
    }
  }

  startResourceSearch.addEventListener("click", function() {
    let planetCount = 0;
    const area = document.getElementById("resultHolder");
    area.innerHTML = '';

    for (let a = 1; a <= systemsQuantity; a++) {
      for (let b = 0; b < locationDATA[a].length; b++) {
        for (let c = 0; c < locationDATA[a][b].Resources.length; c++) {
          if (resourceSearchTarget.value === locationDATA[a][b].Resources[c]) {
            planetCount++;
            const result = document.createElement('p');
            result.id = "result";
            result.innerHTML = locationDATA[a][b].Name;
            area.appendChild(result);
            break;
          }
        }
      }
    }

    searchResult.textContent = "There are " + planetCount + " planets that contain your search.";
  });

  startDepositSearch.addEventListener("click", function() {
    let planetCount = 0;
    const area = document.getElementById("resultHolder");
    area.innerHTML = '';

    for (let a = 1; a <= systemsQuantity; a++) {
      for (let b = 0; b < locationDATA[a].length; b++) {
        for (let c = 0; c < locationDATA[a][b].Deposits.length; c++) {
          if (depositSearchTarget.value === locationDATA[a][b].Deposits[c]) {
            planetCount++;
            const result = document.createElement('p');
            result.id = "result";
            result.innerHTML = locationDATA[a][b].Name;
            area.appendChild(result);
            break;
          }
        }
      }
    }

    searchResult.textContent = "There are " + planetCount + " planets that contain your search.";
  });

  document.addEventListener('click', function(event) {
    const toggle = event.target.closest('.sector-toggle');
    if (!toggle) {
      return;
    }

    const sector = toggle.closest('.Sector');
    if (!sector) {
      return;
    }

    const isCollapsed = sector.classList.toggle('collapsed');
    toggle.textContent = isCollapsed ? 'Show' : 'Hide';
    toggle.setAttribute('aria-expanded', String(!isCollapsed));
  });
});