import { createSlice } from "@reduxjs/toolkit";

const AsiaCountry6 = createSlice({
  name: "AsiaCountry6",
  initialState: {
    India: [
      {
        city: "Delhi",
        date: 0,
        places: [
          "Explore historical sites in Old Delhi",
          "Visit India Gate and Humayun Tomb in New Delhi",
          "Experience the vibrant markets of Chandni Chowk",
        ],
      },
      {
        city: "Agra",
        date: 2,
        places: [
          "Visit the majestic Amber Fort",
          "Explore the City Palace and Jantar Mantar",
          "Experience local culture in the bustling markets",
        ],
      },
      {
        city: "Mumbai",
        date: 4,
        places: [
          "Explore the Gateway of India and Marine Drive",
          "Visit Elephanta Caves for ancient rock-cut sculptures",
          "Experience the vibrant culture of Mumbai",
        ],
      },
      {
        city: "Kerala",
        date: 6,
        places: [
          "Experience the serene backwaters of Alleppey",
          "Explore the lush tea plantations in Munnar",
          "Relax on the beautiful beaches of Varkala or Kovalam",
        ],
      },
    ],
    Sri_Lanka: [
      {
        city: "Colombo",
        date: 0,
        places: [
          "Explore the historic Pettah Market",
          "Visit the Gangaramaya Temple",
          "Stroll along Galle Face Green",
        ],
      },
      {
        city: "Kandy",
        date: 2,
        places: [
          "Visit the Temple of the Tooth Relic",
          "Explore the Royal Botanical Gardens",
          "Take a scenic walk around Kandy Lake",
        ],
      },
      {
        city: "Ella",
        date: 4,
        places: [
          "Hike to Little Adam's Peak for panoramic views",
          "Visit the Nine Arch Bridge",
          "Explore Ella Rock",
        ],
      },
      {
        city: "Galle",
        date: 6,
        places: [
          "Wander through the historic Galle Fort",
          "Visit the Dutch Reformed Church",
          "Relax on Unawatuna Beach",
        ],
      },
      {
        city: "Sigiriya",
        date: 8,
        places: [
          "Climb the ancient rock fortress of Sigiriya",
          "Explore the nearby Dambulla Cave Temple",
          "Visit the Sigiriya Museum",
        ],
      },
    ],
    Thailand: [
      {
        city: "Bangkok",
        date: 0,
        places: [
          "Explore the Grand Palace and Wat Phra Kaew",
          "Visit Wat Arun on the Chao Phraya River",
          "Experience the vibrant street life in Khao San Road",
        ],
      },
      {
        city: "Chiang_Mai",
        date: 2,
        places: [
          "Explore the historic temples of the Old City",
          "Visit the Doi Suthep Temple for panoramic views",
          "Experience the local markets and street food",
        ],
      },
      {
        city: "Phuket",
        date: 4,
        places: [
          "Relax on the stunning beaches like Patong and Karon",
          "Explore Old Phuket Town for its colonial architecture",
          "Take a boat tour to Phi Phi Islands for snorkeling",
        ],
      },
      {
        city: "Krabi",
        date: 6,
        places: [
          "Visit Railay Beach for rock climbing and stunning views",
          "Explore the Thung Teao Forest Natural Park and Emerald Pool",
          "Take a boat trip to the Four Islands for scenic beauty",
        ],
      },
    ],
    Vietnam: [
      {
        city: "Hanoi",
        date: 0,
        places: [
          "Explore the historic Old Quarter in Hanoi",
          "Visit the Ho Chi Minh Mausoleum",
          "Enjoy a traditional water puppet show",
        ],
      },
      {
        city: "Ha_Long_Bay",
        date: 2,
        places: [
          "Cruise through the stunning Ha Long Bay",
          "Visit the iconic limestone karsts and islands",
          "Explore caves and grottoes in the bay",
        ],
      },
      {
        city: "Hoi_An_city",
        date: 4,
        places: [
          "Wander through the charming ancient town of Hoi An",
          "Visit historic temples and assembly halls",
          "Experience the lantern-lit beauty of the city at night",
        ],
      },
      {
        city: "Hue",
        date: 6,
        places: [
          "Explore the Imperial City and Forbidden Purple City",
          "Visit the Thien Mu Pagoda",
          "Take a boat ride on the Perfume River",
        ],
      },
      {
        city: "Ho_Chi_Minh_City",
        date: 8,
        places: [
          "Visit the War Remnants Museum",
          "Explore the Notre-Dame Cathedral Basilica of Saigon",
          "Stroll through Ben Thanh Market",
        ],
      },
      {
        city: "Mekong_Delta",
        date: 10,
        places: [
          "Cruise through the Mekong Delta waterways",
          "Visit traditional floating markets",
          "Explore villages and taste local delicacies",
        ],
      },
    ],
    South_Korea: [
      {
        city: "Seoul",
        date: 0,
        places: [
          "Explore historic sites in Gyeongbokgung Palace",
          "Visit Bukchon Hanok Village",
          "Experience the vibrant atmosphere of Insadong",
        ],
      },
      {
        city: "Busan",
        date: 2,
        places: [
          "Visit the picturesque Gamcheon Culture Village",
          "Explore Beomeosa Temple and its scenic surroundings",
          "Relax at Haeundae Beach",
        ],
      },
      {
        city: "Jeju_Island",
        date: 4,
        places: [
          "Discover the unique landscapes of Manjanggul Cave",
          "Visit the iconic Seongsan Ilchulbong Peak",
          "Relax at Jungmun Saekdal Beach",
        ],
      },
      {
        city: "Gyeongju",
        date: 6,
        places: [
          "Explore the historic Bulguksa Temple",
          "Visit Seokguram Grotto, a UNESCO World Heritage site",
          "Experience the beauty of Anapji Pond at night",
        ],
      },
    ],
    Japan: [
      {
        city: "Tokyo",
        date: 0,
        places: [
          "Explore the bustling neighborhoods of Shibuya and Shinjuku",
          "Visit the historic Senso-ji Temple in Asakusa",
          "Experience the cutting-edge technology in Akihabara",
        ],
      },
      {
        city: "Kyoto",
        date: 2,
        places: [
          "Visit the iconic Fushimi Inari Shrine with its thousands of torii gates",
          "Explore the historic Kinkaku-ji (Golden Pavilion)",
          "Experience a traditional tea ceremony in Gion",
        ],
      },
      {
        city: "Osaka",
        date: 4,
        places: [
          "Try local street food in Dotonbori",
          "Visit Osaka Castle and its surrounding park",
          "Experience the vibrant nightlife in Namba",
        ],
      },
      {
        city: "Hiroshima",
        date: 6,
        places: [
          "Visit the Peace Memorial Park and Atomic Bomb Dome",
          "Explore the Hiroshima Castle and Shukkeien Garden",
          "Take a ferry to Miyajima Island and its iconic torii gate",
        ],
      },
    ],
  },
  reducers: {
    Handleclick: (state) => {
      console.log(state);
    },
  },
});

export const AsiaCountryActions = AsiaCountry6.actions;
export default AsiaCountry6;
