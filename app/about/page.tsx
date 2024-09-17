//import arrow icon
import { ArrowIcon } from 'components/icons';
export default function AboutPage() {
    return (
      <section>
        <h1 className="font-bold text-3xl font-serif mb-8">About Me</h1>
        <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
          <p>
            Greetings, fellow internet explorer! I'm Bhanu, a Lead AI Engineer at Armada AI, where I spend my days 
            convincing AI to be more intelligent and less artificial. With a Master's in Computer Science from Texas A&M 
            and a Bachelor's in Electrical Engineering from IIT Tirupati, I've got just enough education to be dangerous 
            (in a good way, I promise).
          </p>
          <h2>Professional Journey</h2>
          <p>
            Currently, I'm leading the charge in Generative AI and LLMs at Armada AI. Think of me as a linguistic 
            ringmaster in a circus of chatbots, RAG systems, and even conversational drone controllers. Before this, 
            I was a Machine Learning Engineer at Fincare Small Finance Bank, where I taught computers to understand 
            humans (a task that even humans struggle with sometimes).
          </p>
          <h2>Achievements</h2>
          <p>
            I'm the proud inventor on two US Patents for Edge Computing Units. It's like I've got a patent on making 
            computers work harder so humans can work smarter. I've also contributed to open-source projects like Repaper 
            and created Mailcheck.ing, because apparently, the world needed yet another way to validate emails.
          </p>
          <h2>Skills & Specializations</h2>
          <p>
            My toolkit includes Python (with all the AI goodies like PyTorch and TensorFlow), JavaScript, React, SQL, 
            and Docker. I specialize in Deep Learning, Pattern Recognition, Computer Vision, and a bunch of other 
            impressive-sounding fields that basically mean I teach computers to see and think.
          </p>
        </div>
      </section>
    );
  }