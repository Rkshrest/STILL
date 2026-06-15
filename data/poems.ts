export interface Poem {
  id: string;
  title: string;
  text: string;
  metadata: string;
}

export const poems: Poem[] = [
  {
    id: "early-chai",
    title: "Early Chai",
    text: `Before the morning opens its eyes,
a flame wakes up beneath the kettle.
He waits in the blue dust of Varanasi,
holding a warm clay cup,
while the world is still asleep.`,
    metadata: "Varanasi • Winter • Dawn",
  },
  {
    id: "the-doorway",
    title: "The Doorway",
    text: `A rectangle of golden dust,
she stands in the divide.
One hand folds a clean linen sleeve,
the other holds the shadow
of a door that never closes.`,
    metadata: "Mumbai • Monsoon • Afternoon",
  },
  {
    id: "rest",
    title: "Rest",
    text: `The cement mixer is quiet now.
He leans his head against the pillar,
closing out the metal sun.
In his palms, he carries
the weight of houses he will never sleep in.`,
    metadata: "Delhi • Summer • Midday",
  },
  {
    id: "rainstreaks",
    title: "Rainstreaks",
    text: `Press your hand to the cold glass.
Water flows where the city was.
A child's finger draws a line
between what is real,
and what is only dreamed.`,
    metadata: "Kolkata • Monsoon • Dusk",
  },
  {
    id: "weathered-news",
    title: "Weathered News",
    text: `Ink spreads on old paper,
telling stories of countries far away.
His fingers trace the ink,
not reading the words,
but remembering the texture of time.`,
    metadata: "Chennai • Spring • Morning",
  },
  {
    id: "dawn-market",
    title: "Dawn Market",
    text: `He stacks the green melons
in the quiet hour before the light.
Each sphere is placed with care,
as if he were arranging the stars
in a private sky.`,
    metadata: "Jaipur • Autumn • Pre-dawn",
  },
  {
    id: "platform-bench",
    title: "Platform Bench",
    text: `The clock is three minutes slow.
A bag sits between his shoes,
heavy with things he didn't say.
The train will arrive,
but he is already gone.`,
    metadata: "Howrah • Winter • Night",
  },
  {
    id: "underpass-song",
    title: "Underpass Song",
    text: `A bow scrapes against wood.
The concrete tunnel echoes
a melody meant for empty arches.
He plays not to be heard,
but to keep the walls from closing in.`,
    metadata: "Bengaluru • Spring • Night",
  },
];
