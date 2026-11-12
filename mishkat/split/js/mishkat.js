(function(){
  var C = window.MISHKAT || {};
  /* أزرار بدون وظيفة لحد مرحلة النظام */
  document.querySelectorAll('[data-soon]').forEach(function(a){
    a.addEventListener('click', function(e){ e.preventDefault(); });
  });

  if (C.heroImage){
    var im = new Image(), hero = document.getElementById('home');
    im.onload = function(){ hero.style.setProperty('--img', 'url("' + C.heroImage + '")'); hero.classList.add('has-img'); };
    im.src = C.heroImage;
  }

  var burger = document.getElementById('burger'), links = document.getElementById('links');
  burger.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  links.addEventListener('click', function(e){
    if (e.target.tagName === 'A'){ links.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
  });

  var items = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) { items.forEach(function(el){ el.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.08});
  items.forEach(function(el){ io.observe(el); });
})();
