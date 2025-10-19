export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  image: string
}

export interface CaseStudy {
  id: string
  title: string
  description: string
  shortDescription: string
  category: string
  client: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
  }[]
  image: string
  testimonial: Testimonial
  campaignId: string
  services: string[]
  timeline: string
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: "jaan-digital-transformation",
    title: "JAAN: Digital Transformation Success",
    description: "How we helped JAAN transition from traditional operations to a fully digital, AI-powered platform",
    shortDescription: "Digital transformation for a leading NGO",
    category: "Digital Transformation",
    client: "JAAN",
    challenge:
      "JAAN was operating with manual processes and limited digital infrastructure, struggling to scale their operations and reach more beneficiaries. They needed a modern technology stack to streamline operations.",
    solution:
      "We implemented a comprehensive digital transformation strategy including:\n• Cloud infrastructure setup for scalability\n• AI-powered analytics for better decision-making\n• Automated workflow systems\n• Data management platform\n• Staff training and support",
    results: [
      { metric: "Operational Efficiency", value: "+75%" },
      { metric: "Cost Reduction", value: "₦5M annually" },
      { metric: "Beneficiaries Reached", value: "+150%" },
      { metric: "Processing Time", value: "-80%" },
    ],
    image: "/images/clients/jaan-logo.png",
    testimonial: {
      quote:
        "Omar Consults transformed our organization. Their AI solutions and digital infrastructure have enabled us to reach more people and make a real impact. The ROI has been exceptional.",
      author: "Ayokunle Sanni",
      role: "Executive Director",
      company: "JAAN",
      image: "/placeholder-user.jpg",
    },
    campaignId: "digital-transformation-2024",
    services: ["AI Strategy & Consulting", "Cloud Solutions", "Digital Marketing"],
    timeline: "6 months",
    tags: ["AI", "Cloud", "NGO", "Impact"],
  },
  {
    id: "carochi-ecommerce-revolution",
    title: "Carochi Foods: E-commerce Excellence",
    description:
      "Building a powerful e-commerce platform that increased Carochi Foods' online sales by 300% in 6 months",
    shortDescription: "E-commerce platform for food and beverage brand",
    category: "E-commerce Development",
    client: "Carochi Foods and Beverages",
    challenge:
      "Carochi Foods had limited online presence and was losing market share to competitors with strong digital channels. They needed an integrated e-commerce solution with payment processing and inventory management.",
    solution:
      "We created a comprehensive e-commerce ecosystem including:\n• Custom e-commerce website with product catalog\n• Multiple payment gateway integration\n• Inventory management system\n• Automated order processing\n• Customer analytics dashboard\n• Mobile-responsive design\n• Integration with social media",
    results: [
      { metric: "Online Revenue Growth", value: "300%" },
      { metric: "Orders Per Month", value: "1,200+" },
      { metric: "Customer Base", value: "+2,500" },
      { metric: "Average Order Value", value: "+45%" },
    ],
    image: "/images/clients/carochi-clean.png",
    testimonial: {
      quote:
        "The e-commerce platform Omar Consults built for us has been a game-changer. Our online sales have tripled, and the system is so easy to manage. Customer support has been outstanding throughout.",
      author: "Chioma Okonkwo",
      role: "Managing Director",
      company: "Carochi Foods",
      image: "/placeholder-user.jpg",
    },
    campaignId: "ecommerce-revolution",
    services: ["Custom Software Development", "Digital Marketing"],
    timeline: "4 months",
    tags: ["E-commerce", "Payment Integration", "Food & Beverage"],
  },
  {
    id: "gida-drinks-tax-compliance",
    title: "GIDA Drinks: Tax & Compliance Excellence",
    description: "Helping GIDA Drinks streamline tax compliance, business registration, and financial management",
    shortDescription: "Tax compliance and financial management for beverage company",
    category: "Business & Tax Advisory",
    client: "GIDA Drinks",
    challenge:
      "GIDA Drinks struggled with complex tax obligations, FIRS compliance, and financial record management. They lacked proper systems for invoicing, expense tracking, and tax filing.",
    solution:
      "We implemented a complete tax and financial management solution:\n• QuickBooks integration for accounting\n• FIRS compliance automation\n• VAT and PAYE management\n• Digital invoicing system\n• Expense tracking dashboard\n• Tax planning consultation\n• Monthly compliance reporting",
    results: [
      { metric: "Tax Savings", value: "₦2.5M annually" },
      { metric: "Compliance Rate", value: "100%" },
      { metric: "Processing Time", value: "-85%" },
      { metric: "Error Reduction", value: "-95%" },
    ],
    image: "/images/clients/gida-drinks.png",
    testimonial: {
      quote:
        "Our tax and compliance nightmare became manageable. Omar Consults helped us save millions in taxes while ensuring 100% compliance. Peace of mind has never been more valuable.",
      author: "Ibrahim Hassan",
      role: "Finance Manager",
      company: "GIDA Drinks",
      image: "/placeholder-user.jpg",
    },
    campaignId: "sme-tax-compliance",
    services: ["Business & Tax Advisory", "Digital Financial Management"],
    timeline: "3 months",
    tags: ["Tax", "Compliance", "FIRS", "Finance"],
  },
  {
    id: "pollo24-ai-automation",
    title: "Pollo 24: AI-Powered Operations",
    description:
      "Implementing AI solutions to automate business processes and improve customer experience for Pollo 24",
    shortDescription: "AI automation for trading company",
    category: "Artificial Intelligence",
    client: "Pollo 24 Trading Company",
    challenge:
      "Pollo 24 faced operational bottlenecks with manual processes, poor customer service response times, and inefficient inventory management. They needed AI solutions to scale operations.",
    solution:
      "We deployed an AI-powered transformation including:\n• Chatbot for 24/7 customer support\n• Predictive analytics for inventory management\n• Automated order processing system\n• AI-driven demand forecasting\n• Process automation workflows\n• Real-time analytics dashboard",
    results: [
      { metric: "Customer Support Response", value: "-90%" },
      { metric: "Operational Efficiency", value: "+65%" },
      { metric: "Inventory Accuracy", value: "99.5%" },
      { metric: "Cost Savings", value: "₦3.2M annually" },
    ],
    image: "/images/clients/pollo-24-new.png",
    testimonial: {
      quote:
        "The AI solutions Omar Consults implemented have revolutionized our operations. Our customers get instant support, inventory is optimized, and we've reduced costs significantly. Best investment we've made.",
      author: "Kunle Adebayo",
      role: "Operations Director",
      company: "Pollo 24 Trading Company",
      image: "/placeholder-user.jpg",
    },
    campaignId: "ai-for-business",
    services: ["AI Strategy & Consulting", "Custom Software Development"],
    timeline: "5 months",
    tags: ["AI", "Chatbot", "Automation", "Analytics"],
  },
]

export function getCaseStudyById(id: string) {
  return caseStudies.find((study) => study.id === id)
}

export function getCaseStudiesByCampaign(campaignId: string) {
  return caseStudies.filter((study) => study.campaignId === campaignId)
}
