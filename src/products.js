export const products = [
    {
        id: "sauvage-edt-2015",
        name: "Sauvage",
        full_name: "Sauvage Eau de Toilette",
        brand: "Dior",
        concentration: "Eau de Toilette",
        edition: "EDT",
        year: 2015,
        line: "sauvage",
        gender: "For men",
        description: "A fresh, spicy fragrance by Dior, released in 2015. Created by perfumer François Demachy.",
        accords: [
            { name: "fresh spicy", strength: 100 },
            { name: "amber", strength: 75 },
            { name: "citrus", strength: 70 },
            { name: "aromatic", strength: 55 },
            { name: "musky", strength: 50 }
        ],
        notes: {
            top: ["Calabrian bergamot", "Pepper"],
            middle: ["Sichuan pepper", "Lavender", "Pink pepper", "Vetiver", "Patchouli", "Geranium", "Elemi"],
            base: ["Ambroxan", "Cedar", "Labdanum"]
        },
        similar: [
            { id: "bleu-de-chanel-edt-2010", reason: "Shares: bergamot, pepper" },
            { id: "luna-rossa-carbon-edt-2017", reason: "Shares accords: fresh spicy, aromatic" },
            { id: "wanted-edt-2016", reason: "Users say it reminds them of Sauvage" },
            { id: "dylan-blue-edt-2016", reason: "Shares: bergamot, ambroxan" },
            { id: "y-edp-2018", reason: "Shares accords: fresh spicy, amber" },
            { id: "invictus-edt-2013", reason: "Users say it reminds them of Sauvage" },
            { id: "acqua-di-gio-profumo-2015", reason: "Shares accords: aromatic, fresh spicy" },
            { id: "explorer-edp-2019", reason: "Shares: bergamot, pepper" }
        ]
    },
    {
        id: "sauvage-edp-2018",
        name: "Sauvage",
        full_name: "Sauvage Eau de Parfum",
        brand: "Dior",
        concentration: "Eau de Parfum",
        edition: "EDP",
        year: 2018,
        line: "sauvage",
        gender: "For men",
        description: "A warmer, softer edition of Sauvage by Dior, released in 2018. Created by perfumer François Demachy.",
        accords: [
            { name: "fresh spicy", strength: 100 },
            { name: "amber", strength: 80 },
            { name: "aromatic", strength: 68 },
            { name: "citrus", strength: 60 },
            { name: "warm spicy", strength: 55 }
        ],
        notes: {
            top: ["Calabrian bergamot"],
            middle: ["Sichuan pepper", "Lavender", "Star anise", "Nutmeg"],
            base: ["Ambroxan", "Vanilla"]
        },
        similar: [
            { id: "y-edp-2018", reason: "Shares accords: fresh spicy, amber" },
            { id: "bleu-de-chanel-edp-2014", reason: "Shares accords: amber, aromatic" },
            { id: "dylan-blue-edt-2016", reason: "Shares: bergamot, ambroxan" },
            { id: "wanted-edt-2016", reason: "Shares: lavender" },
            { id: "explorer-edp-2019", reason: "Shares: bergamot, ambroxan" }
        ]
    },
    {
        id: "sauvage-parfum-2019",
        name: "Sauvage",
        full_name: "Sauvage Parfum",
        brand: "Dior",
        concentration: "Parfum",
        edition: "Parfum",
        year: 2019,
        line: "sauvage",
        gender: "For men",
        description: "A richer, woodier edition of Sauvage by Dior, released in 2019. Created by perfumer François Demachy.",
        accords: [
            { name: "amber", strength: 100 },
            { name: "fresh spicy", strength: 78 },
            { name: "warm spicy", strength: 70 },
            { name: "vanilla", strength: 62 },
            { name: "citrus", strength: 55 }
        ],
        notes: {
            top: ["Mandarin orange", "Bergamot"],
            middle: ["Elemi", "Sandalwood"],
            base: ["Vanilla", "Olibanum", "Tonka bean"]
        },
        similar: [
            { id: "bleu-de-chanel-parfum-2018", reason: "Shares: sandalwood, bergamot" },
            { id: "y-edp-2018", reason: "Shares accords: fresh spicy, amber" },
            { id: "acqua-di-gio-profumo-2015", reason: "Shares: bergamot, incense" },
            { id: "explorer-edp-2019", reason: "Shares: bergamot" }
        ]
    },
    {
        id: "sauvage-elixir-2021",
        name: "Sauvage",
        full_name: "Sauvage Elixir",
        brand: "Dior",
        concentration: "Elixir",
        edition: "Elixir",
        year: 2021,
        line: "sauvage",
        gender: "For men",
        description: "The strongest, spiciest edition of Sauvage by Dior, released in 2021. Created by perfumer François Demachy.",
        accords: [
            { name: "warm spicy", strength: 100 },
            { name: "fresh spicy", strength: 78 },
            { name: "lavender", strength: 72 },
            { name: "amber", strength: 66 },
            { name: "aromatic", strength: 60 }
        ],
        notes: {
            top: ["Grapefruit", "Cinnamon", "Nutmeg", "Cardamom"],
            middle: ["Lavender"],
            base: ["Licorice", "Sandalwood", "Amber", "Patchouli", "Haitian vetiver"]
        },
        similar: [
            { id: "wanted-edt-2016", reason: "Shares accords: warm spicy, fresh spicy" },
            { id: "bleu-de-chanel-parfum-2018", reason: "Shares: lavender, sandalwood" },
            { id: "y-edp-2018", reason: "Shares: vetiver" },
            { id: "explorer-edp-2019", reason: "Shares: vetiver, patchouli" }
        ]
    },
    {
        id: "sauvage-into-the-wild-2025",
        name: "Sauvage",
        full_name: "Sauvage Eau de Toilette Into the Wild",
        brand: "Dior",
        concentration: "Eau de Toilette",
        edition: "EDT Into the Wild",
        year: 2025,
        line: "sauvage",
        gender: "For men",
        description: "A 2025 edition of Sauvage Eau de Toilette by Dior.",
        accords: [
            { name: "aromatic", strength: 82 },
            { name: "citrus", strength: 55 },
            { name: "herbal", strength: 54 },
            { name: "amber", strength: 52 }
        ],
        notes: {
            top: ["Bergamot", "Pepper"],
            middle: ["Geranium", "Lavender", "Elemi", "Sichuan pepper", "Pink pepper", "Patchouli", "Vetiver"],
            base: ["Ambroxan", "Labdanum", "Cedar"]
        },
        similar: [
            { id: "bleu-de-chanel-edt-2010", reason: "Shares: bergamot, pepper" },
            { id: "luna-rossa-carbon-edt-2017", reason: "Shares accords: fresh spicy, aromatic" },
            { id: "wanted-edt-2016", reason: "Users say it reminds them of Sauvage" },
            { id: "dylan-blue-edt-2016", reason: "Shares: bergamot, ambroxan" },
            { id: "y-edp-2018", reason: "Shares accords: fresh spicy, amber" },
            { id: "invictus-edt-2013", reason: "Users say it reminds them of Sauvage" },
            { id: "acqua-di-gio-profumo-2015", reason: "Shares accords: aromatic, fresh spicy" },
            { id: "explorer-edp-2019", reason: "Shares: bergamot, pepper" }
        ]
    },
    {
        id: "bleu-de-chanel-edt-2010",
        name: "Bleu de Chanel",
        full_name: "Bleu de Chanel Eau de Toilette",
        brand: "Chanel",
        concentration: "Eau de Toilette",
        edition: "EDT",
        year: 2010,
        line: "bleu-de-chanel",
        gender: "For men",
        description: "A woody, aromatic fragrance by Chanel, released in 2010. Created by perfumer Jacques Polge.",
        accords: [
            { name: "citrus", strength: 100 },
            { name: "woody", strength: 75 },
            { name: "warm spicy", strength: 70 },
            { name: "aromatic", strength: 55 },
            { name: "amber", strength: 50 }
        ],
        notes: {
            top: ["Grapefruit", "Lemon", "Mint", "Pink pepper"],
            middle: ["Ginger", "Nutmeg", "Jasmine", "Iso E Super"],
            base: ["Incense", "Vetiver", "Cedar", "Sandalwood", "Patchouli", "Labdanum", "White musk"]
        },
        similar: [
            { id: "sauvage-edt-2015", reason: "Shares: bergamot, pepper" },
            { id: "luna-rossa-carbon-edt-2017", reason: "Shares accords: aromatic, citrus" },
            { id: "dylan-blue-edt-2016", reason: "Shares: incense, patchouli" },
            { id: "y-edp-2018", reason: "Shares: cedar, vetiver" },
            { id: "explorer-edp-2019", reason: "Shares: vetiver, patchouli" },
            { id: "acqua-di-gio-edt-1996", reason: "Shares accords: citrus, aromatic" }
        ]
    },
    {
        id: "bleu-de-chanel-edp-2014",
        name: "Bleu de Chanel",
        full_name: "Bleu de Chanel Eau de Parfum",
        brand: "Chanel",
        concentration: "Eau de Parfum",
        edition: "EDP",
        year: 2014,
        line: "bleu-de-chanel",
        gender: "For men",
        description: "A deeper, ambery edition of Bleu de Chanel, released in 2014. Created by perfumer Jacques Polge.",
        accords: [
            { name: "citrus", strength: 100 },
            { name: "amber", strength: 80 },
            { name: "woody", strength: 75 },
            { name: "aromatic", strength: 60 },
            { name: "warm spicy", strength: 55 }
        ],
        notes: {
            top: ["Grapefruit", "Lemon", "Mint", "Bergamot", "Pink pepper"],
            middle: ["Ginger", "Nutmeg", "Jasmine"],
            base: ["Incense", "Sandalwood", "Cedar", "Amber", "Patchouli"]
        },
        similar: [
            { id: "sauvage-edp-2018", reason: "Shares accords: amber, aromatic" },
            { id: "dylan-blue-edt-2016", reason: "Shares: incense, patchouli" },
            { id: "y-edp-2018", reason: "Shares: cedar" },
            { id: "explorer-edp-2019", reason: "Shares: bergamot, pink pepper" }
        ]
    },
    {
        id: "bleu-de-chanel-parfum-2018",
        name: "Bleu de Chanel",
        full_name: "Bleu de Chanel Parfum",
        brand: "Chanel",
        concentration: "Parfum",
        edition: "Parfum",
        year: 2018,
        line: "bleu-de-chanel",
        gender: "For men",
        description: "A smooth, woody edition of Bleu de Chanel, released in 2018. Created by perfumer Olivier Polge.",
        accords: [
            { name: "woody", strength: 100 },
            { name: "citrus", strength: 70 },
            { name: "aromatic", strength: 62 },
            { name: "amber", strength: 58 },
            { name: "fresh spicy", strength: 50 }
        ],
        notes: {
            top: ["Lemon zest", "Bergamot"],
            middle: ["Lavender", "Geranium", "Pineapple"],
            base: ["Sandalwood", "Cedar", "Tonka bean", "Amber"]
        },
        similar: [
            { id: "sauvage-parfum-2019", reason: "Shares: sandalwood, bergamot" },
            { id: "y-edp-2018", reason: "Shares: tonka bean, cedar" },
            { id: "explorer-edp-2019", reason: "Shares accords: woody, aromatic" }
        ]
    },
    {
        id: "luna-rossa-carbon-edt-2017",
        name: "Luna Rossa Carbon",
        full_name: "Luna Rossa Carbon Eau de Toilette",
        brand: "Prada",
        concentration: "Eau de Toilette",
        edition: "EDT",
        year: 2017,
        line: "luna-rossa-carbon",
        gender: "For men",
        description: "A clean, aromatic fragrance by Prada, released in 2017. Created by perfumer Daniela Andrier.",
        accords: [
            { name: "aromatic", strength: 100 },
            { name: "fresh spicy", strength: 72 },
            { name: "metallic", strength: 65 },
            { name: "lavender", strength: 60 },
            { name: "citrus", strength: 55 }
        ],
        notes: {
            top: ["Bergamot", "Pepper"],
            middle: ["Lavender", "Metallic notes", "Water notes"],
            base: ["Ambroxan", "Patchouli", "Coal"]
        },
        similar: [
            { id: "sauvage-edt-2015", reason: "Shares accords: fresh spicy, aromatic" },
            { id: "dylan-blue-edt-2016", reason: "Shares: bergamot, ambroxan" },
            { id: "explorer-edp-2019", reason: "Shares: bergamot, ambroxan" },
            { id: "bleu-de-chanel-edt-2010", reason: "Shares accords: aromatic, citrus" }
        ]
    },
    {
        id: "wanted-edt-2016",
        name: "Wanted",
        full_name: "Wanted Eau de Toilette",
        brand: "Azzaro",
        concentration: "Eau de Toilette",
        edition: "EDT",
        year: 2016,
        line: "wanted",
        gender: "For men",
        description: "A warm, spicy fragrance by Azzaro, released in 2016.",
        accords: [
            { name: "warm spicy", strength: 100 },
            { name: "citrus", strength: 75 },
            { name: "fresh spicy", strength: 68 },
            { name: "woody", strength: 60 },
            { name: "aromatic", strength: 52 }
        ],
        notes: {
            top: ["Lemon", "Ginger", "Mint", "Lavender"],
            middle: ["Cardamom", "Juniper", "Geranium"],
            base: ["Tonka bean", "Vetiver", "Amberwood"]
        },
        similar: [
            { id: "sauvage-edt-2015", reason: "Users say it reminds them of Wanted" },
            { id: "y-edp-2018", reason: "Shares: ginger, geranium" },
            { id: "invictus-edt-2013", reason: "Shares accords: citrus, woody" },
            { id: "sauvage-elixir-2021", reason: "Shares accords: warm spicy, fresh spicy" }
        ]
    },
    {
        id: "dylan-blue-edt-2016",
        name: "Dylan Blue",
        full_name: "Dylan Blue Eau de Toilette",
        brand: "Versace",
        concentration: "Eau de Toilette",
        edition: "EDT",
        year: 2016,
        line: "dylan-blue",
        gender: "For men",
        description: "A fresh, aromatic fragrance by Versace, released in 2016. Created by perfumer Alberto Morillas.",
        accords: [
            { name: "citrus", strength: 100 },
            { name: "aromatic", strength: 80 },
            { name: "fresh spicy", strength: 70 },
            { name: "woody", strength: 62 },
            { name: "amber", strength: 55 }
        ],
        notes: {
            top: ["Calabrian bergamot", "Grapefruit", "Fig leaves", "Water notes"],
            middle: ["Violet leaf", "Ambroxan", "Black pepper", "Patchouli", "Papyrus"],
            base: ["Mineral notes", "Incense", "Tonka bean", "Saffron", "Musk"]
        },
        similar: [
            { id: "sauvage-edt-2015", reason: "Shares: bergamot, ambroxan" },
            { id: "luna-rossa-carbon-edt-2017", reason: "Shares: bergamot, ambroxan" },
            { id: "acqua-di-gio-edt-1996", reason: "Shares accords: citrus, aromatic" },
            { id: "bleu-de-chanel-edt-2010", reason: "Shares: incense, patchouli" }
        ]
    },
    {
        id: "y-edp-2018",
        name: "Y",
        full_name: "Y Eau de Parfum",
        brand: "Yves Saint Laurent",
        concentration: "Eau de Parfum",
        edition: "EDP",
        year: 2018,
        line: "y",
        gender: "For men",
        description: "A fresh, ambery fragrance by Yves Saint Laurent, released in 2018. Created by perfumer Dominique Ropion.",
        accords: [
            { name: "fresh spicy", strength: 100 },
            { name: "amber", strength: 80 },
            { name: "aromatic", strength: 72 },
            { name: "fruity", strength: 60 },
            { name: "woody", strength: 55 }
        ],
        notes: {
            top: ["Apple", "Ginger", "Bergamot"],
            middle: ["Sage", "Juniper berries", "Geranium"],
            base: ["Amberwood", "Tonka bean", "Cedar", "Vetiver", "Olibanum"]
        },
        similar: [
            { id: "sauvage-edt-2015", reason: "Shares accords: fresh spicy, amber" },
            { id: "sauvage-edp-2018", reason: "Shares accords: fresh spicy, amber" },
            { id: "bleu-de-chanel-edt-2010", reason: "Shares: cedar, vetiver" },
            { id: "wanted-edt-2016", reason: "Shares: ginger, geranium" }
        ]
    },
    {
        id: "invictus-edt-2013",
        name: "Invictus",
        full_name: "Invictus Eau de Toilette",
        brand: "Paco Rabanne",
        concentration: "Eau de Toilette",
        edition: "EDT",
        year: 2013,
        line: "invictus",
        gender: "For men",
        description: "A fresh, sporty fragrance by Paco Rabanne, released in 2013.",
        accords: [
            { name: "citrus", strength: 100 },
            { name: "aquatic", strength: 85 },
            { name: "fresh", strength: 75 },
            { name: "woody", strength: 62 },
            { name: "sweet", strength: 50 }
        ],
        notes: {
            top: ["Grapefruit", "Marine notes"],
            middle: ["Bay leaf", "Jasmine"],
            base: ["Ambergris", "Guaiac wood", "Oakmoss", "Patchouli"]
        },
        similar: [
            { id: "sauvage-edt-2015", reason: "Users say it reminds them of Invictus" },
            { id: "acqua-di-gio-edt-1996", reason: "Shares accords: citrus, aquatic" },
            { id: "wanted-edt-2016", reason: "Shares accords: citrus, woody" }
        ]
    },
    {
        id: "acqua-di-gio-edt-1996",
        name: "Acqua di Gio",
        full_name: "Acqua di Gio Eau de Toilette",
        brand: "Giorgio Armani",
        concentration: "Eau de Toilette",
        edition: "EDT",
        year: 1996,
        line: "acqua-di-gio",
        gender: "For men",
        description: "A fresh, aquatic fragrance by Giorgio Armani, released in 1996. Created by perfumer Alberto Morillas.",
        accords: [
            { name: "citrus", strength: 100 },
            { name: "aquatic", strength: 90 },
            { name: "aromatic", strength: 70 },
            { name: "marine", strength: 65 },
            { name: "fresh spicy", strength: 55 }
        ],
        notes: {
            top: ["Lime", "Lemon", "Bergamot", "Neroli"],
            middle: ["Sea notes", "Jasmine", "Calone", "Rosemary", "Peach"],
            base: ["White musk", "Cedar", "Oakmoss", "Patchouli", "Amber"]
        },
        similar: [
            { id: "invictus-edt-2013", reason: "Shares accords: citrus, aquatic" },
            { id: "dylan-blue-edt-2016", reason: "Shares accords: citrus, aromatic" },
            { id: "bleu-de-chanel-edt-2010", reason: "Shares accords: citrus, aromatic" }
        ]
    },
    {
        id: "acqua-di-gio-profumo-2015",
        name: "Acqua di Giò Profumo",
        full_name: "Acqua di Giò Profumo",
        brand: "Giorgio Armani",
        concentration: "Parfum",
        edition: "Parfum",
        year: 2015,
        line: "acqua-di-gio",
        gender: "For men",
        description: "A darker, aromatic edition of Acqua di Gio by Giorgio Armani, released in 2015. Created by perfumer Alberto Morillas.",
        accords: [
            { name: "aquatic", strength: 100 },
            { name: "aromatic", strength: 80 },
            { name: "fresh spicy", strength: 72 },
            { name: "citrus", strength: 60 },
            { name: "amber", strength: 55 }
        ],
        notes: {
            top: ["Sea notes", "Bergamot"],
            middle: ["Rosemary", "Sage", "Geranium"],
            base: ["Incense", "Patchouli"]
        },
        similar: [
            { id: "sauvage-edt-2015", reason: "Shares accords: aromatic, fresh spicy" },
            { id: "sauvage-parfum-2019", reason: "Shares: bergamot, incense" },
            { id: "explorer-edp-2019", reason: "Shares: bergamot, patchouli" },
            { id: "dylan-blue-edt-2016", reason: "Shares: incense, patchouli" }
        ]
    },
    {
        id: "explorer-edp-2019",
        name: "Explorer",
        full_name: "Explorer Eau de Parfum",
        brand: "Montblanc",
        concentration: "Eau de Parfum",
        edition: "EDP",
        year: 2019,
        line: "explorer",
        gender: "For men",
        description: "A woody, leathery fragrance by Montblanc, released in 2019. Created by perfumers Jordi Fernández and Antoine Maisondieu.",
        accords: [
            { name: "woody", strength: 100 },
            { name: "fresh spicy", strength: 80 },
            { name: "aromatic", strength: 70 },
            { name: "citrus", strength: 62 },
            { name: "earthy", strength: 55 }
        ],
        notes: {
            top: ["Bergamot", "Pink pepper", "Clary sage"],
            middle: ["Vetiver", "Leather"],
            base: ["Ambroxan", "Akigalawood", "Patchouli", "Cacao"]
        },
        similar: [
            { id: "sauvage-edt-2015", reason: "Shares: bergamot, pepper" },
            { id: "bleu-de-chanel-edt-2010", reason: "Shares: vetiver, patchouli" },
            { id: "luna-rossa-carbon-edt-2017", reason: "Shares: bergamot, ambroxan" },
            { id: "sauvage-parfum-2019", reason: "Shares: bergamot" }
        ]
    }
];
