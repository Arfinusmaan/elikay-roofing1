import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  {
    name: 'services/skylight-repair.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    desc: 'Roof skylight on architectural home'
  },
  {
    name: 'services/siding-repair.jpg',
    url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    desc: 'Residential siding and architectural exterior'
  },
  {
    name: 'services/fascia-soffit.jpg',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    desc: 'Roof eaves, fascia board and soffit overhang'
  },
  {
    name: 'services/storm-damage.jpg',
    url: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80',
    desc: 'Storm damage inspection and roof ridge evaluation'
  },
  {
    name: 'services/hero-residential.jpg',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    desc: 'Texas residential home with architectural roof'
  },
  {
    name: 'services/attic-insulation-vent.jpg',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    desc: 'Attic ventilation and ceiling roof space'
  },
  {
    name: 'services/shingle-craftsmanship.jpg',
    url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    desc: 'Architectural roof shingles and dormer details'
  },
  {
    name: 'locations/houston.jpg',
    url: 'https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?auto=format&fit=crop&w=1200&q=80',
    desc: 'Houston Texas metropolitan residential area'
  },
  {
    name: 'locations/katy.jpg',
    url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    desc: 'Suburban Texas home roof in Katy'
  },
  {
    name: 'locations/cypress.jpg',
    url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    desc: 'Residential estate in Cypress Texas'
  },
  {
    name: 'locations/the-woodlands.jpg',
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    desc: 'Wooded residential neighborhood in The Woodlands'
  },
  {
    name: 'locations/galveston.jpg',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    desc: 'Coastal Galveston Texas coastal environment'
  },
  {
    name: 'locations/pearland.jpg',
    url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80',
    desc: 'Pearland suburban residential home exterior'
  },
  {
    name: 'locations/spring.jpg',
    url: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80',
    desc: 'Spring Texas residential roof'
  },
  {
    name: 'locations/waller.jpg',
    url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    desc: 'Waller County residential property'
  },
  {
    name: 'locations/hempstead.jpg',
    url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80',
    desc: 'Hempstead Texas residential acreage home'
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(process.cwd(), 'public', 'images', item.name);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    
    https.get(item.url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (redirectRes) => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${item.name}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${item.name}`);
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Failed ${item.name}: ${err.message}`);
      resolve(); // don't abort entire batch
    });
  });
}

async function run() {
  console.log('Downloading supplemental high quality photographic assets...');
  for (const item of images) {
    await download(item);
  }
  console.log('Finished downloading supplemental assets.');
}

run();
