import { MetaData, Article, Program } from "../types";

// Mock Data simulating the backend database
const MOCK_META: MetaData = {
  brand: {
    name: "NOVA VISTA EDUCATION",
    tagline: "Empowering Growth. Elevating Futures.",
    primaryCta: "Apply Now",
    secondaryCta: "View Programs"
  },
  stats: [
    { label: "Students Enrolled", value: "1,200+" },
    { label: "Global Recognition", value: "Top Tier" },
    { label: "Courses Offered", value: "45+" }
  ],
  offices: [
    { city: "London", region: "UK" },
    { city: "New York", region: "USA" },
    { city: "Singapore", region: "APAC" }
  ]
};

const MOCK_PROGRAMS: Program[] = [
  {
    title: "Academic Recognition",
    description: "A pathway for individuals whose work, achievements, and contributions deserve formal acknowledgment through postgraduate honorary titles.",
    features: [
      "Honorary Doctorate Titles",
      "Postgraduate Recognition",
      "Global Accreditation Standards"
    ]
  },
  {
    title: "Skill & Personality Development",
    description: "Structured training designed to strengthen communication, presence, grooming, and overall confidence for professional environments.",
    features: [
      "Public Speaking Mastery",
      "Corporate Grooming",
      "Executive Presence"
    ]
  }
];

const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "The Future of Academic Recognition",
    excerpt: "How honorary titles are reshaping the landscape of professional acknowledgment.",
    author: "Dr. Sarah Jensen",
    category: "Education",
    publishedAt: "2024-05-15"
  },
  {
    id: "2",
    title: "Mastering Executive Presence",
    excerpt: "Key strategies to enhance your influence in high-stakes corporate environments.",
    author: "Mark Rutherford",
    category: "Skill Development",
    publishedAt: "2024-04-22"
  },
  {
    id: "3",
    title: "Global Accreditation Trends",
    excerpt: "Understanding the shift towards skills-based validation in the modern economy.",
    author: "Elena Rossi",
    category: "Insights",
    publishedAt: "2024-03-10"
  }
];

// Simulation of API fetcher
export const fetchMeta = async (): Promise<MetaData> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_META), 500);
  });
};

export const fetchPrograms = async (): Promise<Program[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PROGRAMS), 500);
  });
};

export const fetchArticles = async (): Promise<Article[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_ARTICLES), 800);
  });
};

export const submitContactForm = async (data: any): Promise<{ status: string, id: string }> => {
  console.log("Submitting form data:", data);
  return new Promise((resolve) => {
    setTimeout(() => resolve({ status: "received", id: Math.random().toString(36).substr(2, 9) }), 1500);
  });
};
