import type { TopicContent } from './topics';

export const enContent: Record<string, TopicContent> = {
  photos: {
    title: 'Youth Hill Plovdiv – photos, views and best photo spots',
    description: 'Real photos from Youth Hill: entrances, alleys, the children’s railway, rope park, summit and sunset. Where to stand for the best shot and how to reach each spot.',
    h1: 'Photos from Youth Hill',
    card: 'Real photos from entrances, alleys, railway, rope park and sunset.',
    lead: 'Youth Hill is one of the most photographed spots in Plovdiv – from the dense forest and children’s railway to the panorama over the Old Town and the Rhodope Mountains. Here we grouped photos by location with the exact spot and direction.',
    updated: '2026-10-23',
    gallery: true,
    sections: [
      {
        id: 'entrance',
        title: 'Entrances and foot',
        body: 'Start at the entrance on Lyuben Karavelov Street, where the stairs and alleys begin. The trees form a natural arch – a good first shot in soft morning light.',
      },
      {
        id: 'railway',
        title: 'Children’s railway',
        body: 'The narrow-gauge railway runs through the forest with a little bridge, crossing and tunnel. Photograph the train at Pioneer station and along the open tracks.',
      },
      {
        id: 'rope',
        title: 'Rope park and adventure centre',
        body: 'The rope courses and platforms of the adventure centre are visible from the alley. A dynamic scene for action shots – shoot from the side without blocking participants.',
      },
      {
        id: 'summit',
        title: 'Summit and panorama',
        body: 'From the platforms near the summit you see the Ancient Theatre, the Old Town and the Plovdiv hills – the most sought-after shots from the hill.',
      },
      {
        id: 'sunset',
        title: 'Sunset from the west slope',
        body: 'The sun sets behind the Rhodopes, visible from the west slope. The golden hour before sunset is the best time for photography – look for open meadows facing west.',
      },
    ],
    faq: [
      {
        q: 'Where are the photos in this gallery from?',
        a: 'All photos were taken on Youth Hill – at the entrance, along the alleys, by the children’s railway, the rope park and the summit platforms, each described with its real spot.',
      },
      {
        q: 'Where is the best view for a photo?',
        a: 'From the platforms near the summit towards the Old Town and Rhodopes. For sunset pick an open west-facing meadow.',
      },
    ],
    related: ['directions', 'summit-walk', 'best-time'],
  },

  directions: {
    title: 'How to get to Youth Hill Plovdiv: entrances, map and transport',
    description: 'Navigation to Youth Hill Plovdiv: distinguish the pedestrian entrance, the children’s railway station and the adventure centre. Buses, walking from the Old Town and map navigation.',
    h1: 'How to get to Youth Hill',
    card: 'Distinguish the pedestrian entrance, the railway station and the rope-park centre.',
    lead: 'The common mistake is to look for one “top” point for everything. Youth Hill has several different entrances and destinations – a pedestrian entrance for climbing, a railway station at the foot, and the adventure centre with the rope park. Here they are separated.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'pedestrian',
        title: 'Pedestrian entrance (for climbing)',
        body: 'The pedestrian entrance starts on Lyuben Karavelov Street, where the stairs and alleys to the summit begin. From the square in front of the Ancient Theatre or the Old Town it is a 15–25 minute walk.',
      },
      {
        id: 'railway-station',
        title: 'Children’s railway station',
        body: 'The “Zname na mira” children’s railway starts at Pioneer station at the foot of the hill – a separate navigation point from the pedestrian entrance. From there the train passes a bridge and tunnel to Panorama station.',
      },
      {
        id: 'adventure',
        title: 'Adventure centre (rope park)',
        body: 'The Youth Hill Adventure Centre with the rope park is in the lower part of the park, near the foot. Check its hours and bookings on its official site before visiting.',
      },
      {
        id: 'transit',
        title: 'Public transport',
        body: 'The “Youth Hill” stop on Lyuben Karavelov Street is served by city bus lines (check current numbers and timetables on the Plovdiv Public Transport site, as they can change).',
      },
      {
        id: 'drive',
        title: 'By car and navigation',
        body: 'Navigate to “Youth Hill, Plovdiv”. Park on the streets around the entrance and continue on foot – see the parking page for details and rules.',
      },
    ],
    faq: [
      {
        q: 'Where exactly should I set for navigation?',
        a: 'It depends on your goal: for climbing – Lyuben Karavelov St; for the railway – Pioneer station; for the rope park – the adventure centre at the foot. Do not search one “top” point for everything.',
      },
      {
        q: 'How far from central Plovdiv on foot?',
        a: 'About 1–2 km; from the Old Town it is a 15–25 minute walk via Lyuben Karavelov St.',
      },
      {
        q: 'Is there a bus to the hill?',
        a: 'Yes, the “Youth Hill” stop on Lyuben Karavelov St. Check current lines and timetables on Plovdiv Public Transport.',
      },
    ],
    related: ['parking', 'summit-walk', 'childrens-railway', 'rope-park'],
    sources: [
      { name: 'Plovdiv Municipality', url: 'https://www.plovdiv.bg/' },
      { name: 'Opoznai Plovdiv', url: 'https://opoznaiplovdiv.bg/listing/mladezhki-halm/' },
    ],
  },

  parking: {
    title: 'Parking at Youth Hill Plovdiv – spots, rules and walking access',
    description: 'Where to park for Youth Hill: street parking around the Lyuben Karavelov entrance, rules and how far on foot to the entrance. Peak-hour tips.',
    h1: 'Parking at Youth Hill',
    card: 'Street parking near the entrance, rules and walking access.',
    lead: 'Youth Hill has no large dedicated car park. Visitors usually use street parking on the streets around the entrance. Here is what to expect and how to reach the alleys on foot.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'street',
        title: 'Street parking',
        body: 'Free and paid spots exist on the streets around the park entrance (Lyuben Karavelov St). At peak hours and weekends you may need to park further and walk.',
      },
      {
        id: 'rules',
        title: 'Rules and limits',
        body: 'Check local signs for paid parking and restrictions – they are managed by Plovdiv Municipality and can change. Do not block entrances or alleys.',
      },
      {
        id: 'walk',
        title: 'Walking to the entrance',
        body: 'From a parked spot on Lyuben Karavelov St to the start of the stairs is a short walk. For the railway and adventure centre start from the foot, not the summit entrance.',
      },
    ],
    faq: [
      {
        q: 'Is there a paid car park on the hill itself?',
        a: 'No large dedicated car park on the hill. Use street parking around the entrance and check local signs.',
      },
      {
        q: 'Where is the most convenient place to park?',
        a: 'Around Lyuben Karavelov St near the pedestrian entrance. At peak hours look on neighbouring streets and walk.',
      },
    ],
    related: ['directions', 'childrens-railway', 'rope-park'],
    sources: [{ name: 'Plovdiv Municipality', url: 'https://www.plovdiv.bg/' }],
  },

  'summit-walk': {
    title: 'Summit walk on Youth Hill – stairs, slope and return',
    description: 'Walking route to the top of Youth Hill: stairs, slope, junctions and return. Time, gear and sunset photo tips.',
    h1: 'Summit walk',
    card: 'Stairs, slope and return to the foot.',
    lead: 'The climb to the highest hill of Plovdiv is moderate – up stairs and alleys through the forest. Here is a practical route with landmarks so you do not get lost and return calmly.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'start',
        title: 'Start at Lyuben Karavelov St',
        body: 'Begin at the pedestrian entrance on Lyuben Karavelov St, where the stairs start – the most direct way up.',
      },
      {
        id: 'path',
        title: 'Stairs and alleys',
        body: 'After the first stairs take the main alley winding through the forest. There are mid junctions – keep to the wider path towards the summit. The slope is moderate but steep in places.',
      },
      {
        id: 'summit',
        title: 'Summit and view',
        body: 'At the top there are platforms with a panorama over the Old Town, the Ancient Theatre and the Rhodopes. Allow time for photos, especially at sunset from the west slope.',
      },
      {
        id: 'return',
        title: 'Return',
        body: 'Return by the same alley or an alternative path if you took one up. On the descent watch the stairs, especially after rain or at dusk.',
      },
    ],
    faq: [
      {
        q: 'How long to the top?',
        a: 'About 30–40 minutes at a relaxed pace from the pedestrian entrance, depending on stops.',
      },
      {
        q: 'Is the climb difficult?',
        a: 'Moderate. There are stairs and steep sections but the path is well formed. Wear good shoes and carry water in summer.',
      },
      {
        q: 'Where is the best sunset view?',
        a: 'From the open meadows on the west slope near the summit – the sun sets behind the Rhodopes.',
      },
    ],
    related: ['directions', 'best-time', 'photos', 'accessibility'],
  },

  'childrens-railway': {
    title: 'Plovdiv Children’s Railway: hours, tickets and route',
    description: 'The “Zname na mira” children’s railway on Youth Hill: where it starts, the route via bridge and tunnel, ride time, and where to check current tickets and timetable.',
    h1: 'Children’s Railway “Zname na mira”',
    card: 'From Pioneer station via bridge and tunnel to Panorama.',
    lead: 'The children’s railway is one of the hill’s most loved attractions. The narrow-gauge train starts at Pioneer station at the foot, passes a bridge and 50-metre tunnel and reaches Panorama station. Here is what to know before visiting.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'station',
        title: 'Where it starts',
        body: 'The railway starts at Pioneer station at the foot of the hill – a separate navigation point from the pedestrian summit entrance. The route passes a bridge, crossing and 50-metre tunnel to Panorama station.',
      },
      {
        id: 'ride',
        title: 'The experience',
        body: 'One ride lasts about 25 minutes – suitable even for the youngest. The track is about 1 km through the forest and a favourite family experience.',
      },
      {
        id: 'tickets',
        title: 'Tickets and hours',
        body: 'Prices and hours vary by season and are set by the operator. Check the current information on the official Plovdiv tourist portal and on site before visiting – do not rely on old data.',
      },
    ],
    faq: [
      {
        q: 'How much is a ticket?',
        a: 'The price is set by the operator and may change by season. Check it on the official Plovdiv tourist portal or at the station before riding.',
      },
      {
        q: 'What are the opening hours?',
        a: 'It depends on the season. See the current timetable on the official Plovdiv tourist portal and on site; do not assume it is fixed.',
      },
      {
        q: 'Where do you board?',
        a: 'At Pioneer station at the foot of the hill, then via bridge and tunnel to Panorama station and back.',
      },
    ],
    related: ['rope-park', 'with-kids', 'family-half-day', 'railway-history'],
    sources: [
      { name: 'Official Plovdiv tourist portal', url: 'https://www.visitplovdiv.com/' },
      { name: 'Plovdiv Municipality', url: 'https://www.plovdiv.bg/' },
    ],
  },

  'rope-park': {
    title: 'Youth Hill rope park – courses, conditions and booking',
    description: 'Youth Hill Adventure Centre with rope park: courses for children and adults, participation conditions, age limits and where to check prices and sign-up.',
    h1: 'Rope park and adventure centre',
    card: 'Courses for children and adults, conditions and booking.',
    lead: 'The Youth Hill Adventure Centre offers a rope park with courses among the trees – a fitting challenge for children and adults. Here is what you need to know about taking part and signing up.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'courses',
        title: 'Courses',
        body: 'The rope park has courses of different difficulty – from easier ones for children to more challenging ones for adults. All use a safety system and briefing.',
      },
      {
        id: 'conditions',
        title: 'Participation conditions',
        body: 'There are age and height limits per course. For current conditions, prices and sign-up contact the adventure centre’s official site – they change by season.',
      },
      {
        id: 'location',
        title: 'Location',
        body: 'The centre is in the lower part of the park, near the foot – a separate navigation point from the pedestrian summit entrance. See the directions page.',
      },
    ],
    faq: [
      {
        q: 'Are there age limits?',
        a: 'Yes, per course. See the exact conditions on the adventure centre’s official site.',
      },
      {
        q: 'Is booking needed?',
        a: 'For groups and at peak times booking is recommended. Check the centre’s official site.',
      },
      {
        q: 'Where exactly is the centre?',
        a: 'At the foot of the hill, in the lower part of the park – not on the summit.',
      },
    ],
    related: ['childrens-railway', 'with-kids', 'playgrounds', 'directions'],
    sources: [{ name: 'Youth Hill Adventure Centre', url: 'https://youth-hill.org/' }],
  },

  'with-kids': {
    title: 'Youth Hill with kids – route, railway and play',
    description: 'How to visit Youth Hill with children: children’s railway, playgrounds, rope park, an easy route and tips by age and stamina.',
    h1: 'Youth Hill with kids',
    card: 'Railway, playgrounds and an easy route by age.',
    lead: 'Youth Hill is one of the most family-friendly places in Plovdiv. Here is how to plan the day by the children’s age – from a short railway ride to longer outdoor play.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'babies',
        title: 'Babies and toddlers',
        body: 'For the youngest, start at the foot: the children’s railway is a calm ~25-minute experience. The lower alleys and meadows are flatter and pram-friendly.',
      },
      {
        id: 'toddlers',
        title: 'Young children (3–6)',
        body: 'The playgrounds and play meadows are favourites. The rope park has courses for this age too when the centre’s conditions are met.',
      },
      {
        id: 'school',
        title: 'School age',
        body: 'Older children enjoy the rope park and the climb to the summit. Do it in stages with rests and water, especially in summer.',
      },
      {
        id: 'tips',
        title: 'Useful tips',
        body: 'Bring water, hats and light snacks. After activity plan lunch or coffee – see the restaurants and Central Park near the hill pages.',
      },
    ],
    faq: [
      {
        q: 'Is the hill suitable for babies?',
        a: 'Yes – the lower alleys and meadows are flat and pram-friendly, and the railway is a calm experience.',
      },
      {
        q: 'Are there playgrounds?',
        a: 'Yes, there are playgrounds and play meadows in the park.',
      },
      {
        q: 'Is the climb to the summit hard with kids?',
        a: 'Moderate – there are stairs and steep sections. With small children split the climb into stages with rests.',
      },
    ],
    related: ['childrens-railway', 'playgrounds', 'rope-park', 'family-half-day'],
  },

  restaurants: {
    title: 'Restaurants near Youth Hill Plovdiv – map and scenarios',
    description: 'Where to eat after a walk on Youth Hill: specific venues, which entrance to start from, what they suit and example scenarios. Map and tips.',
    h1: 'Restaurants near Youth Hill',
    card: 'Specific venues, which entrance and for what occasion.',
    lead: 'After a walk on the hill people often look for a place to eat. Here we describe venues with concrete addresses and scenarios, without calling the whole centre “near the hill”. Each place has its own info card.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'central-park',
        title: 'Central Park – Youth Hill branch',
        body: 'Central Park has a branch at the foot of Youth Hill with garden dining and a children’s corner – convenient for lunch or dinner after the walk. See the dedicated page for address and menu.',
      },
      {
        id: 'foot',
        title: 'Venues at the foot',
        body: 'At the foot and on neighbouring streets there are cafés, restaurants and patisseries a short walk from the pedestrian entrance. Good for a quick lunch or coffee.',
      },
      {
        id: 'scenarios',
        title: 'Scenarios',
        body: 'For a family lunch with kids – Central Park Youth Hill; for coffee on the way out – the foot venues; for dinner in town – see the route to Kapana.',
      },
    ],
    faq: [
      {
        q: 'Is there a restaurant on the hill itself?',
        a: 'There are no permanent venues on the hill itself, but Central Park has a branch at the foot and there are cafés and restaurants nearby.',
      },
      {
        q: 'Where is most convenient for a family lunch?',
        a: 'Central Park – Youth Hill branch, with garden dining and a children’s corner at the foot.',
      },
    ],
    related: ['central-park', 'coffee-stops', 'breakfast', 'kapana-dinner'],
    sources: [{ name: 'Central Park – Youth Hill', url: 'https://www.centralpark-bg.com/central-park-youth-hill' }],
  },

  'central-park': {
    title: 'Central Park Youth Hill – garden dining and kids',
    description: 'Central Park – Youth Hill branch: exact branch, menu, children’s corner, which hill entrance to reach it from and what it suits. Menu link.',
    h1: 'Central Park – Youth Hill branch',
    card: 'Exact branch, menu, children’s corner and which entrance.',
    lead: 'Central Park has a branch at the foot of Youth Hill – a convenient option for lunch or dinner after a walk, with garden dining and a kids’ zone. Here is an info card focused on the exact branch.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'branch',
        title: 'Exact branch',
        body: 'This is the Central Park – Youth Hill branch at the foot of the hill, not another location of the chain. Check the address and hours on the official site before visiting.',
      },
      {
        id: 'menu',
        title: 'Menu and scenarios',
        body: 'The menu includes main dishes and garden dining; for the current menu and prices use the link to the official site. Suits a family lunch and a calmer dinner.',
      },
      {
        id: 'kids',
        title: 'Children’s corner',
        body: 'The branch has a children’s corner, making it convenient after an active day on the hill with kids. Check conditions and booking for larger groups.',
      },
      {
        id: 'access',
        title: 'Access from the hill',
        body: 'From the pedestrian entrance on Lyuben Karavelov St descend to the foot – the branch is a short walk. It is not on the summit.',
      },
    ],
    faq: [
      {
        q: 'Where exactly is Central Park Youth Hill?',
        a: 'At the foot of Youth Hill. Check the exact address on Central Park’s official site.',
      },
      {
        q: 'Is there a children’s corner?',
        a: 'Yes, the branch has a children’s corner – convenient after a walk with kids.',
      },
      {
        q: 'Is booking needed?',
        a: 'For larger groups and peak times booking is recommended – check the official site.',
      },
    ],
    related: ['restaurants', 'with-kids', 'family-half-day', 'food-and-water'],
    sources: [{ name: 'Central Park – Youth Hill', url: 'https://www.centralpark-bg.com/central-park-youth-hill' }],
  },

  'family-half-day': {
    title: 'Plovdiv with kids for half a day: Youth Hill, railway and lunch',
    description: 'A ready family half-day route: children’s railway, playgrounds and lunch on Youth Hill, with timetable, rests and food. Ideal for families.',
    h1: 'Family half-day route',
    card: 'Railway, play and lunch – a ready plan with timing.',
    lead: 'This half-day plan combines the hill’s favourite children’s attractions with rest and food, without being overloaded. Approximate time: 3–4 hours.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'plan',
        title: 'Sample plan',
        body: '1) Arrive and board the children’s railway at Pioneer station (~25 min). 2) Play at the playgrounds and meadows. 3) Light climb to the summit with rests and photos. 4) Lunch at Central Park Youth Hill at the foot.',
      },
      {
        id: 'timing',
        title: 'Timing and timetable',
        body: 'Align with the railway timetable (check on site/tourist portal). Start in the morning to avoid afternoon heat in summer.',
      },
      {
        id: 'food',
        title: 'Food',
        body: 'For lunch plan Central Park – Youth Hill at the foot or the nearby cafés. Carry water for the climb too.',
      },
    ],
    faq: [
      {
        q: 'How long does it take?',
        a: 'About 3–4 hours with the railway, play and lunch – not overloaded.',
      },
      {
        q: 'How to combine with lunch?',
        a: 'Finish at Central Park Youth Hill at the foot or the nearby cafés.',
      },
    ],
    related: ['childrens-railway', 'with-kids', 'central-park', 'playgrounds'],
  },

  accessibility: {
    title: 'Youth Hill Plovdiv with a pram and reduced mobility',
    description: 'Accessibility of Youth Hill: a stage-by-stage description of the surfaces, obstacles on the way to the summit, and which zones are flat and convenient.',
    h1: 'Accessibility and prams',
    card: 'Stage-by-stage description of surfaces and obstacles.',
    lead: 'The hill is only partially accessible. The lower alleys and meadows are relatively flat, but the route to the summit includes stairs and steep sections. Here is a practical stage-by-stage description.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'base',
        title: 'Foot and lower alleys',
        body: 'The lower alleys and meadows around the children’s railway and the adventure centre are flatter and easier to move around with a pram or a slow pace.',
      },
      {
        id: 'mid',
        title: 'Middle section',
        body: 'Towards the middle the surface becomes uneven; steep stretches and stairs appear. Prams become difficult – judge your strength before continuing.',
      },
      {
        id: 'summit',
        title: 'Towards the summit',
        body: 'The last stretch to the summit is by stairs and a steep slope – unsuitable for wheelchairs. For a panorama choose the lower platforms.',
      },
    ],
    faq: [
      {
        q: 'Can you reach the summit with a wheelchair?',
        a: 'No. The last stretch is stairs and a steep slope. The lower alleys are more accessible.',
      },
      {
        q: 'Where is the most accessible zone?',
        a: 'The foot and the lower alleys around the children’s railway and the adventure centre.',
      },
    ],
    related: ['directions', 'summit-walk', 'playgrounds'],
  },

  'best-time': {
    title: 'When to visit Youth Hill Plovdiv – seasons, heat and sunset',
    description: 'The best time for Youth Hill: seasons, hot hours, sun and gear. Tips for morning, sunset and winter.',
    h1: 'When to visit',
    card: 'Seasons, hot hours and the best time for photos.',
    lead: 'The hill is open all year round, but the experience depends on the season and the hour. Here are practical tips for the most pleasant visit.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'seasons',
        title: 'By season',
        body: 'Spring is pleasant with blooming nature; summer is hot – go early morning or late afternoon; autumn is mild and ideal for walks; winter is calm but can be slippery.',
      },
      {
        id: 'heat',
        title: 'Hot hours',
        body: 'In summer avoid the midday hours. Carry water and a hat; start early or towards sunset, when the light is best for photos.',
      },
      {
        id: 'sun',
        title: 'Sun and gear',
        body: 'Comfortable shoes, water and sun protection are essential in the warm months. In winter watch the stairs after rain or snow.',
      },
    ],
    faq: [
      {
        q: 'Which season is best?',
        a: 'Spring and autumn are the most pleasant; summer is hot, so go in the morning or late afternoon.',
      },
      {
        q: 'When is the best light for photos?',
        a: 'The golden hour before sunset, especially from the west slope.',
      },
    ],
    related: ['summit-walk', 'photos', 'picnic'],
  },

  playgrounds: {
    title: 'Playgrounds on Youth Hill Plovdiv – locations and ages',
    description: 'Where the playgrounds on Youth Hill are: locations, equipment, shade and which ages they suit.',
    h1: 'Playgrounds',
    card: 'Locations, equipment and shade for different ages.',
    lead: 'Youth Hill has playgrounds and play meadows – part of why it is a favourite family spot. Here is what to know about the places and ages.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'locations',
        title: 'Locations',
        body: 'The playgrounds are in the lower and middle part of the park, near the play meadows. They are not on the summit – start from the foot.',
      },
      {
        id: 'gear',
        title: 'Equipment and shade',
        body: 'The equipment suits different ages; around them are trees that offer shade in the hot hours. Check the condition on site.',
      },
      {
        id: 'ages',
        title: 'Ages',
        body: 'Younger children use the lighter equipment and meadows; older ones also enjoy the rope park when the centre’s conditions are met.',
      },
    ],
    faq: [
      {
        q: 'Where exactly are the playgrounds?',
        a: 'In the lower and middle part of the park, near the play meadows – not on the summit.',
      },
      {
        q: 'Is there shade?',
        a: 'Yes, there are trees around the playgrounds that offer shade in the hot hours.',
      },
    ],
    related: ['with-kids', 'rope-park', 'picnic'],
  },

  picnic: {
    title: 'Picnic on Youth Hill Plovdiv – zones, supplies and rules',
    description: 'Where to have a picnic on Youth Hill: suitable meadows, stocking up on water and food, and rules for protecting nature.',
    h1: 'Picnic and rest',
    card: 'Suitable meadows, supplies and rules for nature.',
    lead: 'The park offers meadows and gazebos for rest and picnic. Here is where it is convenient and how to leave the hill clean.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'spots',
        title: 'Suitable zones',
        body: 'The meadows and gazebos in the lower and middle part of the park are convenient for a picnic. Do not set up on a crossing path or near the facilities.',
      },
      {
        id: 'supplies',
        title: 'Supplies',
        body: 'Bring water and light snacks from the foot – there are no permanent venues on the hill itself. See the food-and-water page nearby.',
      },
      {
        id: 'rules',
        title: 'Rules',
        body: 'Youth Hill is a protected natural landmark. Take your rubbish away, do not pick plants and respect other visitors.',
      },
    ],
    faq: [
      {
        q: 'Can you picnic on the hill?',
        a: 'Yes, on the meadows and gazebos in the lower and middle part. Bring your own water and take your rubbish away.',
      },
      {
        q: 'Is there a shop on the hill?',
        a: 'Not on the hill itself – stock up from the foot in advance.',
      },
    ],
    related: ['food-and-water', 'playgrounds', 'protected-nature'],
  },

  'dog-walking': {
    title: 'Dog walk on Youth Hill Plovdiv – routes and rules',
    description: 'Youth Hill with a dog: surfaces, water, local rules and tips for a calm walk with a pet.',
    h1: 'Dog walk',
    card: 'Surfaces, water and local rules for dogs.',
    lead: 'Youth Hill is also popular for dog walks. Here are practical tips for a calm and responsible visit with a pet.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'paths',
        title: 'Routes',
        body: 'The lower alleys and meadows are convenient for dog walks. When climbing to the summit watch the stairs and steep sections.',
      },
      {
        id: 'water',
        title: 'Water and rests',
        body: 'Carry water for the dog, especially in summer. Rest in the shade and avoid the midday hours.',
      },
      {
        id: 'rules',
        title: 'Rules',
        body: 'Follow local leash and clean-up rules. Respect other visitors and the wild nature of the protected hill.',
      },
    ],
    faq: [
      {
        q: 'Can you bring a dog to the hill?',
        a: 'Yes, dog walks are popular, especially on the lower alleys. Follow local rules.',
      },
      {
        q: 'Is there water on the hill?',
        a: 'Bring your own supply – there are no permanent venues on the hill itself.',
      },
    ],
    related: ['best-time', 'picnic', 'accessibility'],
  },

  'coffee-stops': {
    title: 'Coffee from Youth Hill towards the centre – route',
    description: 'Where to have coffee after the hill: cafés on the real route towards the centre, hours and return scenarios.',
    h1: 'Coffee on the way back to the centre',
    card: 'Cafés on the real route towards the centre.',
    lead: 'After the walk people often look for coffee on the way to the centre. Here we line up cafés according to the real return route, not randomly across town.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'foot',
        title: 'At the foot',
        body: 'The first cafés are at the foot of the hill and along Lyuben Karavelov St – convenient right after descending.',
      },
      {
        id: 'towards-center',
        title: 'Towards the centre',
        body: 'On the way to the Old Town and the centre there are more cafés. Check the hours on site, as they vary.',
      },
      {
        id: 'dwell',
        title: 'Dwell Coffee House',
        body: 'Dwell Coffee House (2 Prolet St) is an option in the central part for a longer coffee on the way out of town – good for a longer walk.',
      },
    ],
    faq: [
      {
        q: 'Where is the first coffee after the hill?',
        a: 'At the foot and along Lyuben Karavelov St – right after descending.',
      },
      {
        q: 'Is there coffee in the centre?',
        a: 'Yes, e.g. Dwell Coffee House at 2 Prolet St, on the way to the centre.',
      },
    ],
    related: ['restaurants', 'breakfast', 'central-park'],
    sources: [{ name: 'Dwell Coffee House', url: 'https://www.instagram.com/dwellcoffeehouse/' }],
  },

  breakfast: {
    title: 'Breakfast before Youth Hill Plovdiv – early cafés and bakeries',
    description: 'Where to have breakfast before the climb: early-opening cafés and bakeries on the route, takeaway snacks and getting to the entrance.',
    h1: 'Breakfast before the hill',
    card: 'Early cafés and bakeries on the route to the entrance.',
    lead: 'If you set off early for the climb, breakfast beforehand makes the day easier. Here are options for early eating and takeaway snacks on the way to the pedestrian entrance.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'early',
        title: 'Early cafés',
        body: 'At the foot and on the neighbouring streets there are cafés and bakeries, some open early. Check the hours on site.',
      },
      {
        id: 'takeaway',
        title: 'Takeaway snacks',
        body: 'For a lighter start grab takeaway snacks and water from the foot and head to Lyuben Karavelov St. This saves time in the hot hours.',
      },
      {
        id: 'route',
        title: 'Getting to the entrance',
        body: 'From breakfast continue on foot to the pedestrian entrance. If by car, park nearby and finish on foot – see the parking page.',
      },
    ],
    faq: [
      {
        q: 'Where to have early breakfast?',
        a: 'Cafés and bakeries at the foot and on the neighbouring streets; check the hours on site.',
      },
      {
        q: 'Can I take away breakfast?',
        a: 'Yes – grab from the foot and head to the pedestrian entrance.',
      },
    ],
    related: ['coffee-stops', 'food-and-water', 'directions'],
  },

  'bulgarian-food': {
    title: 'Bulgarian food in Plovdiv after the hill – dishes and restaurants',
    description: 'Which Bulgarian dishes to try after Youth Hill and at which restaurants with a menu you find them. Explanation of typical dishes.',
    h1: 'Bulgarian food after the hill',
    card: 'Typical dishes and restaurants with a menu nearby.',
    lead: 'After the walk is a good moment for Bulgarian food. Here is an explanation of a few typical dishes and where to look for them in the menus nearby.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'dishes',
        title: 'Typical dishes',
        body: 'Among well-known Bulgarian dishes are shopska salad, tarator, kavarma, cheverme and banitsa. They often appear on the menus of venues around the hill and in the centre.',
      },
      {
        id: 'where',
        title: 'Where to look',
        body: 'Central Park Youth Hill and the venues at the foot offer main dishes; for a wider choice see the route to Kapana. Check the specific dishes in the menu on site.',
      },
    ],
    faq: [
      {
        q: 'Where to try Bulgarian food?',
        a: 'At the venues around the hill (including Central Park Youth Hill) and in Kapana – check the menu on site.',
      },
      {
        q: 'What is a must-try?',
        a: 'Shopska salad, banitsa and tarator are easy-to-find typical options in the warm months.',
      },
    ],
    related: ['restaurants', 'central-park', 'kapana-dinner'],
  },

  'food-and-water': {
    title: 'Shops and water around Youth Hill Plovdiv',
    description: 'Where to stock up on water and food around Youth Hill: shops, a stocking route and time. Tips for hot days.',
    h1: 'Food and water nearby',
    card: 'Shops, a stocking route and tips.',
    lead: 'There are no permanent shops on the hill itself, so stock up on water and light snacks from the foot before climbing. Here is where and how.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'shops',
        title: 'Shops',
        body: 'Grocery shops are at the foot and along Peshtersko Shose Blvd. Stock up before climbing, especially in summer.',
      },
      {
        id: 'route',
        title: 'Stocking route',
        body: 'Plan a stop at the foot on the way to the pedestrian entrance. This avoids running out of water on the stairs to the summit.',
      },
      {
        id: 'heat',
        title: 'Tips for hot days',
        body: 'Carry at least one bottle of water per person. In summer start early and refill whenever you come down.',
      },
    ],
    faq: [
      {
        q: 'Is there a shop on the hill?',
        a: 'Not on the hill itself – stock up from the foot in advance.',
      },
      {
        q: 'Where is the nearest shop?',
        a: 'At the foot and along Peshtersko Shose Blvd.',
      },
    ],
    related: ['picnic', 'breakfast', 'central-park'],
  },

  bunardzhik: {
    title: 'From Youth Hill to Bunardzhik – route and stops',
    description: 'How to get from Youth Hill to Bunardzhik Hill (Alyosha): route, stops and how to combine them in one walk.',
    h1: 'Youth Hill and Bunardzhik',
    card: 'Route and stops between the two hills.',
    lead: 'Bunardzhik (also known as the Alyosha Hill) is another of the seven hills of Plovdiv, within walking distance of Youth Hill. Here is how to connect them.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'route',
        title: 'Route',
        body: 'From the foot of Youth Hill go down to the central part and continue to Bunardzhik. The distance is walkable but includes a descent and a climb – plan time.',
      },
      {
        id: 'stops',
        title: 'Stops and rests',
        body: 'Between the two hills you pass through lower parts of the city with cafés and shade. Good for a rest before climbing Bunardzhik.',
      },
      {
        id: 'combine',
        title: 'How to combine',
        body: 'Start at Youth Hill in the morning, go down to the city and continue to Bunardzhik. The two hills offer different views and atmosphere.',
      },
    ],
    faq: [
      {
        q: 'Is Bunardzhik reachable on foot?',
        a: 'Yes, within walking distance, but with a transition between the two hills – plan time and water.',
      },
      {
        q: 'Morning or evening?',
        a: 'Morning is cooler; see the best-time page.',
      },
    ],
    related: ['two-hills-walk', 'plovdiv-hills', 'danov-hill'],
  },

  'tsar-simeon-garden': {
    title: 'Youth Hill and Tsar Simeon Garden',
    description: 'How to combine the nature walk on the hill with the city park Tsar Simeon Garden: differences, route and scenarios.',
    h1: 'The hill and Tsar Simeon Garden',
    card: 'Nature trail and city park – how to combine them.',
    lead: 'Tsar Simeon Garden is the large city park in the centre of Plovdiv, while Youth Hill is a natural hill. The two complement each other well in one walk.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'diff',
        title: 'Differences',
        body: 'Youth Hill is higher and forested with a panorama; Tsar Simeon Garden is a flat city park with alleys, fountains and shade. Good for a different pace.',
      },
      {
        id: 'route',
        title: 'Route',
        body: 'Go down from the hill to the centre and continue to the garden. On foot it is a moderate distance; plan it as the second part of the walk.',
      },
      {
        id: 'scenarios',
        title: 'Scenarios',
        body: 'For an active morning – the hill; for a calm shaded afternoon walk – the garden. Together they make a full day outdoors.',
      },
    ],
    faq: [
      {
        q: 'Is the garden far from the hill?',
        a: 'A moderate walking distance through the centre – plan it as the second part.',
      },
      {
        q: 'Which is better for children?',
        a: 'Both; the garden is flatter and shadier for a longer walk.',
      },
    ],
    related: ['plovdiv-hills', 'two-hour-itinerary', 'singing-fountains'],
  },

  'two-hour-itinerary': {
    title: 'Youth Hill for two hours – compact route',
    description: 'What to do in 2 hours on Youth Hill: climb, view, railway and return. A ready plan with limited time.',
    h1: 'A two-hour walk',
    card: 'Climb, view and return with limited time.',
    lead: 'If you only have two hours, this compact route covers the essentials without rushing too much.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'plan',
        title: 'Plan for 2 hours',
        body: '0:00–0:10 Arrival and pedestrian entrance. 0:10–0:50 Climb to the summit with rests. 0:50–1:10 Panorama and photos. 1:10–1:50 Descent. 1:50–2:00 Coffee or water at the foot.',
      },
      {
        id: 'tips',
        title: 'Tips',
        body: 'Start with water and comfortable shoes. If you have kids, replace part of the climb with the children’s railway.',
      },
    ],
    faq: [
      {
        q: 'Are 2 hours enough?',
        a: 'Yes for the main experience – climb, view and return, without being overloaded.',
      },
      {
        q: 'How to save time with kids?',
        a: 'Use the children’s railway instead of a full climb on foot.',
      },
    ],
    related: ['summit-walk', 'childrens-railway', 'one-day-itinerary'],
  },

  'plovdiv-hills': {
    title: 'The seven hills of Plovdiv – history and choice',
    description: 'The seven hills of Plovdiv: which exist today, a brief history and which to choose for a walk by view and ease.',
    h1: 'The seven hills of Plovdiv',
    card: 'History, existing hills and a choice for a walk.',
    lead: 'Plovdiv is known for its “seven hills”. Youth Hill is the highest of them. Here is a short overview of the hills and how to choose.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'history',
        title: 'History',
        body: 'By tradition the seven hills are: Trakietz (or Thracian), Dzhendem tepe (today Youth Hill), Sahat tepe (Danov), Bunardzhik (Alyosha), Nebet tepe, Markov tepe and Dzhambaz tepe. Some of them have changed over the years.',
      },
      {
        id: 'today',
        title: 'Today',
        body: 'Preserved and visited are Youth Hill, Bunardzhik, Sahat tepe, Nebet tepe and Dzhambaz tepe. Each offers a different view and ease of climbing.',
      },
      {
        id: 'choose',
        title: 'Which to choose',
        body: 'For the highest panorama – Youth Hill; for a cultural walk – Nebet tepe and the Old Town; for a calm walk – Bunardzhik. See the separate pages.',
      },
    ],
    faq: [
      {
        q: 'Which is the highest hill?',
        a: 'Youth Hill (Dzhendem tepe), at 285.5 m above sea level.',
      },
      {
        q: 'How many hills exist today?',
        a: 'Several are visited – Youth Hill, Bunardzhik, Sahat tepe, Nebet tepe and Dzhambaz tepe.',
      },
    ],
    related: ['height-and-geology', 'bunardzhik', 'danov-hill', 'nebet-tepe'],
  },

  history: {
    title: 'History of Youth Hill – from sanctuary to park',
    description: 'Historical line of Youth Hill: ancient sanctuary, early-Christian basilica, brigade afforestation and protected status. With verified facts.',
    h1: 'History of Youth Hill',
    card: 'Antiquity, name and protected status – a verified line.',
    lead: 'Youth Hill has a long history – from an ancient sanctuary to today’s protected park. Here are the main stages with verified facts.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'ancient',
        title: 'Antiquity',
        body: 'In antiquity the summit was a revered place – there stood a sanctuary of Apollo Kendrisos. Later a three-aisled early-Christian basilica was built on it.',
      },
      {
        id: 'name',
        title: 'Name',
        body: 'The name “Youth Hill” dates from the socialist period, when youth brigades afforested the then-bare hill (1948). Older names are Dzhendem tepe, Dzhin tepe and Chigdem tepe.',
      },
      {
        id: 'protection',
        title: 'Protected status',
        body: 'In 1970, 30 hectares of the south slope were declared a protected area, and in 1995 the whole hill became a natural landmark – the first of Plovdiv’s hills with such status.',
      },
    ],
    faq: [
      {
        q: 'Where does the name “Youth Hill” come from?',
        a: 'From the brigade afforestation in 1948, when youth brigades planted the hill.',
      },
      {
        q: 'Since when is it protected?',
        a: 'The south slope from 1970, the whole hill from 1995 as a natural landmark.',
      },
    ],
    related: ['dzhendem-tepe', 'protected-nature', 'railway-history'],
    sources: [
      { name: 'Open Plovdiv', url: 'https://openplovdiv.com/neighbourhoods/mladezhki-halm' },
      { name: 'Maritsa Directory', url: 'https://spravochnik.marica.bg/object/mladejki-halm-djendem-tepe-28885' },
    ],
  },

  'dzhendem-tepe': {
    title: 'Dzhendem tepe – names and legends of Youth Hill',
    description: 'Old names of Youth Hill: Dzhendem tepe, Dzhin tepe, Chigdem tepe. Difference between historical facts and legends.',
    h1: 'Dzhendem tepe and the legends',
    card: 'Old names, facts and legends – distinguished.',
    lead: 'Before becoming “Youth Hill”, the summit bore several names tied to dark legends. Here is what is historical and what is tradition.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'names',
        title: 'Old names',
        body: 'Historical sources point to names from the Ottoman period: Dzhendem tepe (“hell hill”), Dzhin tepe (“hill of spirits”) and Chigdem tepe (“hill of crocuses”).',
      },
      {
        id: 'facts',
        title: 'Facts',
        body: 'These are real historical names preserved in directories and local sources. They reflect the older perception of the hill.',
      },
      {
        id: 'legends',
        title: 'Legends',
        body: 'With the name “Dzhendem” are tied local tales of the hill’s dark past. They are part of folklore, not proven historical events – we present them as such.',
      },
    ],
    faq: [
      {
        q: 'What does “Dzhendem tepe” mean?',
        a: 'From Turkish cehennem – “hell”; a historical name of the hill before “Youth Hill”.',
      },
      {
        q: 'Are the legends true?',
        a: 'They are local folklore, not proven historical facts – we present them as traditions.',
      },
    ],
    related: ['history', 'protected-nature', 'height-and-geology'],
    sources: [{ name: 'Open Plovdiv', url: 'https://openplovdiv.com/neighbourhoods/mladezhki-halm' }],
  },

  'height-and-geology': {
    title: 'Height and geology of Youth Hill',
    description: 'Altitude 285.5 m, relative height above the city, rocks and relief of Youth Hill. Exact numbers and explanation.',
    h1: 'Height and geology',
    card: '285.5 m altitude, relative height and relief.',
    lead: 'Youth Hill is the highest of the seven hills of Plovdiv. Here are the exact numbers and what they mean.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'altitude',
        title: 'Altitude',
        body: 'Youth Hill rises to 285.5 m above sea level – the highest point of Plovdiv. This is the height above sea level, not above the city centre.',
      },
      {
        id: 'relative',
        title: 'Relative height',
        body: 'The relative height above the surrounding neighbourhoods is smaller than the altitude – the climb from the foot to the summit is moderate, not a steep mountain.',
      },
      {
        id: 'geology',
        title: 'Rocks and relief',
        body: 'The hill is covered with a dense forest; the steep rocky slopes and the microclimate influenced by the Maritsa river shelter rare plant and animal species.',
      },
    ],
    faq: [
      {
        q: 'How many metres high is Youth Hill?',
        a: '285.5 m above sea level – the highest point of Plovdiv.',
      },
      {
        q: 'What is the relative height?',
        a: 'Smaller than the altitude; the climb from the foot is moderate.',
      },
    ],
    related: ['history', 'protected-nature', 'plovdiv-hills'],
  },

  'protected-nature': {
    title: 'Why Youth Hill is protected – natural landmark',
    description: 'Youth Hill as a protected natural landmark: what is preserved, natural value and how to visit responsibly.',
    h1: 'Protected nature',
    card: 'Status, natural value and responsible visit.',
    lead: 'Youth Hill is a protected natural landmark – the first of Plovdiv’s hills with such status. Here is why it is preserved and how to respect it.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'status',
        title: 'Status',
        body: 'In 1970, 30 hectares of the south slope were declared a protected area, and in 1995 the whole hill became a natural landmark.',
      },
      {
        id: 'value',
        title: 'Natural value',
        body: 'The steep rocks and the microclimate of the Maritsa isolate parts of the hill and shelter rare plant and animal species – a valuable natural corner in the city centre.',
      },
      {
        id: 'visit',
        title: 'Responsible visit',
        body: 'Do not pick plants, do not disturb wild animals and take your rubbish away. This keeps the hill protected for the next visitors too.',
      },
    ],
    faq: [
      {
        q: 'Why is the hill protected?',
        a: 'Because of the rare species and the microclimate; the whole hill has been a natural landmark since 1995.',
      },
      {
        q: 'How to visit responsibly?',
        a: 'Take your rubbish away, do not pick plants and do not disturb animals.',
      },
    ],
    related: ['height-and-geology', 'history', 'picnic'],
  },

  'vegetarian-food': {
    title: 'Vegetarian restaurants in Plovdiv after the hill',
    description: 'Where to eat vegetarian after Youth Hill: venues with vegetarian options, what to look for in the menu and scenarios.',
    h1: 'Vegetarian food',
    card: 'Venues with vegetarian options and what to look for.',
    lead: 'If you are looking for vegetarian food after the walk, Plovdiv offers options both at the foot and in Kapana. Here is what to check.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'options',
        title: 'Options',
        body: 'Many venues around the hill and in Kapana offer vegetarian dishes – check the specific options in the menu on site, as they vary.',
      },
      {
        id: 'dishes',
        title: 'What to look for',
        body: 'Among easy-to-find options are salads, banitsa, tarator and dishes with beans and vegetables. Ask about ingredients when in doubt.',
      },
    ],
    faq: [
      {
        q: 'Are there vegetarian restaurants?',
        a: 'Vegetarian options exist in many venues; check the menu on site.',
      },
      {
        q: 'Where is the nearest?',
        a: 'At the foot of the hill and in Kapana – check the menu in advance.',
      },
    ],
    related: ['restaurants', 'bulgarian-food', 'kapana-dinner'],
  },

  'kapana-dinner': {
    title: 'Dinner in Kapana after Youth Hill',
    description: 'How to combine the hill with dinner in Kapana: transport link, dining zones and return. A ready evening route.',
    h1: 'Dinner in Kapana',
    card: 'Transport link, dining zones and return.',
    lead: 'Kapana is the cultural district of Plovdiv with many venues – convenient for dinner after an afternoon on the hill. Here is how to connect the two.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'transfer',
        title: 'Link to Kapana',
        body: 'From the foot of the hill to Kapana is about 15–25 minutes on foot or by public transport. Plan the evening after descending.',
      },
      {
        id: 'dining',
        title: 'Dining zones',
        body: 'Kapana offers restaurants, taverns and cafés for different budgets. Check the menu and reservations for larger groups.',
      },
      {
        id: 'return',
        title: 'Return',
        body: 'After dinner return on foot or by taxi/transport. Kapana’s evening streets are lively and pedestrian.',
      },
    ],
    faq: [
      {
        q: 'Is Kapana far from the hill?',
        a: 'About 15–25 minutes on foot or by transport from the foot.',
      },
      {
        q: 'Is it good for dinner?',
        a: 'Yes, Kapana is one of the liveliest dinner zones in Plovdiv.',
      },
    ],
    related: ['restaurants', 'bulgarian-food', 'kapana-walk'],
  },

  'danov-hill': {
    title: 'Youth Hill or Sahat tepe (Danov) – choice',
    description: 'Comparison between Youth Hill and Sahat tepe (Danov Hill): climb, view, location and which to choose.',
    h1: 'Youth Hill or Sahat tepe?',
    card: 'Climb, view and location – a comparison.',
    lead: 'Sahat tepe (also called Danov Hill) is another of Plovdiv’s hills. Here is how it compares with Youth Hill, to help you choose.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'climb',
        title: 'Climb',
        body: 'Youth Hill is higher and forested; Sahat tepe is lower and close to the Old Town. The choice depends on how much climbing you want.',
      },
      {
        id: 'view',
        title: 'View',
        body: 'Youth Hill offers the highest panorama towards the Rhodopes; Sahat tepe is handy for a view of the Old Town and the centre.',
      },
      {
        id: 'location',
        title: 'Location',
        body: 'Sahat tepe is closer to the Old Town and the cultural sights; Youth Hill is further but has a nature park.',
      },
    ],
    faq: [
      {
        q: 'Which hill is higher?',
        a: 'Youth Hill (285.5 m) is the highest; Sahat tepe is lower.',
      },
      {
        q: 'Which is closer to the Old Town?',
        a: 'Sahat tepe (Danov) is closer to the Old Town.',
      },
    ],
    related: ['plovdiv-hills', 'nebet-tepe', 'bunardzhik'],
  },

  'nebet-tepe': {
    title: 'Youth Hill or Nebet tepe – views and route',
    description: 'Comparison between Youth Hill and Nebet tepe: views, route and how to combine them with the Ancient Theatre.',
    h1: 'Youth Hill or Nebet tepe?',
    card: 'Views, route and link with the Ancient Theatre.',
    lead: 'Nebet tepe is the hill above the Ancient Theatre in the Old Town. Here is how it compares with Youth Hill and how to connect them.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'view',
        title: 'Views',
        body: 'Nebet tepe offers a view straight to the Ancient Theatre and the Old Town; Youth Hill – a wider panorama towards the Rhodopes.',
      },
      {
        id: 'route',
        title: 'Route',
        body: 'Nebet tepe is in the Old Town and combines easily with the theatre. Youth Hill is a separate walk to the north.',
      },
      {
        id: 'combine',
        title: 'Combination',
        body: 'Start at Nebet tepe and the Old Town, then go to Youth Hill for a nature walk – two different accents in one day.',
      },
    ],
    faq: [
      {
        q: 'Which gives a view of the theatre?',
        a: 'Nebet tepe – directly above the Ancient Theatre in the Old Town.',
      },
      {
        q: 'Can I connect them?',
        a: 'Yes – Nebet tepe with the theatre, then Youth Hill for nature.',
      },
    ],
    related: ['plovdiv-hills', 'danov-hill', 'old-town'],
  },

  'singing-fountains': {
    title: 'Singing fountains Plovdiv after Youth Hill',
    description: 'How to end the day on the hill with the musical fountains: link, where they are and where to check the programme.',
    h1: 'Musical fountains',
    card: 'Link after sunset and where to check the programme.',
    lead: 'The singing fountains (musical fountains) of Plovdiv are a popular evening attraction. Here is how to add them after the hill walk.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'location',
        title: 'Where they are',
        body: 'The musical fountains are in the central part of Plovdiv, within walking distance or a short transport from the foot of the hill.',
      },
      {
        id: 'schedule',
        title: 'Programme',
        body: 'The shows depend on the season and the city calendar. Check the current programme on the official channels of Plovdiv Municipality before visiting.',
      },
      {
        id: 'plan',
        title: 'Plan',
        body: 'Descend from the hill in the late afternoon and continue to the fountains for the evening – a convenient end to a day outdoors.',
      },
    ],
    faq: [
      {
        q: 'Where are the singing fountains?',
        a: 'In the centre of Plovdiv, a distance from the foot of the hill.',
      },
      {
        q: 'When are the shows?',
        a: 'By season and Plovdiv Municipality calendar – check the programme in advance.',
      },
    ],
    related: ['tsar-simeon-garden', 'kapana-dinner', 'one-day-itinerary'],
    sources: [{ name: 'Plovdiv Municipality', url: 'https://www.plovdiv.bg/' }],
  },

  'kapana-walk': {
    title: 'Youth Hill and a walk through Kapana',
    description: 'City walk from the hill to Kapana: cultural stops, streets and studios. How to connect nature with urban culture.',
    h1: 'The hill and Kapana',
    card: 'Nature and urban culture in one walk.',
    lead: 'Kapana is the artistic district of Plovdiv with narrow streets and studios. Here is how to add it after the hill.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'walk',
        title: 'City walk',
        body: 'From the foot of the hill go down to the centre and Kapana. The distance is walkable and passes through lively streets with cafés.',
      },
      {
        id: 'stops',
        title: 'Cultural stops',
        body: 'In Kapana there are galleries, studios and small museums. Good for the afternoon after the active hill walk.',
      },
    ],
    faq: [
      {
        q: 'Is Kapana reachable on foot?',
        a: 'Yes, a moderate walking distance from the foot of the hill.',
      },
      {
        q: 'What to see there?',
        a: 'Galleries, studios and cafés in the artistic district.',
      },
    ],
    related: ['kapana-dinner', 'old-town', 'bulgarian-food'],
  },

  'old-town': {
    title: 'Youth Hill and the Old Town of Plovdiv',
    description: 'How to combine the nature walk on the hill with the historic Old Town: transition, sights and scenarios.',
    h1: 'The hill and the Old Town',
    card: 'Nature and history in one walk.',
    lead: 'The Old Town is the historic heart of Plovdiv with house-museums and the Ancient Theatre. Here is how to connect it with the hill.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'transfer',
        title: 'Transition',
        body: 'From the foot of the hill to the Old Town is about 15–25 minutes on foot along Lyuben Karavelov St. Plan it as the second part.',
      },
      {
        id: 'sights',
        title: 'Sights',
        body: 'In the Old Town are the Ancient Theatre, the house-museums and the churches. Good for a cultural walk after nature.',
      },
    ],
    faq: [
      {
        q: 'Is the Old Town far?',
        a: 'About 15–25 minutes on foot from the foot of the hill.',
      },
      {
        q: 'What to see?',
        a: 'The Ancient Theatre, the house-museums and the churches in the historic core.',
      },
    ],
    related: ['nebet-tepe', 'kapana-walk', 'one-day-itinerary'],
  },

  'rowing-canal': {
    title: 'Youth Hill and the Rowing Base in Plovdiv',
    description: 'How to combine the hill with the Rowing Base (canal): the difference between the two green zones and how to connect them.',
    h1: 'The hill and the Rowing Base',
    card: 'Two green zones and how to combine them.',
    lead: 'The Rowing Base (the canal) is another green zone of Plovdiv, different from the forested hill. Here is how to understand and connect them.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'diff',
        title: 'Difference',
        body: 'Youth Hill is a forested natural hill with a climb; the Rowing Base is a flat zone with a canal and alleys by the water – good for a calm walk.',
      },
      {
        id: 'combine',
        title: 'Connecting',
        body: 'The two are in different parts of the city. You can spread them over two days or connect them by transport if you want more greenery.',
      },
    ],
    faq: [
      {
        q: 'What is the difference?',
        a: 'The hill is forested and with a climb; the Rowing Base is a flat zone by the water.',
      },
      {
        q: 'Can I connect them?',
        a: 'Yes, by transport or as two separate green walks.',
      },
    ],
    related: ['tsar-simeon-garden', 'plovdiv-hills'],
  },

  'natural-history-museum': {
    title: 'Youth Hill and the Natural History Museum in Plovdiv',
    description: 'How to connect nature watching on the hill with the Natural History Museum: transition, exhibition and scenarios.',
    h1: 'Nature on the hill and in the museum',
    card: 'Open nature and a museum exhibition.',
    lead: 'The Natural History Museum in Plovdiv complements nature watching on the hill with an exhibition of local species. Here is how to connect them.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'museum',
        title: 'About the museum',
        body: 'The Natural History Museum presents the flora and fauna of the region. Check its hours and tickets on its official site before visiting.',
      },
      {
        id: 'combine',
        title: 'Connecting',
        body: 'Start with nature watching on the hill, then continue to the museum in the centre for a more structured exhibition.',
      },
    ],
    faq: [
      {
        q: 'Where is the Natural History Museum?',
        a: 'In the central part of Plovdiv; check its hours on the official site.',
      },
      {
        q: 'Is it good after the hill?',
        a: 'Yes – it complements nature watching with a museum exhibition.',
      },
    ],
    related: ['protected-nature', 'old-town', 'one-day-itinerary'],
  },

  'one-day-itinerary': {
    title: 'Plovdiv for one day from Youth Hill',
    description: 'A full day in Plovdiv starting from Youth Hill: hill, park, cultural district and food. A ready route with time.',
    h1: 'Plovdiv for one day',
    card: 'Hill, park, Kapana and food – a ready day.',
    lead: 'This full-day plan starts with the nature of the hill and continues with the city sights and food.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'plan',
        title: 'Plan for the day',
        body: 'Morning: Youth Hill (climb, view, railway). Lunch: Central Park Youth Hill or the foot. Afternoon: Tsar Simeon Garden and Kapana. Evening: dinner in Kapana.',
      },
      {
        id: 'tips',
        title: 'Tips',
        body: 'Start early in summer. Carry water and comfortable shoes. Spread the time so you are not rushed between districts.',
      },
    ],
    faq: [
      {
        q: 'Is one day enough?',
        a: 'Yes for the main accents – hill, park, Kapana and food.',
      },
      {
        q: 'Where to start?',
        a: 'At Youth Hill in the morning, then continue to the centre.',
      },
    ],
    related: ['two-hour-itinerary', 'family-half-day', 'kapana-dinner'],
  },

  'two-hills-walk': {
    title: 'Route between two hills in Plovdiv (Youth and Bunardzhik)',
    description: 'A full walking route between Youth Hill and Bunardzhik: intensity, water, starting points and return.',
    h1: 'Two-hill walk',
    card: 'Intensity, water and starting points.',
    lead: 'This route connects the two hills in one longer walk. Heavier than climbing one alone – plan accordingly.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'route',
        title: 'Route',
        body: 'Start at Youth Hill, go down to the centre and continue to Bunardzhik. Includes two climbs and the transition between them.',
      },
      {
        id: 'intensity',
        title: 'Intensity',
        body: 'The route is moderately hard because of the two hills. Carry enough water and plan rests, especially in summer.',
      },
      {
        id: 'exits',
        title: 'Starting points',
        body: 'If the load is too much, break in the centre and use transport to one of the hills. This keeps you flexible.',
      },
    ],
    faq: [
      {
        q: 'Is the route hard?',
        a: 'Moderately hard because of the two climbs – plan water and rests.',
      },
      {
        q: 'Can I shorten it?',
        a: 'Yes – break in the centre and use transport.',
      },
    ],
    related: ['bunardzhik', 'plovdiv-hills', 'one-day-itinerary'],
  },

  'rainy-day-alternatives': {
    title: 'Youth Hill in the rain – alternatives',
    description: 'What to do if it rains after you planned the hill: indoor alternatives and changing the route with kids.',
    h1: 'Rainy-day alternatives',
    card: 'Indoor options and changing the plan.',
    lead: 'Rain can spoil the open-air plan. Here are indoor alternatives nearby and how to change the route.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'indoor',
        title: 'Indoor options',
        body: 'In the rain visit the Natural History Museum or the house-museums in the Old Town. Check their hours in advance.',
      },
      {
        id: 'kids',
        title: 'With kids',
        body: 'For a rainy day with kids plan a museum or an indoor café/restaurant (e.g. Central Park Youth Hill) instead of a climb.',
      },
      {
        id: 'adjust',
        title: 'Changing the plan',
        body: 'If the rain is brief, use the children’s railway (it has covered sections) and shorten the climb. Watch the forecast before leaving.',
      },
    ],
    faq: [
      {
        q: 'Is there something indoor on the hill itself?',
        a: 'Not as an attraction; in the rain plan museums and indoor venues in the city.',
      },
      {
        q: 'Is it suitable with kids in the rain?',
        a: 'Rather a museum or an indoor café/restaurant instead of a climb.',
      },
    ],
    related: ['natural-history-museum', 'old-town', 'family-half-day'],
  },

  'railway-history': {
    title: 'History of the children’s railway in Plovdiv',
    description: 'The “Pioneer” children’s railway: opening in 1979, rails, stations and restoration in 2007. With verified facts.',
    h1: 'History of the children’s railway',
    card: '1979, rails and restoration in 2007.',
    lead: 'The narrow-gauge children’s railway is among the hill’s most loved attractions. Here is its history with verified facts.',
    updated: '2026-10-23',
    sections: [
      {
        id: 'open',
        title: 'Opening (1979)',
        body: 'The narrow-gauge railway (600 mm gauge) was opened on 23 September 1979 on the occasion of the International Year of the Child.',
      },
      {
        id: 'tracks',
        title: 'Rails and stations',
        body: 'The track was built with rails from the Kocherinovo–Rila Monastery line. It passes the stops “Pioneer”, “Snow White” and “Panorama” with a bridge, crossing and 50-metre tunnel.',
      },
      {
        id: 'restore',
        title: 'Restoration (2007)',
        body: 'After its closure in 1997, the railway was opened again on 22 September 2007 – exactly 28 years after the first opening.',
      },
    ],
    faq: [
      {
        q: 'When was the railway opened?',
        a: 'On 23 September 1979 on the occasion of the International Year of the Child.',
      },
      {
        q: 'When was it restored?',
        a: 'Opened again on 22 September 2007.',
      },
    ],
    related: ['childrens-railway', 'history', 'rope-park'],
    sources: [
      { name: 'Lost in Plovdiv', url: 'https://lostinplovdiv.com/bg/articles/istoriqta-na-detskata-jeleznica-v-plovdiv/' },
      { name: 'Plovdiv Municipality', url: 'https://www.plovdiv.bg/' },
    ],
  },
};
