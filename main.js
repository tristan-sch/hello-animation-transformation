// progression bar function
window.onload = move = () =>  {
    const elem = document.getElementById("myBar");  
    const text = document.getElementById("text"); 
    let height = 0; // starting 
    const id = setInterval(frame, 25); // progression speed
    
    function frame() {
      if (height >= 100) {
        clearInterval(id);
      } else {
        height++; 
        elem.style.height = height + '%';
        // elem.innerHTML = height * 1  + '%';
        text.innerHTML = height * 1  + '%';
        text.style.color = 'black';
        text.style.padding = '1rem';
        text.style.fontWeight = 'bold';
      }
    }
  }

