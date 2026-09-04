import ServicePage from '../components/ServicePage'

// ─── Instalación ──────────────────────────────────────────────────────────────
export function Instalacion() {
  return (
    <ServicePage
      title="Instalación & Puesta en Marcha"
      subtitle="Supervisamos y ejecutamos proyectos de instalación de sistemas contra incendios, realizando las pruebas y la puesta en servicio de todos los subsistemas para entregar una operación confiable desde el día uno."
      serviceImg="/assets/images/services/instalacion.png"
      sections={[
        {
          heading: 'Visión General',
          text: 'En AFC Pro Fire ejecutamos la instalación de sistemas contra incendios con supervisión experta, control de calidad y cumplimiento normativo. Cerramos el ciclo con pruebas integrales y comisionamiento para asegurar que cada componente funcione como fue diseñado.',
        },
        {
          heading: 'Supervisión y Ejecución de Proyectos de Instalación',
          text: 'Acompañamiento técnico integral durante la ejecución del proyecto, garantizando que la instalación se realice conforme a planos, especificaciones y normativas aplicables.',
        },
        {
          heading: 'Pruebas y Puesta en Servicio de Todos los Sistemas',
          text: 'Realización de pruebas funcionales, operativas y de desempeño para asegurar que todos los sistemas contra incendio funcionen correctamente antes de su entrega final.',
        },
      ]}
      benefits={[
        { icon: 'icon-shield-check', label: 'Cumplimiento' },
        { icon: 'icon-clock2', label: 'Arranque Seguro' },
        { icon: 'icon-file', label: 'Entrega Formal' },
      ]}
    />
  )
}

// ─── Mantenimiento ────────────────────────────────────────────────────────────
export function Mantenimiento() {
  return (
    <ServicePage
      title="Mantenimiento Preventivo y Correctivo"
      subtitle="Planes de mantenimiento adaptados a las necesidades del cliente, con inspecciones periódicas, pruebas y reparaciones NFPA 25 y NFPA 72."
      serviceImg="/assets/images/services/mantenimiento.png"
      sections={[
        {
          heading: 'Visión General',
          text: 'Ofrecemos programas de mantenimiento preventivo y correctivo diseñados para mantener sus sistemas contra incendios en óptimas condiciones y garantizar su disponibilidad ante cualquier emergencia.',
        },
        {
          heading: 'Programas de Mantenimiento Preventivo',
          text: 'Planes de inspección y mantenimiento basados en NFPA 25 y NFPA 72, adaptados a la complejidad de cada instalación, con frecuencias y alcances definidos para maximizar la vida útil de los equipos.',
        },
        {
          heading: 'Atención Correctiva y de Emergencias',
          text: 'Respuesta oportuna ante fallas, con diagnóstico en sitio, reparación y verificación funcional para restablecer la operatividad del sistema en el menor tiempo posible.',
        },
      ]}
      benefits={[
        { icon: 'icon-settings', label: 'Mantenimiento NFPA' },
        { icon: 'icon-shield', label: 'Máxima Disponibilidad' },
        { icon: 'icon-tools', label: 'Atención de Emergencias' },
      ]}
    />
  )
}

// ─── Auditoría ────────────────────────────────────────────────────────────────
export function Auditoria() {
  return (
    <ServicePage
      title="Gestión de Riesgos y Auditoría Integral"
      subtitle="Evaluamos riesgos, elaboramos planes de emergencia y auditamos sistemas de protección existentes para garantizar el cumplimiento y la efectividad."
      serviceImg="/assets/images/services/gestion.png"
      sections={[
        {
          heading: 'Visión General',
          text: 'La gestión de riesgos es el primer paso hacia una protección efectiva. En AFC Pro Fire evaluamos el estado real de tu instalación, identificamos brechas de cumplimiento y desarrollamos planes concretos de mejora.',
        },
        {
          heading: 'Evaluación de Riesgos',
          text: 'Análisis sistemático de amenazas y vulnerabilidades en instalaciones industriales, comerciales y residenciales, con generación de matriz de riesgo y priorización de intervenciones.',
        },
        {
          heading: 'Planes de Emergencia y Contingencia',
          text: 'Elaboración y actualización de planes de evacuación, atención de emergencias y contingencia operativa, alineados a la normativa colombiana y estándares NFPA.',
        },
        {
          heading: 'Auditoría e Interventoría',
          text: 'Revisión técnica de sistemas existentes para verificar el cumplimiento de diseño, instalación y funcionamiento. Interventoría durante la ejecución de nuevos proyectos.',
        },
      ]}
      benefits={[
        { icon: 'icon-check', label: 'Cumplimiento Normativo' },
        { icon: 'icon-shield', label: 'Reducción de Riesgos' },
        { icon: 'icon-file', label: 'Documentación Completa' },
      ]}
    />
  )
}

// ─── Diagnóstico ─────────────────────────────────────────────────────────────
export function Diagnostico() {
  return (
    <ServicePage
      title="Diagnóstico y Análisis de Requerimientos"
      subtitle="Entrevistas, levantamiento en sitio, análisis de brechas y definición del alcance de tu proyecto."
      serviceImg="/assets/images/services/diagnostico.png"
      sections={[
        {
          heading: 'Visión General',
          text: 'El diagnóstico es la base de toda solución exitosa. Analizamos en profundidad las necesidades del cliente, el estado de las instalaciones y la normativa aplicable para definir el alcance y la estrategia más adecuada.',
        },
        {
          heading: 'Entrevistas y Levantamiento de Información',
          text: 'Reuniones con los responsables de seguridad y operaciones del cliente, complementadas con inspección física detallada de las instalaciones.',
        },
        {
          heading: 'Análisis de Brechas',
          text: 'Comparación entre el estado actual de la protección contra incendios y los requisitos normativos y de riesgo, identificando las oportunidades de mejora prioritarias.',
        },
      ]}
      benefits={[
        { icon: 'icon-search', label: 'Análisis Profundo' },
        { icon: 'icon-chart', label: 'Brechas Identificadas' },
        { icon: 'icon-target', label: 'Alcance Definido' },
      ]}
    />
  )
}

// ─── Diseño e Ingeniería ─────────────────────────────────────────────────────
export function DisenoIngenieria() {
  return (
    <ServicePage
      title="Diseño e Ingeniería de Sistemas Contra Incendios"
      subtitle="Diseñamos sistemas de rociadores, detección y alarma, agentes limpios, CO₂, espuma, bombeo y cálculo hidráulico NFPA."
      serviceImg="/assets/images/services/diseño.png"
      sections={[
        {
          heading: 'Visión General',
          text: 'Nuestro equipo de ingeniería diseña sistemas contra incendios integrales, siguiendo las normas NFPA, Retie y las mejores prácticas internacionales, adaptados a las características específicas de cada proyecto.',
        },
        {
          heading: 'Sistemas de Rociadores Automáticos',
          text: 'Diseño hidráulico conforme a NFPA 13, cálculo de caudales, presiones y selección de rociadores según la clasificación de riesgo de la instalación.',
        },
        {
          heading: 'Sistemas de Detección y Alarma',
          text: 'Diseño de sistemas de detección de humo, calor y gas, alarmas audibles y visuales, paneles de control y comunicación con centrales de monitoreo conforme a NFPA 72.',
        },
        {
          heading: 'Sistemas Especiales',
          text: 'Diseño de sistemas de extinción con agentes limpios (FM-200, Novec), CO₂, espuma AFFF y polvo seco para protección de áreas críticas como salas eléctricas, cuartos de servidores y depósitos de combustible.',
        },
        {
          heading: 'Sistemas de Bombeo',
          text: 'Selección y diseño de grupos de bombeo contra incendio conforme a NFPA 20, incluyendo bombas principales, jockey y sistemas de arranque automático.',
        },
      ]}
      benefits={[
        { icon: 'icon-design', label: 'Diseño NFPA' },
        { icon: 'icon-certificate', label: 'Ingeniería Certificada' },
        { icon: 'icon-blueprint', label: 'Planos y Memorias' },
      ]}
    />
  )
}

// ─── Transferencia de Conocimiento ───────────────────────────────────────────
export function TransferenciaConocimiento() {
  return (
    <ServicePage
      title="Capacitación y Transferencia del Conocimiento"
      subtitle="Programas de formación operativa, mantenimiento y respuesta a emergencias para tu equipo."
      serviceImg="/assets/images/services/capacitacion.png"
      sections={[
        {
          heading: 'Visión General',
          text: 'La tecnología es tan efectiva como el equipo humano que la opera. En AFC Pro Fire ofrecemos programas de capacitación diseñados para empoderar a los responsables de seguridad y al personal operativo con el conocimiento necesario para actuar correctamente ante una emergencia.',
        },
        {
          heading: 'Programas de Formación Operativa',
          text: 'Capacitación práctica sobre el funcionamiento, operación y respuesta ante alarmas de los sistemas de protección contra incendios instalados en la organización.',
        },
        {
          heading: 'Mantenimiento Básico y Primeros Auxilios',
          text: 'Entrenamiento en inspecciones básicas de equipos, uso correcto de extintores y protocolo de primeros auxilios para quemaduras y accidentes por incendio.',
        },
        {
          heading: 'Respuesta a Emergencias y Evacuación',
          text: 'Simulacros, brigadas de emergencia y protocolos de evacuación personalizados para cada tipo de instalación, con enfoque en reducción de tiempos de respuesta.',
        },
      ]}
      benefits={[
        { icon: 'icon-graduation-cap', label: 'Personal Capacitado' },
        { icon: 'icon-shield', label: 'Respuesta Efectiva' },
        { icon: 'icon-certificate', label: 'Certificación' },
      ]}
    />
  )
}

// ─── Conceptualización ───────────────────────────────────────────────────────
export function Conceptualizacion() {
  return (
    <ServicePage
      title="Conceptualización y Diseño de Soluciones"
      subtitle="Propuestas técnico-económicas, estudios de viabilidad y modelado de escenarios para tu proyecto."
      serviceImg="/assets/images/services/conceptualizacion.png"
      sections={[
        {
          heading: 'Visión General',
          text: 'Transformamos necesidades de seguridad en propuestas técnicas y económicas claras, evaluando la viabilidad y el retorno de inversión de cada solución para asegurar decisiones informadas.',
        },
        {
          heading: 'Propuestas Técnicas y Económicas',
          text: 'Elaboración de propuestas detalladas con especificaciones técnicas, cronogramas y presupuestos alineados a los objetivos y restricciones del cliente.',
        },
        {
          heading: 'Estudios de Viabilidad',
          text: 'Análisis de factibilidad técnica, normativa y económica de diferentes alternativas de solución, con análisis de costo-beneficio y estimación del ROI.',
        },
        {
          heading: 'Modelado y Simulación de Escenarios',
          text: 'Uso de herramientas de simulación para evaluar el comportamiento de diferentes soluciones ante distintos escenarios de riesgo.',
        },
      ]}
      benefits={[
        { icon: 'icon-chart', label: 'Análisis ROI' },
        { icon: 'icon-lightbulb', label: 'Soluciones Creativas' },
        { icon: 'icon-document', label: 'Propuestas Claras' },
      ]}
    />
  )
}
