function abrirWhatsApp() {
    const numero = '5581985869074'; // <-- Substitua pelo seu número com DDD e país
    const mensagem = encodeURIComponent("Olá! Gostaria de saber mais sobre seus serviços.");
    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, '_blank');
  }
  