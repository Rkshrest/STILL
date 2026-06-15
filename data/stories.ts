export type Category =
  | "loneliness"
  | "unnoticed-labor"
  | "routine"
  | "resilience"
  | "waiting"
  | "survival";

export interface Story {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  poeticFragment: string;
  creatorReflection: string;
  prompt: string;
  location: string;
  year: string;
  category: Category;
  tags: string[];
  featured: boolean;
}

export const stories: Story[] = [
  {
    id: "morning-chai",
    title: "The First Customer",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    imageAlt: "An elderly man standing behind a chai stall in early morning light",
    poeticFragment:
      "He arrived before the city did.\nSome habits are older than memory.",
    creatorReflection:
      "He wasn't waiting for customers. He was waiting for the light. Every morning, the same window. The same silence before the first cup.",
    prompt: "What do you think happened before this?",
    location: "Varanasi • Winter Morning",
    year: "2023",
    category: "routine",
    tags: ["morning", "ritual", "labor", "light"],
    featured: true,
  },
  {
    id: "doorway-woman",
    title: "The Space Between Inside and Out",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A woman folding laundry in a narrow doorway, half in shadow",
    poeticFragment:
      "Loneliness rarely asks permission.\nIt moves in quietly, between tasks.",
    creatorReflection:
      "She was folding the same shirt for the third time. Not careless — careful. As if the motion itself was what she needed.",
    prompt: "What feels unsaid here?",
    location: "Mumbai • Afternoon",
    year: "2023",
    category: "loneliness",
    tags: ["solitude", "domestic", "shadow", "quiet"],
    featured: true,
  },
  {
    id: "resting-worker",
    title: "Eyes Closed, Still Carrying",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A construction worker resting with eyes closed against a concrete wall",
    poeticFragment:
      "Some people inherit dreams.\nSome inherit survival.",
    creatorReflection:
      "He wasn't sleeping. He was somewhere else entirely. Somewhere no site foreman could reach.",
    prompt: "What kind of silence exists here?",
    location: "Delhi • Midday",
    year: "2024",
    category: "unnoticed-labor",
    tags: ["rest", "labor", "dignity", "concrete"],
    featured: true,
  },
  {
    id: "rain-child",
    title: "Glass Between Worlds",
    image: "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A child pressing their palm against a rain-streaked window",
    poeticFragment:
      "Outside was not outside.\nIt was the place his imagination lived.",
    creatorReflection:
      "He watched the rain the way adults watch old photographs. Looking for something that had already passed.",
    prompt: "What stayed with you here?",
    location: "Kolkata • Monsoon",
    year: "2023",
    category: "resilience",
    tags: ["childhood", "rain", "wonder", "window"],
    featured: false,
  },
  {
    id: "old-hands",
    title: "What Hands Remember",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Weathered hands holding a folded newspaper, the headlines blurred",
    poeticFragment:
      "The news changes every morning.\nThe hands holding it do not.",
    creatorReflection:
      "He read the same page twice. Maybe he wasn't reading at all. Maybe he just needed something to hold.",
    prompt: "What emotion lives in this moment?",
    location: "Chennai • Early Morning",
    year: "2024",
    category: "waiting",
    tags: ["age", "stillness", "hands", "time"],
    featured: false,
  },
  {
    id: "market-silhouette",
    title: "The Unseen Architect",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A market vendor in silhouette arranging produce before dawn",
    poeticFragment:
      "Before the crowd arrives,\none person builds the world they'll walk through.",
    creatorReflection:
      "He does this every day. No one thanks him for the arrangement. The city simply expects the colors to be there.",
    prompt: "Who else is in this frame, unseen?",
    location: "Jaipur • Pre-dawn",
    year: "2024",
    category: "unnoticed-labor",
    tags: ["market", "silhouette", "dawn", "labor"],
    featured: false,
  },
  {
    id: "commuter-floor",
    title: "Thousand Miles, Standing Still",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A commuter staring at the floor of a crowded train, surrounded by strangers",
    poeticFragment:
      "He was surrounded by people.\nHe had never felt further from anyone.",
    creatorReflection:
      "He wasn't looking at the floor. He was looking inward. There is a particular kind of solitude that only crowds can create.",
    prompt: "What do you notice first?",
    location: "Mumbai • Rush Hour",
    year: "2023",
    category: "loneliness",
    tags: ["transit", "crowd", "isolation", "urban"],
    featured: false,
  },
  {
    id: "musician-empty",
    title: "Playing for the Air",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A street musician playing an instrument in an empty underpass, no audience",
    poeticFragment:
      "He played for no one.\nThat made the music more honest.",
    creatorReflection:
      "There was a purity in it. No applause to perform for. Just the sound, and the empty tunnel, and the decision to keep going.",
    prompt: "What would you ask this person if you could?",
    location: "Bengaluru • Late Evening",
    year: "2024",
    category: "survival",
    tags: ["music", "solitude", "persistence", "underpass"],
    featured: false,
  },
  {
    id: "night-watchman",
    title: "The Sentinel of Slumber",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A night watchman sitting under a street lamp in a quiet alley",
    poeticFragment:
      "He keeps watch over dreams\nhe will never share.",
    creatorReflection:
      "In the middle of the night, the city belongs to him. He was warming his hands over a small candle.",
    prompt: "What is he keeping safe?",
    location: "Mumbai • Midnight",
    year: "2024",
    category: "unnoticed-labor",
    tags: ["night", "watchman", "light", "street"],
    featured: false,
  },
  {
    id: "flower-vendor",
    title: "Fragrance in the Dust",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A flower seller weaving garlands of marigold beside a busy, dusty road",
    poeticFragment:
      "Selling beauty\nto a street that forgot to look up.",
    creatorReflection:
      "The contrast was sharp: yellow marigolds against gray concrete and brown dust. She worked with absolute precision.",
    prompt: "Where do these flowers travel next?",
    location: "Kolkata • Morning",
    year: "2023",
    category: "routine",
    tags: ["flowers", "color", "street", "labor"],
    featured: false,
  },
  {
    id: "cycle-rickshaw",
    title: "Wheels of Time",
    image: "https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A rickshaw puller waiting on his vehicle, looking off-camera",
    poeticFragment:
      "Every pedal is a negotiation\nwith gravity and years.",
    creatorReflection:
      "His calves were like steel wire. He has pulled people across this city for forty years, yet his posture was perfectly straight.",
    prompt: "How many miles does a lifetime hold?",
    location: "Varanasi • Afternoon",
    year: "2024",
    category: "unnoticed-labor",
    tags: ["rickshaw", "transport", "waiting", "streets"],
    featured: false,
  },
  {
    id: "tea-stall-shadow",
    title: "Steam and Shadows",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Steam rising from a large brass pot at a street side tea stall",
    poeticFragment:
      "Conversations dissolve,\nbut the warmth lingers in the clay cup.",
    creatorReflection:
      "People came, drank in absolute silence, and left. The tea stall was a temporary home that required no keys.",
    prompt: "What makes a place feel safe?",
    location: "Lucknow • Winter Evening",
    year: "2023",
    category: "routine",
    tags: ["tea", "clay", "winter", "warmth"],
    featured: false,
  },
  {
    id: "kite-flyer",
    title: "Tethered to the Sky",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A silhouette of a man flying a kite from a flat rooftop during sunset",
    poeticFragment:
      "For a single brief moment,\nhis feet left the concrete.",
    creatorReflection:
      "He stood at the edge of the roof, completely focused on a tiny speck in the sky. He was talking to the wind.",
    prompt: "What are you holding onto?",
    location: "Ahmedabad • Dusk",
    year: "2024",
    category: "survival",
    tags: ["kite", "sky", "rooftop", "sunset"],
    featured: false,
  },
  {
    id: "sewing-machine",
    title: "Stitches of Hope",
    image: "https://images.unsplash.com/photo-1528570188006-2d3338560946?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Close up of an old mechanical sewing machine running on a worn wooden table",
    poeticFragment:
      "Mending the fabrics\nof lives she will never meet.",
    creatorReflection:
      "The rhythm of the needle was like a heartbeat. She kept time with her foot pedal, never looking up.",
    prompt: "What is being repaired here besides cloth?",
    location: "Surat • Noon",
    year: "2023",
    category: "unnoticed-labor",
    tags: ["sewing", "hands", "mechanics", "fabric"],
    featured: false,
  },
  {
    id: "barber-street",
    title: "Mirrors on Concrete",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A mirror hung on a brick wall out on the street, reflecting passing traffic",
    poeticFragment:
      "A temporary sanctuary\nbetween the traffic and the wall.",
    creatorReflection:
      "The barber has created a living room on a sidewalk. For fifteen minutes, the customer is king, completely ignoring the noise.",
    prompt: "How do we claim space in a crowded world?",
    location: "Patna • Midday",
    year: "2024",
    category: "routine",
    tags: ["barber", "mirror", "reflection", "sidewalk"],
    featured: false,
  },
  {
    id: "station-wait",
    title: "The Platform Clock",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A lone passenger sitting on a bench on a foggy railway station platform",
    poeticFragment:
      "Waiting for a train\nthat left decades ago.",
    creatorReflection:
      "The mist had swallowed the tracks. He sat completely still, his luggage placed neatly beside his boots.",
    prompt: "Where is this journey heading?",
    location: "Howrah • Rainy Night",
    year: "2023",
    category: "waiting",
    tags: ["fog", "train", "waiting", "station"],
    featured: false,
  },
  {
    id: "pigeon-feeder",
    title: "Wings in the Plaza",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A flock of pigeons taking off around a person scattering seeds",
    poeticFragment:
      "A quiet covenant\nsigned in breadcrumbs.",
    creatorReflection:
      "The city is loud, but here, there is only the sound of beating wings. An exchange of trust in the early morning fog.",
    prompt: "What does it mean to feed the wild?",
    location: "Delhi • Dawn",
    year: "2024",
    category: "routine",
    tags: ["pigeons", "birds", "dawn", "trust"],
    featured: false,
  },
  {
    id: "weaver-loom",
    title: "Threads of Memory",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A weaver working on a wooden handloom, colorful threads stretched out",
    poeticFragment:
      "The pattern remembers\nwhat the eyes have forgotten.",
    creatorReflection:
      "His fingers danced through the warp and weft. He didn't need to look. The memory was in the skin of his thumbs.",
    prompt: "What stories are woven into these threads?",
    location: "Banaras • Afternoon",
    year: "2023",
    category: "unnoticed-labor",
    tags: ["weaver", "threads", "handloom", "tradition"],
    featured: false,
  },
  {
    id: "ferry-crossing",
    title: "Between Two Shores",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A wooden boat navigating through a foggy, wide river",
    poeticFragment:
      "The river knows no destinations,\nonly crossings.",
    creatorReflection:
      "We couldn't see the other side. The passengers sat shoulder to shoulder, swaying with the water's pulse.",
    prompt: "What lies beyond the fog?",
    location: "Brahmaputra • Foggy Morning",
    year: "2024",
    category: "waiting",
    tags: ["boat", "river", "fog", "crossing"],
    featured: false,
  },
  {
    id: "cobbler-corner",
    title: "Stitching the Walk",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A street cobbler repairing a leather shoe with a thick needle",
    poeticFragment:
      "Repairing the miles\nothers have run.",
    creatorReflection:
      "His workshop was two feet square. He handles the worn soles of strangers, knowing exactly where they've stumbled.",
    prompt: "Where have these shoes walked?",
    location: "Pune • Evening",
    year: "2023",
    category: "unnoticed-labor",
    tags: ["cobbler", "shoes", "sidewalk", "details"],
    featured: false,
  },
  {
    id: "window-gaze",
    title: "The Quiet Watcher",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A view of a window of a wooden cottage framed by snow",
    poeticFragment:
      "A lifetime spent\nobserving the street flow past.",
    creatorReflection:
      "She sat by the pane, her forehead resting lightly against the cold glass. The snow outside fell in absolute silence.",
    prompt: "What has she watched change?",
    location: "Shimla • Snowy Dusk",
    year: "2024",
    category: "loneliness",
    tags: ["window", "snow", "waiting", "silence"],
    featured: false,
  },
  {
    id: "street-sweeper",
    title: "Clearing the Slate",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A broom clearing dust from a cobblestone street in early dawn light",
    poeticFragment:
      "Erasing yesterday's footprints\nbefore the sun rises.",
    creatorReflection:
      "The rustle of the broom was the only sound in the ancient street. She swept with a slow, meditative sweep.",
    prompt: "Why do we clear what will be dirtied again?",
    location: "Udaipur • Dawn",
    year: "2023",
    category: "unnoticed-labor",
    tags: ["sweeper", "dawn", "street", "meditation"],
    featured: false,
  },
  {
    id: "book-stall",
    title: "The Tower of Pages",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A narrow secondhand bookstore stacked floor to ceiling with yellowed books",
    poeticFragment:
      "Surrounded by voices\nhe has never heard but deeply knows.",
    creatorReflection:
      "He sat in a small nest inside his bookstore. Thousands of pages of history surrounded him like a fortress.",
    prompt: "Which book holds his own story?",
    location: "College Street • Afternoon",
    year: "2024",
    category: "loneliness",
    tags: ["books", "shop", "quiet", "paper"],
    featured: false,
  },
  {
    id: "sleeping-dog",
    title: "The Safe Corner",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A stray dog sleeping peacefully curled up in the shadow of a parked motorcycle wheel",
    poeticFragment:
      "Finding peace\nin the shadow of a busy wheel.",
    creatorReflection:
      "The world rushes past, but this dog has claimed a circle of shade and sleeps with total, vulnerable trust.",
    prompt: "Where do we find shelter?",
    location: "Chennai • Midday",
    year: "2023",
    category: "survival",
    tags: ["dog", "shadow", "sleep", "street"],
    featured: false,
  },
  {
    id: "water-pot",
    title: "The Cool Clay",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=800&auto=format&fit=crop",
    imageAlt: "A row of earthen clay water pots placed outside a house in the hot sun",
    poeticFragment:
      "Quenching a thirst\nthat has no name.",
    creatorReflection:
      "A public offering of cold water for any parched traveller. No money is asked, only that you drink and continue.",
    prompt: "What does kindness look like in the heat?",
    location: "Rajasthan • Summer Noon",
    year: "2024",
    category: "resilience",
    tags: ["water", "clay", "sun", "hospitality"],
    featured: false,
  },
];

export const featuredStories = stories.filter((s) => s.featured);

/** Now 24 for the photography-first wall of moments (avoids trailing single items in 2/3/4 columns) */
export const archiveStories = stories.slice(0, 24);
