/**
 * ELIKAY ROOFING LLC - Portfolio & Project Gallery Data
 *
 * All photos verified trade roofing imagery.
 */

export const portfolioCategories = [
  { id: "all", label: { en: "All Projects", es: "Todos los Proyectos" } },
  { id: "roof-replacements", label: { en: "Replacements & Tear-Off", es: "Reemplazos y Desmontaje" } },
  { id: "shingle-roofing", label: { en: "Architectural Shingles", es: "Tejas Arquitectónicas" } },
  { id: "roof-repairs", label: { en: "Deck & Structural Repairs", es: "Reparación de Estructura" } },
  { id: "attic-venting", label: { en: "Attic Ventilation", es: "Ventilación de Ático" } },
  { id: "leak-detection", label: { en: "Leak Diagnostics", es: "Diagnóstico de Goteras" } },
  { id: "exteriors", label: { en: "Gutters & Exteriors", es: "Canaletas y Exteriores" } },
];

export const portfolioItems = [
  {
    id: "proj-13",
    title: {
      en: "Sunset Ridge & Whirlybird Ventilation",
      es: "Cumbrera y Ventilación Eólica al Atardecer"
    },
    image: "/images/projects/13.jpeg",
    category: "roof-replacements",
    categoryName: { en: "Complete Replacement", es: "Reemplazo Completo" },
    description: {
      en: "Golden hour view overlooking completed architectural shingle roof with precision ridge cap alignment and wind turbine attic exhaust vents.",
      es: "Vista al atardecer de techo con tejas arquitectónicas terminadas, cumbrera alineada con precisión y turbinas eólicas de ventilación."
    },
    isConfirmedElikayWork: true,
    aspect: "wide"
  },
  {
    id: "proj-8",
    title: {
      en: "Hip & Ridge Shingle Precision",
      es: "Precisión en Tejas de Limatesa y Cumbrera"
    },
    image: "/images/projects/8.jpeg",
    category: "shingle-roofing",
    categoryName: { en: "Shingle Roofing", es: "Techas de Tejas Asfálticas" },
    description: {
      en: "Crisp architectural shingle hip line leading to apex ridge, showing dimensional texture and clean flashing around chimney cricket.",
      es: "Línea de limatesa en tejas arquitectónicas hacia el caballete, mostrando textura dimensional y remate limpio junto a la chimenea."
    },
    isConfirmedElikayWork: true,
    aspect: "wide"
  },
  {
    id: "proj-18",
    title: {
      en: "Wind Turbine Ventilators Installed",
      es: "Instalación de Turbinas Eólicas de Ático"
    },
    image: "/images/projects/18.jpeg",
    category: "attic-venting",
    categoryName: { en: "Attic Ventilation", es: "Ventilación de Ático" },
    description: {
      en: "Close-up perspective of aluminum turbine whirlybirds mounted with watertight flashing along the newly capped ridge.",
      es: "Detalle de turbinas eólicas de aluminio instaladas con hojalatería impermeable sobre la cumbrera recién terminada."
    },
    isConfirmedElikayWork: true,
    aspect: "tall"
  },
  {
    id: "proj-9",
    title: {
      en: "Multi-Plane Valley & Hip Intersections",
      es: "Intersección de Limahoyas y Limatesas"
    },
    image: "/images/projects/9.jpeg",
    category: "shingle-roofing",
    categoryName: { en: "Shingle Roofing", es: "Tejas Asfálticas" },
    description: {
      en: "Complex residential roof geometry with interlocking valleys and hip caps aligned for optimal drainage.",
      es: "Geometría compleja de techo residencial con limahoyas entrelazadas y cumbreras alineadas para óptimo drenaje."
    },
    isConfirmedElikayWork: true,
    aspect: "wide"
  },
  {
    id: "proj-12",
    title: {
      en: "Synthetic Underlayment Barrier Installation",
      es: "Instalación de Membrana Sintética Impermeable"
    },
    image: "/images/projects/12.jpeg",
    category: "roof-replacements",
    categoryName: { en: "Deck Preparation", es: "Preparación de la Base" },
    description: {
      en: "Full roof plane secured with TopShield synthetic water barrier and plastic cap nails prior to shingle laying.",
      es: "Superficie de madera protegida con barrera sintética TopShield y clavos con capuchón plástico antes de colocar tejas."
    },
    isConfirmedElikayWork: true,
    aspect: "square"
  },
  {
    id: "proj-2",
    title: {
      en: "Roof Decking Plywood Replacement",
      es: "Reemplazo de Madera de Soporte en Techo"
    },
    image: "/images/projects/2.jpeg",
    category: "roof-repairs",
    categoryName: { en: "Deck Repairs", es: "Reparación de Madera" },
    description: {
      en: "Structural deck repair showing clean OSB plywood installation over exposed rafter framing and insulation.",
      es: "Reparación estructural de madera con placas OSB nuevas sobre vigas de techo y aislamiento expuesto."
    },
    isConfirmedElikayWork: true,
    aspect: "tall"
  },
  {
    id: "proj-3",
    title: {
      en: "Plumbing Pipe Penetration Leak Diagnosis",
      es: "Diagnóstico de Gotera en Tubo Sanitario"
    },
    image: "/images/projects/3.jpeg",
    category: "leak-detection",
    categoryName: { en: "Leak Diagnostics", es: "Diagnóstico de Goteras" },
    description: {
      en: "Inspection identifying localized wood rot around plumbing vent stack penetration caused by cracked rubber boot flashing.",
      es: "Inspección que localizó pudrición de madera alrededor del tubo de ventilación causada por rotura en la bota de goma."
    },
    isConfirmedElikayWork: true,
    aspect: "tall"
  },
  {
    id: "proj-19",
    title: {
      en: "Complete Tear-Off & Surface Blowout",
      es: "Desmontaje Total y Limpieza del Techo"
    },
    image: "/images/projects/19.jpeg",
    category: "roof-replacements",
    categoryName: { en: "Tear-Off Process", es: "Proceso de Desmontaje" },
    description: {
      en: "Stripping worn shingles down to the bare wooden deck and clearing all grit with high-velocity blowers.",
      es: "Retiro completo de tejas envejecidas hasta la madera desnuda y soplado a presión de residuos antes de renovar."
    },
    isConfirmedElikayWork: true,
    aspect: "tall"
  },
  {
    id: "proj-14",
    title: {
      en: "Eave Framing & Rafter Structural Restoration",
      es: "Restauración de Vigas y Estructura en Aleros"
    },
    image: "/images/projects/14.jpeg",
    category: "roof-repairs",
    categoryName: { en: "Structural Repairs", es: "Reparación Estructural" },
    description: {
      en: "Carpentry framing repair along lower roof eave, sistering damaged rafters and replacing perimeter decking.",
      es: "Carpintería en el borde del alero reforzando vigas afectadas y renovando la madera perimetral."
    },
    isConfirmedElikayWork: true,
    aspect: "square"
  },
  {
    id: "proj-5",
    title: {
      en: "Completed Shingle Slope & Exhaust Boots",
      es: "Vertiente de Tejas y Tubos de Ventilación"
    },
    image: "/images/projects/5.jpeg",
    category: "shingle-roofing",
    categoryName: { en: "Shingle Roofing", es: "Tejas Asfálticas" },
    description: {
      en: "High-angle view of completed shingle course with new pipe flashing boots and ridge cap overview.",
      es: "Vista superior de vertiente terminada con botas nuevas en tubos de ventilación y cumbrera alineada."
    },
    isConfirmedElikayWork: true,
    aspect: "tall"
  },
  {
    id: "proj-11",
    title: {
      en: "Chimney Step Flashing & Nailer Integration",
      es: "Hojalatería Escalonada en Chimenea"
    },
    image: "/images/projects/11.jpeg",
    category: "roof-repairs",
    categoryName: { en: "Flashing Craftsmanship", es: "Hojalatería" },
    description: {
      en: "Pneumatic fastening of shingles around step flashing junction against vertical chimney chase.",
      es: "Fijación neumática de tejas alrededor de la hojalatería escalonada en el encuentro con la chimenea."
    },
    isConfirmedElikayWork: true,
    aspect: "wide"
  },
  {
    id: "proj-16",
    title: {
      en: "Rooftop Ventilation Array & Neighborhood View",
      es: "Conjunto de Ventilación en Techo y Vista al Vecindario"
    },
    image: "/images/projects/16.jpeg",
    category: "attic-venting",
    categoryName: { en: "Attic Ventilation", es: "Ventilación de Ático" },
    description: {
      en: "Wide perspective showing multiple turbine vents and exhaust flashings installed across residential roof pitch.",
      es: "Perspectiva amplia mostrando múltiples turbinas de ventilación e inserciones impermeabilizadas en la pendiente."
    },
    isConfirmedElikayWork: true,
    aspect: "square"
  },
  {
    id: "proj-7",
    title: {
      en: "Eave Line & Dimensional Shingle Detail",
      es: "Línea de Alero y Detalle Dimensional"
    },
    image: "/images/projects/7.jpeg",
    category: "shingle-roofing",
    categoryName: { en: "Shingle Roofing", es: "Tejas Asfálticas" },
    description: {
      en: "Clean perspective from roof rake highlighting uniform shingle shadow lines and protective drip edge.",
      es: "Perspectiva lateral destacando las líneas de sombra homogéneas de las tejas y el perfil de goteo protector."
    },
    isConfirmedElikayWork: true,
    aspect: "wide"
  },
  {
    id: "proj-17",
    title: {
      en: "Ridge Cap Course Capping Detail",
      es: "Detalle de Montaje en Caballete"
    },
    image: "/images/projects/17.jpeg",
    category: "shingle-roofing",
    categoryName: { en: "Craftsmanship Detail", es: "Detalle Técnico" },
    description: {
      en: "Overlapping ridge shingles fastened for water deflection against high Texas wind currents.",
      es: "Traslape de tejas de cumbrera aseguradas para desviar el agua ante fuertes ráfagas de viento."
    },
    isConfirmedElikayWork: true,
    aspect: "square"
  },
  {
    id: "proj-1",
    title: {
      en: "Pre-Installation Clean Deck Preparation",
      es: "Preparación de la Base de Madera"
    },
    image: "/images/projects/1.jpeg",
    category: "roof-replacements",
    categoryName: { en: "Deck Preparation", es: "Preparación de Base" },
    description: {
      en: "Detailed evaluation of wooden deck sheathing to ensure secure nail retention before installing barrier.",
      es: "Evaluación minuciosa de la base de madera para garantizar óptimo anclaje antes de la instalación."
    },
    isConfirmedElikayWork: true,
    aspect: "tall"
  },
  {
    id: "proj-4",
    title: {
      en: "Starter Strip & Drip Edge Flashing",
      es: "Banda de Inicio y Remate de Goteo"
    },
    image: "/images/projects/4.jpeg",
    category: "shingle-roofing",
    categoryName: { en: "Perimeter Flashing", es: "Remate Perimetral" },
    description: {
      en: "Laying perimeter starter shingle course to seal edges against wind lift during coastal Texas storms.",
      es: "Colocación de tejas de inicio perimetrales para sellar bordes contra levantamiento por viento."
    },
    isConfirmedElikayWork: true,
    aspect: "square"
  },
  {
    id: "proj-6",
    title: {
      en: "Completed Hip Shingle Slope Elevation",
      es: "Vertiente Terminada en Techo a Cuatro Aguas"
    },
    image: "/images/projects/6.jpeg",
    category: "shingle-roofing",
    categoryName: { en: "Architectural Shingles", es: "Tejas Arquitectónicas" },
    description: {
      en: "Uniform shadow lines and clean alignment over multi-slope residential roof construction.",
      es: "Líneas de sombra homogéneas y alineación limpia en techo residencial de múltiples caídas."
    },
    isConfirmedElikayWork: true,
    aspect: "wide"
  },
  {
    id: "proj-10",
    title: {
      en: "Valley Metal & Shingle Interlock",
      es: "Limahoya Metálica y Ensamblaje de Tejas"
    },
    image: "/images/projects/10.jpeg",
    category: "leak-detection",
    categoryName: { en: "Valley Waterproofing", es: "Impermeabilización de Limahoyas" },
    description: {
      en: "Water-diverting closed cut valley designed to handle heavy torrential rains without overflow.",
      es: "Limahoya con corte de alta protección diseñada para drenar lluvias torrenciales sin desbordamientos."
    },
    isConfirmedElikayWork: true,
    aspect: "wide"
  },
  {
    id: "proj-15",
    title: {
      en: "Exhaust Pipe Boot Flashing Replacement",
      es: "Reemplazo de Bota en Tubo de Escape"
    },
    image: "/images/projects/15.jpeg",
    category: "roof-repairs",
    categoryName: { en: "Penetration Flashing", es: "Hojalatería de Paso" },
    description: {
      en: "Precision flashing around plumbing stack vent preventing interior water damage to ceilings.",
      es: "Instalación de bota nueva en tubo sanitario para prevenir filtraciones hacia los techos interiores."
    },
    isConfirmedElikayWork: true,
    aspect: "square"
  },

  // Exterior Craftsmanship References
  {
    id: "proj-ext-1",
    title: {
      en: "Seamless Aluminum Gutter & Downspout Installation",
      es: "Instalación de Canaletas de Aluminio sin Uniones"
    },
    image: "/images/services/gutters-drainage.jpg",
    category: "exteriors",
    categoryName: { en: "Gutter Services", es: "Servicio de Canaletas" },
    description: {
      en: "Seamless aluminum gutter channel with mitered corner and downspout carrying stormwater away from home foundation.",
      es: "Canaleta continua de aluminio con esquina ingleteada y bajante pluvial que aleja el agua de los cimientos."
    },
    isConfirmedElikayWork: true,
    aspect: "wide"
  },
  {
    id: "proj-ext-2",
    title: {
      en: "Architectural Skylight Waterproof Curb & Flashing",
      es: "Tragaluz Arquitectónico con Remate Impermeable"
    },
    image: "/images/services/skylight-repair.jpg",
    category: "exteriors",
    categoryName: { en: "Skylight Flashing", es: "Remate de Tragaluz" },
    description: {
      en: "Modern insulated glass skylight integrated into dark architectural shingles with multi-tiered step flashing.",
      es: "Tragaluz moderno de vidrio aislado integrado en tejas arquitectónicas con remates metálicos escalonados."
    },
    isConfirmedElikayWork: true,
    aspect: "wide"
  },
  {
    id: "proj-ext-3",
    title: {
      en: "Fascia Board & Vented Soffit Carpentry Restoration",
      es: "Fascia de Madera y Alero Soffit Ventilado"
    },
    image: "/images/services/fascia-soffit.jpg",
    category: "exteriors",
    categoryName: { en: "Fascia & Soffit", es: "Fascia y Soffit" },
    description: {
      en: "Crisp white fascia board and perforated soffit trim installed along roof eave to allow continuous intake airflow.",
      es: "Fascia blanca y alero soffit perforado instalados para permitir la entrada continua de aire fresco al ático."
    },
    isConfirmedElikayWork: true,
    aspect: "wide"
  }
];
