import { useRef, useState } from 'react'

/*
 * Reproductor de vídeo local con overlay. Dos modos:
 *
 *  mode="cover"  (quienes-somos.html #videoBox):
 *     portada + overlay con botón play + botón cerrar; al reproducir se oculta
 *     la portada y se muestra el vídeo con controles. Al terminar vuelve a la portada.
 *
 *  mode="inline" (proyectos.html .video-wrapper):
 *     el <video> visible con un botón de play encima; al primer click se activan
 *     `controls`, arranca la reproducción y se marca .playing. `pause`/`ended` lo revierten.
 */
export default function LocalVideo({ src, poster, mode = 'cover' }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const open = () => {
    const v = videoRef.current
    if (!v) return
    if (mode === 'inline') v.controls = true
    else v.currentTime = 0
    const p = v.play()
    if (p && p.catch) p.catch(() => {})
    setPlaying(true)
  }
  const close = () => {
    const v = videoRef.current
    if (v) v.pause()
    setPlaying(false)
  }

  if (mode === 'inline') {
    return (
      <div className={`video-wrapper${playing ? ' playing' : ''}`} onClick={open}>
        <video ref={videoRef} preload="metadata" onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}>
          <source src={encodeURI(src)} type="video/mp4" />
        </video>
        <div className="video-play-btn">
          <i className="fas fa-play"></i>
        </div>
      </div>
    )
  }

  return (
    <div className="video-section-wrapper">
      <div className={`video-container${playing ? ' is-playing' : ''}`} id="videoBox">
        <img src={poster} alt="Video AFC Pro Fire" className="video-thumbnail" />

        <div className="video-overlay" id="video-overlay">
          <button className="video__btn" id="play-video-btn" type="button" aria-label="Reproducir video" onClick={open}>
            <div className="video__player">
              <i className="fa fa-play"></i>
            </div>
          </button>
          <span className="video__btn-title" style={{ color: '#000' }}>
            Ver el video
          </span>
        </div>

        <button className="video-close-btn" id="close-video-btn" type="button" aria-label="Cerrar video" onClick={close}>
          <i className="fas fa-times"></i>
        </button>

        <video
          id="afc-video"
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster={poster}
          onEnded={close}
        >
          <source src={encodeURI(src)} type="video/mp4" />
          Tu navegador no soporta este video.
        </video>
      </div>
    </div>
  )
}
