import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding, videos, and music.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>16&quot; Macbook Pro (2021)</li>
          <li>31.5&quot; LG UltraFine 32UN880</li>
          <li>Logitech MX Master 3 Mouse</li>
          <li>Nuphy AIR75 Mechanical Key</li>
          <li>2 Alexa Echo Studios</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode (
            <a href="https://gist.github.com/pvbhanuteja/e7883ab35d900b8cbb684ac77e7c4703">
              Settings / Extensions
            </a>
            )
          </li>
          <li>Theme: One Dark Pro</li>
          <li>Terminal: Tabby / zsh</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>Bitwarden</li>
          <li>Youtube Music (Special thanks to GS)</li>
          <li>Grammarly</li>
        </ul>
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>Apple Airpods Pro</li>
          <li>Apple Watch</li>
          <li>Apple iPhone</li>
          <li>Apple iPad</li>
          <li>2TB SSD</li>
          <li>Hyundai Elantra 2022 SEL</li>
        </ul>
      </div>
    </section>
  );
}
