//import arrow icon
import { ArrowIcon } from 'components/icons';
export default function AboutPage() {
    return (
      <>
      <section>
        <h1 className="font-bold text-3xl font-serif mb-8">About Me</h1>
        <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
          <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
            Greetings, fellow internet explorer! I'm Bhanu, a Lead AI Engineer at Armada AI, where I spend my days 
            convincing AI to be more intelligent and less artificial. With a Master's in Computer Science from Texas A&M 
            and a Bachelor's in Electrical Engineering from IIT Tirupati, I've got just enough education to be dangerous 
            (in a good way, I promise).
          </p>
          <h2>Skills & Specializations</h2>
          <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
            I give life to my projects using kubernetes to deploy them.
            <br />
            <br />
            I specialize in Deep Learning, Pattern Recognition, NLP, Computer Vision, and a bunch of other 
            impressive-sounding fields that basically mean I teach computers to see and think. My toolkit includes 
            Python (with all the AI goodies like PyTorch and TensorFlow), JavaScript, React, SQL, Redis and Docker. 
          </p>
          <h2>Professional Journey</h2>
          <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
            Currently, I'm leading the charge in Generative AI and LLMs at Armada AI. Think of me as a linguistic 
            ringmaster in a circus of chatbots, Online(User specific) RAG systems, and using LLMs as my agents. Before this, 
            I was in India working as Machine Learning Engineer at Fincare Small Finance Bank, where I worked on whatsapp banking chatbot and also I taught computers to understand 
            humans (a task that even humans struggle with sometimes in identifiying and extracting information on ID cards).
          </p>
          <h2>Achievements</h2>
          <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
            I'm the proud inventor on two US Patents for Edge Computing Units. It's like I've got a patent on making 
            computers work harder so humans can work smarter. I've also contributed to open-source projects like Repaper 
            and created Mailcheck.ing, because apparently, the world needed yet another way to validate emails.
          </p>
        </div>
      </section>
      </>

    );
  }