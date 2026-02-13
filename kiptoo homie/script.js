function safeQuery(id){return document.getElementById(id)}

// Index page behavior
const yesBtn = safeQuery('yesBtn');
const noBtn = safeQuery('noBtn');
const message = safeQuery('message');

if(yesBtn){
  yesBtn.addEventListener('click', ()=>{
    // small ripple effect then redirect
    yesBtn.disabled = true;
    yesBtn.textContent = 'Sending ❤️...';
    setTimeout(()=>{
      window.location.href = 'thankyou.html'
    },600);
  });
}

if(noBtn){
  noBtn.addEventListener('click', ()=>{
    // show the comforting message
    if(message) message.textContent = 'Ke$ha Collins loves you no matter what';
    // add a couple of small hearts for effect
    for(let i=0;i<8;i++){
      const h = document.createElement('div');
      h.className = 'heart';
      h.textContent = '💗';
      h.style.left = (30 + Math.random()*40) + '%';
      h.style.top = (45 + Math.random()*10) + '%';
      h.style.fontSize = (12 + Math.random()*28) + 'px';
      document.body.appendChild(h);
      setTimeout(()=>h.remove(),2600);
    }
  });
}

// Thank-you page celebration
function createConfettiBurst(count = 60){
  const colors = ['#ff6b81','#ffd1dc','#ff9dbb','#ffb6c1','#ff7f9e'];
  for(let i=0;i<count;i++){
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = (Math.random()*100) + '%';
    c.style.background = colors[Math.floor(Math.random()*colors.length)];
    c.style.width = (6 + Math.random()*10) + 'px';
    c.style.height = (8 + Math.random()*14) + 'px';
    c.style.borderRadius = Math.random()>0.5? '50%':'2px';
    c.style.transform = 'translateY(-10vh) rotate(' + (Math.random()*360) + 'deg)';
    c.style.animation = 'fall ' + (3 + Math.random()*2) + 's cubic-bezier(.2,.8,.2,1) forwards';
    c.style.animationDelay = (Math.random()*0.6) + 's';
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),5200);
  }
}

function createHearts(count=20){
  for(let i=0;i<count;i++){
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = ['💕','💖','❤️','💘'][Math.floor(Math.random()*4)];
    h.style.left = (20 + Math.random()*60) + '%';
    h.style.top = (40 + Math.random()*20) + '%';
    h.style.fontSize = (16 + Math.random()*36)+'px';
    h.style.animationDuration = (2 + Math.random()*1.6)+'s';
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),3600);
  }
}

if(safeQuery('celebrate')){
  // run celebration repeatedly for a short while
  createConfettiBurst(90);
  createHearts(26);
  let i=0;
  const int = setInterval(()=>{ createConfettiBurst(36); createHearts(10); i++; if(i>3) clearInterval(int); },900);
}
