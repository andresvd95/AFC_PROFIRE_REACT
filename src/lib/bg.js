// Fondo de sección como estilo inline. Evita depender de que jQuery/main.js
// convierta <div class="bg-img"><img></div> en background del <section>
// (ese truco del tema no es fiable dentro de una SPA con re-renders).
export function bgCover(src, position = 'center') {
  return {
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
  }
}

export default bgCover
