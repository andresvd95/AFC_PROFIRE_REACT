/*
 * theme.js — reimplementa assets/js/main.js del tema "Afc Pro Fire" como
 * initTheme() / destroyTheme(), ejecutables en cada cambio de ruta.
 *
 * Requiere que window.jQuery y los plugins (slick, magnificPopup, counterUp,
 * niceSelect) estén cargados globalmente desde index.html. En entornos sin
 * jQuery (tests con jsdom) todas las funciones son no-op y no lanzan.
 *
 * Secciones portadas de main.js:
 *  02 Mobile Menu · 03 Sticky Navbar · 05/06 Scroll Top · 07 .bg-img → background
 *  08 Acordeones · 10 Slick Carousel (+ slider-with-navs/nav + filtro) · 11 Popups
 *  12 counterUp · 13 niceSelect
 * NO se portan: 01 preloader (lo hace RouteEffects), 04 search popup, 09 loadMore,
 * 14 mixItUp, 15 range slider, contactForm.validate() (lo sustituyen los forms React).
 */

const NS = '.afcTheme'

function jq() {
  return typeof window !== 'undefined' ? window.jQuery : undefined
}

/* ----------------------------------------------------------------------------
 * 07 · Set background-image a la sección padre de cada .bg-img > img
 * Idempotente: si el <img> ya fue consumido, no hace nada.
 * -------------------------------------------------------------------------- */
function applyBgImages($) {
  $('.bg-img').each(function () {
    const $wrap = $(this)
    const $img = $wrap.children('img').first()
    if (!$img.length) return
    const src = $img.attr('src')
    if (!src) return
    $wrap.css({
      'background-image': `url(${src})`,
      'background-size': 'cover',
      'background-position': 'center',
    })
    if ($img.hasClass('background-size-auto')) {
      $wrap.addClass('background-size-auto')
    }
    $img.remove()
  })
}

/* ----------------------------------------------------------------------------
 * 10 · Slick carousels
 * -------------------------------------------------------------------------- */
function initSlick($) {
  if (!$.fn || !$.fn.slick) return

  // Carruseles que declaran su config vía data-slick
  $('.slick-carousel').not('.slick-initialized').slick()

  // Sliders con config fija (portada de main.js)
  $('.slider-with-navs').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    asNavFor: '.slider-nav',
  })
  $('.slider-nav').not('.slick-initialized').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-with-navs',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '50px',
    responsive: [{ breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
  })

  // Filtro de carrusel por data-value (portado de main.js)
  $(document).on(`click${NS}`, '#slick-filter-buttons .nav__link', function (e) {
    e.preventDefault()
    const $btn = $(this)
    $btn.addClass('active').siblings().removeClass('active')
    const key = '.' + $btn.data('value')
    const $c = $('#filter-carousel')
    if (!$c.length) return
    $c.slick('slickUnfilter')
    $c.slick('slickFilter', key).slick('refresh')
    $c.slick('slickGoTo', 0)
  })
}

function destroySlick($) {
  if (!$.fn || !$.fn.slick) return
  $('.slick-initialized').each(function () {
    try {
      $(this).slick('unslick')
    } catch (_) {
      /* noop */
    }
  })
}

/* ----------------------------------------------------------------------------
 * 11 · Magnific Popup (vídeo + galería)
 * -------------------------------------------------------------------------- */
function initPopups($) {
  if (!$.fn || !$.fn.magnificPopup) return

  $('.popup-video').magnificPopup({
    mainClass: 'mfp-fade',
    removalDelay: 0,
    preloader: false,
    fixedContentPos: false,
    type: 'iframe',
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: { index: 'youtube.com/', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1' },
      },
      srcAction: 'iframe_src',
    },
  })

  const galleryCfg = {
    type: 'image',
    tLoading: 'Cargando imagen #%curr%...',
    mainClass: 'mfp-img-mobile mfp-fade',
    gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] },
    image: { tError: '<a href="%url%">La imagen #%curr%</a> no se pudo cargar.' },
  }
  $('.popup-gallery-item').magnificPopup(galleryCfg)
  $('.popup-gallery').magnificPopup({
    ...galleryCfg,
    gallery: { ...galleryCfg.gallery, tPrev: 'Anterior', tNext: 'Siguiente', tCounter: '%curr% de %total%' },
  })
}

function destroyPopups($) {
  if ($.magnificPopup && typeof $.magnificPopup.close === 'function') {
    try {
      $.magnificPopup.close()
    } catch (_) {
      /* noop */
    }
  }
}

/* ----------------------------------------------------------------------------
 * 02/03/05/06/08 · Listeners globales (menú móvil, sticky, scroll-top, acordeón)
 * Todos con namespace para poder retirarlos en destroyTheme().
 * -------------------------------------------------------------------------- */
function initGlobalListeners($) {
  const $win = $(window)

  // 03 Sticky Navbar
  $win.on(`scroll${NS}`, function () {
    if ($win.width() >= 992) {
      const $navbar = $('.sticky-navbar')
      if ($win.scrollTop() > 200) $navbar.addClass('is-sticky')
      else $navbar.removeClass('is-sticky')
    }
  })

  // 05/06 Scroll Top Button
  $win.on(`scroll${NS}`, function () {
    const $btn = $('#scrollTopBtn')
    if ($win.scrollTop() > 700) $btn.addClass('actived')
    else $btn.removeClass('actived')
  })
  $(document).on(`click${NS}`, '#scrollTopBtn', function () {
    $('html, body').animate({ scrollTop: 0 }, 500)
  })

  // 02 Mobile Menu
  $(document).on(`click${NS}`, '.navbar-toggler', function () {
    $('.navbar-collapse').addClass('menu-opened')
  })
  $(document).on(`click${NS}`, '.close-mobile-menu', function () {
    $('.navbar-collapse').removeClass('menu-opened')
  })

  // 08 Acordeones
  $(document).on(`click${NS}`, '.accordion__item-header', function () {
    $(this).parent('.accordion-item').addClass('opened').siblings().removeClass('opened')
  })
  $(document).on(`click${NS}`, '.accordion__item-title', function (e) {
    e.preventDefault()
  })

  // dispara una vez el estado inicial de sticky/scroll-top
  $win.trigger('scroll')
}

/* ----------------------------------------------------------------------------
 * API pública
 * -------------------------------------------------------------------------- */
export function destroyTheme() {
  const $ = jq()
  if (!$) return
  $(window).off(NS)
  $(document).off(NS)
  destroySlick($)
  destroyPopups($)
  if ($.fn && $.fn.niceSelect) {
    try {
      $('select').niceSelect('destroy')
    } catch (_) {
      /* noop */
    }
  }
}

export function initTheme() {
  const $ = jq()
  if (!$) return

  applyBgImages($)
  initGlobalListeners($)
  initSlick($)
  initPopups($)

  if ($.fn && $.fn.counterUp) {
    $('.counter').counterUp({ delay: 10, time: 4000 })
  }
  if ($.fn && $.fn.niceSelect) {
    $('select').niceSelect()
  }
}

export default { initTheme, destroyTheme }
