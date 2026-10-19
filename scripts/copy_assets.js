import fs from 'fs';
import path from 'path';

const brain = 'C:\\Users\\nihar\\.gemini\\antigravity-ide\\brain\\702e54fe-e9e7-482a-a856-01f2c8a75e8c';
const root = 'd:\\Elikay-Roofing';

const mappings = [
  { src: 'cypress_roof_home_1792417184908.jpg', dest: 'public/images/locations/cypress.jpg' },
  { src: 'galveston_roof_home_1792417206277.jpg', dest: 'public/images/locations/galveston.jpg' },
  { src: 'woodlands_roof_pines_1792417466381.jpg', dest: 'public/images/locations/the-woodlands.jpg' },
  { src: 'katy_roof_brick_1792417497031.jpg', dest: 'public/images/locations/katy.jpg' },
  { src: 'katy_roof_brick_1792417497031.jpg', dest: 'public/images/locations/houston.jpg' },
  { src: 'cypress_roof_home_1792417184908.jpg', dest: 'public/images/locations/pearland.jpg' },
  { src: 'woodlands_roof_pines_1792417466381.jpg', dest: 'public/images/locations/spring.jpg' },
  { src: 'cypress_roof_home_1792417184908.jpg', dest: 'public/images/locations/waller.jpg' },
  { src: 'katy_roof_brick_1792417497031.jpg', dest: 'public/images/locations/hempstead.jpg' },

  { src: 'gutters_craft_1792417329387.jpg', dest: 'public/images/services/gutters-drainage.jpg' },
  { src: 'skylight_roof_1792417353470.jpg', dest: 'public/images/services/skylight-repair.jpg' },
  { src: 'storm_damage_eval_1792417379408.jpg', dest: 'public/images/services/storm-damage.jpg' },
  { src: 'fascia_soffit_trim_1792417405334.jpg', dest: 'public/images/services/fascia-soffit.jpg' },

  { src: 'hero_roof_craftsmen_1792417253270.jpg', dest: 'public/images/heroes/hero-about.jpg' },
  { src: 'hero_roof_aerial_1792417305848.jpg', dest: 'public/images/heroes/hero-services.jpg' },
  { src: 'hero_roof_aerial_1792417305848.jpg', dest: 'public/images/heroes/hero-portfolio.jpg' },
  { src: 'cypress_roof_home_1792417184908.jpg', dest: 'public/images/heroes/hero-locations.jpg' },
  { src: 'hero_contact_facade_1792417438346.jpg', dest: 'public/images/heroes/hero-contact.jpg' },
  { src: 'hero_roof_aerial_1792417305848.jpg', dest: 'public/images/heroes/hero-faq.jpg' },
  { src: 'hero_contact_facade_1792417438346.jpg', dest: 'public/images/heroes/hero-legal.jpg' }
];

for (const map of mappings) {
  const sourcePath = path.join(brain, map.src);
  const targetPath = path.join(root, map.dest);
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${map.src} -> ${map.dest}`);
  } else {
    console.error(`Source not found: ${sourcePath}`);
  }
}
console.log('All image assets successfully synchronized!');
