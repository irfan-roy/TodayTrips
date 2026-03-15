const allBlogs = [
  {
    image_url:
      "https://images.unsplash.com/photo-1758633370468-686fba5ead85?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "#TodayTrip: Hotels & Homes",
    description:
      "Join us for a Hotels & Homes #TodayTrip on August 27, 2025 at 11:00 AM Pacific Time (PT)/2:00 PM Eastern",
    category: "Events",
    layout_type: "square",
    section_order: 1,
    display_order: 1,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop",
    headline: "Mountain Escapes: Cozy Cabins",
    description:
      "Discover breathtaking mountain retreats and rustic cabins perfect for your next getaway. Experience nature like never before with stunning views and peaceful solitude.",
    category: "Mountain Travel",
    layout_type: "square",
    section_order: 1,
    display_order: 2,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
    headline: "Beach Villas: Coastal Living",
    description:
      "Wake up to ocean waves and golden sunsets. Explore our handpicked selection of luxury beach villas and seaside homes for the ultimate tropical paradise experience.",
    category: "Beach Travel",
    layout_type: "square",
    section_order: 1,
    display_order: 3,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    headline: "Modern Interior Design Trends 2025",
    description:
      "Transform your living space with the latest interior design trends. From minimalist aesthetics to bold statement pieces, discover what's hot in home decor this year.",
    category: "Interior Design",
    layout_type: "square",
    section_order: 1,
    display_order: 4,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    headline: "Road Trip Adventures: Best Routes",
    description:
      "Pack your bags and hit the open road! We've curated the most scenic road trip routes across continents, complete with must-stop destinations and hidden gems along the way.",
    category: "Road Trips",
    layout_type: "square",
    section_order: 1,
    display_order: 5,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    headline: "Smart Home Technology Guide",
    description:
      "Upgrade your home with cutting-edge smart technology. Learn how to create a connected living space that's efficient, secure, and incredibly convenient for modern families.",
    category: "Smart Home",
    layout_type: "square",
    section_order: 1,
    display_order: 6,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop",
    headline: "European City Breaks: Weekend Getaways",
    description:
      "Explore charming European cities perfect for quick weekend escapes. From cobblestone streets to world-class museums, find your next urban adventure destination.",
    category: "City Travel",
    layout_type: "square",
    section_order: 1,
    display_order: 7,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    headline: "Outdoor Living Spaces: Patio Makeover",
    description:
      "Transform your backyard into an outdoor oasis. Get inspired with creative patio designs, furniture ideas, and landscaping tips to extend your living space outdoors.",
    category: "Outdoor Design",
    layout_type: "square",
    section_order: 1,
    display_order: 8,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    headline: "Island Hopping: Tropical Paradise Tour",
    description:
      "Embark on an unforgettable island-hopping adventure through crystal-clear waters and pristine beaches. Discover exotic cultures and underwater wonders in remote locations.",
    category: "Island Travel",
    layout_type: "square",
    section_order: 1,
    display_order: 9,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    headline: "Sustainable Living: Eco-Friendly Homes",
    description:
      "Build a greener future with sustainable home solutions. Learn about solar panels, rainwater harvesting, and eco-friendly materials that reduce your carbon footprint.",
    category: "Sustainability",
    layout_type: "square",
    section_order: 1,
    display_order: 10,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035&auto=format&fit=crop",
    headline: "Cultural Immersion: Authentic Travel Experiences",
    description:
      "Go beyond tourist attractions and dive deep into local cultures. Stay with families, learn traditional crafts, and taste authentic cuisine in destinations around the world.",
    category: "Cultural Travel",
    layout_type: "square",
    section_order: 1,
    display_order: 11,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    headline: "Mountain Escapes: Top 10 Alpine Retreats",
    description:
      "Discover breathtaking mountain destinations perfect for your next adventure. From cozy cabins to luxury lodges.",
    category: "Travel",
    layout_type: "square",
    section_order: 1,
    display_order: 12,
    is_featured: true,
  },
  {
    image_url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    headline: "Beachfront Paradise: Coastal Living Guide",
    description:
      "Explore stunning beachfront properties and learn tips for the perfect seaside vacation experience.",
    category: "Destinations",
    layout_type: "square",
    section_order: 1,
    display_order: 13,
    is_featured: true,
  },
  {
    image_url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    headline: "Urban Adventures: City Break Inspiration",
    description:
      "Find the best urban accommodations and hidden gems in the world's most exciting cities.",
    category: "City Guides",
    layout_type: "square",
    section_order: 1,
    display_order: 14,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    headline: "Hosting 101: Maximize Your Earnings",
    description:
      "Expert tips and strategies to become a superhost and increase your booking rates by 50%.",
    category: "Host Tips",
    layout_type: "square",
    section_order: 1,
    display_order: 15,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    headline: "Sustainable Travel: Eco-Friendly Stays",
    description:
      "Discover accommodations committed to sustainability and learn how to travel responsibly.",
    category: "Sustainability",
    layout_type: "square",
    section_order: 1,
    display_order: 16,
    is_featured: true,
  },
  {
    image_url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    headline: "Family Travel: Kid-Friendly Destinations",
    description:
      "Plan the perfect family getaway with our guide to child-friendly accommodations and activities.",
    category: "Family",
    layout_type: "square",
    section_order: 1,
    display_order: 17,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    headline: "Luxury Escapes: Premium Experiences",
    description:
      "Indulge in opulent stays and exclusive amenities at the world's finest luxury properties.",
    category: "Luxury",
    layout_type: "square",
    section_order: 1,
    display_order: 18,
    is_featured: true,
  },
  {
    image_url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    headline: "Digital Nomad Havens: Work & Wander",
    description:
      "Top destinations for remote workers with fast WiFi, coworking spaces, and inspiring environments.",
    category: "Remote Work",
    layout_type: "square",
    section_order: 1,
    display_order: 19,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    headline: "Budget Travel Hacks: Save More, See More",
    description:
      "Money-saving tips and affordable accommodation options for the savvy traveler on a budget.",
    category: "Budget Tips",
    layout_type: "square",
    section_order: 1,
    display_order: 20,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    headline: "Adventure Awaits: Thrill-Seeker's Guide",
    description:
      "From mountain climbing to water sports, find accommodations near the world's best adventure activities.",
    category: "Adventure",
    layout_type: "square",
    section_order: 1,
    display_order: 21,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop",
    headline: "Scuba Diving: Underwater Paradise Exploration",
    description:
      "Dive into crystal-clear waters and discover vibrant coral reefs teeming with marine life. Explore the best diving spots worldwide, from the Great Barrier Reef to cenotes in Mexico.",
    category: "Water Sports",
    layout_type: "rectangle",
    section_order: 2,
    display_order: 1,
    is_featured: true,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop",
    headline: "Hot Air Balloon Rides: Sky-High Adventures",
    description:
      "Float peacefully above stunning landscapes at sunrise. Experience breathtaking aerial views of valleys, vineyards, and ancient ruins in destinations like Cappadocia and Serengeti.",
    category: "Adventure Travel",
    layout_type: "square",
    section_order: 2,
    display_order: 2,
    is_featured: true,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    headline: "Train Journeys: Scenic Railway Adventures",
    description:
      "Embark on iconic train routes that showcase spectacular scenery. From the Trans-Siberian Railway to Swiss Alpine trains, discover the romance of slow travel on legendary rails.",
    category: "Train Travel",
    layout_type: "square",
    section_order: 2,
    display_order: 3,
    is_featured: true,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    headline: "Wildlife Safari: African Bush Expeditions",
    description:
      "Witness the Big Five in their natural habitat across African savannas. Experience game drives, bush walks, and luxury tented camps for an authentic safari adventure of a lifetime.",
    category: "Safari",
    layout_type: "rectangle",
    section_order: 2,
    display_order: 4,
    is_featured: true,
  },

  // SECTION 3: Component 4 - Mixed Layout (Rectangle + Square)
  {
    image_url:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2100&auto=format&fit=crop",
    headline: "Nursery Design: Baby Room Essentials",
    description:
      "Create a safe, soothing environment for your newborn with thoughtful nursery design. Explore color psychology, furniture safety standards, and storage solutions for growing families.",
    category: "Interior Design",
    layout_type: "rectangle",
    section_order: 3,
    display_order: 1,
    is_featured: true,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
    headline: "Entryway Styling: First Impressions Matter",
    description:
      "Design a welcoming entrance that sets the tone for your entire home. Discover console tables, mirror placement, coat storage, and decor ideas that wow guests immediately.",
    category: "Interior Design",
    layout_type: "square",
    section_order: 3,
    display_order: 2,
    is_featured: true,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
    headline: "Walk-In Closets: Luxury Wardrobe Organization",
    description:
      "Transform your closet into a boutique-style dressing room. Learn about custom shelving systems, lighting options, and accessories that make getting ready a luxurious experience.",
    category: "Interior Design",
    layout_type: "square",
    section_order: 3,
    display_order: 3,
    is_featured: true,
  },
  {
    image_url:
      "https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "Home Theater Systems: Cinematic Experience",
    description:
      "Build the ultimate entertainment space with professional-grade audiovisual equipment. From surround sound to projection screens, create a cinema-quality viewing experience at home.",
    category: "Home Entertainment",
    layout_type: "rectangle",
    section_order: 3,
    display_order: 4,
    is_featured: true,
  },

  // SECTION 4: Component 5 - Square Cards (Grid)
  {
    image_url:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
    headline: "Desert Oasis: Luxury Safari Lodges",
    description:
      "Experience the magic of desert landscapes in style. Stay in exclusive safari lodges with premium amenities, stargazing opportunities, and unforgettable wildlife encounters.",
    category: "Desert Travel",
    layout_type: "square",
    section_order: 4,
    display_order: 1,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=2070&auto=format&fit=crop",
    headline: "Kitchen Renovation: Modern Culinary Spaces",
    description:
      "Redesign your kitchen into a chef's dream workspace. Discover the latest appliances, storage solutions, and design layouts that combine functionality with stunning aesthetics.",
    category: "Kitchen Design",
    layout_type: "square",
    section_order: 4,
    display_order: 2,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2087&auto=format&fit=crop",
    headline: "Cruise Adventures: Ocean Voyages",
    description:
      "Set sail on luxury cruise liners exploring multiple destinations in one trip. From Caribbean islands to Mediterranean ports, experience the ultimate floating resort vacation.",
    category: "Cruise Travel",
    layout_type: "square",
    section_order: 4,
    display_order: 3,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2032&auto=format&fit=crop",
    headline: "Bathroom Sanctuary: Spa-Inspired Designs",
    description:
      "Create your personal wellness retreat at home. Transform your bathroom with rainfall showers, soaking tubs, and calming color palettes for daily relaxation rituals.",
    category: "Bathroom Design",
    layout_type: "square",
    section_order: 4,
    display_order: 4,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
    headline: "Hiking Trails: Mountain Peak Adventures",
    description:
      "Conquer breathtaking trails and reach stunning summits. We've mapped out the world's most incredible hiking routes for adventurers of all skill levels and fitness goals.",
    category: "Hiking",
    layout_type: "square",
    section_order: 4,
    display_order: 5,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2032&auto=format&fit=crop",
    headline: "Home Office Design: Productivity Spaces",
    description:
      "Design the perfect work-from-home environment that boosts creativity and focus. Explore ergonomic furniture, lighting solutions, and organization systems for maximum efficiency.",
    category: "Office Design",
    layout_type: "square",
    section_order: 4,
    display_order: 6,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    headline: "Northern Lights: Arctic Circle Expeditions",
    description:
      "Witness the mesmerizing aurora borealis in remote Arctic locations. Plan your once-in-a-lifetime journey to see nature's most spectacular light show dancing across polar skies.",
    category: "Arctic Travel",
    layout_type: "square",
    section_order: 4,
    display_order: 7,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
    headline: "Bedroom Retreat: Restful Sleep Sanctuaries",
    description:
      "Design the ultimate bedroom oasis for better sleep and relaxation. Learn about calming color schemes, luxury bedding, blackout solutions, and feng shui principles.",
    category: "Bedroom Design",
    layout_type: "square",
    section_order: 4,
    display_order: 8,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop",
    headline: "Wine Country Tours: Vineyard Vacations",
    description:
      "Sip and savor your way through world-famous wine regions. Discover boutique wineries, gourmet dining experiences, and scenic countryside stays in Tuscany, Napa, and beyond.",
    category: "Wine Tourism",
    layout_type: "square",
    section_order: 4,
    display_order: 9,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop",
    headline: "Basement Transformation: Entertainment Zones",
    description:
      "Unlock your basement's potential with creative renovation ideas. From home theaters to game rooms and wine cellars, maximize this often-underutilized space in your home.",
    category: "Basement Design",
    layout_type: "square",
    section_order: 4,
    display_order: 10,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop",
    headline: "Camping Under Stars: Wilderness Retreats",
    description:
      "Reconnect with nature through authentic camping experiences. Find the best campgrounds, glamping sites, and national parks for unforgettable outdoor adventures with family.",
    category: "Camping",
    layout_type: "square",
    section_order: 4,
    display_order: 11,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2080&auto=format&fit=crop",
    headline: "Living Room Makeover: Cozy Gathering Spaces",
    description:
      "Revitalize your living room into a warm, inviting space perfect for entertaining. Explore furniture arrangements, accent pieces, and color palettes that reflect your style.",
    category: "Living Room Design",
    layout_type: "square",
    section_order: 4,
    display_order: 12,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2087&auto=format&fit=crop",
    headline: "Tropical Rainforest: Eco-Lodge Adventures",
    description:
      "Immerse yourself in lush jungle canopies and exotic wildlife. Stay at sustainable eco-lodges deep in rainforests while contributing to conservation efforts and local communities.",
    category: "Eco Tourism",
    layout_type: "square",
    section_order: 4,
    display_order: 13,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
    headline: "Flooring Guide: Material Selection Tips",
    description:
      "Choose the perfect flooring for every room in your home. Compare hardwood, tile, laminate, and luxury vinyl options based on durability, maintenance, and aesthetic appeal.",
    category: "Flooring",
    layout_type: "square",
    section_order: 4,
    display_order: 14,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    headline: "Ski Resorts: Winter Wonderland Escapes",
    description:
      "Hit the slopes at world-class ski destinations offering powder-perfect conditions. From beginner bunny hills to expert black diamonds, find your ideal winter sports paradise.",
    category: "Ski Travel",
    layout_type: "square",
    section_order: 4,
    display_order: 15,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2074&auto=format&fit=crop",
    headline: "Lighting Design: Ambiance & Functionality",
    description:
      "Master the art of home illumination with layered lighting strategies. Learn about fixtures, bulb types, dimmer systems, and smart controls to set the perfect mood.",
    category: "Lighting Design",
    layout_type: "square",
    section_order: 4,
    display_order: 16,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop",
    headline: "Historic Cities: Architecture & Heritage Tours",
    description:
      "Step back in time exploring ancient civilizations and medieval towns. Walk through centuries-old streets, magnificent castles, and UNESCO World Heritage sites across the globe.",
    category: "Historic Travel",
    layout_type: "square",
    section_order: 4,
    display_order: 17,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop",
    headline: "Garden Design: Landscaping Masterpieces",
    description:
      "Cultivate your dream garden with professional landscaping techniques. Discover plant selection, seasonal planning, irrigation systems, and hardscaping elements for stunning curb appeal.",
    category: "Garden Design",
    layout_type: "square",
    section_order: 4,
    display_order: 18,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    headline: "Budget Travel: Affordable Adventure Hacks",
    description:
      "Explore the world without breaking the bank. Get insider tips on finding cheap flights, budget accommodations, free attractions, and money-saving strategies for savvy travelers.",
    category: "Budget Travel",
    layout_type: "square",
    section_order: 4,
    display_order: 19,
    is_featured: false,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    headline: "Storage Solutions: Decluttering Your Home",
    description:
      "Maximize space and minimize clutter with innovative storage ideas. From closet organizers to multi-functional furniture, create an organized home that breathes better.",
    category: "Home Organization",
    layout_type: "square",
    section_order: 4,
    display_order: 20,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    headline: "Hidden Gems: Undiscovered Travel Destinations",
    description:
      "Explore off-the-beaten-path locations that offer authentic experiences away from tourist crowds.",
    category: "Destinations",
    layout_type: "square",
    section_order: 4,
    display_order: 21,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    headline: "Solo Travel: Confidence Building Adventures",
    description:
      "Empower yourself with solo travel tips and discover the best destinations for independent explorers.",
    category: "Travel Tips",
    layout_type: "square",
    section_order: 4,
    display_order: 22,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    headline: "Romantic Getaways: Perfect Couple Retreats",
    description:
      "Find intimate accommodations and romantic destinations for unforgettable moments with your partner.",
    category: "Romance",
    layout_type: "square",
    section_order: 4,
    display_order: 23,
    is_featured: true,
  },
  {
    image_url: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5",
    headline: "Foodie Adventures: Culinary Travel Guide",
    description:
      "Discover destinations known for incredible cuisine and stay near the best local food experiences.",
    category: "Food & Travel",
    layout_type: "square",
    section_order: 4,
    display_order: 24,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    headline: "Winter Wonderland: Snowy Escapes",
    description:
      "Experience magical winter destinations with cozy lodges, skiing, and breathtaking snowy landscapes.",
    category: "Seasonal",
    layout_type: "square",
    section_order: 4,
    display_order: 25,
    is_featured: true,
  },
  {
    image_url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    headline: "Wellness Retreats: Mind, Body & Soul",
    description:
      "Rejuvenate at peaceful wellness destinations offering yoga, meditation, and spa experiences.",
    category: "Wellness",
    layout_type: "square",
    section_order: 4,
    display_order: 26,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    headline: "Pet-Friendly Travel: Adventures With Furry Friends",
    description:
      "Find accommodations that welcome pets and discover destinations perfect for traveling with animals.",
    category: "Pet Travel",
    layout_type: "square",
    section_order: 4,
    display_order: 27,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    headline: "Cultural Immersion: Local Living Experiences",
    description:
      "Live like a local and immerse yourself in authentic cultural experiences around the world.",
    category: "Culture",
    layout_type: "square",
    section_order: 4,
    display_order: 28,
    is_featured: true,
  },
  {
    image_url: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd",
    headline: "Photography Spots: Instagram-Worthy Locations",
    description:
      "Discover the most photogenic destinations and accommodations with stunning backdrops.",
    category: "Photography",
    layout_type: "square",
    section_order: 4,
    display_order: 29,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
    headline: "Road Trip Essentials: Epic Highway Adventures",
    description:
      "Plan the ultimate road trip with our guide to scenic routes and convenient stopover accommodations.",
    category: "Road Trips",
    layout_type: "square",
    section_order: 4,
    display_order: 30,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1509023464722-18d996393ca8",
    headline: "Festival Season: Event Travel Planning",
    description:
      "Experience world-famous festivals and find the best places to stay during major cultural events.",
    category: "Events",
    layout_type: "square",
    section_order: 4,
    display_order: 31,
    is_featured: true,
  },
  {
    image_url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    headline: "Nature Therapy: Forest Bathing Destinations",
    description:
      "Reconnect with nature at serene forest locations offering peace, tranquility, and fresh air.",
    category: "Nature",
    layout_type: "square",
    section_order: 4,
    display_order: 32,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1500835556837-99ac94a94552",
    headline: "Historic Sites: Time Travel Through Architecture",
    description:
      "Stay near UNESCO World Heritage sites and explore centuries of human history and culture.",
    category: "History",
    layout_type: "square",
    section_order: 4,
    display_order: 33,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5",
    headline: "Lake Retreats: Waterfront Serenity",
    description:
      "Discover peaceful lakeside accommodations perfect for relaxation and water activities.",
    category: "Lakes",
    layout_type: "square",
    section_order: 4,
    display_order: 34,
    is_featured: true,
  },
  {
    image_url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    headline: "Island Hopping: Tropical Paradise Guide",
    description:
      "Plan your island-hopping adventure with tips on the best tropical destinations and stays.",
    category: "Islands",
    layout_type: "square",
    section_order: 4,
    display_order: 35,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    headline: "Camping Luxury: Glamping Experiences",
    description:
      "Enjoy nature without sacrificing comfort at luxurious glamping sites around the world.",
    category: "Glamping",
    layout_type: "square",
    section_order: 4,
    display_order: 36,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1",
    headline: "Desert Dreams: Arid Landscape Adventures",
    description:
      "Experience the magic of desert destinations with unique accommodations and starry night skies.",
    category: "Deserts",
    layout_type: "square",
    section_order: 4,
    display_order: 37,
    is_featured: true,
  },
  {
    image_url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    headline: "Vineyard Visits: Wine Country Escapes",
    description:
      "Tour beautiful wine regions and stay at charming vineyard accommodations with tastings.",
    category: "Wine Travel",
    layout_type: "square",
    section_order: 4,
    display_order: 38,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85",
    headline: "Autumn Colors: Fall Foliage Destinations",
    description:
      "Witness stunning fall colors at these breathtaking destinations during peak foliage season.",
    category: "Seasonal",
    layout_type: "square",
    section_order: 4,
    display_order: 39,
    is_featured: false,
  },
  {
    image_url: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8",
    headline: "Coastal Cliffs: Dramatic Ocean Views",
    description:
      "Stay at spectacular cliff-side locations offering dramatic ocean vistas and rugged beauty.",
    category: "Coastal",
    layout_type: "square",
    section_order: 4,
    display_order: 40,
    is_featured: true,
  },
];

module.exports = { data: allBlogs };
