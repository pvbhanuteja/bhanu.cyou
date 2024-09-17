import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Patents',
    description: 'A list of patents I have been involved with.',
};

export default function PatentsPage() {
    return (
        <section>
            <h1 className="font-bold text-3xl font-serif mb-5">Patents</h1>
            <div className="mb-8">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">
                        <a href="https://patentsgazette.uspto.gov/week23/OG/html/1523-1/US12001463-20240604.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            US-PATENT[12001463] - Edge Computing Units for Operating Conversational Tools at Local Sites
                        </a>
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Inventor | Seattle, Washington | Jun. 2024</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">
                        <a href="https://patents.justia.com/patent/11960515" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            US-PATENT[11960515] - Edge Computing Units for Operating Conversational Tools at Local Sites
                        </a>
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Inventor | Seattle, Washington | Jun. 2024</p>
                </div>
            </div>
        </section>
    );
}