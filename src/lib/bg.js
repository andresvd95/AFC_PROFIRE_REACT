// Fondo de sección como estilo inline. Evita depender de que jQuery/main.js
// convierta <div class="bg-img"><img></div> en background del <section>.
//
// `zIndex: 1` es imprescindible: el tema pinta un degradado/overlay en
// `.bg-overlay:before { z-index: -1 }`. Para que ese overlay quede POR ENCIMA
// del background y no detrás, la sección debe crear contexto de apilado
// (que es justo lo que hace la clase `.bg-img` del tema con `z-index: 1`).
export function bgCover(src, position = 'center') {
  return {
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    zIndex: 1,
  }
}

export default bgCover
