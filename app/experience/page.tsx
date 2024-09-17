import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Experience',
  description: 'Professional journey of Bhanu Pallakonda',
};

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Work Experience</h1>
      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Lead AI Engineer, Generative AI LLMs</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Armada AI | Seattle, Washington | Jul. 2023 - Present</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Pioneered advanced AI assistive systems using LLMs, including context-aware chatbots and RAG implementations.</li>
            <li>Engineered full-stack solutions with Redis, SQL databases, and Kubernetes deployments.</li>
            <li>Contributed to startup growth by securing investor funding and attracting customers through project demonstrations.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Machine Learning Engineer</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Fincare Small Finance Bank | Bangalore, India | Jun. 2019 - Oct. 2020</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Engineered an NLP-based banking chatbot using BERT transformer models.</li>
            <li>Designed and improved core NLP components for ID card detection and field extraction.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Research Assistant (NSF Funded)</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Texas A&M University | College Station, Texas | Jan. 2022 - Dec. 2022</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Enhanced pancreatic cancer prediction using advanced machine learning techniques.</li>
            <li>Incorporated state-of-the-art techniques like Mixed Precision on Transformer networks.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}