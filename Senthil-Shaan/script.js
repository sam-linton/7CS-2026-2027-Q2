let currentRow = 0;
let currentBox = 0;
let adCount = 0;
let ad = document.getElementById('ad');
let closeAdButton = document.getElementById('closeAdButton');
let fakeButton = document.getElementById('fakeButton');
let qLetter = document.getElementById('qLetter');
let wLetter = document.getElementById('wLetter');
let eLetter = document.getElementById('eLetter');
let rLetter = document.getElementById('rLetter');
let tLetter = document.getElementById('tLetter');
let yLetter = document.getElementById('yLetter');
let uLetter = document.getElementById('uLetter');
let iLetter = document.getElementById('iLetter');
let oLetter = document.getElementById('oLetter');
let pLetter = document.getElementById('pLetter');
let aLetter = document.getElementById('aLetter');
let sLetter = document.getElementById('sLetter');
let dLetter = document.getElementById('dLetter');
let fLetter = document.getElementById('fLetter');
let gLetter = document.getElementById('gLetter');
let hLetter = document.getElementById('hLetter');
let jLetter = document.getElementById('jLetter');
let kLetter = document.getElementById('kLetter');
let lLetter = document.getElementById('lLetter');
let zLetter = document.getElementById('zLetter');
let xLetter = document.getElementById('xLetter');
let cLetter = document.getElementById('cLetter');
let vLetter = document.getElementById('vLetter');
let bLetter = document.getElementById('bLetter');
let nLetter = document.getElementById('nLetter');
let mLetter = document.getElementById('mLetter');
let enterButton = document.getElementById('enterButton');
let backspaceButton = document.getElementById('backspaceButton');
let playAgainButton = document.getElementById('playAgain');
let message = document.getElementById('message');
let rows = document.querySelectorAll('.row');
let wordBank = [
    "about", "above", "abuse", "acted", "actor", "acute", "added", "admit", "adopt", "adult",
    "after", "again", "agent", "agree", "ahead", "aided", "aimed", "aired", "alarm", "album",
    "alert", "alike", "alive", "allow", "alone", "along", "aloud", "alter", "among", "anger",
    "angle", "angry", "apart", "apple", "apply", "areas", "arena", "argue", "arise", "armed",
    "array", "aside", "asked", "asset", "audio", "audit", "avoid", "award", "aware", "awoke",
    "badly", "baked", "baker", "bakes", "bales", "balls", "bands", "bangs", "banks", "barbs",
    "bards", "barks", "based", "bases", "basic", "basis", "baths", "beach", "beams", "bears",
    "beats", "began", "begin", "begun", "being", "below", "belts", "bench", "bends", "biked",
    "bikes", "bills", "birds", "birth", "bites", "black", "blame", "bless", "blind", "block",
    "blogs", "blood", "blown", "blows", "blurs", "board", "boats", "bolts", "bonds", "bones",
    "books", "boots", "bored", "bowls", "boxed", "brain", "brand", "bread", "break", "brick",
    "brief", "bring", "broad", "broke", "brown", "brush", "build", "built", "burns", "burst",
    "buses", "buyer", "cable", "cafes", "caged", "caked", "cakes", "calls", "calms", "camps",
    "canal", "candy", "canes", "capes", "cards", "cared", "cares", "cases", "cause", "caved",
    "caves", "cells", "cents", "chain", "chair", "chart", "chase", "cheap", "check", "chefs",
    "chest", "chews", "chief", "child", "china", "chips", "chose", "cited", "civil", "claim",
    "clams", "claps", "class", "claws", "clays", "clean", "clear", "click", "climb", "clips",
    "clock", "clogs", "close", "clubs", "clues", "coach", "coals", "coast", "coats", "coded",
    "codes", "coils", "coins", "colds", "combs", "cones", "cooks", "cools", "copes", "cords",
    "cored", "cores", "corks", "corns", "costs", "could", "count", "court", "cover", "crabs",
    "craft", "crams", "crash", "cream", "crept", "crews", "cribs", "cried", "crime", "crops",
    "cross", "crowd", "crown", "cubes", "cuffs", "cured", "cures", "curls", "curve", "cycle",
    "daily", "dance", "dared", "dated", "dates", "dazed", "deals", "dealt", "death", "debts",
    "debut", "delay", "depth", "desks", "diets", "dined", "disks", "dived", "doing", "doors",
    "doubt", "dozed", "dozen", "draft", "drama", "drawn", "dream", "dress", "dried", "drive",
    "drops", "drove", "drugs", "drunk", "duped", "dusts", "dwelt", "early", "earns", "earth",
    "eased", "eaten", "edged", "edges", "eight", "elite", "empty", "ended", "enemy", "enjoy",
    "enter", "entry", "equal", "error", "event", "every", "exact", "exist", "exits", "extra",
    "faced", "facts", "faded", "fails", "fairs", "faith", "faked", "fakes", "falls", "false",
    "fared", "farms", "fasts", "fates", "fault", "faxed", "fears", "feats", "feeds", "feels",
    "fells", "felts", "fends", "ferns", "feuds", "fiber", "fiefs", "field", "fifes", "fifth",
    "fifty", "fight", "filed", "files", "fills", "films", "final", "finds", "fined", "fines",
    "fired", "fires", "firms", "first", "fists", "fixed", "fixes", "flags", "flair", "flaks",
    "flame", "flank", "flaps", "flare", "flash", "flask", "flats", "flaws", "fleas", "fleet",
    "flesh", "flies", "flint", "flips", "flirt", "floor", "flops", "floss", "flows", "flues",
    "fluid", "flyer", "foals", "foams", "foamy", "focal", "focus", "foggy", "foils", "folds",
    "folks", "fonts", "foods", "fools", "foots", "force", "fords", "forge", "forgo", "forks",
    "forms", "forth", "forts", "forty", "forum", "fouls", "found", "fount", "fours", "fowls",
    "foxes", "foyer", "frags", "frail", "frame", "frank", "fraud", "frays", "freak", "freed",
    "freer", "frees", "fresh", "frets", "friar", "fried", "fries", "frill", "frisk", "frock",
    "frogs", "frond", "front", "frost", "froth", "frown", "froze", "fruit", "frump", "fryer",
    "fuels", "fully", "fumed", "funds", "funny", "gains", "games", "gases", "gates", "gazed",
    "ghost", "giant", "gifts", "girls", "given", "gives", "glass", "globe", "glove", "glued",
    "goals", "going", "goods", "grace", "grade", "grand", "grant", "grass", "great", "green",
    "gross", "group", "grown", "guard", "guess", "guest", "guide", "halls", "hands", "happy",
    "harks", "hated", "hawks", "hazed", "heads", "heard", "heart", "heavy", "heels", "drink",
    "hello", "helps", "hence", "hills", "hints", "hired", "holds", "holes", "homes", "hooks",
    "hoped", "hopes", "horse", "hotel", "hours", "house", "human", "hunts", "ideal", "ideas",
    "idled", "image", "index", "inner", "input", "issue", "items", "joint", "joked", "judge",
    "juice", "jumps", "keeps", "kinds", "kings", "knees", "knelt", "known", "label", "laced",
    "lands", "lanes", "large", "laser", "later", "laugh", "layer", "leads", "learn", "lease",
    "least", "leave", "legal", "level", "light", "liked", "limit", "lined", "lines", "lists",
    "lived", "lives", "loads", "local", "locks", "logic", "looks", "loops", "loose", "loved",
    "loves", "lower", "lucky", "lunch", "lured", "magic", "major", "maker", "makes", "march",
    "marks", "masks", "match", "mated", "maybe", "mayor", "meals", "means", "meant", "meats",
    "media", "meets", "melts", "mends", "metal", "might", "miles", "mills", "minds", "mined",
    "minor", "minus", "mixed", "mixes", "model", "modes", "money", "month", "moons", "moral",
    "motor", "mount", "mouse", "mouth", "moved", "moves", "movie", "mused", "music", "muted",
    "naked", "named", "names", "necks", "needs", "nests", "never", "newly", "night", "nodes",
    "noise", "north", "noted", "notes", "nouns", "novel", "nurse", "occur", "ocean", "offer",
    "often", "oiled", "oozed", "opted", "order", "other", "ought", "owned", "paced", "packs",
    "pages", "paint", "pairs", "paled", "panel", "paper", "parts", "party", "paths", "paved",
    "peace", "peaks", "phase", "phone", "photo", "piece", "piled", "piles", "pilot", "pined",
    "piped", "pipes", "pitch", "place", "plain", "plane", "plans", "plant", "plate", "plays",
    "plots", "plugs", "poems", "poets", "point", "pokes", "poles", "polls", "pools", "pores",
    "porks", "ports", "posed", "poses", "posts", "pound", "power", "press", "price", "pride",
    "pried", "prime", "print", "prior", "prize", "proof", "proud", "prove", "pulls", "pumps",
    "queen", "quick", "quiet", "quite", "raced", "races", "radio", "raged", "rains", "raise",
    "raked", "range", "rapid", "rated", "rates", "ratio", "razed", "reach", "reads", "ready",
    "refer", "rents", "rests", "rices", "right", "riled", "rings", "risks", "rival", "river",
    "roads", "robed", "robot", "rocks", "roles", "rolls", "roofs", "rooms", "roots", "roped",
    "ropes", "rough", "round", "route", "royal", "ruled", "rules", "rural", "sails", "sales",
    "saved", "saves", "sawed", "scale", "scene", "scope", "score", "seals", "seats", "seeds",
    "sells", "sends", "sense", "serve", "seven", "shall", "shape", "share", "sharp", "sheet",
    "shelf", "shell", "shied", "shift", "ships", "shirt", "shock", "shoes", "shoot", "shops",
    "short", "shots", "shout", "shows", "sided", "sides", "sight", "signs", "since", "sites",
    "sized", "sizes", "skill", "skins", "sleep", "slide", "slots", "small", "smart", "smile",
    "smoke", "snake", "snows", "solid", "solve", "songs", "sorry", "sorts", "souls", "sound",
    "south", "sowed", "space", "spare", "speak", "speed", "spend", "spied", "spite", "split",
    "sport", "spots", "spray", "staff", "stage", "stair", "stake", "stand", "stars", "start",
    "state", "stays", "steam", "steel", "steps", "stick", "still", "stock", "stone", "stops",
    "store", "storm", "story", "strip", "stuck", "study", "stuff", "style", "sugar", "suite",
    "suits", "super", "sweet", "table", "taken", "tamed", "tanks", "taped", "tapes", "tasks",
    "taste", "taxed", "taxes", "teach", "teams", "tears", "teeth", "tenth", "tents", "terms",
    "tests", "texts", "thank", "their", "theme", "there", "these", "thick", "thing", "think",
    "third", "those", "three", "throw", "tight", "tiles", "timed", "times", "tired", "title",
    "today", "toned", "tones", "tools", "topic", "total", "touch", "tough", "towed", "tower",
    "towns", "toyed", "track", "trade", "train", "treat", "trees", "trend", "trial", "tried",
    "tries", "truck", "truly", "trust", "truth", "tubes", "tuned", "tunes", "turns", "twice",
    "typed", "types", "uncle", "under", "union", "unity", "until", "upper", "upset", "urban",
    "urged", "urges", "usage", "users", "using", "usual", "vague", "valid", "value", "valve",
    "vases", "veils", "verbs", "video", "views", "vines", "viola", "virus", "visit", "vital",
    "voice", "voted", "votes", "vowed", "waded", "wages", "wagon", "waist", "waked", "wakes",
    "walks", "walls", "wants", "wards", "warns", "waste", "watch", "water", "waved", "waves",
    "waxed", "waxes", "wears", "weary", "weeks", "weigh", "wells", "whale", "wheat", "wheel",
    "where", "which", "while", "white", "whole", "whose", "widen", "wider", "widow", "width",
    "winds", "windy", "wines", "wings", "wiped", "wipes", "wired", "wires", "wiser", "witch",
    "witty", "wives", "woken", "woman", "women", "woods", "woody", "words", "wordy", "works",
    "world", "worry", "worse", "worst", "worth", "would", "wound", "woven", "wreck", "wrist",
    "write", "wrong", "wrote", "wrung", "yards", "years", "yeast", "yield", "young", "yours",
    "youth", "zebra", "zones", "abide", "abode", "abort", "abuzz", "abyss", "aches", "acids",
    "acing", "acorn", "acres", "banty", "barba", "barbe", "banes", "banjo", "banns", "bandy",
    "adage", "adapt", "addle", "adept", "adieu", "adman", "admen", "adore", "adorn", "adown",
    "adust", "aegis", "aerie", "affix", "afire", "afoot", "afoul", "afros", "agape", "agars",
    "agate", "agave", "agile", "aging", "aglow", "agone", "agony", "agora", "agues", "ahold",
    "aides", "ailed", "aioli", "airer", "alack", "albas", "alums", "amber", "amble", "amend",
    "amice", "amigo", "amino", "amiss", "amity", "amoks", "amole", "amort", "amour", "ample",
    "amply", "amuck", "amuse", "angel", "ankle", "annex", "annoy", "annul", "anode", "antic",
    "anvil", "aorta", "apace", "aphid", "apish", "apnea", "appal", "apron", "apses", "apter",
    "aptly", "aquas", "arbor", "arced", "ardor", "areal", "argon", "argot", "argus", "arity",
    "aroma", "arose", "arras", "arrow", "arson", "artic", "artis", "artsy", "arums", "arval",
    "ashen", "ashes", "askew", "aspen", "aspic", "assai", "assay", "aster", "astir", "asway",
    "asyle", "atilt", "atoll", "atoms", "atone", "atria", "atrip", "attar", "attic", "auger",
    "aught", "augur", "aunts", "aurae", "aural", "auras", "auric", "autos", "auxin", "avail",
    "avast", "avens", "avers", "avert", "avian", "aviso", "avows", "await", "awake", "awash",
    "awful", "awing", "awned", "axial", "axils", "axing", "axiom", "axion", "axles", "axman",
    "axmen", "axons", "azure", "spoil", "spire", "idles", "idyll", "expel", "dupes", "diary",
    "babel", "babes", "babka", "baboo", "babus", "bacca", "backy", "bacon", "baddy", "camps",
    "badge", "baffy", "bagel", "baggy", "bairn", "baits", "baize", "baken", "baldy", "baled",
    "baler", "balks", "balky", "bally", "balms", "balmy", "balsa", "banal", "banco", "bancs",
    "banda", "bande", "bando", "cabin", "cache", "cacti", "cadet", "cadre", "cagey", "camel",
    "candy", "canoe", "canon", "cargo", "carol", "carry", "carve", "caste", "casts", "catch",
    "cater", "catty", "caulk", "cause", "caved", "caves", "cavil", "cease", "cedar", "ceded",
    "cedes", "cello", "cells", "cents", "chafe", "chaff", "chain", "chair", "chalk", "champ",
    "chant", "chaos", "chaps", "chard", "charm", "chars", "chart", "chase", "chasm", "chats",
    "cheap", "cheat", "check", "cheek", "cheep", "cheer", "chefs", "chemo", "chert", "chess",
    "chest", "chews", "chewy", "chick", "chide", "chief", "child", "chile", "chili", "chill",
    "chime", "chimp", "china", "chink", "chino", "chins", "chips", "chirp", "chits", "chive",
    "chock", "choir", "choke", "chops", "chord", "chore", "chose", "chows", "chuck", "chuff",
    "chugs", "chump", "chums", "chunk", "churn", "chute", "daddy", "daily", "dairy", "daisy",
    "dales", "dally", "dames", "damns", "damps", "dance", "dandy", "dared", "dares", "darky",
    "darts", "dated", "dates", "datum", "daunt", "dawns", "dazed", "dazes", "deals", "dealt",
    "deans", "dears", "deary", "death", "debar", "debit", "debts", "debug", "debut", "decal",
    "decay", "decks", "decor", "decoy", "decry", "deeds", "deems", "deeps", "defer", "defog",
    "deice", "deify", "deign", "deism", "deist", "deity", "delay", "delis", "dells", "delta",
    "delve", "demit", "demon", "demos", "demur", "denim", "dense", "dents", "depot", "depth",
    "derby", "derma", "derms", "desks", "deter", "detox", "deuce", "devil", "devon", "campy",
    "eager", "eagle", "eared", "earls", "early", "earns", "earth", "eased", "easel", "eases",
    "easts", "eaten", "eater", "eaves", "ebbed", "ebony", "ebook", "echos", "eclat", "edema",
    "edged", "edger", "edges", "edict", "edify", "edits", "eerie", "egged", "egret", "eight",
    "eject", "eking", "eland", "elate", "elbow", "elder", "elect", "elegy", "elfin", "elide",
    "elite", "elope", "elude", "elven", "elves", "embed", "ember", "emcee", "emend", "emery",
    "emirs", "emits", "fable", "faced", "facer", "faces", "facet", "facia", "facts", "faddy",
    "faded", "fader", "fades", "fadge", "fails", "faint", "fairs", "fairy", "faith", "faked",
    "faker", "fakes", "fakir", "gabby", "gable", "gaffe", "gaffs", "gaged", "gager", "gages",
    "gaily", "gains", "gaits", "galah", "galas", "gales", "galls", "gally", "galop", "gamed",
    "gamer", "games", "gamey", "gamin", "gamma", "habit", "hacks", "hades", "hadji", "haiku",
    "cameo", "hails", "hairs", "hairy", "hakes", "halal", "haled", "haler", "hales", "hallo",
    "halma", "halms", "halon", "halos", "halts", "halva", "halve", "hamal", "hands", "halls",
    "handy", "hangs", "hanks", "hanky", "hansa", "hanse", "haole", "haply", "happy", "hardy",
    "harem", "hares", "harms", "harps", "harpy", "harry", "harsh", "hasps", "haste", "logon",
    "hasty", "hatch", "hated", "hater", "hates", "hauls", "haunt", "haute", "haven", "haver",
    "haves", "havoc", "hawed", "hawks", "hawse", "hayed", "hazed", "hazel", "hazer", "hazes",
    "hazle", "heads", "heady", "heals", "heaps", "heard", "hears", "heart", "heath", "heats",
    "heave", "heavy", "hecks", "heder", "hedge", "hedgy", "heeds", "heels", "hefts", "hefty",
    "heils", "heirs", "heist", "helio", "helix", "hello", "hells", "helms", "helos", "helot",
    "helps", "helve", "hemal", "hemes", "hemic", "hemin", "hemps", "hempy", "hence", "henge",
    "henna", "henny", "henry", "hents", "hepar", "herbs", "herby", "herds", "heres", "herls",
    "herma", "herms", "heron", "heros", "herry", "hertz", "herye", "heseb", "hests", "heths",
    "hevea", "hewed", "hewer", "hexad", "hexed", "hexer", "hexes", "hexyl", "hiant", "logos",
    "hicks", "hided", "hider", "hides", "hiems", "highs", "hight", "hijab", "lolls", "drone",
    "hiked", "hiker", "hikes", "hilar", "hillo", "hills", "hilly", "hilts", "break", "grain",
    "himbo", "hinau", "hinds", "hinge", "hingy", "hints", "towel", "hurry", "pests", "honey",
    "hippo", "hippy", "hired", "hiree", "hirer", "hires", "hisks", "lolly", "hones", "honed",
    "lists", "lithe", "lived", "liver", "lives", "livid", "llama", "loach", "loads", "loafs",
    "loams", "loamy", "loans", "loath", "lobar", "lobby", "lobed", "lobes", "local", "lochs",
    "locks", "locos", "locum", "locus", "lodes", "lodge", "loess", "lofts", "lofty", "logan",
    "loges", "loggy", "logia", "logic", "paced", "paces", "packs", "pacts", "paddy", "grins",
    "pager", "pages", "pails", "pains", "paint", "pairs", "paled", "paler", "pales", "palms",
    "palmy", "palsy", "panel", "panes", "pangs", "panic", "pansy", "pants", "panty", "papal",
    "papas", "paper", "pappy", "paras", "parch", "pardo", "pared", "parer", "pares", "spits",
    "parka", "parks", "parry", "parse", "parts", "party", "pasts", "pasty", "sands", "sandy",
    "patch", "paten", "pater", "paths", "patio", "patsy", "patty", "pause", "paved", "dunes",
    "paven", "paver", "paves", "pavis", "pawed", "pawer", "pawky", "pawls", "pawns", "paxes",
    "payee", "payer", "payor", "peace", "peach", "peaks", "peaky", "peals", "peaps", "pearl",
    "pears", "pease", "peats", "pecan", "pechs", "pecks", "beaks", "steer", "drool", "sword",
    "pecky", "pedal", "pedro", "peeks", "peels", "peens", "peeps", "peers", "peery", "peeve",
    "quack", "quads", "quail", "quake", "qualm", "cloud", "snark", "stark", "snore", "slate",
    "quant", "quare", "quark", "quart", "quash", "quasi", "quass", "quate", "squat", "erase",
    "radar", "radge", "radix", "radon", "raffs", "rafts", "ragas", "ragde", "raged", "zapan",
    "rager", "rages", "ragga", "raggs", "raggy", "raids", "rakes", "saber", "sweep", "broom",
    "sabin", "sable", "sabot", "sabra", "sacks", "seeps", "surfs", "tides", "tiger", "lions",
    "sadly", "saved", "safer", "safes", "snack", "tiled", "blank", "taxis", "punch", "holed",
    "tabby", "tabla", "table", "taboo", "riles", "shake", "shook", "slick", "slips", "draws",
    "tacit", "tacks", "boxes", "nooks", "tells", "tales", "tails", "stood", "kicks", "lakes",
    "udder", "udons", "skies", "sweat", "lemon", "melon", "limes", "likes", "ducks", "dusks",
    "vaded", "vades", "vague", "vails", "lamps", "swish", "cloth", "sofas", "couch", "jeans",
    "wacko", "wacks", "wacky", "waded", "wader", "wades", "socks", "table", "maxim", "ponds",
    "xenon", "xylem", "backs", "comma", "steak", "slope", "muddy", "color", "blues", "binds",
    "yacht", "yahoo", "outer", "dingo", "sleet", "shoal", "purse", "mazes", "brood", "teems",
    "pagan", "paged", "gleam", "stain", "mains", "plaid", "spore", "pesto", "inane", "grape",
    "spate", "geese", "kayak", "slime", "clone", "crush", "mails", "males", "milks", "bleak",
    "gloom", "blink", "kills", "stems", "rinds", "mares", "glide", "spill", "gills", "wills",
    "piety", "erupt", "lasts", "skirt", "timer", "soapy", "soaps", "brisk", "dusty", "trash",
    "stink", "stank", "sting", "stung", "skunk", "ruler", 
];

let secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let winState = false;
let endState = false;
let flipState = false;

let keyboardMap = {
    'q': qLetter, 'w': wLetter, 'e': eLetter, 'r': rLetter, 't': tLetter, 'y': yLetter, 'u': uLetter, 'i': iLetter, 'o': oLetter, 'p': pLetter,
    'a': aLetter, 's': sLetter, 'd': dLetter, 'f': fLetter, 'g': gLetter, 'h': hLetter, 'j': jLetter, 'k': kLetter, 'l': lLetter,
    'z': zLetter, 'x': xLetter, 'c': cLetter, 'v': vLetter, 'b': bLetter, 'n': nLetter, 'm': mLetter
}

window.addEventListener('keydown', (event) => {
    if (document.querySelector('[id^="ad-clone-"]')) {
        return;
    }
    let key = event.key;
    if (flipState == false) {
        if (key.length == 1 && key.match(/[a-z]/i) && winState == false && endState == false) {
            if (currentBox < 5) {
                let activeRow = rows[currentRow];
                let activeBox = activeRow.children[currentBox];
                activeBox.innerText = key.toUpperCase();
                activeBox.classList.add('filled');
                currentBox++;
            }
            return;
        }
    }

    if (key == 'Enter') {
        if (currentBox == 5) {
            let rawWord = "";
            let guessedWord = "";
            let activeRow = rows[currentRow];
            let remainingLetters = secretWord.split('');
            for (let i = 0; i < 5; i++) {
                rawWord += activeRow.children[i].innerText;
            }
            guessedWord = rawWord.toLowerCase();
            if (!wordBank.includes(guessedWord)) {
                showMessage("Word not found");
                return;
            }
            flipState = true
            for (let i = 0; i < 5; i++) {
                let activeBox = activeRow.children[i];
                let letter = guessedWord[i];
                delayTime = i * 360
                activeBox.style.animationDelay = `${i * 360}ms`;
                activeBox.classList.remove('filled');
                let keyLetter = keyboardMap[letter];
                if (letter == secretWord[i]) {
                    activeBox.classList.add('green');
                    remainingLetters[i] = null;
                    setTimeout(() => {
                        if (keyLetter) {
                            keyLetter.classList.remove('keyYellow', 'keyGray');
                            keyLetter.classList.add('keyGreen');
                        }
                    }, delayTime + 250)
                }
                else if (remainingLetters.includes(letter)) {
                    activeBox.classList.add('yellow');
                    let indexToRemove = remainingLetters.indexOf(letter);
                    remainingLetters[indexToRemove] = null;
                    setTimeout(() => {
                        if (keyLetter && !keyLetter.classList.contains('keyGreen')) {
                            keyLetter.classList.remove('keyGreen', 'keyGray');
                            keyLetter.classList.add('keyYellow');
                        }
                    }, delayTime + 250)
                }
                else {
                    activeBox.classList.add('gray');
                    setTimeout(() => {
                        if (keyLetter && !keyLetter.classList.contains('keyGreen') && !keyLetter.classList.contains('keyYellow')) {
                            keyLetter.classList.remove('keyYellow', 'keyGreen');
                            keyLetter.classList.add('keyGray');
                        }
                    }, delayTime + 250)
                }
            }
            setTimeout(() => {
                if (guessedWord == secretWord) {
                    winState = true;
                    endState = true;
                    let activeRow = rows[currentRow]
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => {
                            activeRow.children[i].style.animationDelay = '0ms'
                            activeRow.children[i].classList.add('bounce')
                        }, i * 100);
                    }
                    showMessage("You win");
                    if (playAgainButton) playAgainButton.style.display = 'flex';
                }
                else if (currentRow < 5 && winState == false) {
                    currentRow++;
                    currentBox = 0;
                    flipState = false;
                }
                else {
                    endState = true;
                    showMessage("The word was " + secretWord.toUpperCase());
                    if (playAgainButton) playAgainButton.style.display = 'flex';
                }
            }, 2200);
        }
        return;
    }

    if (key == 'Backspace' && flipState == false && winState == false && endState == false) {
        if (currentBox > 0) {
            currentBox--;
            let activeRow = rows[currentRow];
            let activeBox = activeRow.children[currentBox];
            activeBox.innerText = "";
            activeBox.classList.remove('filled');
        }
        return;
    }
});

function spawnAd(centeredState) {
    let newAd = ad.cloneNode(true);
    adCount++;
    newAd.id = `ad-clone-${adCount}`;
    if (centeredState == true) {
        newAd.style.top = '50%';
        newAd.style.left = '50%';
    }
    else {
        newAd.style.top = `${Math.floor(Math.random() * 40) + 30}%`;
        newAd.style.left = `${Math.floor(Math.random() * 40) + 30}%`;
    }
    newAd.style.display = 'flex';
    setTimeout(() => {
        let hiddenCloseAdButton = newAd.querySelector('.closeAdButton');
        hiddenCloseAdButton.style.display = 'block';
    }, 10000);
    document.body.appendChild(newAd);
}

setInterval(() => {
    if (winState == false && endState == false) {
        spawnAd(true);
    }
}, 40000);

function typeLetter(letter) {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: letter.toLowerCase() }));
}

function pressEnter() {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
}

function deleteLetter() {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace' }));
}

function playAgain() {
    currentRow = 0;
    currentBox = 0;
    winState = false;
    endState = false;
    flipState = false;
    secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    let allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
        box.innerText = "";
        box.style.animationDelay = '0ms';
        box.classList.remove('filled', 'green', 'yellow', 'gray', 'bounce');
    });
    let letters = "qwertyuiopasdfghjklzxcvbnm".split("");
    letters.forEach(char => {
        let element = keyboardMap[char];
        if (element) {
            element.classList.remove('keyGreen', 'keyYellow', 'keyGray');
        }
    });
    if (playAgainButton) playAgainButton.style.display = 'none';
    let spawnedClones = document.querySelectorAll('[id^="ad-clone-"]');
    spawnedClones.forEach(clone => clone.remove());
}

function showMessage(text) {
    if (!message) return;
    message.innerText = text
    message.style.display = 'flex'
    setTimeout(() => {
        message.style.display = 'none'
    }, 2500);}