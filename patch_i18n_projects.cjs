const fs = require('fs');

const file = 'src/i18n.js';
let content = fs.readFileSync(file, 'utf8');

// The new projects in English
const enProjects = `,
          {
            "id": "sports",
            "client": "Saudi Sports Federation",
            "category": "Sports & Events",
            "desc": "A vibrant, energetic brand identity capturing the momentum and passion of local and international sports events hosted in the Kingdom.",
            "img": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
          },
          {
            "id": "finance",
            "client": "FinTech Capital",
            "category": "Finance & Banking",
            "desc": "A sleek, trustworthy identity for a leading financial institution. Merging traditional banking security with modern digital agility.",
            "img": "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80"
          },
          {
            "id": "culture",
            "client": "Diriyah Cultural Hub",
            "category": "Arts & Culture",
            "desc": "An identity that celebrates the rich historical roots of Diriyah, utilizing traditional patterns with a contemporary minimalist approach.",
            "img": "https://images.unsplash.com/photo-1596395219415-9c32145e6eb1?auto=format&fit=crop&q=80"
          }
        ],
        "footer"`;

// The new projects in Arabic
const arProjects = `,
          {
            "id": "sports",
            "client": "الاتحاد السعودي للرياضة",
            "category": "الرياضة والفعاليات",
            "desc": "هوية نابضة بالحياة تعكس الزخم والشغف للفعاليات الرياضية المحلية والدولية التي تستضيفها المملكة.",
            "img": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
          },
          {
            "id": "finance",
            "client": "فينتك كابيتال",
            "category": "المالية والبنوك",
            "desc": "هوية أنيقة وموثوقة لمؤسسة مالية رائدة، تدمج بين الأمان المصرفي التقليدي والمرونة الرقمية الحديثة.",
            "img": "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80"
          },
          {
            "id": "culture",
            "client": "مركز الدرعية الثقافي",
            "category": "الفنون والثقافة",
            "desc": "هوية تحتفي بالجذور التاريخية الغنية للدرعية، باستخدام الأنماط التقليدية مع نهج عصري مبسط.",
            "img": "https://images.unsplash.com/photo-1596395219415-9c32145e6eb1?auto=format&fit=crop&q=80"
          }
        ],
        "footer"`;

// Replace the first occurrence (English)
content = content.replace(/\]\,\s*"footer"/, enProjects);

// Replace the second occurrence (Arabic)
content = content.replace(/\]\,\s*"footer"/, arProjects);

fs.writeFileSync(file, content);
console.log('Projects added successfully.');
