
import { Article, ArticleStatus } from './types';

// TODO: Replace with fetch call to Laravel backend REST API
export const DATA_SOURCE: 'mock' | 'api' = 'mock';

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Future of Conversational AI in Customer Support',
    status: ArticleStatus.UPDATED,
    publishedDate: '24 Oct 2023',
    source: 'BeyondChats Blog',
    content: `Large Language Models (LLMs) are rapidly transforming the landscape of customer support. These systems can now handle complex queries with human-like nuance, reducing response times from hours to seconds. By integrating advanced sentiment analysis and multi-lingual support, businesses are finding that AI isn't just a cost-saver—it's a customer satisfier. 
    
    The shift moves from simple decision trees to fluid conversational interfaces that learn from every interaction. This continuous feedback loop ensures that the system evolves alongside customer needs, providing a truly personalized experience that traditional support methods simply can't match.`,
    references: [
      { id: 'r1', title: 'State of AI in CS 2024', url: '#' },
      { id: 'r2', title: 'Sentiment Analysis Breakthroughs', url: '#' }
    ]
  },
  {
    id: '2',
    title: 'The Future of Conversational AI in Customer Support',
    status: ArticleStatus.ORIGINAL,
    publishedDate: '22 Oct 2023',
    source: 'BeyondChats Blog',
    content: `This is the original version of our thoughts on AI in support. We initially focused on the mechanical aspects of chatbots and automated replies. While effective for simple FAQs, we realized that the emotional intelligence provided by newer LLMs was the missing piece for long-term loyalty.`,
    references: []
  },
  {
    id: '3',
    title: 'Generative AI: A New Paradigm for Content Creation',
    status: ArticleStatus.UPDATED,
    publishedDate: '18 Oct 2023',
    source: 'BeyondChats Blog',
    content: `Generative AI is not just about producing more content; it's about producing better, more relevant content. By leveraging models like Gemini, creators can brainstorm structures, refine drafts, and ensure factual consistency across large documentation sets. 
    
    The impact is multifaceted: efficiency, creativity, and scalability are all elevated. We are seeing a symbiotic relationship where human expertise guides AI's speed to produce high-quality output at an unprecedented scale.`,
    references: [
      { id: 'r3', title: 'AI and Creativity Study', url: '#' }
    ]
  },
  {
    id: '4',
    title: 'Generative AI: A New Paradigm for Content Creation',
    status: ArticleStatus.ORIGINAL,
    publishedDate: '15 Oct 2023',
    source: 'BeyondChats Blog',
    content: `Our initial view on generative AI was focused on automation. We saw it as a way to replace mundane tasks. However, our updated vision sees it as a collaborator that enhances the creative process rather than just automating it.`,
    references: []
  },
  {
    id: '5',
    title: 'Navigating the Ethical Landscape of Large Language Models',
    status: ArticleStatus.UPDATED,
    publishedDate: '12 Oct 2023',
    source: 'BeyondChats Blog',
    content: `As LLMs become ubiquitous, ethical considerations move to the forefront. Data privacy, bias mitigation, and transparency are the pillars of responsible AI. BeyondChats is committed to ensuring that our implementations adhere to the highest standards of safety and fairness. 
    
    We actively monitor for 'hallucinations' and use grounding techniques to ensure that the information provided is not just plausible, but accurate. Ethics is not an afterthought; it's the foundation of trust.`,
    references: [
      { id: 'r4', title: 'AI Ethics Framework', url: '#' },
      { id: 'r5', title: 'Bias in LLMs Overview', url: '#' }
    ]
  },
  {
    id: '6',
    title: 'Navigating the Ethical Landscape of Large Language Models',
    status: ArticleStatus.ORIGINAL,
    publishedDate: '10 Oct 2023',
    source: 'BeyondChats Blog',
    content: `Early discussions on AI ethics were often theoretical. We focused on distant 'doomsday' scenarios rather than the practical, immediate concerns of data privacy and algorithmic bias that we face today.`,
    references: []
  }
];
