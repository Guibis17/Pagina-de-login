const entrar_btn = document.querySelector('#entrar-button');
const inscrever_se_btn = document.querySelector('#inscrever-se-button');
const container =  document.querySelector('.container');

inscrever_se_btn.addEventListener('click', () => {
  container.classList.add('inscrever-se-mode');  
});

entrar_btn.addEventListener('click', () => {
  container.classList.add('entrar-mode');  
});
