const status = document.getElementById('status');
const out = document.getElementById('state');

async function check(){
  try{
    const health = await fetch('/health').then(r=>r.text());
    status.textContent = 'Health: ' + health;
    const state = await fetch('/api/state').then(r=>r.json());
    out.textContent = JSON.stringify(state, null, 2);
  }catch(e){
    status.textContent = 'Error contacting server.';
    out.textContent = String(e);
  }
}
check();
setInterval(check, 5000);
console.log('Client loaded');
