export interface Campaign {
  id: string
  title: string
  description: string
  category: string
  status: "active" | "completed" | "upcoming"
  metrics: {
    label: string
    value: string
  }[]
  image: string
  tags: string[]
  caseStudyId?: string
}

export const campaigns: Campaign[] = [
  {
    id: "digital-transformation-2024",
    title: "Digital Marketing Initiatives",
    description:
      "Helping Nigerian businesses transition to digital-first operations with AI-powered tools and cloud infrastructure.",
    category: "Technology Adoption",
    status: "active",
    metrics: [
      { label: "Businesses Helped", value: "150+" },
      { label: "Success Rate", value: "95%" },
      { label: "ROI Improvement", value: "3x" },
    ],
    image:
      "https://res.cloudinary.com/dqbmouqsb/image/upload/v1760604288/Flyer_-_Digital_Marketing_Services_1_v3oele_uqlylo.webp",
    tags: ["AI", "Cloud", "Digital Transformation"],
    caseStudyId: "jaan-digital-transformation",
  },
  {
    id: "sme-tax-compliance",
    title: "SME Tax and Businesses Compliance Made Easy",
    description:
      "Comprehensive business registration, operations, tax advisory and filing services designed specifically for small and medium enterprises.",
    category: "Business and Tax",
    status: "active",
    metrics: [
      { label: "SMEs Served", value: "100+" },
      { label: "Tax Savings", value: "₦50M+" },
      { label: "Compliance Rate", value: "100%" },
    ],
    image: "https://res.cloudinary.com/dqbmouqsb/image/upload/v1760604805/CAC_Promotion_ycrhno.jpg",
    tags: ["Tax", "Compliance", "SME"],
    caseStudyId: "gida-drinks-tax-compliance",
  },
  {
    id: "ecommerce-revolution",
    title: "E-commerce Revolution",
    description:
      "Building powerful online stores with integrated payment systems, inventory management, and AI-driven customer insights.",
    category: "E-commerce Development",
    status: "active",
    metrics: [
      { label: "Stores Launched", value: "75+" },
      { label: "Total Revenue", value: "₦500M+" },
      { label: "Customer Growth", value: "250%" },
    ],
    image: "https://res.cloudinary.com/dqbmouqsb/image/upload/v1760604514/gida_drinks_web_e746ib.png",
    tags: ["E-commerce", "Web Development", "Payment Integration"],
    caseStudyId: "carochi-ecommerce-revolution",
  },
  {
    id: "ai-for-business",
    title: "AI for Business Growth",
    description:
      "Implementing custom AI solutions including chatbots, predictive analytics, and automation tools to scale business operations.",
    category: "Artificial Intelligence",
    status: "active",
    metrics: [
      { label: "AI Solutions", value: "50+" },
      { label: "Efficiency Gain", value: "60%" },
      { label: "Cost Reduction", value: "40%" },
    ],
    image:
      "https://res.cloudinary.com/dqbmouqsb/image/upload/v1760605003/515928831_749131987657809_6034845787496430754_n.jpg_gioery.jpg",
    tags: ["AI", "Automation", "Machine Learning"],
    caseStudyId: "pollo24-ai-automation",
  },
]
