document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('[data-typeit-id]');
  elements.forEach(function(el) {
      var text = el.textContent.trim(); // Removi espaços em branco em excesso
      var delay = 250; // Ajuste a velocidade de digitação conforme necessário
      el.textContent = "Print('"; // Limpe o conteúdo do elemento
      typeItOut(el, text, delay); // Chame a função de digitação
  });
});

function typeItOut(element, text, delay) {
  text.split('').forEach(function(char, index) {
      setTimeout(function() {
          element.textContent += char; // Adicione cada caractere com atraso
      }, delay * index);
  });
}
document.addEventListener('DOMContentLoaded', function() {
  // Captura o elemento do botão "GET IN TOUCH"
  var getInTouchButton = document.querySelector('.btn');

  // Captura o elemento da seção das redes sociais
  var socialSection = document.getElementById('social-section');

  // Adiciona um ouvinte de evento para o clique no botão
  getInTouchButton.addEventListener('click', function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link
      
      // Calcula a posição da seção das redes sociais em relação ao topo da página
      var offsetTop = socialSection.offsetTop;

      // Realiza a animação de rolagem suave até a posição da seção das redes sociais
      window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });

      // Verifica se a classe 'hidden' está presente na seção das redes sociais
      var isHidden = socialSection.classList.contains('hidden');

      // Se estiver oculta, mostra as redes sociais e marca o botão como expandido
      if (isHidden) {
          socialSection.classList.remove('hidden');
          getInTouchButton.classList.add('expanded');
      } else {
          // Caso contrário, esconde as redes sociais e remove a marcação de expandido do botão
          socialSection.classList.add('hidden');
          getInTouchButton.classList.remove('expanded');
      }
  });
});
