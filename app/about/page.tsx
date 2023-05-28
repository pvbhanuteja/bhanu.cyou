//import arrow icon
import { ArrowIcon } from 'components/icons';
export default function AboutPage() {
    // Mock skills list. Please replace this with your own.
    const skills = [
        'Python',
        'Pytorch',
        'lightning',
        'Git',
        'Docker',
        'Airflow',
        'Huggingface',
        'Vscode',
    ];

    return (
        <section>
            <h1 className="font-bold text-3xl mb-8 font-serif">About Me</h1>

            <div className="space-y-4">
                <p className="text-neutral-800 dark:text-neutral-200">
                    Hello! I'm Bhanu from Hyderabad, India, currently living in Texas. I completed my
                    bachelor's degree at the Indian Institute of Technology Tirupati, worked for 2 years
                    as a Machine Learning Engineer, and recently finished my master's degree at Texas A&M
                    University, College Station. My focus has been on AI, particularly
                    in computer vision and NLP (text and speech).
                </p>
                <p className="text-neutral-800 dark:text-neutral-200">
                    As an Applied AI/ML Scientist, I have a wealth of experience with classification/regression models,
                    dimensionality reduction, feature selection, clustering, and data visualization.
                    My knowledge encompasses the state-of-the-art architectures, with a particular focus on transformer models
                    used in NLP and speech tasks. Beyond these areas, I have also spent considerable time in model tuning and optimization,
                    thereby sharpening my practical application of machine learning principles.
                    Running <code className="px-1 py-px bg-gray-200 rounded dark:bg-gray-800">nvidia-smi</code> is my
                    favorite pastime while coding.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200">
                    Outside of work, I enjoy traveling, watching movies, scrolling through memes, and
                    passionately following cricket.
                </p>

                <p className="text-neutral-800 dark:text-neutral-200">
                    I use the following on a daily basis for work and research:
                </p>
                <ul className="grid gap-2 p-0 m-0 overflow-hidden list-none grid-cols-2 mt-5">
                    {skills && skills.map((skill, i) => (
                        <li key={i} className="relative mb-2 pl-5 font-mono text-xs">
                            {/*<ArrowIcon />*/}
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
}
