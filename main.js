// progression bar function
window.onload = move = () =>  {
    const elem = document.getElementById("myBar");  
    let height = 0; // starting 
    const id = setInterval(frame, 25); // progression speed
    
    function frame() {
      if (height >= 100) {
        clearInterval(id);
      } else {
        height++; 
        elem.style.height = height + '%';
        elem.innerHTML = height * 1  + '%';
      }
    }
  }

