// ============================================================================
// Plant Atlas — Global Botanical Data with Indigenous Knowledge
// ============================================================================

export interface IndigenousKnowledge {
  practice: string;
  community: string;
  region: string;
  description: string;
  uses: string[];
}

export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  family: string;
  description: string;
  nativeTo: string[];
  habitats: string[];
  medicinalUses: string[];
  traditionalUses: string[];
  indigenousKnowledge: IndigenousKnowledge[];
  partsUsed: string[];
  color: string;
  emoji: string;
  tags: string[];
}

export interface Country {
  code: string;
  name: string;
  region: string;
  emoji: string;
  description: string;
  climate: string;
  shelfColor: string;
  plantIds: string[];
}

// ─── Color palette for countries (wooden shelf tones) ───────────────────────
const SHELF_COLORS = [
  "#8B6914", "#A0522D", "#6B4423", "#8B5A2B", "#9C7C3F",
  "#7A5C2F", "#5C4033", "#8B7355", "#A67B5B", "#C19A6B",
  "#704214", "#8B4513", "#654321", "#966F33", "#B8860B",
];

// ─── Countries ──────────────────────────────────────────────────────────────
export const countries: Country[] = [
  {
    code: "br",
    name: "Brazil",
    region: "South America",
    emoji: "🇧🇷",
    description: "Home to the Amazon rainforest, the world's largest tropical rainforest with unparalleled botanical diversity.",
    climate: "Tropical rainforest",
    shelfColor: SHELF_COLORS[0],
    plantIds: ["acai", "catuaba", "guarana", "jaborandi", "pau-darco"],
  },
  {
    code: "in",
    name: "India",
    region: "South Asia",
    emoji: "🇮🇳",
    description: "The birthplace of Ayurveda, with over 7,500 medicinal plants documented in classical texts.",
    climate: "Tropical monsoon",
    shelfColor: SHELF_COLORS[1],
    plantIds: ["ashwagandha", "neem", "turmeric", "brahmi", "tulsi"],
  },
  {
    code: "cn",
    name: "China",
    region: "East Asia",
    emoji: "🇨🇳",
    description: "Traditional Chinese Medicine has documented over 11,000 medicinal substances over 2,500 years.",
    climate: "Varied — temperate to subtropical",
    shelfColor: SHELF_COLORS[2],
    plantIds: ["ginseng", "goji", "astragalus", "dong-quai", "reishi"],
  },
  {
    code: "mx",
    name: "Mexico",
    region: "North America",
    emoji: "🇲🇽",
    description: "Rich ethnobotanical heritage spanning Aztec, Maya, and contemporary indigenous traditions.",
    climate: "Tropical to arid",
    shelfColor: SHELF_COLORS[3],
    plantIds: ["damiana", "chaparro", "peyote", "pasiflora", "oregano-salvaje"],
  },
  {
    code: "ke",
    name: "Kenya",
    region: "East Africa",
    emoji: "🇰🇪",
    description: "The savanna and highland forests harbor unique medicinal plants used by Maasai and Kikuyu healers.",
    climate: "Tropical savanna",
    shelfColor: SHELF_COLORS[4],
    plantIds: ["moringa", "aloe-kenya", "warburgia", "prunus-africana", "asphodel"],
  },
  {
    code: "pe",
    name: "Peru",
    region: "South America",
    emoji: "🇵🇪",
    description: "From the Andes to the Amazon, Peruvian shamans have preserved plant knowledge for millennia.",
    climate: "Andean highland to tropical",
    shelfColor: SHELF_COLORS[5],
    plantIds: ["maca", "coca", "cat-claw", "sangre-de-grado", "chanca-piedra"],
  },
  {
    code: "au",
    name: "Australia",
    region: "Oceania",
    emoji: "🇦🇺",
    description: "Aboriginal Australians have used native plants for medicine, food, and ceremony for 65,000 years.",
    climate: "Arid to tropical",
    shelfColor: SHELF_COLORS[6],
    plantIds: ["tea-tree", "kakadu-plum", "eucalyptus", "kangaroo-apple", "wattle"],
  },
  {
    code: "ma",
    name: "Morocco",
    region: "North Africa",
    emoji: "🇲🇦",
    description: "Berber communities in the Atlas Mountains maintain ancient herbal traditions.",
    climate: "Mediterranean to arid",
    shelfColor: SHELF_COLORS[7],
    plantIds: ["argan", "myrtle", "artemisia", "nigella", "rose-morocco"],
  },
  {
    code: "id",
    name: "Indonesia",
    region: "Southeast Asia",
    emoji: "🇮🇩",
    description: "Jamu, the Indonesian herbal medicine tradition, uses over 3,000 plant species.",
    climate: "Tropical rainforest",
    shelfColor: SHELF_COLORS[8],
    plantIds: ["jamu", "galangal", "kencur", "temulawak", "gotu-kola"],
  },
  {
    code: "jp",
    name: "Japan",
    region: "East Asia",
    emoji: "🇯🇵",
    description: "Kampo medicine blends Chinese herbal wisdom with Japanese refinement over 1,500 years.",
    climate: "Temperate",
    shelfColor: SHELF_COLORS[9],
    plantIds: ["maitake", "shiso", "yuzu", "matcha", "hachimijiogan"],
  },
  {
    code: "za",
    name: "South Africa",
    region: "Southern Africa",
    emoji: "🇿🇦",
    description: "The Cape Floristic Region is the world's smallest yet richest plant kingdom.",
    climate: "Mediterranean to subtropical",
    shelfColor: SHELF_COLORS[10],
    plantIds: ["rooibos", "buchu", "hoodia", "pelargonium", "devils-claw"],
  },
  {
    code: "jm",
    name: "Jamaica",
    region: "Caribbean",
    emoji: "🇯🇲",
    description: "Maroon and Rastafarian communities preserve Afro-Caribbean botanical healing traditions.",
    climate: "Tropical",
    shelfColor: SHELF_COLORS[11],
    plantIds: ["soursop", "cerasee", "guinea-hen", "strong-back", "leaf-of-life"],
  },
];

// ─── Plants ─────────────────────────────────────────────────────────────────
export const plants: Record<string, Plant> = {
  // ─── Brazil ───────────────────────────────────────────────────────────────
  "acai": {
    id: "acai", name: "Açaí", scientificName: "Euterpe oleracea",
    family: "Arecaceae", emoji: "🫐", color: "#4B0082",
    description: "A palm tree producing deep purple berries, a staple food and medicine for Amazonian peoples for centuries.",
    nativeTo: ["Brazil", "Colombia", "Peru"],
    habitats: ["Amazonian floodplains", "Rainforest edges"],
    medicinalUses: ["Antioxidant", "Anti-inflammatory", "Cardiovascular support", "Energy boost"],
    traditionalUses: ["Daily food staple", "Fever reduction", "Skin healing", "Digestive aid"],
    partsUsed: ["Fruit", "Heart of palm", "Root"],
    tags: ["superfood", "antioxidant", "energy", "amazon"],
    indigenousKnowledge: [
      { practice: "Juice preparation", community: "Caboclo", region: "Pará", description: "Hand-processed berries consumed as a thick purple porridge", uses: ["Daily nutrition", "Post-illness recovery"] },
      { practice: "Fruit harvesting", community: "Ticuna", region: "Upper Amazon", description: "Sustainable climbing harvest preserving palm regeneration", uses: ["Food security", "Trade"] },
    ],
  },
  "catuaba": {
    id: "catuaba", name: "Catuaba", scientificName: "Erythroxylum catuaba",
    family: "Erythroxylaceae", emoji: "🌿", color: "#228B22",
    description: "A small tree whose bark has been used by Tupi indigenous people as a tonic and aphrodisiac.",
    nativeTo: ["Brazil"], habitats: ["Atlantic rainforest", "Cerrado"],
    medicinalUses: ["Nervine tonic", "Aphrodisiac", "Memory support", "Mood enhancement"],
    traditionalUses: ["Nerve tonic", "Male vitality", "Mental clarity"],
    partsUsed: ["Bark"], tags: ["tonic", "aphrodisiac", "nervine", "rainforest"],
    indigenousKnowledge: [
      { practice: "Bark decoction", community: "Tupi", region: "Northern Brazil", description: "Simmered bark tea consumed as a daily vitality tonic", uses: ["Energy", "Mental clarity", "Vitality"] },
    ],
  },
  "guarana": {
    id: "guarana", name: "Guaraná", scientificName: "Paullinia cupana",
    family: "Sapindaceae", emoji: "🌰", color: "#B22222",
    description: "A climbing plant with caffeine-rich seeds, central to Sateré-Mawé cultural identity and mythology.",
    nativeTo: ["Brazil"], habitats: ["Amazon rainforest"],
    medicinalUses: ["Stimulant", "Digestive aid", "Headache relief", "Weight management"],
    traditionalUses: ["Ritual beverage", "Hunting energy", "Social drink"],
    partsUsed: ["Seed"], tags: ["stimulant", "caffeine", "energy", "ritual"],
    indigenousKnowledge: [
      { practice: "Ritual cultivation", community: "Sateré-Mawé", region: "Amazonas", description: "Sacred cultivation passed through generations with origin mythology", uses: ["Ceremony", "Identity", "Trade"] },
      { practice: "Paste preparation", community: "Sateré-Mawé", region: "Amazonas", description: "Seeds dried, ground into paste with water, shaped into sticks", uses: ["Daily energy", "Ritual consumption"] },
    ],
  },
  "jaborandi": {
    id: "jaborandi", name: "Jaborandi", scientificName: "Pilocarpus jaborandi",
    family: "Rutaceae", emoji: "🍃", color: "#2E8B57",
    description: "A shrub whose leaves contain pilocarpine, used in modern medicine for glaucoma and dry mouth.",
    nativeTo: ["Brazil"], habitats: ["Dry forests", "Cerrado"],
    medicinalUses: ["Glaucoma treatment", "Dry mouth relief", "Sweat stimulation", "Digestive stimulant"],
    traditionalUses: ["Diuretic", "Sweat inducer", "Hair growth tonic"],
    partsUsed: ["Leaves"], tags: ["glaucoma", "pilocarpine", "diuretic", "cerrado"],
    indigenousKnowledge: [
      { practice: "Leaf infusion", community: "Indigenous groups", region: "Northeast Brazil", description: "Leaf tea used to induce sweating and treat fever", uses: ["Fever reduction", "Detoxification"] },
    ],
  },
  "pau-darco": {
    id: "pau-darco", name: "Pau d'Arco", scientificName: "Handroanthus impetiginosus",
    family: "Bignoniaceae", emoji: "🌸", color: "#DDA0DD",
    description: "A towering tree with pink trumpet flowers, its inner bark treasured for immune support.",
    nativeTo: ["Brazil", "Argentina", "Paraguay"], habitats: ["Rainforest", "Semi-deciduous forests"],
    medicinalUses: ["Immune support", "Antifungal", "Anti-inflammatory", "Antioxidant"],
    traditionalUses: ["Wound healing", "Cancer folk remedy", "Digestive tonic"],
    partsUsed: ["Inner bark"], tags: ["immune", "antifungal", "cancer-folk", "bark"],
    indigenousKnowledge: [
      { practice: "Bark decoction", community: "Guarani", region: "Mato Grosso", description: "Inner bark boiled into a dark red tea for immune strength", uses: ["Immunity", "General wellness"] },
    ],
  },
  // ─── India ────────────────────────────────────────────────────────────────
  "ashwagandha": {
    id: "ashwagandha", name: "Ashwagandha", scientificName: "Withania somnifera",
    family: "Solanaceae", emoji: "🍂", color: "#D2691E",
    description: "The 'strength of a horse' — an adaptogenic root used in Ayurveda for over 3,000 years.",
    nativeTo: ["India", "Pakistan", "Sri Lanka"], habitats: ["Dry subtropical regions", "Wastelands"],
    medicinalUses: ["Adaptogen", "Stress relief", "Sleep aid", "Hormone balance"],
    traditionalUses: ["Rasayana (rejuvenation)", "Vajikarana (vitality)", "Balya (strength)"],
    partsUsed: ["Root", "Leaves"], tags: ["adaptogen", "stress", "ayurveda", "rasayana"],
    indigenousKnowledge: [
      { practice: "Ashwagandha ghrita", community: "Ayurvedic physicians", region: "Karnataka", description: "Root boiled in ghee for nervine tonic preparations", uses: ["Nervous exhaustion", "Insomnia", "Convalescence"] },
      { practice: "Churna preparation", community: "Traditional Vaidyas", region: "Madhya Pradesh", description: "Dried root powdered and mixed with milk or honey", uses: ["Strength", "Immunity", "Longevity"] },
    ],
  },
  "neem": {
    id: "neem", name: "Neem", scientificName: "Azadirachta indica",
    family: "Meliaceae", emoji: "🌳", color: "#556B2F",
    description: "The 'village pharmacy' — every part of this sacred tree has medicinal use in Indian tradition.",
    nativeTo: ["India", "Bangladesh"], habitats: ["Dry deciduous forests", "Village commons"],
    medicinalUses: ["Antimicrobial", "Antifungal", "Blood purifier", "Skin health"],
    traditionalUses: ["Dental hygiene (datun)", "Skin diseases", "Fever", "Diabetes"],
    partsUsed: ["Leaves", "Bark", "Seeds", "Oil"], tags: ["antimicrobial", "skin", "village-pharmacy", "sacred"],
    indigenousKnowledge: [
      { practice: "Neem datun", community: "Rural communities", region: "All India", description: "Young twig chewed as natural toothbrush — antimicrobial and strengthens gums", uses: ["Dental health", "Oral hygiene"] },
      { practice: "Neem leaf bath", community: "Women healers", region: "Maharashtra", description: "Leaves boiled in water for bathing — treats skin infections and purifies", uses: ["Skin diseases", "Postpartum care"] },
    ],
  },
  "turmeric": {
    id: "turmeric", name: "Turmeric", scientificName: "Curcuma longa",
    family: "Zingiberaceae", emoji: "🟡", color: "#FFD700",
    description: "The golden spice — sacred in Hindu rituals and scientifically validated for potent anti-inflammatory action.",
    nativeTo: ["India"], habitats: ["Tropical cultivation", "Humid forests"],
    medicinalUses: ["Anti-inflammatory", "Antioxidant", "Wound healing", "Digestive aid"],
    traditionalUses: ["Haldi ceremony", "Cooking spice", "Skin brightening", "Cough remedy"],
    partsUsed: ["Rhizome"], tags: ["anti-inflammatory", "curcumin", "sacred", "golden"],
    indigenousKnowledge: [
      { practice: "Haldi ceremony", community: "Hindu traditions", region: "All India", description: "Turmeric paste applied to bride and groom for purification and blessing", uses: ["Purification", "Blessing", "Skin health"] },
      { practice: "Golden milk (Haldi doodh)", community: "Grandmothers", region: "North India", description: "Turmeric and black pepper in warm milk for immunity and recovery", uses: ["Immunity", "Recovery", "Joint pain"] },
    ],
  },
  "brahmi": {
    id: "brahmi", name: "Brahmi", scientificName: "Bacopa monnieri",
    family: "Plantaginaceae", emoji: "🌱", color: "#3CB371",
    description: "The herb of enlightenment — used by yogis to sharpen memory and deepen meditation.",
    nativeTo: ["India", "Sri Lanka"], habitats: ["Wetlands", "Rice paddies", "Marshes"],
    medicinalUses: ["Memory enhancer", "Nervine tonic", "Anxiolytic", "Antioxidant"],
    traditionalUses: ["Medhya rasayana (brain tonic)", "Meditation aid", "Epilepsy"],
    partsUsed: ["Whole plant"], tags: ["nootropic", "memory", "meditation", "rasayana"],
    indigenousKnowledge: [
      { practice: "Brahmi ghrita", community: "Ayurvedic physicians", region: "Kerala", description: "Prepared in ghee — the traditional vehicle for brain-targeted herbs", uses: ["Memory", "Concentration", "Epilepsy"] },
    ],
  },
  "tulsi": {
    id: "tulsi", name: "Tulsi (Holy Basil)", scientificName: "Ocimum tenuiflorum",
    family: "Lamiaceae", emoji: "🌿", color: "#228B22",
    description: "The Queen of Herbs — worshipped in Hindu households and scientifically shown to be an adaptogen.",
    nativeTo: ["India"], habitats: ["Cultivated in households", "Tropical regions"],
    medicinalUses: ["Adaptogen", "Respiratory support", "Immune modulator", "Stress relief"],
    traditionalUses: ["Daily worship (Tulsi vrindavan)", "Fever", "Cough", "Heart tonic"],
    partsUsed: ["Leaves", "Seeds", "Roots"], tags: ["adaptogen", "sacred", "respiratory", "worship"],
    indigenousKnowledge: [
      { practice: "Tulsi puja", community: "Hindu households", region: "All India", description: "Daily worship of Tulsi plant at home — believed to purify the environment", uses: ["Spiritual practice", "Air purification", "Mental peace"] },
      { practice: "Tulsi kadha", community: "Traditional healers", region: "Uttar Pradesh", description: "Decoction with ginger, black pepper, and honey for colds and immunity", uses: ["Colds", "Immunity", "Respiratory health"] },
    ],
  },
  // ─── China ────────────────────────────────────────────────────────────────
  "ginseng": {
    id: "ginseng", name: "Ginseng", scientificName: "Panax ginseng",
    family: "Araliaceae", emoji: "🥕", color: "#CD853F",
    description: "The root of immortality — wild ginseng is so precious it has sparked gold rushes and wars.",
    nativeTo: ["China", "Korea", "Russia"], habitats: ["Mixed forests", "Mountain slopes"],
    medicinalUses: ["Adaptogen", "Immune modulator", "Cognitive enhancer", "Physical endurance"],
    traditionalUses: ["Qi tonic", "Longevity elixir", "Impotence", "Fatigue"],
    partsUsed: ["Root"], tags: ["adaptogen", "qi", "longevity", "precious"],
    indigenousKnowledge: [
      { practice: "Wild root hunting", community: "Mountain foragers", region: "Changbai Mountains", description: "Generational knowledge of finding wild ginseng using environmental cues", uses: ["Trade", "Medicine", "Cultural identity"] },
      { practice: "Red ginseng processing", community: "Traditional processors", region: "Korea/China border", description: "Steaming and drying to enhance warmth properties and preserve", uses: ["Qi deficiency", "Cold constitution", "Recovery"] },
    ],
  },
  "goji": {
    id: "goji", name: "Goji Berry", scientificName: "Lycium barbarum",
    family: "Solanaceae", emoji: "🍒", color: "#DC143C",
    description: "Bright red berries from Ningxia — called 'happy berries' for their mood-lifting properties.",
    nativeTo: ["China"], habitats: ["Ningxia region", "Dry hillsides"],
    medicinalUses: ["Eye health", "Immune support", "Antioxidant", "Liver tonic"],
    traditionalUses: ["Yin tonic", "Longevity tea", "Vision improvement"],
    partsUsed: ["Fruit"], tags: ["antioxidant", "eye-health", "yin-tonic", "longevity"],
    indigenousKnowledge: [
      { practice: "Ningxia cultivation", community: "Ningxia farmers", region: "Ningxia", description: "Traditional cultivation in the Yellow River floodplain for 2,000 years", uses: ["Nutrition", "Medicine", "Trade"] },
    ],
  },
  "astragalus": {
    id: "astragalus", name: "Astragalus", scientificName: "Astragalus membranaceus",
    family: "Fabaceae", emoji: "🌾", color: "#F0E68C",
    description: "Huang Qi — the yellow leader — a foundational Qi tonic used to fortify the body's defenses.",
    nativeTo: ["China", "Mongolia"], habitats: ["Grasslands", "Mountain slopes"],
    medicinalUses: ["Immune enhancement", "Fatigue", "Wound healing", "Diabetes support"],
    traditionalUses: ["Qi tonic", "Wei Qi (defensive energy)", "Diuretic", "Anti-aging"],
    partsUsed: ["Root"], tags: ["immune", "qi-tonic", "adaptogen", "foundational"],
    indigenousKnowledge: [
      { practice: "Sliced root decoction", community: "TCM practitioners", region: "Northern China", description: "Sliced roots slow-simmered for hours to extract polysaccharides", uses: ["Immunity", "Qi deficiency", "Recovery"] },
    ],
  },
  "dong-quai": {
    id: "dong-quai", name: "Dong Quai", scientificName: "Angelica sinensis",
    family: "Apiaceae", emoji: "🌸", color: "#FFB6C1",
    description: "The 'female ginseng' — the most important blood tonic in Traditional Chinese Medicine for women.",
    nativeTo: ["China"], habitats: ["Mountain valleys", "High altitude meadows"],
    medicinalUses: ["Blood tonic", "Menstrual regulator", "Pain relief", "Circulation"],
    traditionalUses: ["Women's health", "Anemia", "Menopausal symptoms", "Dry skin"],
    partsUsed: ["Root"], tags: ["blood-tonic", "women-health", "menstrual", "angelica"],
    indigenousKnowledge: [
      { practice: "Four Substances Formula", community: "TCM herbalists", region: "Sichuan", description: "Combined with white peony, rehmannia, and ligusticum for blood regulation", uses: ["Menstrual health", "Anemia", "Postpartum recovery"] },
    ],
  },
  "reishi": {
    id: "reishi", name: "Reishi", scientificName: "Ganoderma lucidum",
    family: "Ganodermataceae", emoji: "🍄", color: "#8B0000",
    description: "The Mushroom of Immortality — depicted in Chinese art for millennia as a symbol of longevity.",
    nativeTo: ["China", "Japan", "Korea"], habitats: ["Dead hardwood trees", "Forest floors"],
    medicinalUses: ["Immune modulation", "Stress adaptation", "Sleep support", "Liver protection"],
    traditionalUses: ["Shen tonic (spirit)", "Longevity", "Heart health", "Wisdom"],
    partsUsed: ["Fruiting body"], tags: ["mushroom", "immortality", "shen-tonic", "spirit"],
    indigenousKnowledge: [
      { practice: "Double extraction", community: "Taoist herbalists", region: "Wudang Mountains", description: "Alcohol and water extraction to capture both triterpenes and polysaccharides", uses: ["Spirit cultivation", "Immunity", "Longevity"] },
    ],
  },
  // ─── Mexico ───────────────────────────────────────────────────────────────
  "damiana": {
    id: "damiana", name: "Damiana", scientificName: "Turnera diffusa",
    family: "Passifloraceae", emoji: "🌼", color: "#FFD700",
    description: "Aromatic shrub of the Mexican deserts — used by the Maya for love and the spirit.",
    nativeTo: ["Mexico", "Central America"], habitats: ["Dry hills", "Rocky slopes"],
    medicinalUses: ["Aphrodisiac", "Anxiolytic", "Digestive aid", "Mood enhancer"],
    traditionalUses: ["Love potion", "Depression", "Digestive tonic", "Tea"],
    partsUsed: ["Leaves"], tags: ["aphrodisiac", "mood", "desert", "aromatic"],
    indigenousKnowledge: [
      { practice: "Damiana liqueur", community: "Mayan descendants", region: "Yucatán", description: "Leaves steeped in alcohol as a traditional love elixir", uses: ["Romantic occasions", "Social gatherings"] },
    ],
  },
  "chaparro": {
    id: "chaparro", name: "Chaparro Amargoso", scientificName: "Castela erecta",
    family: "Simaroubaceae", emoji: "🌳", color: "#6B8E23",
    description: "The bitter tree — a cornerstone of Mexican traditional medicine for digestive ailments.",
    nativeTo: ["Mexico"], habitats: ["Dry tropical forests", "Thorn scrub"],
    medicinalUses: ["Antiparasitic", "Digestive stimulant", "Fever reduction", "Antibacterial"],
    traditionalUses: ["Amebiasis", "Dysentery", "Fever", "Stomach pain"],
    partsUsed: ["Bark", "Leaves"], tags: ["bitter", "digestive", "antiparasitic", "mexican"],
    indigenousKnowledge: [
      { practice: "Bitter bark decoction", community: "Nahuatl healers", region: "Guerrero", description: "Extremely bitter tea taken in small doses for intestinal parasites", uses: ["Parasites", "Dysentery", "Fever"] },
    ],
  },
  "peyote": {
    id: "peyote", name: "Peyote", scientificName: "Lophophora williamsii",
    family: "Cactaceae", emoji: "🌵", color: "#2E8B57",
    description: "The divine cactus — sacred to the Wixárika (Huichol) people for over 5,000 years.",
    nativeTo: ["Mexico", "United States"], habitats: ["Chihuahuan desert", "Limestone soils"],
    medicinalUses: ["Pain relief", "Anti-inflammatory", "Spiritual insight", "Addiction treatment"],
    traditionalUses: ["Religious ceremony", "Vision quests", "Healing rituals"],
    partsUsed: ["Whole cactus (button)"], tags: ["sacred", "ceremonial", "visionary", "protected"],
    indigenousKnowledge: [
      { practice: "Peyote pilgrimage", community: "Wixárika (Huichol)", region: "San Luis Potosí", description: "Annual 400km pilgrimage to Wirikuta, the sacred peyote land", uses: ["Spiritual renewal", "Community bonding", "Healing"] },
      { practice: "Hikuri ceremony", community: "Wixárika", region: "Sierra Madre Occidental", description: "All-night ceremonies with chanting, yarn painting, and peyote consumption", uses: ["Vision", "Healing", "Cosmic connection"] },
    ],
  },
  "pasiflora": {
    id: "pasiflora", name: "Passionflower", scientificName: "Passiflora incarnata",
    family: "Passifloraceae", emoji: "🌺", color: "#9370DB",
    description: "Named by Spanish missionaries for Christ's passion — a gentle sedative used by Aztec healers.",
    nativeTo: ["Mexico", "Central America"], habitats: ["Tropical forests", "Edges", "Gardens"],
    medicinalUses: ["Sedative", "Anxiolytic", "Sleep aid", "Muscle relaxant"],
    traditionalUses: ["Insomnia", "Nervousness", "Pain", "Seizures"],
    partsUsed: ["Leaves", "Flowers", "Stem"], tags: ["sedative", "sleep", "anxiety", "flower"],
    indigenousKnowledge: [
      { practice: "Tecpatl tea", community: "Aztec-descended healers", region: "Oaxaca", description: "Fresh leaves steeped for calming tea before sleep", uses: ["Insomnia", "Anxiety", "Nervous tension"] },
    ],
  },
  "oregano-salvaje": {
    id: "oregano-salvaje", name: "Mexican Oregano", scientificName: "Lippia graveolens",
    family: "Verbenaceae", emoji: "🌿", color: "#556B2F",
    description: "Wild oregano of the Mexican hills — more pungent than Mediterranean oregano with different chemistry.",
    nativeTo: ["Mexico"], habitats: ["Dry hills", "Rocky slopes", "Thorn forest"],
    medicinalUses: ["Antimicrobial", "Digestive aid", "Respiratory support", "Antioxidant"],
    traditionalUses: ["Cooking", "Cough syrup", "Stomach tea", "Wound poultice"],
    partsUsed: ["Leaves"], tags: ["antimicrobial", "cooking", "respiratory", "wild"],
    indigenousKnowledge: [
      { practice: "Wild harvesting", community: "Campesino communities", region: "Oaxaca", description: "Sustainable wild collection during flowering for maximum essential oils", uses: ["Culinary", "Medicine", "Income"] },
    ],
  },
  // ─── Kenya ────────────────────────────────────────────────────────────────
  "moringa": {
    id: "moringa", name: "Moringa", scientificName: "Moringa oleifera",
    family: "Moringaceae", emoji: "🌿", color: "#228B22",
    description: "The 'miracle tree' — every part is edible and medicinal, a lifeline in drought-prone regions.",
    nativeTo: ["India", "Kenya", "Ethiopia"], habitats: ["Tropical drylands", "Village gardens"],
    medicinalUses: ["Nutrient-dense", "Anti-inflammatory", "Blood sugar support", "Antimicrobial"],
    traditionalUses: ["Malnutrition prevention", "Water purification", "Lactation support", "Anemia"],
    partsUsed: ["Leaves", "Pods", "Seeds", "Roots", "Flowers"], tags: ["superfood", "malnutrition", "miracle-tree", "drought"],
    indigenousKnowledge: [
      { practice: "Leaf powdering", community: "Rural women's groups", region: "Eastern Province", description: "Leaves dried and powdered for year-round nutrition supplementation", uses: ["Child nutrition", "HIV support", "Pregnancy"] },
      { practice: "Seed water purification", community: "Traditional knowledge", region: "Turkana", description: "Crushed seeds clarify muddy water — a traditional water treatment", uses: ["Water purification", "Community health"] },
    ],
  },
  "aloe-kenya": {
    id: "aloe-kenya", name: "Aloe", scientificName: "Aloe vera",
    family: "Asphodelaceae", emoji: "🌵", color: "#2E8B57",
    description: "The burn plant — used across Kenya for skin conditions, digestive health, and livestock medicine.",
    nativeTo: ["Kenya", "Somalia"], habitats: ["Dry savanna", "Rocky outcrops"],
    medicinalUses: ["Wound healing", "Burn treatment", "Laxative", "Skin moisturizer"],
    traditionalUses: ["Burns", "Constipation", "Skin rashes", "Livestock medicine"],
    partsUsed: ["Gel", "Latex"], tags: ["burns", "skin", "wound-healing", "livestock"],
    indigenousKnowledge: [
      { practice: "Livestock wound care", community: "Maasai herders", region: "Kajiado", description: "Aloe gel applied to cattle wounds and infections", uses: ["Veterinary medicine", "Wound healing"] },
      { practice: "Skin beauty ritual", community: "Coastal Swahili", region: "Mombasa", description: "Fresh gel applied to face for cooling and skin health", uses: ["Beauty", "Sun protection", "Skin health"] },
    ],
  },
  "warburgia": {
    id: "warburgia", name: "Warburgia", scientificName: "Warburgia ugandensis",
    family: "Canellaceae", emoji: "🌳", color: "#8B4513",
    description: "The East African greenheart — bark so bitter it is called the 'devil's tree' by some, medicine by others.",
    nativeTo: ["Kenya", "Uganda", "Tanzania"], habitats: ["Montane forests", "Wooded grasslands"],
    medicinalUses: ["Antimalarial", "Antimicrobial", "Digestive stimulant", "Pain relief"],
    traditionalUses: ["Malaria", "Toothache", "Stomach complaints", "Colds"],
    partsUsed: ["Bark", "Leaves"], tags: ["antimalarial", "bitter", "malaria", "montane"],
    indigenousKnowledge: [
      { practice: "Bark chewing", community: "Kikuyu healers", region: "Central Highlands", description: "Small pieces of bark chewed for toothache and as general tonic", uses: ["Toothache", "Stomach upset", "Malaria prevention"] },
    ],
  },
  "prunus-africana": {
    id: "prunus-africana", name: "African Cherry", scientificName: "Prunus africana",
    family: "Rosaceae", emoji: "🌸", color: "#DDA0DD",
    description: "The pygeum tree — its bark is the most exported African medicinal product, threatened by overharvesting.",
    nativeTo: ["Kenya", "Cameroon", "Madagascar"], habitats: ["Montane forests", "Afromontane"],
    medicinalUses: ["Prostate health", "Anti-inflammatory", "Urinary support", "Hair growth"],
    traditionalUses: ["Prostate enlargement", "Kidney problems", "Stomach pain", "Fever"],
    partsUsed: ["Bark"], tags: ["prostate", "pygeum", "threatened", "export"],
    indigenousKnowledge: [
      { practice: "Sustainable bark harvest", community: "Mount Kenya communities", region: "Mount Kenya", description: "Stripping only portions of bark to allow tree survival — traditional conservation", uses: ["Prostate health", "Medicine", "Income"] },
    ],
  },
  "asphodel": {
    id: "asphodel", name: "Asphodel", scientificName: "Asphodelus fistulosus",
    family: "Asphodelaceae", emoji: "🌾", color: "#F5DEB3",
    description: "A lily-like plant whose tubers sustained Maasai herders during droughts.",
    nativeTo: ["Kenya", "Tanzania"], habitats: ["Grasslands", "Savanna", "Open woodland"],
    medicinalUses: ["Digestive aid", "Diuretic", "Skin softener", "Nutritive"],
    traditionalUses: ["Drought food", "Skin conditions", "Urinary complaints"],
    partsUsed: ["Tubers", "Leaves"], tags: ["drought-food", "survival", "maasai", "tubers"],
    indigenousKnowledge: [
      { practice: "Tuber roasting", community: "Maasai", region: "Rift Valley", description: "Tubers roasted in ashes during drought as emergency food", uses: ["Survival food", "Drought resilience"] },
    ],
  },
  // ─── Peru ─────────────────────────────────────────────────────────────────
  "maca": {
    id: "maca", name: "Maca", scientificName: "Lepidium meyenii",
    family: "Brassicaceae", emoji: "🥔", color: "#DAA520",
    description: "The Inca superfood — grown at 4,000m altitude, it thrives where almost nothing else can.",
    nativeTo: ["Peru"], habitats: ["High Andean plateaus", "Puna grassland"],
    medicinalUses: ["Hormone balance", "Energy", "Fertility", "Mood support"],
    traditionalUses: ["Stamina for Inca warriors", "Fertility", "Altitude sickness", "Anemia"],
    partsUsed: ["Root"], tags: ["superfood", "andean", "altitude", "inca"],
    indigenousKnowledge: [
      { practice: "Pachamanca cooking", community: "Quechua", region: "Junín", description: "Roots cooked underground with hot stones in traditional earth oven", uses: ["Ceremony", "Nutrition", "Community"] },
      { practice: "Chicha de maca", community: "Andean communities", region: "Huancayo", description: "Fermented maca drink consumed during festivals", uses: ["Celebration", "Energy", "Social bonding"] },
    ],
  },
  "coca": {
    id: "coca", name: "Coca", scientificName: "Erythroxylum coca",
    family: "Erythroxylaceae", emoji: "🌿", color: "#006400",
    description: "The divine leaf of the Andes — sacred to Inca and Quechua peoples, misused and misunderstood globally.",
    nativeTo: ["Peru", "Bolivia", "Colombia"], habitats: ["Andean slopes", "Cloud forests"],
    medicinalUses: ["Altitude sickness", "Digestive aid", "Energy", "Pain relief"],
    traditionalUses: ["Coca chewing (acullico)", "Divination", "Offerings to Pachamama", "Social exchange"],
    partsUsed: ["Leaves"], tags: ["sacred", "andean", "altitude", "coca"],
    indigenousKnowledge: [
      { practice: "Acullico", community: "Quechua", region: "Cusco", description: "Leaves chewed with llipta (alkaline ash) to release alkaloids and suppress altitude sickness", uses: ["Altitude adaptation", "Energy", "Hunger suppression"] },
      { practice: "Despacho offering", community: "Andean shamans", region: "All Andes", description: "Coca leaves arranged in elaborate offerings to mountain spirits and Pachamama", uses: ["Spiritual protection", "Blessings", "Gratitude"] },
    ],
  },
  "cat-claw": {
    id: "cat-claw", name: "Cat's Claw", scientificName: "Uncaria tomentosa",
    family: "Rubiaceae", emoji: "🌿", color: "#556B2F",
    description: "A climbing vine with hooked thorns — the Asháninka people's gift to the world.",
    nativeTo: ["Peru", "Brazil"], habitats: ["Amazon rainforest"],
    medicinalUses: ["Immune support", "Anti-inflammatory", "Antiviral", "Digestive aid"],
    traditionalUses: ["Inflammation", "Viral infections", "Stomach ulcers", "Wound healing"],
    partsUsed: ["Bark", "Root"], tags: ["immune", "anti-inflammatory", "amazon", "vines"],
    indigenousKnowledge: [
      { practice: "Bark harvesting ritual", community: "Asháninka", region: "Central Amazon", description: "Permission asked from the vine spirit before harvesting — sustainable practices", uses: ["Arthritis", "Immunity", "Ulcers"] },
    ],
  },
  "sangre-de-grado": {
    id: "sangre-de-grado", name: "Sangre de Grado", scientificName: "Croton lechleri",
    family: "Euphorbiaceae", emoji: "🩸", color: "#8B0000",
    description: "Dragon's blood — a tree that bleeds red sap, used by Amazonians as a liquid bandage.",
    nativeTo: ["Peru", "Ecuador"], habitats: ["Amazon rainforest"],
    medicinalUses: ["Wound healing", "Antimicrobial", "Antiviral", "Stomach ulcers"],
    traditionalUses: ["Skin wounds", "Diarrhea", "Viral infections", "Gum disease"],
    partsUsed: ["Latex (sap)"], tags: ["wound-healing", "dragon-blood", "latex", "bandage"],
    indigenousKnowledge: [
      { practice: "Sap application", community: "Shipibo-Conibo", region: "Ucayali", description: "Red sap painted directly on cuts, forming a protective second skin", uses: ["Wounds", "Skin infections", "Diarrhea"] },
    ],
  },
  "chanca-piedra": {
    id: "chanca-piedra", name: "Chanca Piedra", scientificName: "Phyllanthus niruri",
    family: "Phyllanthaceae", emoji: "🌱", color: "#3CB371",
    description: "The 'stone breaker' — Amazonian healers have used it to dissolve kidney stones for generations.",
    nativeTo: ["Peru", "Brazil", "India"], habitats: ["Tropical forest edges", "Disturbed areas"],
    medicinalUses: ["Kidney stones", "Liver support", "Antiviral (Hepatitis B)", "Diuretic"],
    traditionalUses: ["Kidney stones", "Gallstones", "Jaundice", "Urinary infections"],
    partsUsed: ["Whole plant"], tags: ["kidney-stones", "liver", "diuretic", "stone-breaker"],
    indigenousKnowledge: [
      { practice: "Morning tea", community: "Amazonian healers", region: "Loreto", description: "Fresh plant steeped and drunk on empty stomach for stone dissolution", uses: ["Kidney stones", "Gallstones", "Liver cleanse"] },
    ],
  },
  // ─── Australia ────────────────────────────────────────────────────────────
  "tea-tree": {
    id: "tea-tree", name: "Tea Tree", scientificName: "Melaleuca alternifolia",
    family: "Myrtaceae", emoji: "🌿", color: "#228B22",
    description: "The Aboriginal wound healer — crushed leaves applied to infections for 40,000+ years.",
    nativeTo: ["Australia"], habitats: ["Swampy coastal areas", "Queensland"],
    medicinalUses: ["Antimicrobial", "Antifungal", "Wound antiseptic", "Acne treatment"],
    traditionalUses: ["Wound poultice", "Respiratory inhalation", "Skin infections"],
    partsUsed: ["Leaves", "Oil"], tags: ["antiseptic", "antimicrobial", "aboriginal", "essential-oil"],
    indigenousKnowledge: [
      { practice: "Leaf poultice", community: "Bundjalung", region: "Northern NSW", description: "Crushed leaves bound over wounds and infections", uses: ["Wounds", "Infections", "Skin conditions"] },
      { practice: "Steam inhalation", community: "Traditional knowledge", region: "Queensland", description: "Leaves crushed in hot water for respiratory infections", uses: ["Colds", "Coughs", "Congestion"] },
    ],
  },
  "kakadu-plum": {
    id: "kakadu-plum", name: "Kakadu Plum", scientificName: "Terminalia ferdinandiana",
    family: "Combretaceae", emoji: "🍋", color: "#9ACD32",
    description: "The world's richest source of Vitamin C — 100x more than oranges, harvested by Aboriginal rangers.",
    nativeTo: ["Australia"], habitats: ["Northern savanna", "Monsoon forests"],
    medicinalUses: ["Immune support", "Skin health", "Antioxidant", "Anti-inflammatory"],
    traditionalUses: ["Cold remedy", "Skin infections", "Nutrition", "Bush tucker"],
    partsUsed: ["Fruit"], tags: ["vitamin-c", "superfood", "aboriginal", "bush-tucker"],
    indigenousKnowledge: [
      { practice: "Seasonal harvest", community: "Aboriginal rangers", region: "Kakadu", description: "Sustainable wild harvest during wet season — Traditional Ecological Knowledge guides timing", uses: ["Nutrition", "Trade", "Cultural practice"] },
      { practice: "Bush medicine", community: "Yolŋu", region: "Arnhem Land", description: "Inner bark decoction for skin conditions and stomach upset", uses: ["Skin infections", "Digestive issues"] },
    ],
  },
  "eucalyptus": {
    id: "eucalyptus", name: "Eucalyptus", scientificName: "Eucalyptus globulus",
    family: "Myrtaceae", emoji: "🌳", color: "#2F4F4F",
    description: "The fever tree — Aboriginal peoples used its leaves for everything from medicine to ceremony.",
    nativeTo: ["Australia"], habitats: ["Sclerophyll forests", "Woodlands"],
    medicinalUses: ["Decongestant", "Antimicrobial", "Anti-inflammatory", "Fever reducer"],
    traditionalUses: ["Fever treatment", "Coughs", "Wounds", "Pain relief"],
    partsUsed: ["Leaves", "Oil"], tags: ["decongestant", "fever", "aboriginal", "oil"],
    indigenousKnowledge: [
      { practice: "Smoking ceremony", community: "Various Aboriginal nations", region: "All Australia", description: "Burning leaves to cleanse spaces and people of bad spirits and sickness", uses: ["Spiritual cleansing", "Respiratory health", "Welcome"] },
      { practice: "Leaf infusion", community: "Dharawal", region: "Sydney region", description: "Young leaves steeped for fever-reducing tea", uses: ["Fever", "Colds", "Body aches"] },
    ],
  },
  "kangaroo-apple": {
    id: "kangaroo-apple", name: "Kangaroo Apple", scientificName: "Solanum aviculare",
    family: "Solanaceae", emoji: "🍅", color: "#FF6347",
    description: "A relative of the tomato — its fruit used cautiously by Aboriginal peoples for medicine.",
    nativeTo: ["Australia"], habitats: ["Open forests", "Coastal areas"],
    medicinalUses: ["Anti-inflammatory", "Hormonal support", "Skin conditions"],
    traditionalUses: ["Rheumatism", "Skin sores", "Hormonal disorders"],
    partsUsed: ["Fruit (ripe only)", "Leaves"], tags: ["solanaceae", "caution", "aboriginal", "fruit"],
    indigenousKnowledge: [
      { practice: "Controlled use", community: "Various groups", region: "Eastern Australia", description: "Knowledge of exact ripeness for safe use passed through generations", uses: ["Rheumatism", "Skin conditions"] },
    ],
  },
  "wattle": {
    id: "wattle", name: "Wattle", scientificName: "Acacia pycnantha",
    family: "Fabaceae", emoji: "🌼", color: "#FFD700",
    description: "Australia's national flower — its seeds made into flour and its gum used as medicine for millennia.",
    nativeTo: ["Australia"], habitats: ["Dry forests", "Woodlands", "Mallee"],
    medicinalUses: ["Soothing", "Antimicrobial", "Nutritive", "Skin healing"],
    traditionalUses: ["Cough syrup (gum)", "Seed bread", "Skin poultice"],
    partsUsed: ["Seeds", "Gum", "Bark"], tags: ["national-flower", "seeds", "gum", "aboriginal"],
    indigenousKnowledge: [
      { practice: "Wattleseed harvest", community: "Aboriginal groups", region: "Southern Australia", description: "Seeds collected, roasted, and ground into flour for damper bread", uses: ["Food", "Nutrition", "Cultural practice"] },
      { practice: "Gum medicine", community: "Traditional knowledge", region: "Victoria", description: "Acacia gum dissolved in water as soothing cough syrup", uses: ["Cough", "Sore throat", "Digestive irritation"] },
    ],
  },
  // ─── Morocco ──────────────────────────────────────────────────────────────
  "argan": {
    id: "argan", name: "Argan", scientificName: "Argania spinosa",
    family: "Sapotaceae", emoji: "🌰", color: "#DAA520",
    description: "The tree of life — goats climb its branches, and Berber women produce liquid gold from its nuts.",
    nativeTo: ["Morocco"], habitats: ["Souss Valley", "Anti-Atlas Mountains"],
    medicinalUses: ["Skin regeneration", "Heart health", "Anti-inflammatory", "Antioxidant"],
    traditionalUses: ["Amlou (nut butter)", "Cosmetic oil", "Hair treatment", "Digestive tonic"],
    partsUsed: ["Nuts (oil)"], tags: ["argan-oil", "berber", "cosmetic", "souss"],
    indigenousKnowledge: [
      { practice: "Traditional pressing", community: "Berber women's cooperatives", region: "Essaouira", description: "Hand-pressing nuts between stones — a UNESCO-recognized cultural practice", uses: ["Cooking oil", "Cosmetics", "Income"] },
      { practice: "Amlou preparation", community: "Berber families", region: "Anti-Atlas", description: "Argan oil blended with almonds and honey as a traditional spread", uses: ["Nutrition", "Energy", "Celebration"] },
    ],
  },
  "myrtle": {
    id: "myrtle", name: "Myrtle", scientificName: "Myrtus communis",
    family: "Myrtaceae", emoji: "🌿", color: "#2E8B57",
    description: "Sacred in Moroccan Sufi tradition — branches used to sprinkle rose water during ceremonies.",
    nativeTo: ["Morocco", "Mediterranean"], habitats: ["Maquis scrub", "Oasis gardens"],
    medicinalUses: ["Antiseptic", "Astringent", "Respiratory support", "Skin toner"],
    traditionalUses: ["Hamam ritual", "Sufi ceremonies", "Wedding blessings", "Skin care"],
    partsUsed: ["Leaves", "Flowers", "Berries"], tags: ["sufi", "hamam", "ceremony", "mediterranean"],
    indigenousKnowledge: [
      { practice: "Hamam ritual", community: "Moroccan women", region: "Fez", description: "Myrtle branches used to splash scented water in traditional bathhouses", uses: ["Cleansing", "Spiritual purification", "Skin health"] },
    ],
  },
  "artemisia": {
    id: "artemisia", name: "Artemisia", scientificName: "Artemisia herba-alba",
    family: "Asteraceae", emoji: "🌾", color: "#C0C0C0",
    description: "Shih — the silvery wormwood used by Berber healers for digestive and spiritual ailments.",
    nativeTo: ["Morocco", "Algeria"], habitats: ["Dry steppe", "Atlas Mountains"],
    medicinalUses: ["Antiparasitic", "Digestive stimulant", "Antimalarial", "Fever reducer"],
    traditionalUses: ["Tea for digestion", "Worm treatment", "Evil eye protection", "Fumigation"],
    partsUsed: ["Leaves", "Flowering tops"], tags: ["wormwood", "berber", "digestive", "steppe"],
    indigenousKnowledge: [
      { practice: "Smen infusion", community: "Berber healers", region: "High Atlas", description: "Bitter tea drunk after heavy meals for digestion and parasite control", uses: ["Digestion", "Parasites", "Appetite stimulation"] },
      { practice: "Fumigation ritual", community: "Rural communities", region: "Rif Mountains", description: "Dried herbs burned to cleanse homes of illness spirits", uses: ["Spiritual cleansing", "Air purification", "Insect repellent"] },
    ],
  },
  "nigella": {
    id: "nigella", name: "Nigella (Black Seed)", scientificName: "Nigella sativa",
    family: "Ranunculaceae", emoji: "🌑", color: "#2F2F2F",
    description: "Habbat al-barakah — the 'blessed seed' praised by the Prophet Muhammad for healing all but death.",
    nativeTo: ["Morocco", "Egypt", "Middle East"], habitats: ["Cultivated fields", "Wild Mediterranean"],
    medicinalUses: ["Immune support", "Respiratory health", "Digestive aid", "Anti-inflammatory"],
    traditionalUses: ["Asthma", "Digestive complaints", "Skin conditions", "General tonic"],
    partsUsed: ["Seeds", "Oil"], tags: ["blessed-seed", "islamic", "immune", "prophetic"],
    indigenousKnowledge: [
      { practice: "Black seed honey", community: "Traditional healers", region: "Fez", description: "Seeds ground and mixed with honey for respiratory conditions", uses: ["Asthma", "Cough", "Immunity"] },
      { practice: "Daily tonic", community: "Moroccan families", region: "All Morocco", description: "Small amount of seeds chewed daily with olive oil for general health", uses: ["Immunity", "Digestion", "Prevention"] },
    ],
  },
  "rose-morocco": {
    id: "rose-morocco", name: "Damask Rose", scientificName: "Rosa damascena",
    family: "Rosaceae", emoji: "🌹", color: "#FF1493",
    description: "The Valley of Roses — where Berber women harvest damask roses at dawn for precious rose oil.",
    nativeTo: ["Morocco"], habitats: ["Dades Valley", "Cultivated terraces"],
    medicinalUses: ["Mood support", "Skin regeneration", "Hormone balance", "Digestive aid"],
    traditionalUses: ["Rose water", "Perfume", "Culinary", "Wedding ceremonies"],
    partsUsed: ["Flowers", "Petals"], tags: ["rose-water", "perfume", "valley", "berber"],
    indigenousKnowledge: [
      { practice: "Dawn harvest", community: "Berber women", region: "Dades Valley", description: "Flowers hand-picked before sunrise when essential oils are most concentrated", uses: ["Rose oil", "Rose water", "Income"] },
      { practice: "Rose festival", community: "El Kelaa M'Gouna", region: "Dades Valley", description: "Annual festival celebrating rose harvest with music, dance, and rose water sprinkling", uses: ["Cultural identity", "Tourism", "Community"] },
    ],
  },
  // ─── Indonesia ────────────────────────────────────────────────────────────
  "jamu": {
    id: "jamu", name: "Jamu Turmeric", scientificName: "Curcuma xanthorrhiza",
    family: "Zingiberaceae", emoji: "🟡", color: "#FFD700",
    description: "The heart of Jamu — Indonesia's ancient herbal medicine system with royal court origins.",
    nativeTo: ["Indonesia"], habitats: ["Java", "Bali", "Cultivated gardens"],
    medicinalUses: ["Liver support", "Anti-inflammatory", "Digestive aid", "Blood purifier"],
    traditionalUses: ["Daily wellness drink", "Postpartum recovery", "Beauty tonic", "Detox"],
    partsUsed: ["Rhizome"], tags: ["jamu", "java", "daily-wellness", "royal"],
    indigenousKnowledge: [
      { practice: "Daily Jamu kunyit", community: "Javanese women", region: "Yogyakarta", description: "Fresh turmeric squeezed with tamarind and palm sugar — consumed every morning", uses: ["Skin health", "Immunity", "Postpartum recovery"] },
      { practice: "Palace herbal tradition", community: "Keraton healers", region: "Surakarta", description: "Elaborate recipes preserved from Javanese royal courts", uses: ["Beauty", "Longevity", "Royal health"] },
    ],
  },
  "galangal": {
    id: "galangal", name: "Galangal", scientificName: "Alpinia galanga",
    family: "Zingiberaceae", emoji: "🌿", color: "#F5F5DC",
    description: "Lengkuas — the aromatic rhizome that perfumes Indonesian kitchens and apothecaries.",
    nativeTo: ["Indonesia", "Malaysia"], habitats: ["Tropical forests", "Home gardens"],
    medicinalUses: ["Digestive aid", "Antimicrobial", "Anti-inflammatory", "Aphrodisiac"],
    traditionalUses: ["Cooking spice", "Jamu ingredient", "Ritual offerings", "Fish preservation"],
    partsUsed: ["Rhizome"], tags: ["aromatic", "cooking", "jamu", "indonesian"],
    indigenousKnowledge: [
      { practice: "Lengkuas wedang", community: "Javanese", region: "Central Java", description: "Spiced drink with galangal, ginger, and palm sugar for warmth and digestion", uses: ["Digestion", "Cold remedy", "Social drink"] },
    ],
  },
  "kencur": {
    id: "kencur", name: "Kencur", scientificName: "Kaempferia galanga",
    family: "Zingiberaceae", emoji: "🌱", color: "#DDA0DD",
    description: "Aromatic ginger — its camphor-like scent is unmistakable in Indonesian medicine and cuisine.",
    nativeTo: ["Indonesia", "Malaysia"], habitats: ["Shaded gardens", "Forest edges"],
    medicinalUses: ["Carminative", "Expectorant", "Anti-inflammatory", "Stomachic"],
    traditionalUses: ["Cough medicine", "Infant colic", "Mouth freshener", "Rheumatism"],
    partsUsed: ["Rhizome", "Leaves"], tags: ["aromatic", "camphor", "indonesian", "ginger"],
    indigenousKnowledge: [
      { practice: "Beras kencur", community: "Javanese", region: "East Java", description: "Rice, kencur, and palm sugar blended into a traditional morning tonic", uses: ["Energy", "Digestion", "Appetite"] },
    ],
  },
  "temulawak": {
    id: "temulawak", name: "Temulawak", scientificName: "Curcuma zanthorrhiza",
    family: "Zingiberaceae", emoji: "🟨", color: "#DAA520",
    description: "Java ginger — prized for liver protection and as a post-illness recovery tonic.",
    nativeTo: ["Indonesia"], habitats: ["Java", "Cultivated"],
    medicinalUses: ["Hepatoprotective", "Anti-inflammatory", "Choleretic", "Antioxidant"],
    traditionalUses: ["Liver tonic", "Post-illness recovery", "Appetite stimulant", "Jaundice"],
    partsUsed: ["Rhizome"], tags: ["liver", "java", "recovery", "hepatoprotective"],
    indigenousKnowledge: [
      { practice: "Jamu temulawak", community: "Jamu sellers (Mbok Jamu)", region: "Yogyakarta", description: "Daily house-to-house delivery of fresh herbal tonics by traditional sellers", uses: ["Liver health", "General wellness", "Post-illness"] },
    ],
  },
  "gotu-kola": {
    id: "gotu-kola", name: "Gotu Kola", scientificName: "Centella asiatica",
    family: "Apiaceae", emoji: "🍃", color: "#3CB371",
    description: "The 'herb of longevity' — Balinese drink it daily, and legends say elephants eat it for their long lives.",
    nativeTo: ["Indonesia", "India", "Sri Lanka"], habitats: ["Wet fields", "Rice paddies", "Shady moist areas"],
    medicinalUses: ["Cognitive enhancer", "Wound healing", "Circulation", "Anti-aging"],
    traditionalUses: ["Brain tonic", "Skin healing", "Varicose veins", "Memory"],
    partsUsed: ["Leaves"], tags: ["longevity", "brain", "wound-healing", "balinese"],
    indigenousKnowledge: [
      { practice: "Daily green juice", community: "Balinese", region: "Bali", description: "Fresh leaves blended with water and honey — consumed every morning", uses: ["Longevity", "Skin health", "Mental clarity"] },
      { practice: "Traditional salve", community: "Balian healers", region: "Ubud", description: "Leaves pounded with coconut oil for wound and scar treatment", uses: ["Wounds", "Scars", "Skin regeneration"] },
    ],
  },
  // ─── Japan ─────────────────────────────────────────────────────────────────
  "maitake": {
    id: "maitake", name: "Maitake", scientificName: "Grifola frondosa",
    family: "Meripilaceae", emoji: "🍄", color: "#8B7355",
    description: "The dancing mushroom — legend says Buddhist nuns danced with joy upon finding it.",
    nativeTo: ["Japan", "China"], habitats: ["Oak forests", "Base of trees"],
    medicinalUses: ["Immune modulation", "Blood sugar support", "Cancer adjunct", "Cholesterol"],
    traditionalUses: ["Longevity tonic", "Immune support", "General wellness"],
    partsUsed: ["Fruiting body"], tags: ["mushroom", "immune", "dancing", "longevity"],
    indigenousKnowledge: [
      { practice: "Wild foraging", community: "Mountain villagers", region: "Niigata", description: "Autumn foraging expeditions to find maitake at oak tree bases", uses: ["Medicine", "Cuisine", "Income"] },
      { practice: "Simmered maitake", community: "Traditional cooks", region: "Kyoto", description: "Slow-simmered in dashi as a medicinal side dish", uses: ["Immunity", "Diabetes support", "Cuisine"] },
    ],
  },
  "shiso": {
    id: "shiso", name: "Shiso", scientificName: "Perilla frutescens",
    family: "Lamiaceae", emoji: "🌿", color: "#800080",
    description: "The purple guardian — its leaves are used in everything from sushi to medicine to pickling plums.",
    nativeTo: ["Japan", "China", "Korea"], habitats: ["Cultivated gardens", "Disturbed areas"],
    medicinalUses: ["Anti-allergic", "Digestive aid", "Respiratory support", "Antimicrobial"],
    traditionalUses: ["Umeboshi wrapping", "Sushi garnish", "Cough remedy", "Pickling"],
    partsUsed: ["Leaves", "Seeds"], tags: ["sushi", "umeboshi", "allergy", "japanese"],
    indigenousKnowledge: [
      { practice: "Umeboshi preparation", community: "Traditional households", region: "Wakayama", description: "Red shiso leaves layered with salted plums for preservation and color", uses: ["Food preservation", "Digestion", "Anti-bacterial"] },
    ],
  },
  "yuzu": {
    id: "yuzu", name: "Yuzu", scientificName: "Citrus junos",
    family: "Rutaceae", emoji: "🍋", color: "#FFD700",
    description: "A fragrant citrus used in winter solstice baths — whole fruits floated in hot water for spiritual cleansing.",
    nativeTo: ["Japan", "Korea"], habitats: ["Mountain valleys", "Cultivated orchards"],
    medicinalUses: ["Mood lifting", "Circulation", "Antioxidant", "Respiratory support"],
    traditionalUses: ["Yuzu bath (yuzuyu)", "Ponzu sauce", "Marmalade", "Cold remedy"],
    partsUsed: ["Fruit peel", "Juice", "Seeds"], tags: ["citrus", "winter-solstice", "bath", "fragrance"],
    indigenousKnowledge: [
      { practice: "Yuzuyu bath", community: "Japanese families", region: "All Japan", description: "Whole yuzu fruits in hot bath on winter solstice for health and spiritual protection", uses: ["Circulation", "Skin health", "Winter ritual", "Spiritual protection"] },
      { practice: "Yuzu kosho", community: "Kyushu cooks", region: "Kyushu", description: "Fermented paste of yuzu peel, chili, and salt — a traditional condiment", uses: ["Digestion", "Flavor", "Preservation"] },
    ],
  },
  "matcha": {
    id: "matcha", name: "Matcha", scientificName: "Camellia sinensis",
    family: "Theaceae", emoji: "🍵", color: "#228B22",
    description: "Stone-ground green tea — the heart of Japanese tea ceremony, cultivated in shade for 20 days before harvest.",
    nativeTo: ["Japan", "China"], habitats: ["Shaded tea gardens", "Uji region"],
    medicinalUses: ["Antioxidant", "Focus enhancement", "Metabolism support", "Calm alertness"],
    traditionalUses: ["Tea ceremony (chanoyu)", "Zen meditation", "Cooking", "Daily drink"],
    partsUsed: ["Powdered leaves"], tags: ["tea", "ceremony", "zen", "antioxidant"],
    indigenousKnowledge: [
      { practice: "Tea ceremony", community: "Tea masters", region: "Uji/Kyoto", description: "Ritualized preparation and serving — each movement carries spiritual significance", uses: ["Meditation", "Hospitality", "Aesthetic practice", "Mindfulness"] },
      { practice: "Shade cultivation", community: "Tea farmers", region: "Uji", description: "Plants shaded for 20-30 days before harvest to increase L-theanine and chlorophyll", uses: ["Quality", "Flavor", "Ceremonial grade"] },
    ],
  },
  "hachimijiogan": {
    id: "hachimijiogan", name: "Rehmannia", scientificName: "Rehmannia glutinosa",
    family: "Orobanchaceae", emoji: "🌿", color: "#8B4513",
    description: "A key herb in Kampo medicine — the 'eight-ingredient pill' is one of Japan's most prescribed formulas.",
    nativeTo: ["Japan", "China"], habitats: ["Cultivated", "Mountain valleys"],
    medicinalUses: ["Kidney tonic", "Blood nourisher", "Fever reduction", "Anti-inflammatory"],
    traditionalUses: ["Hachimijiogan formula", "Diabetes support", "Kidney deficiency", "Fatigue"],
    partsUsed: ["Root"], tags: ["kampo", "kidney", "formula", "japanese-medicine"],
    indigenousKnowledge: [
      { practice: "Kampo preparation", community: "Kampo practitioners", region: "Tokyo", description: "Standardized herbal extracts prepared following classical formulas", uses: ["Chronic conditions", "Integrative medicine", "Prevention"] },
    ],
  },
  // ─── South Africa ─────────────────────────────────────────────────────────
  "rooibos": {
    id: "rooibos", name: "Rooibos", scientificName: "Aspalathus linearis",
    family: "Fabaceae", emoji: "🍂", color: "#CD853F",
    description: "The red bush tea — a uniquely South African caffeine-free treasure discovered by the Khoisan.",
    nativeTo: ["South Africa"], habitats: ["Cederberg Mountains", "Fynbos"],
    medicinalUses: ["Antioxidant", "Anti-inflammatory", "Digestive aid", "Allergy relief"],
    traditionalUses: ["Daily tea", "Digestive complaints", "Colic", "Skin conditions"],
    partsUsed: ["Needle-like leaves"], tags: ["caffeine-free", "tea", "khoisan", "fynbos"],
    indigenousKnowledge: [
      { practice: "Bush tea tradition", community: "Khoisan", region: "Cederberg", description: "Needles harvested, bruised, and oxidized in the sun to develop red color", uses: ["Daily drink", "Digestion", "Thirst quencher"] },
      { practice: "Medicinal preparation", community: "Traditional healers", region: "Western Cape", description: "Strong decoction used for digestive upset and skin conditions", uses: ["Stomach ailments", "Eczema", "Allergies"] },
    ],
  },
  "buchu": {
    id: "buchu", name: "Buchu", scientificName: "Agathosma betulina",
    family: "Rutaceae", emoji: "🌿", color: "#2E8B57",
    description: "The Khoisan's secret — leaves with a minty-blackcurrant scent used for urinary and digestive health.",
    nativeTo: ["South Africa"], habitats: ["Cape fynbos", "Mountain slopes"],
    medicinalUses: ["Diuretic", "Urinary antiseptic", "Digestive aid", "Anti-inflammatory"],
    traditionalUses: ["Urinary infections", "Stomach complaints", "Rheumatism", "Wounds"],
    partsUsed: ["Leaves"], tags: ["diuretic", "khoisan", "fynbos", "urinary"],
    indigenousKnowledge: [
      { practice: "Leaf infusion", community: "Khoisan", region: "Western Cape", description: "Leaves steeped in hot water and drunk for urinary complaints", uses: ["UTIs", "Bladder health", "Digestion"] },
      { practice: "Aromatic body rub", community: "Traditional use", region: "Cape", description: "Crushed leaves rubbed on body for rheumatism and as insect repellent", uses: ["Pain relief", "Insect repellent", "Fragrance"] },
    ],
  },
  "hoodia": {
    id: "hoodia", name: "Hoodia", scientificName: "Hoodia gordonii",
    family: "Apocynaceae", emoji: "🌵", color: "#8B7355",
    description: "The hunger buster — San Bushmen have used this spiny succulent to suppress appetite on long hunts.",
    nativeTo: ["South Africa", "Namibia"], habitats: ["Kalahari desert", "Arid rocky areas"],
    medicinalUses: ["Appetite suppressant", "Thirst quencher", "Stomach ailments", "Diabetes"],
    traditionalUses: ["Hunting sustenance", "Thirst suppression", "Stomach pain", "Diabetes"],
    partsUsed: ["Stem"], tags: ["appetite", "san", "kalahari", "hunting"],
    indigenousKnowledge: [
      { practice: "Hunting preparation", community: "San Bushmen", region: "Kalahari", description: "Stem skin chewed before long hunts to suppress hunger and thirst", uses: ["Hunting endurance", "Appetite control", "Survival"] },
    ],
  },
  "pelargonium": {
    id: "pelargonium", name: "Pelargonium sidoides", scientificName: "Pelargonium sidoides",
    family: "Geraniaceae", emoji: "🌸", color: "#DDA0DD",
    description: "Umckaloabo — a South African geranium root that has become a global cold and flu remedy.",
    nativeTo: ["South Africa"], habitats: ["Grasslands", "Rocky outcrops"],
    medicinalUses: ["Respiratory infections", "Antibacterial", "Immune support", "Sinusitis"],
    traditionalUses: ["Tuberculosis", "Diarrhea", "Respiratory infections", "Wounds"],
    partsUsed: ["Root"], tags: ["respiratory", "umckaloabo", "geranium", "cold"],
    indigenousKnowledge: [
      { practice: "Root decoction", community: "Zulu healers", region: "KwaZulu-Natal", description: "Root boiled and drunk for respiratory infections and tuberculosis", uses: ["TB", "Coughs", "Respiratory health"] },
    ],
  },
  "devils-claw": {
    id: "devils-claw", name: "Devil's Claw", scientificName: "Harpagophytum procumbens",
    family: "Pedaliaceae", emoji: "🪝", color: "#8B6914",
    description: "Named for its vicious claw-like fruit — its tubers are a powerful anti-inflammatory used by the San.",
    nativeTo: ["South Africa", "Namibia"], habitats: ["Kalahari", "Arid grasslands"],
    medicinalUses: ["Anti-inflammatory", "Arthritis relief", "Digestive aid", "Pain relief"],
    traditionalUses: ["Arthritis", "Rheumatism", "Stomach pain", "Fever", "Skin conditions"],
    partsUsed: ["Tubers"], tags: ["anti-inflammatory", "arthritis", "san", "kalahari"],
    indigenousKnowledge: [
      { practice: "Tuber decoction", community: "San and Bantu peoples", region: "Kalahari", description: "Bitter tubers boiled for arthritis and digestive complaints", uses: ["Joint pain", "Stomach ailments", "Fever reduction"] },
      { practice: "Harvest ritual", community: "San", region: "Namibia", description: "Traditional knowledge of sustainable tuber harvesting to ensure plant survival", uses: ["Sustainability", "Medicine", "Cultural practice"] },
    ],
  },
  // ─── Jamaica ──────────────────────────────────────────────────────────────
  "soursop": {
    id: "soursop", name: "Soursop", scientificName: "Annona muricata",
    family: "Annonaceae", emoji: "🍈", color: "#32CD32",
    description: "The prickly green fruit with creamy white flesh — leaves brewed for calming tea.",
    nativeTo: ["Jamaica", "Caribbean", "Central America"], habitats: ["Tropical lowlands", "Home gardens"],
    medicinalUses: ["Sedative", "Antispasmodic", "Antimicrobial", "Potential anticancer"],
    traditionalUses: ["Insomnia tea", "Nervous conditions", "Parasites", "Hypertension"],
    partsUsed: ["Leaves", "Fruit", "Bark", "Seeds"], tags: ["sedative", "caribbean", "fruit", "tea"],
    indigenousKnowledge: [
      { practice: "Leaf tea", community: "Maroon healers", region: "Blue Mountains", description: "Leaves dried and steeped for insomnia and nervous tension", uses: ["Sleep", "Anxiety", "Hypertension"] },
      { practice: "Fruit harvesting", community: "Rural communities", region: "All Jamaica", description: "Fruit picked when slightly soft — eaten fresh or blended into juice", uses: ["Nutrition", "Cooling drink", "Income"] },
    ],
  },
  "cerasee": {
    id: "cerasee", name: "Cerasee", scientificName: "Momordica charantia",
    family: "Cucurbitaceae", emoji: "🌿", color: "#556B2F",
    description: "Bitter melon — the weekly blood cleanser drunk by Jamaicans every Saturday morning.",
    nativeTo: ["Jamaica", "Caribbean", "Africa", "Asia"], habitats: ["Fencerows", "Wastelands", "Gardens"],
    medicinalUses: ["Blood sugar control", "Blood cleanser", "Antiparasitic", "Digestive stimulant"],
    traditionalUses: ["Weekly cleanse", "Diabetes", "Worms", "Skin conditions"],
    partsUsed: ["Vine", "Leaves", "Fruit"], tags: ["bitter", "blood-cleanser", "diabetes", "weekly"],
    indigenousKnowledge: [
      { practice: "Saturday morning tea", community: "Jamaican households", region: "All Jamaica", description: "Weekly tradition of drinking bitter cerasee tea for blood purification", uses: ["Blood cleansing", "General health", "Prevention"] },
      { practice: "Bush bath", community: "Traditional healers", region: "St. Thomas", description: "Vines boiled for bathing to treat skin rashes and parasites", uses: ["Skin conditions", "Parasites", "Cooling"] },
    ],
  },
  "guinea-hen": {
    id: "guinea-hen", name: "Guinea Hen Weed", scientificName: "Petiveria alliacea",
    family: "Phytolaccaceae", emoji: "🌿", color: "#2F4F4F",
    description: "Strong-back — a pungent herb believed to strengthen the back and treat numerous ailments.",
    nativeTo: ["Jamaica", "Caribbean", "Central America"], habitats: ["Roadsides", "Disturbed areas", "Gardens"],
    medicinalUses: ["Pain relief", "Anti-inflammatory", "Antimicrobial", "Immune support"],
    traditionalUses: ["Back pain", "Arthritis", "Colds", "Cancer folk remedy"],
    partsUsed: ["Whole plant", "Roots"], tags: ["strong-back", "pain", "pungent", "jamaican"],
    indigenousKnowledge: [
      { practice: "Root tonic", community: "Rastafarian healers", region: "St. Ann", description: "Roots boiled into strong bitter tea for back pain and general strength", uses: ["Back pain", "Vitality", "Immunity"] },
    ],
  },
  "strong-back": {
    id: "strong-back", name: "Strong Back", scientificName: "Desmodium incanum",
    family: "Fabaceae", emoji: "🌿", color: "#6B8E23",
    description: "The namesake herb — Jamaican men swear by this for back pain and male vitality.",
    nativeTo: ["Jamaica", "Caribbean"], habitats: ["Open fields", "Roadsides"],
    medicinalUses: ["Back pain relief", "Anti-inflammatory", "Diuretic", "Male tonic"],
    traditionalUses: ["Back pain", "Rheumatism", "Urinary complaints", "Vitality"],
    partsUsed: ["Whole plant", "Roots"], tags: ["back-pain", "male-tonic", "jamaican", "rheumatism"],
    indigenousKnowledge: [
      { practice: "Root wine", community: "Traditional use", region: "All Jamaica", description: "Roots soaked in rum for several weeks as a tonic", uses: ["Back pain", "Vitality", "Rheumatism"] },
    ],
  },
  "leaf-of-life": {
    id: "leaf-of-life", name: "Leaf of Life", scientificName: "Kalanchoe pinnata",
    family: "Crassulaceae", emoji: "🌿", color: "#228B22",
    description: "Miracle leaf — its leaves grow baby plants on their edges, and it heals cuts and coughs.",
    nativeTo: ["Jamaica", "Caribbean", "Madagascar"], habitats: ["Rocky areas", "Gardens", "Walls"],
    medicinalUses: ["Wound healing", "Anti-inflammatory", "Antimicrobial", "Cough suppressant"],
    traditionalUses: ["Cuts and bruises", "Coughs", "Asthma", "Ear infections", "Kidney stones"],
    partsUsed: ["Leaves"], tags: ["wound-healing", "cough", "succulent", "miracle"],
    indigenousKnowledge: [
      { practice: "Leaf poultice", community: "Rural communities", region: "All Jamaica", description: "Fresh leaf heated and bound over wounds, cuts, and boils", uses: ["Wounds", "Infections", "Inflammation"] },
      { practice: "Leaf juice", community: "Traditional healers", region: "Portland", description: "Juice squeezed from heated leaf for ear drops and cough syrup", uses: ["Ear infections", "Coughs", "Asthma"] },
    ],
  },
};

// ─── Helpers ────────────────────────────────────────────────────────────────
export function getPlantById(id: string): Plant | undefined {
  return plants[id];
}

export function getPlantsByCountry(code: string): Plant[] {
  const country = countries.find(c => c.code === code);
  if (!country) return [];
  return country.plantIds.map(id => plants[id]).filter(Boolean);
}

export function getCountryByCode(code: string): Country | undefined {
  return countries.find(c => c.code === code);
}

export function getAllPlants(): Plant[] {
  return Object.values(plants);
}

export function searchPlants(query: string): Plant[] {
  const q = query.toLowerCase();
  return getAllPlants().filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.scientificName.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q)) ||
    p.nativeTo.some(r => r.toLowerCase().includes(q)) ||
    p.medicinalUses.some(u => u.toLowerCase().includes(q))
  );
}

export interface KnowledgeGraphData {
  nodes: Array<{
    id: string;
    label: string;
    type: string;
    emoji: string;
  }>;
  links: Array<{
    source: string;
    target: string;
    label: string;
  }>;
}

export function getKnowledgeGraphData(plantId: string): KnowledgeGraphData | null {
  const plant = plants[plantId];
  if (!plant) return null;

  const nodes = [
    { id: plant.id, label: plant.name, type: "plant", emoji: plant.emoji },
    ...plant.indigenousKnowledge.map((k, i) => ({
      id: `ik-${i}`, label: k.practice, type: "practice", emoji: "🧿" as string,
    })),
    ...plant.medicinalUses.map((u, i) => ({
      id: `med-${i}`, label: u, type: "medicine", emoji: "💊" as string,
    })),
    ...plant.traditionalUses.map((u, i) => ({
      id: `trad-${i}`, label: u, type: "tradition", emoji: "📜" as string,
    })),
    ...[...new Set(plant.indigenousKnowledge.flatMap(k => k.uses))].map((u, i) => ({
      id: `use-${i}`, label: u, type: "use", emoji: "✨" as string,
    })),
    ...plant.indigenousKnowledge.map((k, i) => ({
      id: `comm-${i}`, label: k.community, type: "community", emoji: "🏘️" as string,
    })),
    ...[...new Set(plant.indigenousKnowledge.map(k => k.region))].map((r, i) => ({
      id: `reg-${i}`, label: r, type: "region", emoji: "🗺️" as string,
    })),
  ];

  const links: { source: string; target: string; label: string }[] = [];
  
  plant.indigenousKnowledge.forEach((k, i) => {
    links.push({ source: plant.id, target: `ik-${i}`, label: "practice" });
    links.push({ source: `ik-${i}`, target: `comm-${i}`, label: "by" });
    links.push({ source: `ik-${i}`, target: `reg-${i}`, label: "in" });
    k.uses.forEach(u => {
      const useIdx = [...new Set(plant.indigenousKnowledge.flatMap(kk => kk.uses))].indexOf(u);
      links.push({ source: `ik-${i}`, target: `use-${useIdx}`, label: "for" });
    });
  });

  plant.medicinalUses.forEach((_, i) => {
    links.push({ source: plant.id, target: `med-${i}`, label: "treats" });
  });

  plant.traditionalUses.forEach((_, i) => {
    links.push({ source: plant.id, target: `trad-${i}`, label: "used as" });
  });

  // Add country links
  plant.nativeTo.forEach((countryName, i) => {
    const country = countries.find(c => c.name === countryName || c.code === countryName);
    if (country) {
      nodes.push({ id: `cntry-${i}`, label: country.name, type: "country", emoji: country.emoji });
      links.push({ source: plant.id, target: `cntry-${i}`, label: "native to" });
    }
  });

  return { nodes: [...new Map(nodes.map(n => [n.id, n])).values()], links };
}

export function getStats() {
  const allPlants = getAllPlants();
  const allKnowledge = allPlants.flatMap(p => p.indigenousKnowledge);
  const allCommunities = [...new Set(allKnowledge.map(k => k.community))];
  const allRegions = [...new Set(allKnowledge.map(k => k.region))];
  const allPractices = [...new Set(allKnowledge.map(k => k.practice))];
  
  return {
    totalPlants: allPlants.length,
    totalCountries: countries.length,
    totalCommunities: allCommunities.length,
    totalRegions: allRegions.length,
    totalPractices: allPractices.length,
    totalKnowledgeEntries: allKnowledge.length,
    regions: allRegions,
    communities: allCommunities,
  };
}
