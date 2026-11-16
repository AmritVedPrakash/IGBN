const imageUrl = (imageId) => `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=720&q=82`;

export const readerBooks = [
  { id: "mindful-path", title: "The Mindful Path", author: "Ananya Rao", genre: "Spirituality & Self-Help", language: "English", price: 4.99, rating: 4.8, image: imageUrl("photo-1512820790803-83ca734da794"), collection: "recommended", description: "Small daily rituals and thoughtful reflections for a calmer, more intentional life.", year: 2025 },
  { id: "echoes-dawn", title: "Echoes of a New Dawn", author: "Vikram Mehta", genre: "Fiction", language: "Hindi", price: 5.99, rating: 4.7, image: imageUrl("photo-1544947950-fa07a98d237f"), collection: "recommended", description: "One unexpected homecoming brings a family together and changes the future of their village.", year: 2025 },
  { id: "resilient-you", title: "The Resilient You", author: "Neha Kapoor", genre: "Non-Fiction", language: "English", price: 4.99, rating: 4.6, image: imageUrl("photo-1516979187457-637abb4f9353"), collection: "recommended", description: "A practical guide to meeting change with courage, perspective and renewed confidence.", year: 2024 },
  { id: "children-tomorrow", title: "Children of Tomorrow", author: "Rohan Sen", genre: "Children's Books", language: "Hindi", price: 3.99, rating: 4.7, image: imageUrl("photo-1503454537195-1dcabb73ffb9"), collection: "recommended", description: "A curious young inventor discovers that the best ideas begin with kindness.", year: 2025 },
  { id: "beyond-horizon", title: "Beyond the Horizon", author: "Arjun Malhotra", genre: "Travel", language: "English", price: 6.99, rating: 4.5, image: imageUrl("photo-1464822759023-fed622ff2c3b"), collection: "recommended", description: "A journey through remote mountain towns and the people who make them unforgettable.", year: 2024, onSale: true },
  { id: "silent-warrior", title: "The Silent Warrior", author: "Meera Iyer", genre: "Fiction", language: "English", price: 5.99, rating: 4.8, image: imageUrl("photo-1500530855697-b586d89ba3ee"), collection: "trending", description: "A quiet village, an old promise and the courage to speak when it matters most.", year: 2024 },
  { id: "money-meaning", title: "Money with Meaning", author: "Karan Shah", genre: "Business & Finance", language: "English", price: 4.99, rating: 4.6, image: imageUrl("photo-1498050108023-c5249f4df085"), collection: "trending", description: "Make confident choices with your money while staying true to what matters to you.", year: 2025 },
  { id: "healing-within", title: "Healing Within", author: "Dr. Aditi Verma", genre: "Health & Wellness", language: "English", price: 4.99, rating: 4.7, image: imageUrl("photo-1506126613408-eca07ce68773"), collection: "trending", description: "Gentle, practical ways to restore balance and make space for everyday wellbeing.", year: 2025 },
  { id: "stories-india", title: "Stories from India", author: "Raghav Bhatia", genre: "History & Culture", language: "Hindi", price: 3.99, rating: 4.6, image: imageUrl("photo-1524492412937-b28074a5d7da"), collection: "trending", description: "Familiar landmarks and lesser-known histories told through the lives of ordinary people.", year: 2024, onSale: true },
  { id: "global-indian", title: "The Global Indian", author: "Priya Nair", genre: "Biography & Memoir", language: "English", price: 22.99, rating: 4.5, image: imageUrl("photo-1507842217343-583bb7270b66"), collection: "trending", description: "Stories of belonging, ambition and home from Indians building lives around the world.", year: 2025 },
  { id: "new-beginnings", title: "New Beginnings", author: "Kavita Deshpande", genre: "Fiction", language: "English", price: 4.99, rating: 4.6, image: imageUrl("photo-1516542076529-1ea3854896f2"), collection: "new", description: "After years away, Kavita returns to the coast to start over and rediscover her voice.", year: 2026 },
  { id: "threads-time", title: "Threads of Time", author: "Sahil Mehta", genre: "History & Culture", language: "Hindi", price: 1.99, rating: 4.7, image: imageUrl("photo-1543002588-bfa74002ed7e"), collection: "new", description: "Three generations, one family workshop and a craft that carries its own history.", year: 2026, onSale: true },
  { id: "inner-light", title: "The Inner Light", author: "Radhika Sen", genre: "Spirituality & Self-Help", language: "English", price: 4.99, rating: 4.8, image: imageUrl("photo-1470252649378-9c29740c9fa8"), collection: "new", description: "Quiet prompts and simple practices to help you notice what brings meaning to your days.", year: 2026, onSale: true },
  { id: "little-dreamers", title: "Little Dreamers", author: "Anita Rhamms", genre: "Children's Books", language: "English", price: 3.99, rating: 4.8, image: imageUrl("photo-1516627145497-ae6968895b74"), collection: "new", description: "A playful bedtime story about three friends who imagine a brighter world.", year: 2026 },
  { id: "startup-mindset", title: "The Startup Mindset", author: "Thean Mehta", genre: "Business & Finance", language: "English", price: 6.99, rating: 4.6, image: imageUrl("photo-1523726491678-bf852e717f6a"), collection: "sponsored", description: "Build useful habits for testing ideas, learning quickly and creating lasting value.", year: 2025, sponsored: true, onSale: true },
  { id: "sustainable-living", title: "Sustainable Living", author: "Pooja Kulkarni", genre: "Health & Wellness", language: "English", price: 5.99, rating: 4.7, image: imageUrl("photo-1501004318641-b39e6451bec6"), collection: "sponsored", description: "Approachable changes for a more thoughtful home, garden and daily routine.", year: 2025, sponsored: true },
  { id: "voices-change", title: "Voices of Change", author: "Amit Verma", genre: "Non-Fiction", language: "Hindi", price: 4.99, rating: 4.6, image: imageUrl("photo-1519682337058-a94d519337bc"), collection: "sponsored", description: "First-person stories from people working toward a fairer and more hopeful future.", year: 2025, sponsored: true },
];

const mindfulPathDetails = {
  subtitle: "A Journey Within",
  synopsis: "The Mindful Path is an inspiring novel that follows the journey of a young woman who leaves behind a fast-paced corporate life to discover what truly matters. Through unexpected encounters, inner struggles and transformative experiences, she learns to embrace mindfulness, simplicity and the beauty of the present moment.",
  authorBio: "Ananya Rao is a bestselling author, mindfulness coach and storyteller. Her work explores human emotions, inner growth and the quiet journeys toward a more meaningful life.",
  pages: 286,
  publisher: "Lotus House Publishing",
  isbn: "978-81-948210-4-7",
  readers: "12.5K",
  reviewCount: "1,248",
  sample: "The morning sun broke gently over the hills, casting a golden glow on the small town. For the first time in years, I felt a sense of stillness—a quiet whisper within, as if life was inviting me to begin again.",
  reviews: [
    { name: "Ritika Sharma", date: "12 Oct 2026", rating: 5, text: "A beautifully written and deeply inspiring book. It stayed with me long after I finished reading it." },
    { name: "Arjun Khanna", date: "5 Oct 2026", rating: 4.5, text: "A must-read for anyone looking for meaning and clarity in life. Highly recommended!" },
  ],
};

export function getReaderBookDetails(book) {
  const custom = book.id === "mindful-path" ? mindfulPathDetails : {};
  const alternateLanguage = book.language === "English" ? "Hindi" : "English";

  return {
    subtitle: custom.subtitle || `A ${book.genre.toLowerCase()} story`,
    synopsis: custom.synopsis || `${book.description} Discover a thoughtful, richly told story from ${book.author}, created for readers who love ${book.genre.toLowerCase()} and memorable characters.`,
    authorBio: custom.authorBio || `${book.author} writes about the people, places and ideas that shape our lives. Their work brings a fresh perspective to ${book.genre.toLowerCase()} and invites readers to see familiar things in a new light.`,
    pages: custom.pages || 240,
    publisher: custom.publisher || "Global Publishers",
    isbn: custom.isbn || "978-93-00000-00-0",
    readers: custom.readers || "2.4K",
    reviewCount: custom.reviewCount || "428",
    sample: custom.sample || `${book.description} The first light of morning found its way through the window. In that quiet moment, a new possibility began to take shape—one small step, one honest choice, and a story waiting to unfold.`,
    reviews: custom.reviews || [
      { name: "Aarav Mehta", date: "12 Oct 2026", rating: 5, text: `A thoughtful read. ${book.author} brings the story to life with warmth and detail.` },
      { name: "Mira Shah", date: "5 Oct 2026", rating: 4.5, text: "Engaging from the first chapter. I would happily recommend this book to other readers." },
    ],
    editions: [
      { language: book.language, format: "eBook", price: book.price },
      { language: alternateLanguage, format: "eBook", price: book.price + 1 },
      { language: book.language, format: "Paperback", price: book.price + 8 },
    ],
  };
}
