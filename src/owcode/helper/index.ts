import * as globalthis from "globalthis";
const globals: any = globalthis();
globals.CompareSymbol = {
    EQUALS: 0,
    LESS: 1,
    LESS_EQUALS: 2,
    GREATER: 3,
    GREATER_EQUALS: 4,
    NOT_EQUALS: 5 // 不等于
};
type Player = "_GKD_PLAYER_";
type MapItem = "_GKD_MAPITEM_";
declare global {
    function runAt(event: string): any;
    function runAt(event: string, team: Team, hero: Hero): any;
    function condition(...conditions: boolean[]): any;
    enum CompareSymbol {
        EQUALS = 0,
        LESS = 1,
        LESS_EQUALS = 2,
        GREATER = 3,
        GREATER_EQUALS = 4,
        NOT_EQUALS = 5 // 不等于
    }
}
globals.Events = { GLOBAL: "GLOBAL", EACH_PLAYER: "EACH_PLAYER", PLAYER_TOOK_DAMAGE: "PLAYER_TOOK_DAMAGE", PLAYER_DEALT_DAMAGE: "PLAYER_DEALT_DAMAGE", PLAYER_DEALT_FINAL_BLOW: "PLAYER_DEALT_FINAL_BLOW", PLAYER_DIED: "PLAYER_DIED", PLAYER_EARNED_ELIMINATION: "PLAYER_EARNED_ELIMINATION", PLAYER_DEALT_HEALING: "PLAYER_DEALT_HEALING", PLAYER_RECEIVED_HEALING: "PLAYER_RECEIVED_HEALING", PLAYER_JOINED: "PLAYER_JOINED", PLAYER_LEFT: "PLAYER_LEFT", SUBROUTINE: "SUBROUTINE" };
declare global {
    namespace Game {
        const DAMAGE_HEROES: Hero[];
        const ALL_HEROES: Hero[];
        const SUPPORT_HEROES: Hero[];
        const TANK_HEROES: Hero[];
        const ATTACKER: Player;
        const CONTROL_SCORING_TEAM: Team;
        const CURRENT_ARRAY_ELEMENT: any;
        const CURRENT_GAMEMODE: Gamemode;
        const CURRENT_MAP: MapItem;
        const EMPTY_ARRAY: any[];
        const EVENT_DAMAGE: number;
        const EVENT_HEALING: number;
        const EVENT_PLAYER: Player;
        const EVENT_WAS_CRITICAL_HIT: boolean;
        const EVENT_WAS_HEALTH_PACK: boolean;
        const FALSE: boolean;
        const HEALEE: Player;
        const HEALER: Player;
        const HOST_PLAYER: Player;
        const IS_ASSEMBLING_HEROES: boolean;
        const IS_MATCH_BETWEEN_ROUNDS: boolean;
        const IS_CONTROL_POINT_LOCKED: boolean;
        const IS_IN_SUDDEN_DEATH: boolean;
        const IS_GAME_IN_PROGRESS: boolean;
        const IS_IN_SETUP: boolean;
        const IS_MATCH_COMPLETE: boolean;
        const IS_WAITING_FOR_PLAYERS: boolean;
        const LAST_CREATED_ENTITY: number;
        const LAST_DAMAGE_MODIFICATION: number;
        const LAST_DAMAGE_ID: any;
        const LAST_HEAL_ID: any;
        const LAST_HEALING_MODIFICATION: number;
        const LAST_CREATED_TEXT: number;
        const MATCH_ROUND: number;
        const MATCH_TIME: number;
        const NULL: any;
        const CURRENT_OBJECTIVE: number;
        const PAYLOAD_POSITION: Vector;
        const PAYLOAD_PROGRESS_PERCENTAGE: number;
        const CAPTURE_PERCENTAGE: number;
        const SERVER_LOAD: number;
        const AVERAGE_SERVER_LOAD: number;
        const PEAK_SERVER_LOAD: number;
        const TOTAL_TIME_ELAPSED: number;
        const TRUE: boolean;
        const VICTIM: Team;
    }
    enum Transform {
        ROTATION = "ROTATION",
        ROTATION_AND_TRANSLATION = "ROTATION_AND_TRANSLATION"
    }
    enum Invis {
        ALL = "ALL",
        ENEMIES = "ENEMIES",
        NONE = "NONE"
    }
    enum Color {
        AQUA = "AQUA",
        BLUE = "BLUE",
        GREEN = "GREEN",
        LIME_GREEN = "LIME_GREEN",
        ORANGE = "ORANGE",
        PURPLE = "PURPLE",
        RED = "RED",
        SKY_BLUE = "SKY_BLUE",
        TEAM_ONE = "TEAM_ONE",
        TEAM_TWO = "TEAM_TWO",
        TURQUOISE = "TURQUOISE",
        WHITE = "WHITE",
        YELLOW = "YELLOW"
    }
    enum Button {
        ABILITY_ONE = "ABILITY_ONE",
        ABILITY_TWO = "ABILITY_TWO",
        CROUCH = "CROUCH",
        INTERACT = "INTERACT",
        JUMP = "JUMP",
        MELEE = "MELEE",
        PRIMARY_FIRE = "PRIMARY_FIRE",
        RELOAD = "RELOAD",
        SECONDARY_FIRE = "SECONDARY_FIRE",
        ULTIMATE = "ULTIMATE"
    }
    enum Operation {
        ADD = "ADD",
        APPEND_TO_ARRAY = "APPEND_TO_ARRAY",
        DIVIDE = "DIVIDE",
        MAX = "MAX",
        MIN = "MIN",
        MODULO = "MODULO",
        MULTIPLY = "MULTIPLY",
        RAISE_TO_POWER = "RAISE_TO_POWER",
        REMOVE_FROM_ARRAY_BY_INDEX = "REMOVE_FROM_ARRAY_BY_INDEX",
        REMOVE_FROM_ARRAY_BY_VALUE = "REMOVE_FROM_ARRAY_BY_VALUE",
        SUBTRACT = "SUBTRACT"
    }
    enum Team {
        ALL = "ALL",
        ONE = "ONE",
        TWO = "TWO"
    }
    enum Hero {
        ANA = "ANA",
        ASHE = "ASHE",
        BAPTISTE = "BAPTISTE",
        BASTION = "BASTION",
        BRIGITTE = "BRIGITTE",
        DVA = "DVA",
        DOOMFIST = "DOOMFIST",
        GENJI = "GENJI",
        HANZO = "HANZO",
        JUNKRAT = "JUNKRAT",
        LUCIO = "LUCIO",
        MCCREE = "MCCREE",
        MEI = "MEI",
        MERCY = "MERCY",
        MOIRA = "MOIRA",
        ORISA = "ORISA",
        PHARAH = "PHARAH",
        REAPER = "REAPER",
        REINHARDT = "REINHARDT",
        ROADHOG = "ROADHOG",
        SIGMA = "SIGMA",
        SOLDIER = "SOLDIER",
        SOMBRA = "SOMBRA",
        SYMMETRA = "SYMMETRA",
        TORBJORN = "TORBJORN",
        TRACER = "TRACER",
        WIDOWMAKER = "WIDOWMAKER",
        WINSTON = "WINSTON",
        HAMMOND = "HAMMOND",
        ZARYA = "ZARYA",
        ZENYATTA = "ZENYATTA"
    }
    enum DynamicEffect {
        BAD_EXPLOSION = "BAD_EXPLOSION",
        BAD_PICKUP_EFFECT = "BAD_PICKUP_EFFECT",
        BUFF_EXPLOSION_SOUND = "BUFF_EXPLOSION_SOUND",
        BUFF_IMPACT_SOUND = "BUFF_IMPACT_SOUND",
        DEBUFF_IMPACT_SOUND = "DEBUFF_IMPACT_SOUND",
        EXPLOSION_SOUND = "EXPLOSION_SOUND",
        GOOD_EXPLOSION = "GOOD_EXPLOSION",
        GOOD_PICKUP_EFFECT = "GOOD_PICKUP_EFFECT",
        RING_EXPLOSION = "RING_EXPLOSION",
        RING_EXPLOSION_SOUND = "RING_EXPLOSION_SOUND"
    }
    enum Effect {
        BAD_AURA = "BAD_AURA",
        BAD_AURA_SOUND = "BAD_AURA_SOUND",
        BEACON_SOUND = "BEACON_SOUND",
        CLOUD = "CLOUD",
        DECAL_SOUND = "DECAL_SOUND",
        ENERGY_SOUND = "ENERGY_SOUND",
        GOOD_AURA = "GOOD_AURA",
        GOOD_AURA_SOUND = "GOOD_AURA_SOUND",
        LIGHT_SHAFT = "LIGHT_SHAFT",
        ORB = "ORB",
        PICKUP_SOUND = "PICKUP_SOUND",
        RING = "RING",
        SMOKE_SOUND = "SMOKE_SOUND",
        SPARKLES = "SPARKLES",
        SPARKLES_SOUND = "SPARKLES_SOUND",
        SPHERE = "SPHERE"
    }
    enum Communicate {
        ACKNOWLEDGE = "ACKNOWLEDGE",
        EMOTE_DOWN = "EMOTE_DOWN",
        EMOTE_LEFT = "EMOTE_LEFT",
        EMOTE_RIGHT = "EMOTE_RIGHT",
        EMOTE_UP = "EMOTE_UP",
        GROUP_UP = "GROUP_UP",
        HELLO = "HELLO",
        NEED_HEALING = "NEED_HEALING",
        THANKS = "THANKS",
        ULTIMATE_STATUS = "ULTIMATE_STATUS",
        VOICE_LINE_DOWN = "VOICE_LINE_DOWN",
        VOICE_LINE_LEFT = "VOICE_LINE_LEFT",
        VOICE_LINE_RIGHT = "VOICE_LINE_RIGHT",
        VOICE_LINE_UP = "VOICE_LINE_UP"
    }
    enum Icon {
        ARROW_DOWN = "ARROW_DOWN",
        ARROW_LEFT = "ARROW_LEFT",
        ARROW_RIGHT = "ARROW_RIGHT",
        ARROW_UP = "ARROW_UP",
        ASTERISK = "ASTERISK",
        BOLT = "BOLT",
        CHECKMARK = "CHECKMARK",
        CIRCLE = "CIRCLE",
        CLUB = "CLUB",
        DIAMOND = "DIAMOND",
        DIZZY = "DIZZY",
        EXCLAMATION_MARK = "EXCLAMATION_MARK",
        EYE = "EYE",
        FIRE = "FIRE",
        FLAG = "FLAG",
        HALO = "HALO",
        HAPPY = "HAPPY",
        HEART = "HEART",
        MOON = "MOON",
        NO = "NO",
        PLUS = "PLUS",
        POISON = "POISON",
        POISON_TWO = "POISON_TWO",
        QUESTION_MARK = "QUESTION_MARK",
        RADIOACTIVE = "RADIOACTIVE",
        RECYCLE = "RECYCLE",
        RING_THICK = "RING_THICK",
        RING_THIN = "RING_THIN",
        SAD = "SAD",
        SKULL = "SKULL",
        SPADE = "SPADE",
        SPIRAL = "SPIRAL",
        STOP = "STOP",
        TRASHCAN = "TRASHCAN",
        WARNING = "WARNING",
        CROSS = "CROSS"
    }
    enum Relativity {
        TO_PLAYER = "TO_PLAYER",
        TO_WORLD = "TO_WORLD"
    }
    enum Impulse {
        CANCEL_CONTRARY_MOTION = "CANCEL_CONTRARY_MOTION",
        INCORPORATE_CONTRARY_MOTION = "INCORPORATE_CONTRARY_MOTION"
    }
    enum RoundingType {
        ROUND_UP = "ROUND_UP",
        ROUND_DOWN = "ROUND_DOWN",
        ROUND_TO_NEAREST = "ROUND_TO_NEAREST"
    }
    enum LosCheck {
        OFF = "OFF",
        SURFACES = "SURFACES",
        SURFACES_AND_ALL_BARRIERS = "SURFACES_AND_ALL_BARRIERS",
        SURFACES_AND_ENEMY_BARRIERS = "SURFACES_AND_ENEMY_BARRIERS"
    }
    enum Clip {
        SURFACES = "SURFACES",
        NONE = "NONE"
    }
    enum Pos {
        LEFT = "LEFT",
        TOP = "TOP",
        RIGHT = "RIGHT"
    }
    enum IconReeval {
        POSITION = "POSITION",
        NONE = "NONE",
        VISIBILITY = "VISIBILITY",
        VISIBILITY_AND_POSITION = "VISIBILITY_AND_POSITION"
    }
    enum EffectReeval {
        POSITION_AND_RADIUS = "POSITION_AND_RADIUS",
        NONE = "NONE",
        VISIBILITY = "VISIBILITY",
        VISIBILITY_POSITION_AND_RADIUS = "VISIBILITY_POSITION_AND_RADIUS"
    }
    enum HudReeval {
        STRING = "STRING",
        VISIBILITY_AND_STRING = "VISIBILITY_AND_STRING",
        SORT_ORDER_AND_STRING = "SORT_ORDER_AND_STRING",
        VISIBILITY_SORT_ORDER_AND_STRING = "VISIBILITY_SORT_ORDER_AND_STRING"
    }
    enum WorldTextReeval {
        STRING = "STRING",
        VISIBILITY_AND_STRING = "VISIBILITY_AND_STRING",
        VISIBILITY_POSITION_AND_STRING = "VISIBILITY_POSITION_AND_STRING"
    }
    enum ChaseReeval {
        DESTINATION_AND_RATE = "DESTINATION_AND_RATE",
        NONE = "NONE",
        DESTINATION_AND_DURATION = "DESTINATION_AND_DURATION"
    }
    enum DamageReeval {
        NONE = "NONE",
        RECEIVERS_AND_DAMAGERS = "RECEIVERS_AND_DAMAGERS",
        RECEIVERS_DAMAGERS_AND_DMGPERCENT = "RECEIVERS_DAMAGERS_AND_DMGPERCENT"
    }
    enum HealingReeval {
        NONE = "NONE",
        RECEIVERS_AND_HEALERS = "RECEIVERS_AND_HEALERS",
        RECEIVERS_HEALERS_AND_HEALPERCENT = "RECEIVERS_HEALERS_AND_HEALPERCENT"
    }
    enum FacingReeval {
        DIRECTION_AND_TURN_RATE = "DIRECTION_AND_TURN_RATE",
        NONE = "NONE"
    }
    enum Wait {
        ABORT_WHEN_FALSE = "ABORT_WHEN_FALSE",
        IGNORE_CONDITION = "IGNORE_CONDITION",
        RESTART_WHEN_TRUE = "RESTART_WHEN_TRUE"
    }
    enum BarrierLos {
        BLOCKED_BY_ENEMY_BARRIERS = "BLOCKED_BY_ENEMY_BARRIERS",
        BLOCKED_BY_ALL_BARRIERS = "BLOCKED_BY_ALL_BARRIERS",
        PASS_THROUGH_BARRIERS = "PASS_THROUGH_BARRIERS"
    }
    enum Status {
        ASLEEP = "ASLEEP",
        BURNING = "BURNING",
        FROZEN = "FROZEN",
        HACKED = "HACKED",
        INVINCIBLE = "INVINCIBLE",
        KNOCKED_DOWN = "KNOCKED_DOWN",
        PHASED_OUT = "PHASED_OUT",
        ROOTED = "ROOTED",
        STUNNED = "STUNNED",
        UNKILLABLE = "UNKILLABLE"
    }
    enum SpecVisibility {
        DEFAULT = "DEFAULT",
        ALWAYS = "ALWAYS",
        NEVER = "NEVER"
    }
    enum Beam {
        BAD = "BAD",
        GOOD = "GOOD",
        GRAPPLE = "GRAPPLE"
    }
    enum Throttle {
        REPLACE_EXISTING = "REPLACE_EXISTING",
        ADD_TO_EXISTING = "ADD_TO_EXISTING"
    }
    enum ThrottleReeval {
        DIRECTION_AND_MAGNITUDE = "DIRECTION_AND_MAGNITUDE",
        NONE = "NONE"
    }
    enum AccelReeval {
        DIRECTION_RATE_AND_MAX_SPEED = "DIRECTION_RATE_AND_MAX_SPEED",
        NONE = "NONE"
    }
    enum Maps {
        AYUTTHAYA = "AYUTTHAYA",
        BLACK_FOREST = "BLACK_FOREST",
        BLACK_FOREST_WINTER = "BLACK_FOREST_WINTER",
        BLIZZ_WORLD = "BLIZZ_WORLD",
        BLIZZ_WORLD_WINTER = "BLIZZ_WORLD_WINTER",
        BUSAN = "BUSAN",
        BUSAN_DOWNTOWN_LNY = "BUSAN_DOWNTOWN_LNY",
        BUSAN_SANCTUARY_LNY = "BUSAN_SANCTUARY_LNY",
        BUSAN_STADIUM = "BUSAN_STADIUM",
        CASTILLO = "CASTILLO",
        CHATEAU_GUILLARD = "CHATEAU_GUILLARD",
        CHATEAU_GUILLARD_HALLOWEEN = "CHATEAU_GUILLARD_HALLOWEEN",
        DORADO = "DORADO",
        ECOPOINT_ANTARCTICA = "ECOPOINT_ANTARCTICA",
        ECOPOINT_ANTARCTICA_WINTER = "ECOPOINT_ANTARCTICA_WINTER",
        EICHENWALDE = "EICHENWALDE",
        EICHENWALDE_HALLOWEEN = "EICHENWALDE_HALLOWEEN",
        ESTADIO_DAS_RAS = "ESTADIO_DAS_RAS",
        HANAMURA = "HANAMURA",
        HANAMURA_WINTER = "HANAMURA_WINTER",
        HAVANA = "HAVANA",
        HOLLYWOOD = "HOLLYWOOD",
        HOLLYWOOD_HALLOWEEN = "HOLLYWOOD_HALLOWEEN",
        HORIZON_LUNAR_COLONY = "HORIZON_LUNAR_COLONY",
        ILIOS = "ILIOS",
        ILIOS_LIGHTHOUSE = "ILIOS_LIGHTHOUSE",
        ILIOS_RUINS = "ILIOS_RUINS",
        ILIOS_WELL = "ILIOS_WELL",
        JUNKENSTEIN = "JUNKENSTEIN",
        JUNKERTOWN = "JUNKERTOWN",
        KINGS_ROW = "KINGS_ROW",
        KINGS_ROW_WINTER = "KINGS_ROW_WINTER",
        LIJIANG_CONTROL_CENTER = "LIJIANG_CONTROL_CENTER",
        LIJIANG_CONTROL_CENTER_LNY = "LIJIANG_CONTROL_CENTER_LNY",
        LIJIANG_GARDEN = "LIJIANG_GARDEN",
        LIJIANG_GARDEN_LNY = "LIJIANG_GARDEN_LNY",
        LIJIANG_NIGHT_MARKET = "LIJIANG_NIGHT_MARKET",
        LIJIANG_NIGHT_MARKET_LNY = "LIJIANG_NIGHT_MARKET_LNY",
        LIJIANG_TOWER = "LIJIANG_TOWER",
        LIJIANG_TOWER_LNY = "LIJIANG_TOWER_LNY",
        NECROPOLIS = "NECROPOLIS",
        NEPAL = "NEPAL",
        NEPAL_SANCTUM = "NEPAL_SANCTUM",
        NEPAL_SHRINE = "NEPAL_SHRINE",
        NEPAL_VILLAGE = "NEPAL_VILLAGE",
        NEPAL_VILLAGE_WINTER = "NEPAL_VILLAGE_WINTER",
        NUMBANI = "NUMBANI",
        OASIS = "OASIS",
        OASIS_CITY_CENTER = "OASIS_CITY_CENTER",
        OASIS_GARDENS = "OASIS_GARDENS",
        OASIS_UNIVERSITY = "OASIS_UNIVERSITY",
        PARIS = "PARIS",
        PETRA = "PETRA",
        PRACTICE_RANGE = "PRACTICE_RANGE",
        RIALTO = "RIALTO",
        ROUTE_SIXSIX = "ROUTE_SIXSIX",
        SYDNEY_HARBOUR_ARENA = "SYDNEY_HARBOUR_ARENA",
        TEMPLE_OF_ANUBIS = "TEMPLE_OF_ANUBIS",
        VOLSKAYA = "VOLSKAYA",
        WATCHPOINT_GIBRALTAR = "WATCHPOINT_GIBRALTAR",
        WORKSHOP_CHAMBER = "WORKSHOP_CHAMBER",
        WORKSHOP_EXPANSE = "WORKSHOP_EXPANSE",
        WORKSHOP_ISLAND = "WORKSHOP_ISLAND"
    }
    enum Gamemode {
        ASSAULT = "ASSAULT",
        CTF = "CTF",
        CONTROL = "CONTROL",
        FFA = "FFA",
        ELIMINATION = "ELIMINATION",
        ESCORT = "ESCORT",
        HYBRID = "HYBRID",
        JUNKENSTEIN = "JUNKENSTEIN",
        LUCIOBALL = "LUCIOBALL",
        MEIS_SNOWBALL_OFFENSIVE = "MEIS_SNOWBALL_OFFENSIVE",
        PRACTICE_RANGE = "PRACTICE_RANGE",
        SKIRMISH = "SKIRMISH",
        TDM = "TDM",
        YETI_HUNTER = "YETI_HUNTER"
    }
    enum AsyncBehavior {
        RESTART = "RESTART",
        NOOP = "NOOP"
    }
    enum Vector {
        BACKWARD = "BACKWARD",
        DOWN = "DOWN",
        FORWARD = "FORWARD",
        LEFT = "LEFT",
        RIGHT = "RIGHT",
        UP = "UP"
    }
    enum Events {
        GLOBAL = "GLOBAL",
        EACH_PLAYER = "EACH_PLAYER",
        PLAYER_TOOK_DAMAGE = "PLAYER_TOOK_DAMAGE",
        PLAYER_DEALT_DAMAGE = "PLAYER_DEALT_DAMAGE",
        PLAYER_DEALT_FINAL_BLOW = "PLAYER_DEALT_FINAL_BLOW",
        PLAYER_DIED = "PLAYER_DIED",
        PLAYER_EARNED_ELIMINATION = "PLAYER_EARNED_ELIMINATION",
        PLAYER_DEALT_HEALING = "PLAYER_DEALT_HEALING",
        PLAYER_RECEIVED_HEALING = "PLAYER_RECEIVED_HEALING",
        PLAYER_JOINED = "PLAYER_JOINED",
        PLAYER_LEFT = "PLAYER_LEFT",
        SUBROUTINE = "SUBROUTINE"
    }
    enum Strings {
        ZONES = "ZONES",
        ZONE = "ZONE",
        YOU_WIN = "YOU_WIN",
        YOU_LOSE = "YOU_LOSE",
        YOU = "YOU",
        YES = "YES",
        YELLOW = "YELLOW",
        WOW = "WOW",
        WORST = "WORST",
        WORSE = "WORSE",
        WISDOM = "WISDOM",
        WINS = "WINS",
        WINNERS = "WINNERS",
        WINNER = "WINNER",
        WIN = "WIN",
        WILD = "WILD",
        WHITE = "WHITE",
        WEST = "WEST",
        WELL_PLAYED = "WELL_PLAYED",
        WELCOME = "WELCOME",
        WARNING = "WARNING",
        WALLS = "WALLS",
        WALL = "WALL",
        WAITING = "WAITING",
        WAIT = "WAIT",
        VORTICES = "VORTICES",
        VORTEX = "VORTEX",
        VISIBLE = "VISIBLE",
        VICTORY = "VICTORY",
        USE_ULTIMATE_ABILITY = "USE_ULTIMATE_ABILITY",
        USE_ABILITY_TWO = "USE_ABILITY_TWO",
        USE_ABILITY_ONE = "USE_ABILITY_ONE",
        UPLOADING = "UPLOADING",
        UPLOADED = "UPLOADED",
        UPLOAD = "UPLOAD",
        UPGRADES = "UPGRADES",
        UPGRADE = "UPGRADE",
        UP = "UP",
        UNSTABLE = "UNSTABLE",
        UNSAFE = "UNSAFE",
        UNLOCKING = "UNLOCKING",
        UNLOCKED = "UNLOCKED",
        UNLOCK = "UNLOCK",
        UNLIMITED = "UNLIMITED",
        UNKNOWN = "UNKNOWN",
        UNDER = "UNDER",
        ULTIMATE_ABILITY = "ULTIMATE_ABILITY",
        UGH = "UGH",
        TURRETS = "TURRETS",
        TURRET = "TURRET",
        TRY_AGAIN = "TRY_AGAIN",
        TRANSFERRING = "TRANSFERRING",
        TRANSFERRED = "TRANSFERRED",
        TRANSFER = "TRANSFER",
        TRAITORS = "TRAITORS",
        TRAITOR = "TRAITOR",
        TRADING = "TRADING",
        TRADED = "TRADED",
        TRADE = "TRADE",
        TOTAL = "TOTAL",
        TIMES = "TIMES",
        TIME = "TIME",
        TIEBREAKER = "TIEBREAKER",
        THREATS = "THREATS",
        THREAT_LEVELS = "THREAT_LEVELS",
        THREAT_LEVEL = "THREAT_LEVEL",
        THREAT = "THREAT",
        THAT_WAS_AWESOME = "THAT_WAS_AWESOME",
        THANKS = "THANKS",
        THANK_YOU = "THANK_YOU",
        TERRIBLE = "TERRIBLE",
        TEAMS = "TEAMS",
        TEAMMATES = "TEAMMATES",
        TEAMMATE = "TEAMMATE",
        TEAM = "TEAM",
        TARGETS = "TARGETS",
        TARGET = "TARGET",
        SURVIVING = "SURVIVING",
        SURVIVED = "SURVIVED",
        SURVIVE = "SURVIVE",
        SUPERB = "SUPERB",
        SUNK = "SUNK",
        SUDDEN_DEATH = "SUDDEN_DEATH",
        SUCCESS = "SUCCESS",
        SUBOPTIMAL = "SUBOPTIMAL",
        STUNNING = "STUNNING",
        STUNNED = "STUNNED",
        STUN = "STUN",
        STRENGTH = "STRENGTH",
        STOPPING = "STOPPING",
        STOPPED = "STOPPED",
        STOP = "STOP",
        STAYING = "STAYING",
        STAYED = "STAYED",
        STAY_AWAY = "STAY_AWAY",
        STAY = "STAY",
        STATUS = "STATUS",
        STARTING = "STARTING",
        STARTED = "STARTED",
        START = "START",
        STARS = "STARS",
        STAR = "STAR",
        STABLE = "STABLE",
        STABILIZING = "STABILIZING",
        STABILIZED = "STABILIZED",
        STABILIZE = "STABILIZE",
        SPHERES = "SPHERES",
        SPHERE = "SPHERE",
        SPEEDS = "SPEEDS",
        SPEED = "SPEED",
        SPAWNING = "SPAWNING",
        SPAWNED = "SPAWNED",
        SPAWN = "SPAWN",
        SPARKLES = "SPARKLES",
        SPADES = "SPADES",
        SPADE = "SPADE",
        SOUTHWEST = "SOUTHWEST",
        SOUTHEAST = "SOUTHEAST",
        SOUTH = "SOUTH",
        SORRY = "SORRY",
        SOLD = "SOLD",
        SLOWEST = "SLOWEST",
        SLOWER = "SLOWER",
        SLOW = "SLOW",
        SLEPT = "SLEPT",
        SLEEPING = "SLEEPING",
        SLEEP = "SLEEP",
        SKIPPING = "SKIPPING",
        SKIPPED = "SKIPPED",
        SKIP = "SKIP",
        SINKING = "SINKING",
        SINK = "SINK",
        SHUFFLED = "SHUFFLED",
        SHUFFLE = "SHUFFLE",
        SHOPS = "SHOPS",
        SHOP = "SHOP",
        SEVERING = "SEVERING",
        SEVERED = "SEVERED",
        SEVERE = "SEVERE",
        SEVER = "SEVER",
        SERVER_LOAD_PEAK = "SERVER_LOAD_PEAK",
        SERVER_LOAD_AVERAGE = "SERVER_LOAD_AVERAGE",
        SERVER_LOAD = "SERVER_LOAD",
        SELLING = "SELLING",
        SELL = "SELL",
        SELECTING = "SELECTING",
        SELECTED = "SELECTED",
        SELECT = "SELECT",
        SECURING = "SECURING",
        SECURED = "SECURED",
        SECURE = "SECURE",
        SECONDARY_FIRE = "SECONDARY_FIRE",
        SCORES = "SCORES",
        SCORE = "SCORE",
        SAVING = "SAVING",
        SAVED = "SAVED",
        SAVE = "SAVE",
        SAFE = "SAFE",
        RUNNING = "RUNNING",
        RUN = "RUN",
        ROUNDS_WON = "ROUNDS_WON",
        ROUNDS_LOST = "ROUNDS_LOST",
        ROUNDS = "ROUNDS",
        ROUND = "ROUND",
        RIGHT = "RIGHT",
        REVERSING = "REVERSING",
        REVERSED = "REVERSED",
        REVERSE = "REVERSE",
        REVEALING = "REVEALING",
        REVEALED = "REVEALED",
        REVEAL = "REVEAL",
        RESURRECTING = "RESURRECTING",
        RESURRECTED = "RESURRECTED",
        RESURRECT = "RESURRECT",
        RESOURCES = "RESOURCES",
        RESOURCE = "RESOURCE",
        RESCUING = "RESCUING",
        RESCUED = "RESCUED",
        RESCUE = "RESCUE",
        REMAINING = "REMAINING",
        REMAIN = "REMAIN",
        RED = "RED",
        RECOVERING = "RECOVERING",
        RECOVERED = "RECOVERED",
        RECOVER = "RECOVER",
        RECORDS = "RECORDS",
        RECORD = "RECORD",
        READY = "READY",
        REACHING = "REACHING",
        REACHED = "REACHED",
        REACH = "REACH",
        RANK_S = "RANK_S",
        RANK_F = "RANK_F",
        RANK_E = "RANK_E",
        RANK_D = "RANK_D",
        RANK_C = "RANK_C",
        RANK_B = "RANK_B",
        RANK_A = "RANK_A",
        RANK = "RANK",
        RAISING = "RAISING",
        RAISED = "RAISED",
        RAISE = "RAISE",
        PURPLE = "PURPLE",
        PURIFYING = "PURIFYING",
        PURIFY = "PURIFY",
        PURIFIED = "PURIFIED",
        PROTECTING = "PROTECTING",
        PROTECTED = "PROTECTED",
        PROTECT = "PROTECT",
        PROJECTILES = "PROJECTILES",
        PROJECTILE = "PROJECTILE",
        PRIMARY_FIRE = "PRIMARY_FIRE",
        PRICE = "PRICE",
        POWER_UPS = "POWER_UPS",
        POWER_UP = "POWER_UP",
        POWER = "POWER",
        POSITION = "POSITION",
        POINTS_LOST = "POINTS_LOST",
        POINTS_EARNED = "POINTS_EARNED",
        POINTS = "POINTS",
        POINT = "POINT",
        PLAYING = "PLAYING",
        PLAYERS = "PLAYERS",
        PLAYER = "PLAYER",
        PLAYED = "PLAYED",
        PLAY = "PLAY",
        PILES = "PILES",
        PILE = "PILE",
        PICKING = "PICKING",
        PICKED = "PICKED",
        PICK = "PICK",
        PHASES = "PHASES",
        PHASE = "PHASE",
        PAYLOADS = "PAYLOADS",
        PAYLOAD = "PAYLOAD",
        PARTICIPANTS = "PARTICIPANTS",
        PARTICIPANT = "PARTICIPANT",
        OVERTIME = "OVERTIME",
        OVER = "OVER",
        OUTSIDE = "OUTSIDE",
        OUTGOING = "OUTGOING",
        OUT_OF_VIEW = "OUT_OF_VIEW",
        OPTIMIZING = "OPTIMIZING",
        OPTIMIZED = "OPTIMIZED",
        OPTIMIZE = "OPTIMIZE",
        OPTIMAL = "OPTIMAL",
        OOPS = "OOPS",
        OOF = "OOF",
        ON = "ON",
        OFF = "OFF",
        OBTAINING = "OBTAINING",
        OBTAINED = "OBTAINED",
        OBTAIN = "OBTAIN",
        OBJECTS = "OBJECTS",
        OBJECTIVES = "OBJECTIVES",
        OBJECTIVE = "OBJECTIVE",
        OBJECT = "OBJECT",
        NOT_TODAY = "NOT_TODAY",
        NORTHWEST = "NORTHWEST",
        NORTHEAST = "NORTHEAST",
        NORTH = "NORTH",
        NORMAL = "NORMAL",
        NONE = "NONE",
        NO_THANKS = "NO_THANKS",
        NO = "NO",
        NICE_TRY = "NICE_TRY",
        NEXT_UPGRADE = "NEXT_UPGRADE",
        NEXT_TARGETS = "NEXT_TARGETS",
        NEXT_TARGET = "NEXT_TARGET",
        NEXT_ROUND = "NEXT_ROUND",
        NEXT_PLAYERS = "NEXT_PLAYERS",
        NEXT_PLAYER = "NEXT_PLAYER",
        NEXT_PHASE = "NEXT_PHASE",
        NEXT_OBJECTS = "NEXT_OBJECTS",
        NEXT_OBJECTIVE = "NEXT_OBJECTIVE",
        NEXT_OBJECT = "NEXT_OBJECT",
        NEXT_MISSION = "NEXT_MISSION",
        NEXT_LEVEL = "NEXT_LEVEL",
        NEXT_HOSTAGES = "NEXT_HOSTAGES",
        NEXT_HOSTAGE = "NEXT_HOSTAGE",
        NEXT_HEROES = "NEXT_HEROES",
        NEXT_HERO = "NEXT_HERO",
        NEXT_GAME = "NEXT_GAME",
        NEXT_FORM = "NEXT_FORM",
        NEXT_ENEMY = "NEXT_ENEMY",
        NEXT_ENEMIES = "NEXT_ENEMIES",
        NEXT_CHECKPOINT = "NEXT_CHECKPOINT",
        NEXT_ATTEMPT = "NEXT_ATTEMPT",
        NEXT_ALLY = "NEXT_ALLY",
        NEXT_ALLIES = "NEXT_ALLIES",
        NEXT = "NEXT",
        NEW_RECORD = "NEW_RECORD",
        NEW_HIGH_SCORE = "NEW_HIGH_SCORE",
        NEAR = "NEAR",
        MY_MISTAKE = "MY_MISTAKE",
        MOST = "MOST",
        MORE = "MORE",
        MONSTERS = "MONSTERS",
        MONSTER = "MONSTER",
        MONEY = "MONEY",
        MODERATE = "MODERATE",
        MISSIONS = "MISSIONS",
        MISSION_FAILED = "MISSION_FAILED",
        MISSION_ACCOMPLISHED = "MISSION_ACCOMPLISHED",
        MISSION_ABORTED = "MISSION_ABORTED",
        MISSION = "MISSION",
        MIN = "MIN",
        MILD = "MILD",
        MAX = "MAX",
        LOSSES = "LOSSES",
        LOSS = "LOSS",
        LOSERS = "LOSERS",
        LOSER = "LOSER",
        LOCKING = "LOCKING",
        LOCKED = "LOCKED",
        LOCK = "LOCK",
        LOCATION = "LOCATION",
        LOADING = "LOADING",
        LOADED = "LOADED",
        LOAD = "LOAD",
        LIVES = "LIVES",
        LIMITED = "LIMITED",
        LIFE = "LIFE",
        LEVELS = "LEVELS",
        LEVEL_UP = "LEVEL_UP",
        LEVEL_DOWN = "LEVEL_DOWN",
        LEVEL = "LEVEL",
        LESS = "LESS",
        LEFT = "LEFT",
        LEAST = "LEAST",
        LEADERS = "LEADERS",
        LEADER = "LEADER",
        KILLSTREAKS = "KILLSTREAKS",
        KILLSTREAK = "KILLSTREAK",
        KILLS = "KILLS",
        KILL = "KILL",
        JUMPING = "JUMPING",
        JUMP = "JUMP",
        JOINING = "JOINING",
        JOINED = "JOINED",
        JOIN = "JOIN",
        ITEMS = "ITEMS",
        ITEM = "ITEM",
        INVISIBLE = "INVISIBLE",
        INTERACT = "INTERACT",
        INTELLIGENCE = "INTELLIGENCE",
        INSIDE = "INSIDE",
        INNOCENT = "INNOCENT",
        INITIAL_UPGRADE = "INITIAL_UPGRADE",
        INITIAL_TARGETS = "INITIAL_TARGETS",
        INITIAL_TARGET = "INITIAL_TARGET",
        INITIAL_ROUND = "INITIAL_ROUND",
        INITIAL_PLAYERS = "INITIAL_PLAYERS",
        INITIAL_PLAYER = "INITIAL_PLAYER",
        INITIAL_PHASE = "INITIAL_PHASE",
        INITIAL_OBJECTS = "INITIAL_OBJECTS",
        INITIAL_OBJECTIVE = "INITIAL_OBJECTIVE",
        INITIAL_OBJECT = "INITIAL_OBJECT",
        INITIAL_MISSION = "INITIAL_MISSION",
        INITIAL_LEVEL = "INITIAL_LEVEL",
        INITIAL_HOSTAGE = "INITIAL_HOSTAGE",
        INITIAL_HEROES = "INITIAL_HEROES",
        INITIAL_HERO = "INITIAL_HERO",
        INITIAL_GAME = "INITIAL_GAME",
        INITIAL_FORM = "INITIAL_FORM",
        INITIAL_ENEMY = "INITIAL_ENEMY",
        INITIAL_ENEMIES = "INITIAL_ENEMIES",
        INITIAL_CHECKPOINT = "INITIAL_CHECKPOINT",
        INITIAL_ATTEMPT = "INITIAL_ATTEMPT",
        INITIAL_ALLY = "INITIAL_ALLY",
        INITIAL_ALLIES = "INITIAL_ALLIES",
        INITIAL = "INITIAL",
        INCOMING = "INCOMING",
        INCOME = "INCOME",
        IN_VIEW = "IN_VIEW",
        I_TRIED = "I_TRIED",
        I_GIVE_UP = "I_GIVE_UP",
        HUNTING = "HUNTING",
        HUNTERS = "HUNTERS",
        HUNTER = "HUNTER",
        HUNTED = "HUNTED",
        HUNT = "HUNT",
        HUH = "HUH",
        HOSTAGES = "HOSTAGES",
        HOSTAGE = "HOSTAGE",
        HMMM = "HMMM",
        HITTING = "HITTING",
        HIT = "HIT",
        HIGH_SCORES = "HIGH_SCORES",
        HIGH_SCORE = "HIGH_SCORE",
        HIDING = "HIDING",
        HIDE = "HIDE",
        HIDDEN = "HIDDEN",
        HEROES = "HEROES",
        HERO = "HERO",
        HERE = "HERE",
        HELP = "HELP",
        HELLO = "HELLO",
        HEIGHT = "HEIGHT",
        HEARTS = "HEARTS",
        HEART = "HEART",
        HEALING = "HEALING",
        HEALERS = "HEALERS",
        HEALER = "HEALER",
        HEALED = "HEALED",
        HEAL = "HEAL",
        HANDS = "HANDS",
        HAND = "HAND",
        HACKING = "HACKING",
        HACKED = "HACKED",
        HACK = "HACK",
        GUILTY = "GUILTY",
        GREEN = "GREEN",
        GOODBYE = "GOODBYE",
        GOOD_LUCK = "GOOD_LUCK",
        GOOD = "GOOD",
        GOING = "GOING",
        GOALS = "GOALS",
        GOAL = "GOAL",
        GO = "GO",
        GG = "GG",
        GAMES_WON = "GAMES_WON",
        GAMES_LOST = "GAMES_LOST",
        GAMES = "GAMES",
        GAME = "GAME",
        FROZEN = "FROZEN",
        FREEZING = "FREEZING",
        FREEZE = "FREEZE",
        FOUND = "FOUND",
        FORWARD = "FORWARD",
        FORMS = "FORMS",
        FORM = "FORM",
        FOLDING = "FOLDING",
        FOLDED = "FOLDED",
        FOLD = "FOLD",
        FLYING = "FLYING",
        FLY = "FLY",
        FLOWN = "FLOWN",
        FINISHING = "FINISHING",
        FINISHED = "FINISHED",
        FINISH = "FINISH",
        FINDING = "FINDING",
        FIND = "FIND",
        FINAL_UPGRADE = "FINAL_UPGRADE",
        FINAL_TIME = "FINAL_TIME",
        FINAL_TARGETS = "FINAL_TARGETS",
        FINAL_TARGET = "FINAL_TARGET",
        FINAL_ROUND = "FINAL_ROUND",
        FINAL_PLAYERS = "FINAL_PLAYERS",
        FINAL_PLAYER = "FINAL_PLAYER",
        FINAL_PHASE = "FINAL_PHASE",
        FINAL_OBJECTS = "FINAL_OBJECTS",
        FINAL_OBJECTIVE = "FINAL_OBJECTIVE",
        FINAL_OBJECT = "FINAL_OBJECT",
        FINAL_MISSION = "FINAL_MISSION",
        FINAL_LEVEL = "FINAL_LEVEL",
        FINAL_ITEM = "FINAL_ITEM",
        FINAL_HOSTAGES = "FINAL_HOSTAGES",
        FINAL_HOSTAGE = "FINAL_HOSTAGE",
        FINAL_HEROES = "FINAL_HEROES",
        FINAL_HERO = "FINAL_HERO",
        FINAL_GAME = "FINAL_GAME",
        FINAL_FORM = "FINAL_FORM",
        FINAL_ENEMY = "FINAL_ENEMY",
        FINAL_ENEMIES = "FINAL_ENEMIES",
        FINAL_CHECKPOINT = "FINAL_CHECKPOINT",
        FINAL_ATTEMPT = "FINAL_ATTEMPT",
        FINAL_ALLY = "FINAL_ALLY",
        FINAL_ALLIES = "FINAL_ALLIES",
        FINAL = "FINAL",
        FAULTS = "FAULTS",
        FAULT = "FAULT",
        FASTEST = "FASTEST",
        FASTER = "FASTER",
        FAST = "FAST",
        FAR = "FAR",
        FALLING = "FALLING",
        FALLEN = "FALLEN",
        FALL = "FALL",
        FAILURE = "FAILURE",
        FAILING = "FAILING",
        FAILED = "FAILED",
        FACING = "FACING",
        FACES = "FACES",
        FACE = "FACE",
        EXTREME = "EXTREME",
        EXPERIENCE = "EXPERIENCE",
        EXIT = "EXIT",
        EXCELLENT = "EXCELLENT",
        ESCORTING = "ESCORTING",
        ESCORTED = "ESCORTED",
        ESCORT = "ESCORT",
        ENTRANCE = "ENTRANCE",
        ENEMY = "ENEMY",
        ENEMIES = "ENEMIES",
        ELIMINATIONS = "ELIMINATIONS",
        ELIMINATION = "ELIMINATION",
        ELIMINATING = "ELIMINATING",
        ELIMINATED = "ELIMINATED",
        ELIMINATE = "ELIMINATE",
        EAST = "EAST",
        DYING = "DYING",
        DROPPING = "DROPPING",
        DROPPED = "DROPPED",
        DROP = "DROP",
        DRAWN = "DRAWN",
        DRAWING = "DRAWING",
        DRAW = "DRAW",
        DOWNLOADING = "DOWNLOADING",
        DOWNLOADED = "DOWNLOADED",
        DOWNLOAD = "DOWNLOAD",
        DOWN = "DOWN",
        DOMES = "DOMES",
        DOME = "DOME",
        DODGING = "DODGING",
        DODGED = "DODGED",
        DODGE = "DODGE",
        DISTANCES = "DISTANCES",
        DISTANCE = "DISTANCE",
        DISCONNECTING = "DISCONNECTING",
        DISCONNECTED = "DISCONNECTED",
        DISCONNECT = "DISCONNECT",
        DISCARDING = "DISCARDING",
        DISCARDED = "DISCARDED",
        DISCARD = "DISCARD",
        DIE = "DIE",
        DIAMONDS = "DIAMONDS",
        DIAMOND = "DIAMOND",
        DEXTERITY = "DEXTERITY",
        DETECTING = "DETECTING",
        DETECTED = "DETECTED",
        DETECT = "DETECT",
        DESTROYING = "DESTROYING",
        DESTROYED = "DESTROYED",
        DESTROY = "DESTROY",
        DESTABILIZING = "DESTABILIZING",
        DESTABILIZED = "DESTABILIZED",
        DESTABILIZE = "DESTABILIZE",
        DEPTH = "DEPTH",
        DELIVERING = "DELIVERING",
        DELIVERED = "DELIVERED",
        DELIVER = "DELIVER",
        DEFENSE = "DEFENSE",
        DEFENDING = "DEFENDING",
        DEFENDED = "DEFENDED",
        DEFEND = "DEFEND",
        DEFEAT = "DEFEAT",
        DECKS = "DECKS",
        DECK = "DECK",
        DEALT = "DEALT",
        DEALING = "DEALING",
        DEAL = "DEAL",
        DEAD = "DEAD",
        DANGER = "DANGER",
        DAMAGING = "DAMAGING",
        DAMAGED = "DAMAGED",
        DAMAGE = "DAMAGE",
        CURRENT_UPGRADE = "CURRENT_UPGRADE",
        CURRENT_TARGETS = "CURRENT_TARGETS",
        CURRENT_TARGET = "CURRENT_TARGET",
        CURRENT_ROUND = "CURRENT_ROUND",
        CURRENT_PLAYERS = "CURRENT_PLAYERS",
        CURRENT_PLAYER = "CURRENT_PLAYER",
        CURRENT_PHASE = "CURRENT_PHASE",
        CURRENT_OBJECTS = "CURRENT_OBJECTS",
        CURRENT_OBJECTIVE = "CURRENT_OBJECTIVE",
        CURRENT_OBJECT = "CURRENT_OBJECT",
        CURRENT_MISSION = "CURRENT_MISSION",
        CURRENT_LEVEL = "CURRENT_LEVEL",
        CURRENT_HOSTAGES = "CURRENT_HOSTAGES",
        CURRENT_HOSTAGE = "CURRENT_HOSTAGE",
        CURRENT_HEROES = "CURRENT_HEROES",
        CURRENT_HERO = "CURRENT_HERO",
        CURRENT_GAME = "CURRENT_GAME",
        CURRENT_FORM = "CURRENT_FORM",
        CURRENT_ENEMY = "CURRENT_ENEMY",
        CURRENT_ENEMIES = "CURRENT_ENEMIES",
        CURRENT_CHECKPOINT = "CURRENT_CHECKPOINT",
        CURRENT_ATTEMPT = "CURRENT_ATTEMPT",
        CURRENT_ALLY = "CURRENT_ALLY",
        CURRENT_ALLIES = "CURRENT_ALLIES",
        CURRENT = "CURRENT",
        CROUCHING = "CROUCHING",
        CROUCHED = "CROUCHED",
        CROUCH = "CROUCH",
        CRITICAL = "CRITICAL",
        CREDITS = "CREDITS",
        CREDIT = "CREDIT",
        CORRUPTING = "CORRUPTING",
        CORRUPTED = "CORRUPTED",
        CORRUPT = "CORRUPT",
        COOLDOWNS = "COOLDOWNS",
        COOLDOWN = "COOLDOWN",
        CONTROL_POINTS = "CONTROL_POINTS",
        CONTROL_POINT = "CONTROL_POINT",
        CONSTITUTION = "CONSTITUTION",
        CONNECTING = "CONNECTING",
        CONNECTED = "CONNECTED",
        CONNECT = "CONNECT",
        CONGRATULATIONS = "CONGRATULATIONS",
        CONDITION = "CONDITION",
        COME_HERE = "COME_HERE",
        COMBO = "COMBO",
        CLUBS = "CLUBS",
        CLUB = "CLUB",
        CLOUDS = "CLOUDS",
        CLOUD = "CLOUD",
        CHECKPOINTS = "CHECKPOINTS",
        CHECKPOINT = "CHECKPOINT",
        CHASING = "CHASING",
        CHASED = "CHASED",
        CHASE = "CHASE",
        CHARISMA = "CHARISMA",
        CHALLENGE_ACCEPTED = "CHALLENGE_ACCEPTED",
        CENTER = "CENTER",
        CAUTION = "CAUTION",
        CAPTURING = "CAPTURING",
        CAPTURED = "CAPTURED",
        CAPTURE = "CAPTURE",
        BUYING = "BUYING",
        BUY = "BUY",
        BURNT = "BURNT",
        BURNING = "BURNING",
        BURN = "BURN",
        BUILT = "BUILT",
        BUILDING = "BUILDING",
        BUILD = "BUILD",
        BOUGHT = "BOUGHT",
        BOSSES = "BOSSES",
        BOSS = "BOSS",
        BONUSES = "BONUSES",
        BONUS = "BONUS",
        BLUE = "BLUE",
        BLOCKING = "BLOCKING",
        BLOCKED = "BLOCKED",
        BLOCK = "BLOCK",
        BIDS = "BIDS",
        BID = "BID",
        BETTER = "BETTER",
        BEST = "BEST",
        BANNING = "BANNING",
        BANNED = "BANNED",
        BAN = "BAN",
        BAD = "BAD",
        BACKWARD = "BACKWARD",
        AVOIDING = "AVOIDING",
        AVOIDED = "AVOIDED",
        AVOID = "AVOID",
        AVERAGE = "AVERAGE",
        ATTEMPTS = "ATTEMPTS",
        ATTEMPT = "ATTEMPT",
        ATTACKING = "ATTACKING",
        ATTACKED = "ATTACKED",
        ATTACK = "ATTACK",
        ANGLE = "ANGLE",
        AMMUNITION = "AMMUNITION",
        ALLY = "ALLY",
        ALLIES = "ALLIES",
        ALIVE = "ALIVE",
        ALERT = "ALERT",
        ABILITY_TWO = "ABILITY_TWO",
        ABILITY_ONE = "ABILITY_ONE",
        ABILITY = "ABILITY",
        ABILITIES = "ABILITIES"
    }
}
declare global {
    /**
     * abortIf
     * Stops execution of the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.
     * @param condition Specifies whether the execution is stopped.
     */
    function abortIf(condition: boolean): void;
    /**
     * abortIfConditionIsFalse
     * Stops execution of the action list if at least one condition in the condition list is false. If all conditions are true, execution continues with the next action.
     */
    function abortIfConditionIsFalse(): void;
    /**
     * abortIfConditionIsTrue
     * Stops execution of the action list if all conditions in the condition list are true. If any are false, execution continues with the next action.
     */
    function abortIfConditionIsTrue(): void;
    /**
     * allowButton
     * Undoes the effect of the disallow button action for one or more players.
     * @param player The player or players whose button is being reenabled.
     * @param button The logical button that is being reenabled.
     */
    function allowButton(player: Player | Player[], button: Button): void;
    /**
     * applyImpulse
     * Applies an instantaneous change in velocity to the movement of one or more players.
     * @param player The player or players whose velocity will be changed.
     * @param direction The unit direction in which the impulse will be applied. This value is normalized internally.
     * @param speed The magnitude of the change to the velocities of the player or players.
     * @param relative Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.
     * @param motion Specifies whether existing velocity that is counter to direction should first be cancelled out before applying the impulse.
     */
    function applyImpulse(player: Player | Player[], direction: Vector, speed: number, relative: Relativity, motion: Impulse): void;
    /**
     * bigMessage
     * Displays a large message above the reticle that is visible to specific players.
     * @param visibleTo One or more players who will see the message.
     * @param header The message to be displayed.
     */
    function bigMessage(visibleTo: Player | Player[], header: Strings): void;
    /**
     * callSubroutine
     * Pauses execution of the current rule and begins executing a subroutine rule (which is a rule with a subroutine event type). When the subroutine rule finishes, the original rule resumes execution. The subroutine will have access to the same contextual values (such as Event Player) as the original rule.
     * @param subroutine Specifies which subroutine to call. If a rule with a subroutine event type specifies the same subroutine, then it will execute. Otherwise, this action is ignored.
     */
    function callSubroutine(subroutine: string): void;
    /**
     * chaseGlobalVariableAtRate
     * Gradually modifies the value of a global variable at a specific rate. (A global variable is a variable that belongs to the game itself.)
     * @param variable Specifies which global variable to modify gradually.
     * @param destination The value that the global variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.
     * @param rate The amount of change that will happen to the variable's value each second.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
     */
    function chaseGlobalVariableAtRate(variable: string, destination: any, rate: number, reevaluation: ChaseReeval): void;
    /**
     * chaseGlobalVariableOverTime
     * Gradually modifies the value of a global variable over time. (A global variable is a variable that belongs to the game itself.)
     * @param variable Specifies which global variable to modify gradually.
     * @param destination The value that the global variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.
     * @param duration The amount of time, in seconds, over which the variable's value will approach the destination.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
     */
    function chaseGlobalVariableOverTime(variable: string, destination: any, duration: number, reevaluation: ChaseReeval): void;
    /**
     * chasePlayerVariableAtRate
     * Gradually modifies the value of a player variable at a specific rate. (A player variable is a variable that belongs to a specific player.)
     * @param player The player whose variable will gradually change. If multiple players are provided, each of their variables will change independently.
     * @param variable Specifies which of the player's variables to modify gradually.
     * @param destination The value that the player variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.
     * @param rate The amount of change that will happen to the variable's value each second.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
     */
    function chasePlayerVariableAtRate(player: Player | Player[], variable: string, destination: any, rate: number, reevaluation: ChaseReeval): void;
    /**
     * chasePlayerVariableOverTime
     * Gradually modifies the value of a player variable over time. (A player variable is a variable that belongs to a specific player.)
     * @param player The player whose variable will gradually change. If multiple players are provided, each of their variables will change independently.
     * @param variable Specifies which of the player's variables to modify gradually.
     * @param destination The value that the player variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.
     * @param duration The amount of time, in seconds, over which the variable's value will approach the destination.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
     */
    function chasePlayerVariableOverTime(player: Player | Player[], variable: string, destination: any, duration: number, reevaluation: ChaseReeval): void;
    /**
     * clearStatusEffect
     * Clears a status that was applied from a set status action from one or more players.
     * @param player The player or players from whom the status will be removed.
     * @param status The status to be removed from the player or players.
     */
    function clearStatusEffect(player: Player | Player[], status: Status): void;
    /**
     * communicate
     * Causes one or more players to use an emote, voice line, or other equipped communication.
     * @param player The player or players to perform the communication.
     * @param type The type of communication.
     */
    function communicate(player: Player | Player[], type: Communicate): void;
    /**
     * createBeam
     * Creates an in-world beam effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.
     * @param visibleTo One or more players who will be able to see the effect.
     * @param type The type of effect to be created.
     * @param startPosition The effect's start position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.
     * @param endPosition The effect's end position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.
     * @param color The color of the beam to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer. Does not apply to sound effects. Only the "good" and "bad" beam effects can have color applied.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. The effect will keep asking for and using new values from reevaluated inputs.
     */
    function createBeam(visibleTo: Player | Player[], type: Beam, startPosition: Pos, endPosition: Pos, color: Color, reevaluation: EffectReeval): void;
    /**
     * createDummy
     * Adds a new bot to the specified slot on the specified team so long as the slot is available. This bot will only move, fire, or use abilities if executing workshop actions.
     * @param hero The hero that the bot will be. If more than one hero is provided, one will be chosen at random.
     * @param team The team on which to create the bot. The "all" option only works in free-for-all game modes, while the "team" options only work in team-based game modes.
     * @param slot The player slot which will receive the bot (-1 for first available slot). Up to 6 bots may be added to each team, or 12 bots to the free-for-all team, regardless of lobby settings.
     * @param position The initial position where the bot will appear.
     * @param facing The initial direction that the bot will face.
     */
    function createDummy(hero: Hero, team: Team, slot: number, position: Pos, facing: Vector): void;
    /**
     * createEffect
     * Creates an in-world effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.
     * @param visibleTo One or more players who will be able to see the effect.
     * @param type The type of effect to be created.
     * @param color The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer. Does not apply to sound effects.
     * @param position The effect's position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.
     * @param radius The radius of this effect.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated.
     */
    function createEffect(visibleTo: Player | Player[], type: Effect, color: Color, position: Pos, radius: number, reevaluation: EffectReeval): void;
    /**
     * hudText
     * Creates hud text visible to specific players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.
     * @param visibleTo One or more players who will see the hud text.
     * @param header The text to be displayed (can be blank)
     * @param subheader The subheader text to be displayed (can be blank)
     * @param text The body text to be displayed (can be blank)
     * @param location The location on the screen where the text will appear.
     * @param sortOrder The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.
     * @param headerColor The color of the header.
     * @param subheaderColor The color of the subheader.
     * @param textColor The color of the text.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated.
     * @param spectators Whether spectators can see the text or not.
     */
    function hudText(visibleTo: Player | Player[], header: Strings | null, subheader: Strings | null, text: Strings | null, location: Pos, sortOrder: number, headerColor: Color, subheaderColor: Color, textColor: Color, reevaluation: HudReeval, spectators: SpecVisibility): void;
    /**
     * createIcon
     * Creates an in-world icon entity. This icon entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.
     * @param visibleTo One or more players who will be able to see the icon.
     * @param position The icon's position. If this value is a player, then the icon will appear above the player's head. Otherwise, the value is interpreted as a position in the world.
     * @param icon The icon to be created.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. The icon will keep asking for and using new values from reevaluated inputs.
     * @param iconColor The color of the icon to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.
     * @param showWhenOffscreen Should this icon appear even when it is behind you?
     */
    function createIcon(visibleTo: Player | Player[], position: Pos, icon: Icon, reevaluation: IconReeval, iconColor: Color, showWhenOffscreen: boolean): void;
    /**
     * createInWorldText
     * Creates in-world text visible to specific players at a specific position in the world. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.
     * @param visibleTo One or more players who will see the in-world text.
     * @param header The text to be displayed.
     * @param position The text's position. If this value is a player, then the text will appear above the player's head. Otherwise, the value is interpreted as a position in the world.
     * @param scale The text's scale.
     * @param clipping Specifies whether the text can be seen through walls or is instead clipped.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. The text will keep asking for and using new values from reevaluated inputs.
     * @param textColor Specifies the color of the in-world text to use.
     * @param spectators Whether spectators can see the text or not.
     */
    function createInWorldText(visibleTo: Player | Player[], header: Strings, position: Pos, scale: number, clipping: Clip, reevaluation: WorldTextReeval, textColor: Color, spectators: SpecVisibility): void;
    /**
     * damage
     * Applies instantaneous damage to one or more players, possibly killing the players.
     * @param player The player or players who will receive damage.
     * @param damager The player who will receive credit for the damage. A damager of null indicates no player will receive credit.
     * @param amount The amount of damage to apply. This amount may be modified by buffs, debuffs, or armor.
     */
    function damage(player: Player | Player[], damager: Player | Player[], amount: number): void;
    /**
     * declareDraw
     * Instantly ends the match in a draw. This action has no effect in free-for-all modes.
     */
    function declareDraw(): void;
    /**
     * declarePlayerVictory
     * Instantly ends the match with the specific player as the winner. This action only has an effect in free-for-all modes.
     * @param player The winning player.
     */
    function declarePlayerVictory(player: Player | Player[]): void;
    /**
     * declareRoundVictory
     * Declare a team as the current round winner. This only works in the control and elimination game modes
     * @param roundWinningTeam Round winning team
     */
    function declareRoundVictory(roundWinningTeam: Team): void;
    /**
     * declareTeamVictory
     * Instantly ends the match with the specified team as the winner. This action has no effect in free-for-all modes.
     * @param team The winning team.
     */
    function declareTeamVictory(team: Team): void;
    /**
     * destroyAllDummies
     * Removes all dummy bots from the match.
     */
    function destroyAllDummies(): void;
    /**
     * destroyAllEffects
     * Destroys all effect entities created by create effect.
     */
    function destroyAllEffects(): void;
    /**
     * destroyAllHudTexts
     * Destroys all hud text that was created by the create hud text action.
     */
    function destroyAllHudTexts(): void;
    /**
     * destroyAllIcons
     * Destroys all icon entities created by create icon.
     */
    function destroyAllIcons(): void;
    /**
     * destroyAllInWorldText
     * Destroys all in-world text created by create in-world text.
     */
    function destroyAllInWorldText(): void;
    /**
     * destroyDummy
     * Removes the specified dummy bot from the match.
     * @param team The team to remove the dummy bot from. The "all" option only works in free-for-all game modes, while the "team" options only work in team-based game modes.
     * @param slot The slot to remove the dummy bot from.
     */
    function destroyDummy(team: Team, slot: number): void;
    /**
     * destroyEffect
     * Destroys an effect entity that was created by create effect.
     * @param entity Specifies which effect entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.
     */
    function destroyEffect(entity: Player | Player[]): void;
    /**
     * destroyHudText
     * Destroys hud text that was created by create hud text.
     * @param textId Specifies which hud text to destroy. This id may be last text id or a variable into which last text id was earlier stored.
     */
    function destroyHudText(textId: number): void;
    /**
     * destroyIcon
     * Destroys an icon entity that was created by create icon.
     * @param entity Specifies which icon entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.
     */
    function destroyIcon(entity: Player | Player[]): void;
    /**
     * destroyInWorldText
     * Destroys in-world text that was created by create in-world text.
     * @param textId Specifies which in-world text to destroy. This id may be last text id or a variable into which last text id was earlier stored.
     */
    function destroyInWorldText(textId: number): void;
    /**
     * disableAnnouncer
     * Disables game mode announcements from the announcer until reenabled or the match ends.
     */
    function disableAnnouncer(): void;
    /**
     * disableGamemodeCompletion
     * Disables completion of the match from the game mode itself, only allowing the match to be completed by scripting commands.
     */
    function disableGamemodeCompletion(): void;
    /**
     * disableMusic
     * Disables all game mode music until reenabled or the match ends.
     */
    function disableMusic(): void;
    /**
     * disableRespawn
     * Disables automatic respawning for one or more players, only allowing respawning by scripting commands.
     * @param players The player or players whose respawning is affected.
     */
    function disableRespawn(players: Player | Player[]): void;
    /**
     * disableScoring
     * Disables changes to player and team scores from the game mode itself, only allowing scores to be changed by scripting commands.
     */
    function disableScoring(): void;
    /**
     * disableDeathSpectateAllPlayers
     * Undoes the effect of the enable death spectate all players action for or more players.
     * @param player The player or players whose default death spectate behavior is restored.
     */
    function disableDeathSpectateAllPlayers(player: Player | Player[]): void;
    /**
     * disableDeathSpectateTargetHud
     * Undoes the effect of the enable death spectate target hud action for or more players.
     * @param player The player or players who will revert to seeing their own hud while death spectating.
     */
    function disableDeathSpectateTargetHud(player: Player | Player[]): void;
    /**
     * disableInspector
     * Causes the workshop inspector to stop recording new entries. This has the benefit of reducing your script's server load, particularly when modifying arrays.
     */
    function disableInspector(): void;
    /**
     * disallowButton
     * Disables a logical button for one or more players such that pressing it has no effect.
     * @param player The player or players whose button is being disabled.
     * @param button The logical button that is being disabled.
     */
    function disallowButton(player: Player | Player[], button: Button): void;
    /**
     * enableAnnouncer
     * Undoes the effect of the disable built-in game mode announcer action.
     */
    function enableAnnouncer(): void;
    /**
     * enableGamemodeCompletion
     * Undoes the effect of the disable built-in game mode completion action.
     */
    function enableGamemodeCompletion(): void;
    /**
     * enableMusic
     * Undoes the effect of the disable built-in game mode music action.
     */
    function enableMusic(): void;
    /**
     * enableRespawn
     * Undoes the effect of the disable built-in game mode respawning action for one or more players.
     * @param players The player or players whose respawning is affected.
     */
    function enableRespawn(players: Player | Player[]): void;
    /**
     * enableScoring
     * Undoes the effect of the disable built-in game mode scoring action.
     */
    function enableScoring(): void;
    /**
     * enableDeathSpectateAllPlayers
     * Allows one or more players to spectate all players when dead, as opposed to only allies.
     * @param player The player or players who will be allowed to spectate all players.
     */
    function enableDeathSpectateAllPlayers(player: Player | Player[]): void;
    /**
     * enableDeathSpectateTargetHud
     * Causes one or more players to see their spectate target's hud instead of their own while death spectating.
     * @param player The player or players who will begin seeing their spectate targets hud while death spectating.
     */
    function enableDeathSpectateTargetHud(player: Player | Player[]): void;
    /**
     * enableInspector
     * Causes the workshop inspector to resume recording new entries (in case it had been disabled earlier). Enabling recording at specific times may make it easier to debug problematic areas in your logic.
     */
    function enableInspector(): void;
    /**
     * forGlobalVar
     * Denotes the beginning of a series of actions that will execute in a loop, modifying the control variable on each loop. The corresponding end action denotes the end of the loop. If the control variable reaches or passes the range stop value, then the loop exits, and execution jumps to the next action after the end action.
     * @param controlVariable The variable being modified in this loop. It is set to the range start value when the loop begins, and the loop continues until the control variable reaches or passes the range stop value.
     * @param rangeStart The control variable is set to this value when the loop begins.
     * @param rangeStop If the control variable reaches or passes this value, then the loop will exit, and execution jumps to the next action after the end action. Whether this value is considered passed or not is based on whether the step value is negative or positive. If the control variable has already reached or passed this value when the loop begins, then the loop exits.
     * @param step This value is added to the control variable when the end action is reached. If this modification causes the control variable to reach or pass the range stop value, then the loop exits, and execution jumps to the next action after the end action. Otherwise, the loop continues, and execution jumps to the next action after the for action.
     */
    function forGlobalVar(controlVariable: string, rangeStart: number, rangeStop: number, step: number): void;
    /**
     * forPlayerVar
     * Denotes the beginning of a series of actions that will execute in a loop, modifying the control variable on each loop. The corresponding end action denotes the end of the loop. If the control variable reaches or passes the range stop value, then the loop exits, and execution jumps to the next action after the end action.
     * @param controlPlayer The player whose variable is being modified in this loop. If multiple players are specified, the first player is used.
     * @param controlVariable The variable being modified in this loop. It is set to the range start value when the loop begins, and the loop continues until the control variable reaches or passes the range stop value.
     * @param rangeStart The control variable is set to this value when the loop begins.
     * @param rangeStop If the control variable reaches or passes this value, then the loop will exit, and execution jumps to the next action after the end action. Whether this value is considered passed or not is based on whether the step value is negative or positive. If the control variable has already reached or passed this value when the loop begins, then the loop exits.
     * @param step This value is added to the control variable when the end action is reached. If this modification causes the control variable to reach or pass the range stop value, then the loop exits, and execution jumps to the next action after the end action. Otherwise, the loop continues, and execution jumps to the next action after the for action.
     */
    function forPlayerVar(controlPlayer: Player | Player[], controlVariable: string, rangeStart: number, rangeStop: number, step: number): void;
    /**
     * goToAssembleHeroes
     * Returns the match to the assemble heroes phase of the game mode. Only works if the game is in progress.
     */
    function goToAssembleHeroes(): void;
    /**
     * heal
     * Provides an instantaneous heal to one or more players. This heal will not resurrect dead players.
     * @param player The player or players whose health will be restored.
     * @param healer The player who will receive credit for the healing. A healer of null indicates no player will receive credit.
     * @param amount The amount of healing to apply. This amount may be modified by buff or debuffs. Healing is capped by each player's max health.
     */
    function heal(player: Player | Player[], healer: Player | Player[], amount: number): void;
    /**
     * kill
     * Instantly kills one or more players.
     * @param player The player or players who will be killed.
     * @param killer The player who will receive credit for the kill. A killer of null indicates no player will receive credit.
     */
    function kill(player: Player | Player[], killer: Player | Player[]): void;
    /**
     * loop
     * Restarts the action list from the beginning. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.
     */
    function loop(): void;
    /**
     * loopIf
     * Restarts the action list from the beginning if this action's condition evaluates to true. If it does not, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.
     * @param condition Specifies whether the loop will occur.
     */
    function loopIf(condition: boolean): void;
    /**
     * loopIfConditionIsFalse
     * Restarts the action list from the beginning if at least one condition in the condition list is false. If all conditions are true, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.
     */
    function loopIfConditionIsFalse(): void;
    /**
     * loopIfConditionIsTrue
     * Restarts the action list from the beginning if every condition in the condition list is true. If any are false, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.
     */
    function loopIfConditionIsTrue(): void;
    /**
     * modifyGlobalVar
     * Modifies the value of a global variable, which is a variable that belongs to the game itself.
     * @param variable The global variable to modify.
     * @param operation The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.
     * @param value The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.
     */
    function modifyGlobalVar(variable: string, operation: Operation, value: any): void;
    /**
     * modifyGlobalVarAtIndex
     * Modifies the value of a global variable at an index, which is a variable that belongs to the game itself.
     * @param variable The global variable to modify.
     * @param index The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.
     * @param operation The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.
     * @param value The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.
     */
    function modifyGlobalVarAtIndex(variable: string, index: number, operation: Operation, value: any): void;
    /**
     * addToScore
     * Modifies the score (kill count) of one or more players. This action only has an effect in free-for-all modes.
     * @param player The player or players whose score will change.
     * @param score The amount the score will increase or decrease. If positive, the score will increase. If negative, the score will decrease.
     */
    function addToScore(player: Player | Player[], score: number): void;
    /**
     * modifyPlayerVar
     * Modifies the value of a player variable, which is a variable that belongs to a specific player.
     * @param player The player whose variable will be modified. If multiple players are provided, each of their variables will be set.
     * @param variable Specifies which of the player's variables to modify.
     * @param operation The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.
     * @param value The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.
     */
    function modifyPlayerVar(player: Player | Player[], variable: string, operation: Operation, value: any): void;
    /**
     * modifyPlayerVarAtIndex
     * Modifies the value of a player variable at an index, which is a variable that belongs to a specific player.
     * @param player The player whose variable will be modified. If multiple players are provided, each of their variables will be set.
     * @param variable Specifies which of the player's variables to modify.
     * @param index The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.
     * @param operation The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.
     * @param value The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.
     */
    function modifyPlayerVarAtIndex(player: Player | Player[], variable: string, index: number, operation: Operation, value: any): void;
    /**
     * addToTeamScore
     * Modifies the score of one or both teams. This action has no effect in free-for-all modes or modes without a team score.
     * @param team The team or teams whose score will be changed.
     * @param score The amount the score will increase or decrease. If positive, the score will increase. If negative, the score will decrease.
     */
    function addToTeamScore(team: Team, score: number): void;
    /**
     * pauseMatchTime
     * Pauses the match time. Players, objective logic, and game mode advancement criteria are unaffected by the pause.
     */
    function pauseMatchTime(): void;
    /**
     * playEffect
     * Plays an effect at a position in the world. The lifetime of this effect is short, so it does not need to be updated or destroyed.
     * @param visibleTo One or more players who will be able to see the effect.
     * @param type The type of effect to be created.
     * @param color The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.
     * @param position The effect's position. If this value is a player, then the effect will play at the player's position. Otherwise, the value is interpreted as a position in the world.
     * @param radius The effect's radius in meters.
     */
    function playEffect(visibleTo: Player | Player[], type: DynamicEffect, color: Color, position: Pos, radius: number): void;
    /**
     * preloadHero
     * Preemptively loads the specified hero or heroes into memory using the skins of the specified player or players, available memory permitting. Useful whenever rapid hero changing is possible and the next hero is known.
     * @param player The player or players who will begin preloading a hero or heroes. Only one preload hero action will be active at a time for a given player.
     * @param hero The hero or heroes to begin preloading for the specified player or players. When multiple heroes are specified in an array, the heroes towards the beginning of the array are prioritized.
     */
    function preloadHero(player: Player | Player[], hero: Hero): void;
    /**
     * forceButtonPress
     * Forces one or more players to press a button virtually for a single frame.
     * @param player The player or players for whom the virtual button input will be forced.
     * @param button The button to be pressed.
     */
    function forceButtonPress(player: Player | Player[], button: Button): void;
    /**
     * resetHeroAvailability
     * Restores the list of heroes available to one or more players to the list specified by the game settings. If a player's current hero becomes unavailable, the player is forced to choose a different hero and respawn at an appropriate spawn location.
     * @param player The player or players whose hero list is being reset.
     */
    function resetHeroAvailability(player: Player | Player[]): void;
    /**
     * respawn
     * Respawns one or more players at an appropriate spawn location with full health, even if they were already alive.
     * @param player The player or players to respawn.
     */
    function respawn(player: Player | Player[]): void;
    /**
     * resurrect
     * Instantly resurrects one or more players at the location they died with no transition.
     * @param player The player or players who will be resurrected.
     */
    function resurrect(player: Player | Player[]): void;
    /**
     * setAbilityOneEnabled
     * Enables or disables ability 1 for one or more players.
     * @param player The player or players whose access to ability 1 is affected.
     * @param enabled Specifies whether the player or players are able to use ability 1. Expects a boolean value such as true, false, or compare.
     */
    function setAbilityOneEnabled(player: Player | Player[], enabled: boolean): void;
    /**
     * setAbilityTwoEnabled
     * Enables or disables ability 2 for one or more players.
     * @param player The player or players whose access to ability 2 is affected.
     * @param enabled Specifies whether the player or players are able to use ability 2. Expects a boolean value such as true, false, or compare.
     */
    function setAbilityTwoEnabled(player: Player | Player[], enabled: boolean): void;
    /**
     * setAimSpeed
     * Sets the aim speed of one or more players to a percentage of their normal aim speed.
     * @param player The player or players whose aim speed will be set.
     * @param turnSpeedPercent The percentage of normal aim speed to which the player or players will set their aim speed.
     */
    function setAimSpeed(player: Player | Player[], turnSpeedPercent: number): void;
    /**
     * setDamageDealt
     * Sets the damage dealt of one or more players to a percentage of their raw damage dealt.
     * @param player The player or players whose damage dealt will be set.
     * @param damageDealtPercent The percentage of raw damage dealt to which the player or players will set their damage dealt.
     */
    function setDamageDealt(player: Player | Player[], damageDealtPercent: number): void;
    /**
     * setDamageReceived
     * Sets the damage received of one or more players to a percentage of their raw damage received.
     * @param player The player or players whose damage received will be set.
     * @param damageReceivedPercent The percentage of raw damage received to which the player or players will set their damage received.
     */
    function setDamageReceived(player: Player | Player[], damageReceivedPercent: number): void;
    /**
     * setFacing
     * Sets the facing of one or more players to the specified direction.
     * @param player The player or players whose facing will be set.
     * @param direction The unit direction in which the player or players will face. This value is normalized internally.
     * @param relative Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.
     */
    function setFacing(player: Player | Player[], direction: Vector, relative: Relativity): void;
    /**
     * setGlobalVar
     * Stores a value into a global variable, which is a variable that belongs to the game itself.
     * @param variable Specifies which global variable to store the value into.
     * @param value The value that will be stored.
     */
    function setGlobalVar(variable: string, value: any): void;
    /**
     * setGlobalVarAtIndex
     * Finds or creates an array on a global variable, which is a variable that belongs to the game itself, then stores a value in the array at the specified index.
     * @param variable Specifies which global variable's value is the array to modify. If the variable's value is not an array, then its value becomes an empty array.
     * @param index The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.
     * @param value The value that will be stored into the array.
     */
    function setGlobalVarAtIndex(variable: string, index: number, value: any): void;
    /**
     * setGravity
     * Sets the movement gravity for one or more players to a percentage regular movement gravity.
     * @param player The player or players whose movement gravity will be set.
     * @param gravityPercent The percentage of regular movement gravity to which the player or players will set their personal movement gravity.
     */
    function setGravity(player: Player | Player[], gravityPercent: number): void;
    /**
     * setHealingDealt
     * Sets the healing dealt of one or more players to a percentage of their raw healing dealt.
     * @param player The player or players whose healing dealt will be set.
     * @param healingDealtPercent
     */
    function setHealingDealt(player: Player | Player[], healingDealtPercent: number): void;
    /**
     * setHealingReceived
     * Sets the healing received of one or more players to a percentage of their raw healing received.
     * @param player The player or players whose healing received will be set.
     * @param healingReceivedPercent The percentage of raw healing received to which the player or players will set their healing received.
     */
    function setHealingReceived(player: Player | Player[], healingReceivedPercent: number): void;
    /**
     * setInvisibility
     * Causes one or more players to become invisible to either all other players or just enemies.
     * @param player The player or players who will become invisible.
     * @param invisibleTo Specifies for whom the player or players will be invisible.
     */
    function setInvisibility(player: Player | Player[], invisibleTo: Invis): void;
    /**
     * setMatchTime
     * Sets the current match time (which is visible at the top of the screen). This can be used to shorten or extend the duration of a match or to change the duration of assemble heroes or setup.
     * @param time The match time in seconds.
     */
    function setMatchTime(time: number): void;
    /**
     * setMaxHealth
     * Sets the max health of one or more players as a percentage of their max health. This action will ensure that a player's current health will not exceed the new max health.
     * @param player The player or players whose max health will be set.
     * @param healthPercent The percentage of raw max health to which the player or players will set their max health.
     */
    function setMaxHealth(player: Player | Player[], healthPercent: number): void;
    /**
     * setMoveSpeed
     * Sets the move speed of one or more players to a percentage of their raw move speed.
     * @param player The player or players whose move speed will be set.
     * @param moveSpeedPercent The percentage of raw move speed to which the player or players will set their move speed.
     */
    function setMoveSpeed(player: Player | Player[], moveSpeedPercent: number): void;
    /**
     * setObjectiveDescription
     * Sets the text at the top center of the screen that normally describes the objective to a message visible to specific players.
     * @param visibleTo One or more players who will see the message.
     * @param header The message to be displayed.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. The message will keep asking for and using new values from reevaluated inputs.
     */
    function setObjectiveDescription(visibleTo: Player | Player[], header: Strings, reevaluation: HudReeval): void;
    /**
     * setAllowedHeroes
     * Sets the list of heroes available to one or more players. If a player's current hero becomes unavailable, the player is forced to choose a different hero and respawn at an appropriate spawn location.
     * @param player The player or players whose hero list is being set.
     * @param hero The hero or heroes that will be available. If no heroes are provided, the action has no effect.
     */
    function setAllowedHeroes(player: Player | Player[], hero: Hero): void;
    /**
     * setScore
     * Sets the score (kill count) of one or more players. This action only has an effect in free-for-all modes.
     * @param player The player or players whose score will be set.
     * @param score The score that will be set.
     */
    function setScore(player: Player | Player[], score: number): void;
    /**
     * setPlayerVar
     * Stores a value into a player variable, which is a variable that belongs to a specific player.
     * @param player The player whose variable will be set. If multiple players are provided, each of their variables will be set.
     * @param variable Specifies which of the player's variables to store the value into.
     * @param value The value that will be stored.
     */
    function setPlayerVar(player: Player | Player[], variable: string, value: any): void;
    /**
     * setPlayerVarAtIndex
     * Finds or creates an array on a player variable, which is a variable that belongs to a specific player, then stores a value in the array at the specified index.
     * @param player The player whose variable will be modified. If multiple players are provided, each of their variables will be set.
     * @param variable Specifies which player variable's value is the array to modify. If the variable's value is not an array, then its value becomes an empty array.
     * @param index The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.
     * @param value The value that will be stored into the array.
     */
    function setPlayerVarAtIndex(player: Player | Player[], variable: string, index: number, value: any): void;
    /**
     * setPrimaryFireEnabled
     * Enables or disables primary fire for one or more players.
     * @param player The player or players whose access to primary fire is affected.
     * @param enabled Specifies whether the player or players are able to use primary fire. Expects a boolean value such as true, false, or compare.
     */
    function setPrimaryFireEnabled(player: Player | Player[], enabled: boolean): void;
    /**
     * setProjectileGravity
     * Sets the projectile gravity for one or more players to a percentage of regular projectile gravity.
     * @param player The player or players whose projectile gravity will be set.
     * @param projectileGravityPercent The percentage of regular projectile gravity to which the player or players will set their personal projectile gravity.
     */
    function setProjectileGravity(player: Player | Player[], projectileGravityPercent: number): void;
    /**
     * setProjectileSpeed
     * Iets the projectile speed for one or more players to a percentage of projectile speed.
     * @param player The player or players whose projectile speed will be set.
     * @param projectileSpeedPercent The percentage of regular projectile speed to which the player or players will set their personal projectile speed.
     */
    function setProjectileSpeed(player: Player | Player[], projectileSpeedPercent: number): void;
    /**
     * setRespawnTime
     * Sets the duration between death and respawn for one or more players. For players that are already dead when this action is executed, the change takes effect on their next death.
     * @param player The player or players whose respawn max time is being defined.
     * @param time The duration between death and respawn in seconds.
     */
    function setRespawnTime(player: Player | Player[], time: number): void;
    /**
     * setSecondaryFireEnabled
     * Enables or disables secondary fire for one or more players.
     * @param player The player or players whose access to secondary fire is affected.
     * @param enabled Specifies whether the player or players are able to use secondary fire. Expects a boolean value such as true, false, or compare.
     */
    function setSecondaryFireEnabled(player: Player | Player[], enabled: boolean): void;
    /**
     * setSlowMotion
     * Sets the simulation rate for the entire game, including all players, projectiles, effects, and game mode logic.
     * @param speedPercent The simulation rate as a percentage of normal speed. Only rates up to 100% are allowed.
     */
    function setSlowMotion(speedPercent: number): void;
    /**
     * setStatusEffect
     * Applies a status to one or more players. This status will remain in effect for the specified duration or until it is cleared by the clear status action.
     * @param player The player or players to whom the status will be applied.
     * @param assister Specifies a player to be awarded assist credit should the affected player or players be killed while the status is in effect. An assister of null indicates no player will receive credit.
     * @param status The status to be applied to the player or players. These behave similarly to statuses applied from hero abilities.
     * @param duration The duration of the status in seconds. To have a status that lasts until a clear status action is executed, provide an arbitrarily long duration such as 9999.
     */
    function setStatusEffect(player: Player | Player[], assister: Player | Player[] | null, status: Status, duration: number): void;
    /**
     * setTeamScore
     * Sets the score for one or both teams. This action has no effect in free-for-all modes or modes without a team score.
     * @param team The team or teams whose score will be set.
     * @param score The score that will be set.
     */
    function setTeamScore(team: Team, score: number): void;
    /**
     * setUltEnabled
     * Enables or disables the ultimate ability of one or more players.
     * @param player The player or players whose access to their ultimate ability is affected.
     * @param enabled Specifies whether the player or players are able to use their ultimate ability. Expects a boolean value such as true, false, or compare.
     */
    function setUltEnabled(player: Player | Player[], enabled: boolean): void;
    /**
     * setUltCharge
     * Sets the ultimate charge for one or more players as a percentage of maximum charge.
     * @param player The player or players whose ultimate charge will be set.
     * @param chargePercent The percentage of maximum charge.
     */
    function setUltCharge(player: Player | Player[], chargePercent: number): void;
    /**
     * skip
     * Skips execution of a certain number of actions in the action list.
     * @param numberOfActions The number of actions to skip, not including this action.
     */
    function skip(numberOfActions: number): void;
    /**
     * skipIf
     * Skips execution of a certain number of actions in the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.
     * @param condition Specifies whether the skip occurs.
     * @param numberOfActions The number of actions to skip, not including this action.
     */
    function skipIf(condition: boolean, numberOfActions: number): void;
    /**
     * smallMessage
     * Displays a small message beneath the reticle that is visible to specific players.
     * @param visibleTo One or more players who will see the message.
     * @param header The message to be displayed.
     */
    function smallMessage(visibleTo: Player | Player[], header: Strings): void;
    /**
     * startAcceleration
     * Starts accelerating one or more players in a specified direction.
     * @param player The player or players that will begin accelerating.
     * @param direction The unit direction in which the acceleration will be applied. This value is normalized internally.
     * @param rate The rate of acceleration in meters per second squared. This value may need to be quite high in order to overcome gravity and/or surface friction.
     * @param maxSpeed The speed at which acceleration will stop for the player or players. It may not be possible to reach this speed due to gravity and/or surface friction.
     * @param relative Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
     */
    function startAcceleration(player: Player | Player[], direction: Vector, rate: number, maxSpeed: number, relative: Relativity, reevaluation: AccelReeval): void;
    /**
     * setCamera
     * Places your camera at a location, facing a direction.
     * @param player The player or players whose cameras will be placed at the location.
     * @param eyePosition The position of the camera. Reevaluates continuously.
     * @param lookAtPosition Where the camera looks at. Reevaluates continuously.
     * @param blendSpeed How fast to blend the camera speed as positions change. 0 means do not blend at all, and just change positions instantly.
     */
    function setCamera(player: Player | Player[], eyePosition: Pos, lookAtPosition: Pos, blendSpeed: number): void;
    /**
     * startDamageModification
     * Starts modifying how much damage one or more receivers will receive from one or more damagers. A reference to this damage modification can be obtained from the last damage modification id value. This action will fail if too many damage modifications have been started.
     * @param receivers The player or players whose incoming damage will be modified (when attacked by the damagers).
     * @param damagers The player or players whose outgoing damage will be modified (when attacking the receivers).
     * @param damagePercent The percentage of damage that will apply to receivers when attacked by damagers.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
     */
    function startDamageModification(receivers: Player | Player[], damagers: Player | Player[], damagePercent: number, reevaluation: DamageReeval): void;
    /**
     * startDamageOverTime
     * Starts an instance of damage over time. This dot will persist for the specified duration or until stopped by script. To obtain a reference to this dot, use the last damage over time id value.
     * @param player One or more players who will receive the damage over time.
     * @param damager The player who will receive credit for the damage. A damager of null indicates no player will receive credit.
     * @param duration The duration of the damage over time in seconds. To have a dot that lasts until stopped by script, provide an arbitrarily long duration such as 9999.
     * @param damagePerSecond The damage per second for the damage over time.
     */
    function startDamageOverTime(player: Player | Player[], damager: Player | Player[], duration: number, damagePerSecond: number): any;
    /**
     * startFacing
     * Starts turning one or more players to face the specified direction.
     * @param player The player or players who will start turning.
     * @param direction The unit direction in which the player or players will eventually face. This value is normalized internally.
     * @param turnRate The turn rate in degrees per second.
     * @param relative Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
     */
    function startFacing(player: Player | Player[], direction: Vector, turnRate: number, relative: Relativity, reevaluation: FacingReeval): void;
    /**
     * startForcingHero
     * Starts forcing one or more players to be a specific hero and, if necessary, respawns them immediately in their current location. This will be the only hero available to the player or players until the stop forcing player to be hero action is executed.
     * @param player The player or players who will be forced to be a specific hero.
     * @param hero The hero that the player or players will be forced to be.
     */
    function startForcingHero(player: Player | Player[], hero: Hero): void;
    /**
     * startForcingSpawn
     * Forces a team to spawn in a particular spawn room, regardless of the spawn room normally used by the game mode. This action only has an effect in assault, hybrid, and payload maps.
     * @param team The team whose spawn room will be forced.
     * @param room The number of the spawn room to be forced. 0 is the first spawn room, 1 the second, and 2 is the third. If the specified spawn room does not exist, players will use the normal spawn room.
     */
    function startForcingSpawn(team: Team, room: number): void;
    /**
     * startForcingThrottle
     * Defines minimum and maximum movement input values for one or more players, possibly forcing or preventing movement.
     * @param player The player or players whose movement will be forced or limited.
     * @param minForward Sets the minimum run forward amount. 0 allows the player or players to stop while 1 forces full forward movement.
     * @param maxForward Sets the maximum run forward amount. 0 prevents the player or players from moving forward while 1 allows full forward movement.
     * @param minBackward Sets the minimum run backward amount. 0 allows the player or players to stop while 1 forces full backward movement.
     * @param maxBackward Sets the maximum run backward amount. 0 prevents the player or players from moving backward while 1 allows full backward movement.
     * @param minSideways Sets the minimum run sideways amount. 0 allows the player or players to stop while 1 forces full sideways movement.
     * @param maxSideways Sets the maximum run sideways amount. 0 prevents the player or players from moving SIDEWAYS while 1 allows full sideways movement.
     */
    function startForcingThrottle(player: Player | Player[], minForward: number, maxForward: number, minBackward: number, maxBackward: number, minSideways: number, maxSideways: number): void;
    /**
     * startHealOverTime
     * Starts an instance of heal over time. This hot will persist for the specified duration or until stopped by script. To obtain a reference to this hot, use the last heal over time id value.
     * @param player One or more players who will receive the heal over time.
     * @param healer The player who will receive credit for the healing. A healer of null indicates no player will receive credit.
     * @param duration The duration of the heal over time in seconds. To have a hot that lasts until stopped by script, provide an arbitrarily long duration such as 9999.
     * @param healingPerSecond The healing per second for the heal over time.
     */
    function startHealOverTime(player: Player | Player[], healer: Player | Player[], duration: number, healingPerSecond: number): any;
    /**
     * startHealingModification
     * Starts modifying how much healing one or more receivers will receive from one or more healers. A reference to this healing modification can be obtained from the last healing modification id value. This action will fail if too many healing modifications have been started.
     * @param receivers The player or players whose incoming healing will be modified (when healed by the healers).
     * @param healers The player or players whose outgoing healing will be modified (when healing the receivers).
     * @param healingPercent The percentage of healing that will apply to receivers when healed by healers.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
     */
    function startHealingModification(receivers: Player | Player[], healers: Player | Player[], healingPercent: number, reevaluation: HealingReeval): void;
    /**
     * startForcingButton
     * Forces one or more players to hold a button virtually until stopped by the stop holding button action.
     * @param player The player or players who are holding a button virtually.
     * @param button The logical button that is being held virtually.
     */
    function startForcingButton(player: Player | Player[], button: Button): void;
    /**
     * startRule
     * Begins simultaneous execution of a subroutine rule (which is a rule with a Subroutine event type). Execution of the original rule continues uninterrupted. The subroutine will have access to the same contextual values (such as Event Player) as the original rule.
     * @param subroutine Specifies which subroutine to start. If a rule with a subroutine event type specifies the same subroutine, then it will execute. Otherwise, this action is ignored.
     * @param ifAlreadyExecuting Determines what should happen if the rule specified by the subroutine is already executing on the same player or global entity.
     */
    function startRule(subroutine: string, ifAlreadyExecuting: AsyncBehavior): void;
    /**
     * startThrottleInDirection
     * Sets or adds to the throttle (directional input control) of a player or players such that they begin moving in a particular direction. Any previous throttle in direction is cancelled.
     * @param player The player or players whose throttle will be set or added to.
     * @param direction The unit direction in which the throttle will be set or added to. This value is normalized internally.
     * @param magnitude The amount of throttle (or change to throttle). A value of 1 denotes full throttle.
     * @param relative Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.
     * @param behavior Specifies whether preexisting throttle is replaced or added to.
     * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. This aciton will keep asking for and using new values from reevaluated inputs.
     */
    function startThrottleInDirection(player: Player | Player[], direction: Vector, magnitude: number, relative: Relativity, behavior: Throttle, reevaluation: ThrottleReeval): void;
    /**
     * startTransformingThrottle
     * Starts transforming (scaling and rotating) the throttle (directional input control) of a player or players. Cancels any existing start transforming throttle behavior.
     * @param player The player or players whose throttle will be transformed.
     * @param xAxisScalar The player or players will have their throttle X axis (left to right) multiplied by this value before the throttle is rotated to its new relative direction. This value is evaluated continuously (meaning it updates every frame).
     * @param yAxisScalar The player or players will have their throttle Y axis (front to back) multiplied by this value before the throttle is rotated to its new relative direction. This value is evaluated continuously (meaning it updates every frame).
     * @param relativeDirection After the axis scalars are applied, the player or players will have their throttle transformed so that it is relative to this unit direction vector. For example, to make the throttle camera relative, provide the direction that the camera is facing. This value is evaluated continuously (meaning it updates every frame) and normalized internally.
     */
    function startTransformingThrottle(player: Player | Player[], xAxisScalar: number, yAxisScalar: number, relativeDirection: Vector): void;
    /**
     * stopAcceleration
     * Stops the acceleration started by the start accelerating action for one or more players.
     * @param player The player or players who will stop accelerating.
     */
    function stopAcceleration(player: Player | Player[]): void;
    /**
     * stopAllDamageModifications
     * Stops all damage modifications that were started using the start damage modification action.
     */
    function stopAllDamageModifications(): void;
    /**
     * stopAllHealingModifications
     * Stops all healing modifications that were started using the start healing modification action.
     */
    function stopAllHealingModifications(): void;
    /**
     * stopAllDamageOverTime
     * Stops all damage over time started by start damage over time for one or more players.
     * @param player The player or players whose scripted damage over time will stop.
     */
    function stopAllDamageOverTime(player: Player | Player[]): any;
    /**
     * stopAllHealOverTime
     * Stops all heal over time started by start heal over time for one or more players.
     * @param player The player or players whose scripted heal over time will stop.
     */
    function stopAllHealOverTime(player: Player | Player[]): any;
    /**
     * stopCamera
     * None
     * @param player The player or players whose cameras will be put back to the default view.
     */
    function stopCamera(player: Player | Player[]): void;
    /**
     * stopChasingGlobalVariable
     * Stops an in-progress chase of a global variable, leaving it at its current value.
     * @param variable Specifies which global variable to stop modifying.
     */
    function stopChasingGlobalVariable(variable: string): void;
    /**
     * stopChasingPlayerVariable
     * Stops an in-progress chase of a player variable, leaving it at its current value.
     * @param player The player whose variable will stop changing. If multiple players are provided, each of their variables will stop changing.
     * @param variable Specifies which of the player's variables to stop modifying.
     */
    function stopChasingPlayerVariable(player: Player | Player[], variable: string): void;
    /**
     * stopDamageModification
     * Stops a damage modification that was started by the start damage modification action.
     * @param damageModification Specifies which damage modification instance to stop. This id may be last damage modification id or a variable into which last damage modification id was earlier stored.
     */
    function stopDamageModification(damageModification: number): void;
    /**
     * stopDamageOverTime
     * Stops an instance of damage over time started by the start damage over time action.
     * @param damageOverTimeId Specifies which damage over time instance to stop. This id may be last damage over time id or a variable into which last damage over time id was earlier stored.
     */
    function stopDamageOverTime(damageOverTimeId: number): any;
    /**
     * stopFacing
     * Stops the turning started by the start facing action for one or more players.
     * @param player The player or players who will stop turning.
     */
    function stopFacing(player: Player | Player[]): void;
    /**
     * stopForcingCurrentHero
     * Stops forcing one or more players to be a specific hero. This will not respawn the player or players, but it will restore their hero availability the next time they go to select a hero.
     * @param player The player or players who will no longer be forced to be a specific hero.
     */
    function stopForcingCurrentHero(player: Player | Player[]): void;
    /**
     * stopForcingSpawn
     * Undoes the effect of the start forcing spawn room action for the specified team.
     * @param team The team that will resume using their normal spawn room.
     */
    function stopForcingSpawn(team: Team): void;
    /**
     * stopForcingThrottle
     * Undoes the effect of the start forcing throttle action for one or more players.
     * @param player The player or players whose movement input will be restored.
     */
    function stopForcingThrottle(player: Player | Player[]): void;
    /**
     * stopHealOverTime
     * Stops an instance of heal over time started by the start heal over time action.
     * @param healOverTimeId Specifies which heal over time instance to stop. This id may be last heal over time id or a variable into which last heal over time id was earlier stored.
     */
    function stopHealOverTime(healOverTimeId: number): any;
    /**
     * stopHealingModification
     * Stops a healing modification that was started by the start healing modification action.
     * @param healingModificationId Specifies which healing modification instance to stop. This id may be last healing modification id or a variable into which last healing modification id was earlier stored.
     */
    function stopHealingModification(healingModificationId: number): void;
    /**
     * stopForcingButton
     * Undoes the effect of the start holding button action for one or more players.
     * @param player The player or players who are no longer holding a button virtually.
     * @param button The logical button that is no longer being held virtually.
     */
    function stopForcingButton(player: Player | Player[], button: Button): void;
    /**
     * stopThrottleInDirection
     * Cancels the behavior caused by start throttle in direction.
     * @param player The player or players whose default throttle control will be restored.
     */
    function stopThrottleInDirection(player: Player | Player[]): void;
    /**
     * stopTransformingThrottle
     * Stops the throttle transform started by start transforming throttle for one or more players.
     * @param player The player or players whose throttle will stop being transformed.
     */
    function stopTransformingThrottle(player: Player | Player[]): void;
    /**
     * teleport
     * Teleports one or more players to the specified position.
     * @param player The player or players to teleport.
     * @param position The position to which the player or players will teleport. If a player is provided, the position of the player is used.
     */
    function teleport(player: Player | Player[], position: Pos): void;
    /**
     * unpauseMatchTime
     * Unpauses the match time.
     */
    function unpauseMatchTime(): void;
    /**
     * wait
     * Pauses the execution of the action list. Unless the wait is interrupted, the remainder of the actions will execute after the pause.
     * @param time The duration of the pause.
     * @param waitBehavior Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted. Otherwise, the condition list will determine if and when the action list will abort or restart.
     */
    function wait(time: number, waitBehavior: Wait): void;
    /**
     * abs
     * The absolute value of the specified value.
     * @param value The real number value whose absolute value will be computed.
     */
    function abs(value: number): number;
    /**
     * add
     * The sum of two numbers or vectors.
     * @param value The left-hand operand. May be any value that results in a number or a vector.
     * @param value2 The right-hand operand. May be any value that results in a number or a vector.
     */
    function add(value: number | Vector, value2: number | Vector): number | Vector;
    /**
     * getDeadPlayers
     * An array containing all dead players on a team or in the match.
     * @param team The team or teams from which players may come.
     */
    function getDeadPlayers(team: Team): Player[];
    /**
     * getLivingPlayers
     * An array containing all living players on a team or in the match.
     * @param team The team or teams from which players may come.
     */
    function getLivingPlayers(team: Team): Player[];
    /**
     * getPlayers
     * An array containing all players on a team or in the match.
     * @param team The team or teams from which players may come.
     */
    function getPlayers(team: Team): Player[];
    /**
     * getPlayersNotOnObjective
     * An array containing all players occupying neither a payload nor a control point (either on a team or in the match).
     * @param team The team or teams from which players may come.
     */
    function getPlayersNotOnObjective(team: Team): Player[];
    /**
     * getPlayersOnObjective
     * An array containing all players occupying a payload or control point (either on a team or in the match).
     * @param team The team or teams from which players may come.
     */
    function getPlayersOnObjective(team: Team): Player[];
    /**
     * getAllowedHeroes
     * The array of heroes from which the specified player is currently allowed to select.
     * @param player The player whose allowed heroes to acquire.
     */
    function getAllowedHeroes(player: Player | Player[]): Hero[];
    /**
     * getAltitude
     * The player's current height in meters above a surface. Results in 0 whenever the player is on a surface.
     * @param player The player whose altitude to acquire.
     */
    function getAltitude(player: Player | Player[]): number;
    /**
     * and
     * Whether both of the two inputs are true (or equivalent to true).
     * @param value One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.
     * @param value2 One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.
     */
    function and(value: boolean, value2: boolean): number;
    /**
     * angleBetweenVectors
     * The angle in degrees between two directional vectors (no normalization required).
     * @param vector One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.
     * @param vector2 One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.
     */
    function angleBetweenVectors(vector: Vector, vector2: Vector): number;
    /**
     * angleDifference
     * The difference in degrees between two angles. After the angles are wrapped to be within +/- 180 of each other, the result is positive if the second angle is greater than the first angle. Otherwise, the result is zero or negative.
     * @param angle One of the two angles between which to measure the resulting angle.
     * @param angle2 One of the two angles between which to measure the resulting angle.
     */
    function angleDifference(angle: number, angle2: number): number;
    /**
     * appendToArray
     * A copy of an array with one or more values appended to the end.
     * @param array The array to which to append.
     * @param value The value to append to the end of the array. If this value is itself an array, each element is appended.
     */
    function appendToArray(array: any[], value: any): void;
    /**
     * acosDeg
     * Arccosine in degrees of the specified value.
     * @param value Input value for the function.
     */
    function acosDeg(value: number): number;
    /**
     * acos
     * Arccosine in radians of the specified value.
     * @param value Input value for the function.
     */
    function acos(value: number): number;
    /**
     * asinDeg
     * Arcsine in degrees of the specified value.
     * @param value Input value for the function.
     */
    function asinDeg(value: number): number;
    /**
     * asin
     * Arcsine in radians of the specified value.
     * @param value Input value for the function.
     */
    function asin(value: number): number;
    /**
     * atanTwoDeg
     * Arctangent in degrees of the specified numerator and denominator (often referred to as atan2).
     * @param numerator Numerator input for the function.
     * @param denominator Denominator input for the function.
     */
    function atanTwoDeg(numerator: number, denominator: number): number;
    /**
     * atanTwo
     * Arctangent in radians of the specified numerator and denominator (often referred to as atan2).
     * @param numerator Numerator input for the function.
     * @param denominator Denominator input for the function.
     */
    function atanTwo(numerator: number, denominator: number): number;
    /**
     * arrayContains
     * Whether the specified array contains the specified value.
     * @param array The array in which to search for the specified value.
     * @param value The value for which to search.
     */
    function arrayContains(array: any[], value: any): boolean;
    /**
     * arraySlice
     * A copy of the specified array containing only values from a specified index range.
     * @param array The array from which to make a copy.
     * @param startIndex The first index of the range.
     * @param count The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.
     */
    function arraySlice(array: any[], startIndex: number, count: number): any[];
    /**
     * getClosestPlayer
     * The player closest to a position, optionally restricted by team.
     * @param center The position from which to measure proximity.
     * @param team The team or teams from which the closest player will come.
     */
    function getClosestPlayer(center: Pos, team: Team): Player;
    /**
     * compare
     * Whether the comparison of the two inputs is true.
     * @param value The left-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.
     * @param comparison
     * @param value2 The right-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.
     */
    function compare(value: any, comparison: CompareSymbol, value2: any): boolean;
    /**
     * getControlScorePercentage
     * The score percentage for the specified team in control mode.
     * @param team The team whose score percentage to acquire.
     */
    function getControlScorePercentage(team: Team): number;
    /**
     * cosDeg
     * Cosine of the specified angle in degrees.
     * @param angle Angle in degrees.
     */
    function cosDeg(angle: number): number;
    /**
     * cos
     * Cosine of the specified angle in radians.
     * @param angle Angle in radians.
     */
    function cos(angle: number): number;
    /**
     * len
     * The number of elements in the specified array.
     * @param array The array whose elements will be counted.
     */
    function len(array: any[]): number;
    /**
     * crossProduct
     * The cross product of the specified values. (Left cross up equals forward.)
     * @param value The left-hand-side vector operand of the cross product.
     * @param value2 The right-hand-side vector operand of the cross product.
     */
    function crossProduct(value: Vector, value2: Vector): number;
    /**
     * customString
     * ty magzie for adding that
     * @param string
     * @param param0 The value that will be converted to text and used to replace {0}.
     * @param param1 The value that will be converted to text and used to replace {1}.
     * @param param2 The value that will be converted to text and used to replace {2}.
     */
    function customString(string: Strings, param0: Strings, param1: Strings, param2: Strings): Strings;
    /**
     * angleToDirection
     * The unit-length direction vector corresponding to the specified angles.
     * @param horizontalAngle The horizontal angle in degrees used to construct the resulting vector.
     * @param verticalAngle The vertical angle in degrees used to construct the resulting vector.
     */
    function angleToDirection(horizontalAngle: number, verticalAngle: number): Gamemode;
    /**
     * directionTowards
     * The unit-length direction vector from one position to another.
     * @param startPos The position from which the resulting direction vector will point.
     * @param endPos The position to which the resulting direction vector will point.
     */
    function directionTowards(startPos: Pos, endPos: Pos): Maps;
    /**
     * distance
     * The distance between two positions in meters.
     * @param startPos One of the two positions used in the distance measurement.
     * @param endPos One of the two positions used in the distance measurement.
     */
    function distance(startPos: Pos, endPos: Pos): number;
    /**
     * divide
     * The ratio of two numbers or vectors. A vector divided by a number will yield a scaled vector. Division by zero results in zero.
     * @param value The left-hand operand. May be any value that results in a number or a vector.
     * @param value2 The right-hand operand. May be any value that results in a number or a vector.
     */
    function divide(value: number | Vector, value2: number | Vector): number | Vector;
    /**
     * dotProduct
     * The dot product of the specified values.
     * @param value One of two vector operands of the dot product.
     * @param value2 One of two vector operands of the dot product.
     */
    function dotProduct(value: Vector, value2: Vector): number;
    /**
     * entityExists
     * Whether the specified player, icon entity, or effect entity still exists. Useful for determining if a player has left the match or an entity has been destroyed.
     * @param entity The player, icon entity, or effect entity whose existence to check.
     */
    function entityExists(entity: Player | Player[]): boolean;
    /**
     * getEyePosition
     * The position of a player's first person view (used for aiming)
     * @param player The position of a player's first person view (used for aiming)
     */
    function getEyePosition(player: Player | Player[]): Vector;
    /**
     * getFacingDirection
     * The unit-length directional vector of a player's current facing relative to the world. This value includes both horizontal and vertical facing.
     * @param player The player whose facing direction to acquire.
     */
    function getFacingDirection(player: Player | Player[]): Vector;
    /**
     * getFarthestPlayer
     * The player farthest from a position, optionally restricted by team.
     * @param center The position from which to measure distance.
     * @param team The team or teams from which the farthest player will come.
     */
    function getFarthestPlayer(center: Pos, team: Team): Player;
    /**
     * filteredArray
     * A copy of the specified array with any values that do not match the specified condition removed.
     * @param array The array whose copy will be filtered.
     * @param condition The condition that is evaluated for each element of the copied array. If the condition is true, the element is kept in the copied array. Use the current array element value to reference the element of the array currently being considered.
     */
    function filteredArray(array: any[], condition: boolean): any[];
    /**
     * firstOf
     * The value at the start of the specified array. Results in 0 if the specified array is empty.
     * @param array The array from which the value is acquired.
     */
    function firstOf(array: any[]): any;
    /**
     * getFlagPosition
     * The position of a specific team's flag in capture the flag.
     * @param team The team whose flag position to acquire.
     */
    function getFlagPosition(team: Team): Vector;
    /**
     * globalVar
     * The current value of a global variable, which is a variable that belongs to the game itself.
     * @param variable The variable whose value to acquire.
     */
    function globalVar(variable: string): Vector;
    /**
     * hasSpawned
     * Whether an entity has spawned in the world. Results in false for players who have not chosen a hero yet.
     * @param entity The player, icon entity, or effect entity whose presence in world to check.
     */
    function hasSpawned(entity: Player | Player[]): boolean;
    /**
     * hasStatusEffect
     * Whether the specified player has the specified status, either from the set status action or from a non-scripted game mechanic.
     * @param player The player whose status to check.
     * @param status The status to check for.
     */
    function hasStatusEffect(player: Player | Player[], status: Status): boolean;
    /**
     * getHealth
     * The current health of a player, including armor and shields.
     * @param player The player whose health to acquire.
     */
    function getHealth(player: Player | Player[]): number;
    /**
     * getNormalizedHealth
     * The current health of a player, including armor and shields, normalized between 0 and 1. (for example, 0 is no health, 0.5 is half health, 1 is full health, etc.)
     * @param player The player whose normalized health to acquire.
     */
    function getNormalizedHealth(player: Player | Player[]): number;
    /**
     * hero
     * A hero constant.
     * @param hero A hero constant.
     */
    function hero(hero: Hero): Hero;
    /**
     * heroIcon
     * Converts a hero parameter into a string that shows up as an icon.
     * @param value The hero that will be converted to an icon.
     */
    function heroIcon(value: Hero): Icon;
    /**
     * getCurrentHero
     * The current hero of a player.
     * @param player The player whose hero to acquire.
     */
    function getCurrentHero(player: Player | Player[]): Hero;
    /**
     * horizontalAngleFromDirection
     * The horizontal angle in degrees corresponding to the specified direction vector.
     * @param direction The direction vector from which to acquire a horizontal angle in degrees. The vector is unitized before calculation begins.
     */
    function horizontalAngleFromDirection(direction: Vector): number;
    /**
     * horizontalAngleTowards
     * The horizontal angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is on the player's left. Otherwise, the result is zero or negative.
     * @param player The player from whose current facing the angle begins.
     * @param position The position in the world where the angle ends.
     */
    function horizontalAngleTowards(player: Player | Player[], position: Pos): number;
    /**
     * gamemode
     * A game mode constant.
     * @param gameMode A game mode constant.
     */
    function gamemode(gameMode: Gamemode): Gamemode;
    /**
     * getHorizontalFacingAngle
     * The horizontal angle in degrees of a player's current facing relative to the world. This value increases as the player rotates to the left (wrapping around at +/- 180).
     * @param player The player whose horizontal facing angle to acquire.
     */
    function getHorizontalFacingAngle(player: Player | Player[]): number;
    /**
     * getHorizontalSpeed
     * The current horizontal speed of a player in meters per second. This measurement excludes all vertical motion.
     * @param player The player whose horizontal speed to acquire.
     */
    function getHorizontalSpeed(player: Player | Player[]): number;
    /**
     * iconString
     * Allows you to use an icon inside of a string.
     * @param icon The icon to display.
     */
    function iconString(icon: Icon): string;
    /**
     * indexOfArrayValue
     * The index of a value within an array or -1 if no such value can be found.
     * @param array The array in which to search for the specified value.
     * @param value The value for which to search.
     */
    function indexOfArrayValue(array: any[], value: any): number;
    /**
     * isAlive
     * Whether a player is alive.
     * @param player The player whose life to check.
     */
    function isAlive(player: Player | Player[]): boolean;
    /**
     * isHoldingButton
     * Whether a player is holding a specific button.
     * @param player The player whose button to check.
     * @param button The button to check.
     */
    function isHoldingButton(player: Player | Player[], button: Button): boolean;
    /**
     * isCommunicating
     * Whether a player is using a specific communication type (such as emoting, using a voice line, etc.).
     * @param player The player whose communication status to check.
     * @param type The type of communication to consider. The duration of emotes is exact, the duration of voice lines is assumed to be 4 seconds, and all other durations are assumed to be 2 seconds.
     */
    function isCommunicating(player: Player | Player[], type: Communicate): boolean;
    /**
     * isCommunicatingAnything
     * Whether a player is using any communication type (such as emoting, using a voice line, etc.).
     * @param player The player whose communication status to check.
     */
    function isCommunicatingAnything(player: Player | Player[]): boolean;
    /**
     * isCommunicatingEmote
     * Whether a player is using an emote.
     * @param player The player whose emoting status to check.
     */
    function isCommunicatingEmote(player: Player | Player[]): boolean;
    /**
     * isCommunicatingVoiceline
     * Whether a player is using a voice line. (The duration of voice lines is assumed to be 4 seconds.)
     * @param player The player whose voice line status to check.
     */
    function isCommunicatingVoiceline(player: Player | Player[]): boolean;
    /**
     * isCrouching
     * Whether a player is crouching.
     * @param player The player whose crouching status to check.
     */
    function isCrouching(player: Player | Player[]): boolean;
    /**
     * isDead
     * Whether a player is dead.
     * @param player The player whose death to check.
     */
    function isDead(player: Player | Player[]): boolean;
    /**
     * isDummy
     * Whether a player is a dummy bot.
     * @param player Player to consider.
     */
    function isDummy(player: Player | Player[]): boolean;
    /**
     * isFiringPrimaryFire
     * Whether the specified player's primary weapon attack is being used.
     * @param player The player whose primary weapon attack usage to check.
     */
    function isFiringPrimaryFire(player: Player | Player[]): boolean;
    /**
     * isFiringSecondaryFire
     * Whether the specified player's secondary weapon attack is being used.
     * @param player The player whose secondary weapon attack usage to check.
     */
    function isFiringSecondaryFire(player: Player | Player[]): boolean;
    /**
     * isFlagAtBase
     * Whether a specific team's flag is at its base in capture the flag.
     * @param team The team whose flag to check.
     */
    function isFlagAtBase(team: Team): boolean;
    /**
     * isFlagBeingCarried
     * Whether a specific team's flag is being carried by a member of the opposing team in capture the flag.
     * @param team The team whose flag to check.
     */
    function isFlagBeingCarried(team: Team): boolean;
    /**
     * teamHasHero
     * Whether a specific hero is being played (either on a team or in the match).
     * @param hero The hero to check for play.
     * @param team The team or teams on which to check for the hero being played.
     */
    function teamHasHero(hero: Hero, team: Team): boolean;
    /**
     * isInAir
     * Whether a player is airborne.
     * @param player The player whose airborne status to check.
     */
    function isInAir(player: Player | Player[]): boolean;
    /**
     * isInLineOfSight
     * Whether two positions have line of sight with each other.
     * @param startPos The start position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.
     * @param endPos The end position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.
     * @param barriers Defines how barriers affect line of sight. When considering whether a barrier belongs to an enemy, the allegiance of the player provided to start pos (if any) is used.
     */
    function isInLineOfSight(startPos: Pos, endPos: Pos, barriers: BarrierLos): boolean;
    /**
     * isInSpawnRoom
     * Whether a specific player is in the spawn room (and is thus being healed and able to change heroes).
     * @param player The player whose spawn room status to check.
     */
    function isInSpawnRoom(player: Player | Player[]): boolean;
    /**
     * isInViewAngle
     * Whether a location is within view of a player.
     * @param player The player whose view to use for the check.
     * @param location The location to test if it's within view.
     * @param viewAngle The view angle to compare against in degrees.
     */
    function isInViewAngle(player: Player | Player[], location: Pos, viewAngle: number): boolean;
    /**
     * isMoving
     * Whether a player is moving (defined as having a nonzero current speed).
     * @param player The player whose moving status to check.
     */
    function isMoving(player: Player | Player[]): boolean;
    /**
     * isObjectiveComplete
     * Whether the specified objective has been completed. Results in false if the game mode is not assault, escort, or assault/escort.
     * @param number The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.
     */
    function isObjectiveComplete(number: number): boolean;
    /**
     * isOnGround
     * Whether a player is on the ground (or other walkable surface).
     * @param player The player whose ground status to check.
     */
    function isOnGround(player: Player | Player[]): boolean;
    /**
     * isOnObjective
     * Whether a specific player is currently occupying a payload or capture point.
     * @param player The player whose objective status to check.
     */
    function isOnObjective(player: Player | Player[]): boolean;
    /**
     * isOnWall
     * Whether a player is on a wall (climbing or riding).
     * @param player The player whose wall status to check.
     */
    function isOnWall(player: Player | Player[]): boolean;
    /**
     * isOnFire
     * Whether a specific player's portrait is on fire.
     * @param player The player whose portrait to check.
     */
    function isOnFire(player: Player | Player[]): boolean;
    /**
     * isStanding
     * Whether a player is standing (defined as both not moving and not in the air).
     * @param player The player whose standing status to check.
     */
    function isStanding(player: Player | Player[]): boolean;
    /**
     * isTeamOnDefense
     * Whether the specified team is currently on defense. Results in false if the game mode is not assault, escort, or assault/escort.
     * @param team The team whose role to check.
     */
    function isTeamOnDefense(team: Team): boolean;
    /**
     * isTeamOnOffense
     * Whether the specified team is currently on offense. Results in false if the game mode is not assault, escort, or assault/escort.
     * @param team The team whose role to check.
     */
    function isTeamOnOffense(team: Team): boolean;
    /**
     * allOf
     * Whether the specified condition evaluates to true for every value in the specified array.
     * @param array The array whose values will be considered.
     * @param condition The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.
     */
    function allOf(array: any[], condition: boolean): boolean;
    /**
     * oneOf
     * Whether the specified condition evaluates to true for any value in the specified array.
     * @param array The array whose values will be considered.
     * @param condition The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.
     */
    function oneOf(array: any[], condition: boolean): boolean;
    /**
     * isUsingAbilityOne
     * Whether the specified player is using ability 1.
     * @param player The player whose ability 1 usage to check.
     */
    function isUsingAbilityOne(player: Player | Player[]): boolean;
    /**
     * isUsingAbilityTwo
     * Whether the specified player is using ability 2.
     * @param player The player whose ability 2 usage to check.
     */
    function isUsingAbilityTwo(player: Player | Player[]): boolean;
    /**
     * isUsingUltimate
     * Whether a player is using an ultimate ability.
     * @param player The player whose ultimate ability usage to check.
     */
    function isUsingUltimate(player: Player | Player[]): boolean;
    /**
     * lastOf
     * The value at the end of the specified array. Results in 0 if the specified array is empty.
     * @param array The array from which the value is acquired.
     */
    function lastOf(array: any[]): any;
    /**
     * localVector
     * The vector in local coordinates corresponding to the provided vector in world coordinates.
     * @param worldVector The vector in world coordinates that will be converted to local coordinates.
     * @param relativePlayer The player to whom the resulting vector will be relative.
     * @param transformation Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).
     */
    function localVector(worldVector: Pos, relativePlayer: Player | Player[], transformation: Transform): Vector;
    /**
     * mapOf
     * A map constant.
     * @param map A map constant.
     */
    function mapOf(map: Maps): MapItem;
    /**
     * max
     * The greater of two numbers.
     * @param value The left-hand operand. May be any value that results in a number.
     * @param value2 The right-hand operand. May be any value that results in a number.
     */
    function max(value: number, value2: number): number;
    /**
     * getMaxHealth
     * The max health of a player, including armor and shields.
     * @param player The player whose max health to acquire.
     */
    function getMaxHealth(player: Player | Player[]): number;
    /**
     * min
     * The lesser of two numbers.
     * @param value The left-hand operand. May be any value that results in a number.
     * @param value2 The right-hand operand. May be any value that results in a number.
     */
    function min(value: number, value2: number): number;
    /**
     * modulo
     * The remainder of the left-hand operand divided by the right-hand operand. Any number modulo zero results in zero.
     * @param value The left-hand operand. May be any value that results in a number.
     * @param value2 The right-hand operand. May be any value that results in a number.
     */
    function modulo(value: number, value2: number): number;
    /**
     * multiply
     * The product of two numbers or vectors. A vector multiplied by a number will yield a scaled vector.
     * @param value The left-hand operand. May be any value that results in a number or a vector.
     * @param value2 The right-hand operand. May be any value that results in a number or a vector.
     */
    function multiply(value: number | Vector, value2: number | Vector): number | Vector;
    /**
     * nearestWalkablePosition
     * The position closest to the specified position that can be stood on and is accessible from a spawn point.
     * @param position The position from which to search for the nearest walkable position.
     */
    function nearestWalkablePosition(position: Pos): Vector;
    /**
     * normalize
     * The unit-length normalization of a vector.
     * @param vector The vector to normalize.
     */
    function normalize(vector: Vector): Vector;
    /**
     * not
     * Whether the input is false (or equivalent to false).
     * @param value When this input is false (or equivalent to false), then the not value is true. Otherwise, the not value is false.
     */
    function not(value: boolean): boolean;
    /**
     * getNumberOfDeadPlayers
     * The number of dead players on a team or in the match.
     * @param team The team or teams on which to count players.
     */
    function getNumberOfDeadPlayers(team: Team): number;
    /**
     * getNumberOfDeaths
     * The number of deaths a specific player has earned. This value only accumulates while a game is in progress.
     * @param player The player whose death count to acquire.
     */
    function getNumberOfDeaths(player: Player | Player[]): number;
    /**
     * getNumberOfElims
     * The number of eliminations a specific player has earned. This value only accumulates while a game is in progress.
     * @param player The player whose elimination count to acquire.
     */
    function getNumberOfElims(player: Player | Player[]): number;
    /**
     * getNumberOfFinalBlows
     * The number of final blows a specific player has earned. This value only accumulates while a game is in progress.
     * @param player The player whose final blow count to acquire.
     */
    function getNumberOfFinalBlows(player: Player | Player[]): number;
    /**
     * getNumberOfHeroes
     * The number of players playing a specific hero on a team or in the match.
     * @param hero The hero to check for play.
     * @param team The team or teams on which to check for the hero being played.
     */
    function getNumberOfHeroes(hero: Hero, team: Team): number;
    /**
     * getNumberOfLivingPlayers
     * The number of living players on a team or in the match.
     * @param team The team or teams on which to count players.
     */
    function getNumberOfLivingPlayers(team: Team): number;
    /**
     * getNumberOfPlayers
     * The number of players on a team or in the match.
     * @param team The team or teams on which to count players.
     */
    function getNumberOfPlayers(team: Team): number;
    /**
     * getNumberOfPlayersOnObjective
     * The number of players occupying a payload or control point (either on a team or in the match).
     * @param team The team or teams on which to count players.
     */
    function getNumberOfPlayersOnObjective(team: Team): number;
    /**
     * getObjectivePosition
     * The position in the world of the specified objective (either a control point, a payload checkpoint, or a payload destination). Valid in assault, assault/escort, escort, and control.
     * @param number The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.
     */
    function getObjectivePosition(number: number): Vector;
    /**
     * getOppositeTeam
     * The team opposite the specified team.
     * @param team The team whose opposite to acquire. If all, the result will be all.
     */
    function getOppositeTeam(team: Team): Team;
    /**
     * or
     * Whether either of the two inputs are true (or equivalent to true).
     * @param value One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.
     * @param value2 One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.
     */
    function or(value: boolean, value2: boolean): boolean;
    /**
     * getFlagCarrier
     * The player carrying a particular team's flag in capture the flag. Results in null if no player is carrying the flag.
     * @param team The team whose flag to check.
     */
    function getFlagCarrier(team: Team): Player;
    /**
     * getPlayerClosestToReticle
     * The player closest to the reticle of the specified player, optionally restricted by team.
     * @param player The player from whose reticle to search for the closest player.
     * @param team The team or teams on which to search for the closest player.
     */
    function getPlayerClosestToReticle(player: Player | Player[], team: Team): Player;
    /**
     * playerVar
     * The current value of a player variable, which is a variable that belongs to a specific player.
     * @param player The player whose variable value to acquire.
     * @param variable The variable whose value to acquire.
     */
    function playerVar(player: Player | Player[], variable: string): any;
    /**
     * getPlayersInSlot
     * The player or array of players who occupy a specific slot in the game.
     * @param slot The slot number from which to acquire a player or players. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.
     * @param team The team or teams from which to acquire a player or players.
     */
    function getPlayersInSlot(slot: number, team: Team): Player[];
    /**
     * getPlayersInViewAngle
     * The players who are within a specific view angle of a specific player's reticle, optionally restricted by team.
     * @param player The player whose view to use for the check.
     * @param team The team or teams on which to consider players.
     * @param viewAngle The view angle to compare against in degrees.
     */
    function getPlayersInViewAngle(player: Player | Player[], team: Team, viewAngle: number): Player[];
    /**
     * getPlayersOnHero
     * The array of players playing a specific hero on a team or in the match.
     * @param hero The hero to check for play.
     * @param team The team or teams on which to check for the hero being played.
     */
    function getPlayersOnHero(hero: Hero, team: Team): Player[];
    /**
     * getPlayersInRadius
     * An array containing all players within a certain distance of a position, optionally restricted by team and line of sight.
     * @param center The center position from which to measure distance.
     * @param radius The radius in meters inside which players must be in order to be included in the resulting array.
     * @param team The team or teams to which a player must belong to be included in the resulting array.
     * @param losCheck Specifies whether and how a player must pass a line-of-sight check to be included in the resulting array.
     */
    function getPlayersInRadius(center: Pos, radius: number, team: Team, losCheck: LosCheck): Player[];
    /**
     * getPosition
     * The current position of a player as a vector.
     * @param player The player whose position to acquire.
     */
    function getPosition(player: Player | Player[]): Vector;
    /**
     * raiseToPower
     * The left-hand operand raised to the power of the right-hand operand. If the left-hand operand is negative, the result is always zero.
     * @param value The left-hand operand. May be any value that results in a number.
     * @param value2 The right-hand operand. May be any value that results in a number.
     */
    function raiseToPower(value: number, value2: number): number;
    /**
     * randomRandint
     * A random integer between the specified min and max, inclusive.
     * @param min The smallest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.
     * @param max The largest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.
     */
    function randomRandint(min: number, max: number): number;
    /**
     * randomUniform
     * A random real number between the specified min and max.
     * @param min The smallest real number allowed.
     * @param max The largest real number allowed.
     */
    function randomUniform(min: number, max: number): number;
    /**
     * randomChoice
     * A random value from the specified array.
     * @param array The array from which to randomly take a value. If a non-array value is provided, the result is simply the provided value.
     */
    function randomChoice(array: any[]): any;
    /**
     * randomShuffle
     * A copy of the specified array with the values in a random order.
     * @param array The array whose copy will be randomized.
     */
    function randomShuffle(array: any[]): any[];
    /**
     * getNormal
     * The surface normal at the ray cast hit position (or from end pos to start pos if no hit occurs).
     * @param startPos The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.
     * @param endPos The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.
     * @param playersToInclude Which players can be hit by this ray cast.
     * @param playersToExclude Which players cannot be hit by this ray cast. This list takes precedence over players to include.
     * @param includePlayerOwnedObjects Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.
     */
    function getNormal(startPos: Pos, endPos: Pos, playersToInclude: Player | Player[], playersToExclude: Player | Player[], includePlayerOwnedObjects: boolean): Vector;
    /**
     * getPlayerHit
     * The player hit by the ray cast (or null if no player is hit).
     * @param startPos The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.
     * @param endPos The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.
     * @param playersToInclude Which players can be hit by this ray cast.
     * @param playersToExclude Which players cannot be hit by this ray cast. This list takes precedence over players to include.
     * @param includePlayerOwnedObjects Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.
     */
    function getPlayerHit(startPos: Pos, endPos: Pos, playersToInclude: Player | Player[], playersToExclude: Player | Player[], includePlayerOwnedObjects: boolean): Player | null;
    /**
     * getHitPosition
     * The position where the ray cast hits a surface, object, or player (or the end pos if no hit occurs).
     * @param startPos The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.
     * @param endPos The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.
     * @param playersToInclude Which players can be hit by this ray cast.
     * @param playersToExclude Which players cannot be hit by this ray cast. This list takes precedence over players to include.
     * @param includePlayerOwnedObjects Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.
     */
    function getHitPosition(startPos: Pos, endPos: Pos, playersToInclude: Player | Player[], playersToExclude: Player | Player[], includePlayerOwnedObjects: boolean): Vector;
    /**
     * removeFromArray
     * A copy of an array with one or more values removed (if found).
     * @param array The array from which to remove values.
     * @param value The value to remove from the array (if found). If this value is itself an array, each matching element is removed.
     */
    function removeFromArray(array: any[], value: any): void;
    /**
     * round
     * The integer to which the specified value rounds.
     * @param value The real number to round.
     * @param roundingType Determines the direction in which the value will be rounded.
     */
    function round(value: number, roundingType: RoundingType): number;
    /**
     * getScore
     * The current score of a player. Results in 0 if the game mode is not free-for-all.
     * @param player The player whose score to acquire.
     */
    function getScore(player: Player | Player[]): number;
    /**
     * sinDeg
     * Sine of the specified angle in degrees.
     * @param angle Angle in degrees.
     */
    function sinDeg(angle: number): number;
    /**
     * sin
     * Sine of the specified angle in radians.
     * @param angle Angle in radians.
     */
    function sin(angle: number): number;
    /**
     * getSlot
     * The slot number of the specified player. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.
     * @param player The player whose slot number to acquire.
     */
    function getSlot(player: Player | Player[]): number;
    /**
     * sortedArray
     * A copy of the specified array with the values sorted according to the value rank that is evaluated for each element.
     * @param array The array whose copy will be sorted.
     * @param valueRank The value that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Use the current array element value to reference the element of the array currently being considered.
     */
    function sortedArray(array: any[], valueRank: number): any[];
    /**
     * getSpeed
     * The current speed of a player in meters per second.
     * @param player The player whose speed to acquire.
     */
    function getSpeed(player: Player | Player[]): number;
    /**
     * getSpeedInDirection
     * The current speed of a player in a specific direction in meters per second.
     * @param player The player whose speed to acquire.
     * @param direction The direction of travel in which to measure the player's speed.
     */
    function getSpeedInDirection(player: Player | Player[], direction: Vector): number;
    /**
     * sqrt
     * The square root of the specified value.
     * @param value The real number value whose square root will be computed. Negative values result in zero.
     */
    function sqrt(value: number): number;
    /**
     * localizedString
     * Text formed from a selection of strings and specified values.
     * @param string
     * @param param0 The value that will be converted to text and used to replace {0}.
     * @param param1 The value that will be converted to text and used to replace {1}.
     * @param param2 The value that will be converted to text and used to replace {2}.
     */
    function localizedString(string: Strings, param0: any, param1: any, param2: any): string;
    /**
     * subtract
     * The difference between two numbers or vectors.
     * @param value The left-hand operand. May be any value that results in a number or a vector.
     * @param value2 The right-hand operand. May be any value that results in a number or a vector.
     */
    function subtract(value: number | Vector, value2: number | Vector): number | Vector;
    /**
     * tanDeg
     * Tangent of the specified angle in degrees.
     * @param angle Angle in degrees.
     */
    function tanDeg(angle: number): number;
    /**
     * tan
     * Tangent of the specified angle in radians.
     * @param angle Angle in radians.
     */
    function tan(angle: number): number;
    /**
     * getTeam
     * The team of a player. If the game mode is free-for-all, the team is considered to be all.
     * @param player The player whose team to acquire.
     */
    function getTeam(player: Player | Player[]): Team;
    /**
     * teamScore
     * The current score for the specified team. Results in 0 in free-for-all game modes.
     * @param team The team whose score to acquire.
     */
    function teamScore(team: Team): number;
    /**
     * getThrottle
     * The directional input of a player, represented by a vector with horizontal input on the x component (positive to the left) and vertical input on the z component (positive upward).
     * @param player The player whose directional input to acquire.
     */
    function getThrottle(player: Player | Player[]): Vector;
    /**
     * getUltCharge
     * The current ultimate ability charge percentage of a player.
     * @param player The player whose ultimate charge percentage to acquire.
     */
    function getUltCharge(player: Player | Player[]): number;
    /**
     * valueInArray
     * The value found at a specific element of an array. Results in 0 if the element does not exist.
     * @param array The array whose element to acquire.
     * @param index The index of the element to acquire.
     */
    function valueInArray(array: any[], index: number): any;
    /**
     * vect
     * A vector composed of three real numbers (x, y, z) where x is left, y is up, and z is forward. Vectors are used for position, direction, and velocity.
     * @param x The x value of the vector.
     * @param y The y value of the vector.
     * @param z The z value of the vector.
     */
    function vect(x: number, y: number, z: number): Vector;
    /**
     * vectorTowards
     * The displacement vector from one position to another.
     * @param startPos The position from which the resulting displacement vector begins.
     * @param endPos The position at which the resulting displacement vector ends.
     */
    function vectorTowards(startPos: Pos, endPos: Pos): Vector;
    /**
     * getVelocity
     * The current velocity of a player as a vector. If the player is on a surface, the y component of this velocity will be 0, even when traveling up or down a slope.
     * @param player The player whose velocity to acquire.
     */
    function getVelocity(player: Player | Player[]): Vector;
    /**
     * verticalAngleOfDirection
     * The vertical angle in degrees corresponding to the specified direction vector.
     * @param direction The direction vector from which to acquire a vertical angle in degrees. The vector is unitized before calculation begins.
     */
    function verticalAngleOfDirection(direction: Vector): number;
    /**
     * verticalAngleTowards
     * The vertical angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is below the player. Otherwise, the result is zero or negative.
     * @param player The player from whose current facing the angle begins.
     * @param position The position in the world where the angle ends.
     */
    function verticalAngleTowards(player: Player | Player[], position: Pos): number;
    /**
     * getVerticalFacingAngle
     * The vertical angle in degrees of a player's current facing relative to the world. This value increases as the player looks down.
     * @param player The player whose vertical facing angle to acquire.
     */
    function getVerticalFacingAngle(player: Player | Player[]): number;
    /**
     * getVerticalSpeed
     * The current vertical speed of a player in meters per second. This measurement excludes all horizontal motion, including motion while traveling up and down slopes.
     * @param player The player whose vertical speed to acquire.
     */
    function getVerticalSpeed(player: Player | Player[]): number;
    /**
     * worldVector
     * The vector in world coordinates corresponding to the provided vector in local coordinates.
     * @param localVector The vector in local coordinates that will be converted to world coordinates.
     * @param relativePlayer The player to whom the local vector is relative.
     * @param transformation Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).
     */
    function worldVector(localVector: Vector, relativePlayer: Player | Player[], transformation: Transform): Vector;
    /**
     * xComponentOf
     * The x component of the specified vector, usually representing a leftward amount.
     * @param value The vector from which to acquire the x component.
     */
    function xComponentOf(value: Vector): number;
    /**
     * yComponentOf
     * The y component of the specified vector, usually representing an upward amount.
     * @param value The vector from which to acquire the y component.
     */
    function yComponentOf(value: Vector): number;
    /**
     * zComponentOf
     * The z component of the specified vector, usually representing a forward amount.
     * @param value The vector from which to acquire the z component.
     */
    function zComponentOf(value: Vector): number;
}
