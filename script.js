function checkValidity(){
  const aCols = parseInt(document.getElementById('a_cols').value);
  const bRows = parseInt(document.getElementById('b_rows').value);
  const msg = document.getElementById('validityMsg');

  if(aCols !== bRows){
    msg.innerText = "❌ Matriks TAK BOLEH didarab. Lajur A mesti sama dengan Baris B.";
    return false;
  }else{
    msg.innerText = "✔ Matriks boleh didarab.";
    return true;
  }
}

document.getElementById('a_cols').onchange = checkValidity;
document.getElementById('b_rows').onchange = checkValidity;

function generateMatrices(){
  if(!checkValidity()) return;

  const container = document.getElementById("matrixContainer");
  container.innerHTML = "";

  const aRows = parseInt(a_rows.value);
  const aCols = parseInt(a_cols.value);
  const bRows = parseInt(b_rows.value);
  const bCols = parseInt(b_cols.value);

  // Generate Matrix A
  const aTitle = document.createElement("h3");
  aTitle.innerText = "Matriks A";
  container.appendChild(aTitle);

  const gridA = document.createElement("div");
  gridA.className = "matrix-grid";
  gridA.style.gridTemplateColumns = `repeat(${aCols}, 55px)`;

  for(let i=0;i<aRows;i++){
    for(let j=0;j<aCols;j++){
      const input=document.createElement("input");
      input.placeholder=`a${i+1}${j+1}`;
      gridA.appendChild(input);
    }
  }
  container.appendChild(gridA);

  // Generate Matrix B
  const bTitle = document.createElement("h3");
  bTitle.innerText = "Matriks B";
  container.appendChild(bTitle);

  const gridB = document.createElement("div");
  gridB.className = "matrix-grid";
  gridB.style.gridTemplateColumns = `repeat(${bCols}, 55px)`;

  for(let i=0;i<bRows;i++){
    for(let j=0;j<bCols;j++){
      const input=document.createElement("input");
      input.placeholder=`b${i+1}${j+1}`;
      gridB.appendChild(input);
    }
  }
  container.appendChild(gridB);

  document.getElementById("goBtn").style.display="block";
}

function startAnimation(){
  const car = document.getElementById("car");
  const lamp = document.getElementById("lamp");
  const box = document.getElementById("highlightBox");

  car.style.left = "80%";

  setTimeout(()=>{
    lamp.classList.add("fall");
    box.innerText = "a₁₁ × b₁₁ → + a₁₂ × b₂₁ ...";
  },2000);
}
