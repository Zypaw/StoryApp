import React from 'react';
import { Button } from './components/Button';
import Aurora from './components/Aurora';
import ScrollReveal from './components/ScrollReveal';

const App = () => {
  return (
    <div className="w-full text-white">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={['#00d8ff', '#7cff67', '#00d8ff']}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        <div className="flex flex-col items-center justify-center h-full px-4 space-y-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold font-samo">
            Welcome to MyPodcast 🎙️
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300">
            Dive into my personal podcast — where I share thoughts, stories, and insights straight from my mic to your ears.
          </p>
          <div className="flex justify-center space-x-4 pt-4">
            <Button className="text-lg px-6 py-3 rounded-2xl shadow-md">Explore Podcasts</Button>
            <Button variant="outline" className="text-lg px-6 py-3 rounded-2xl">Login</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 w-full max-w-5xl">
            {['Technology', 'Wellness', 'Culture'].map((category) => (
              <div
                key={category}
                className="bg-white/10 backdrop-blur p-6 rounded-2xl text-white border border-white/20 shadow-xl hover:scale-105 transition"
              >
                <h2 className="text-xl font-semibold font-samo">{category}</h2>
                <p className="text-sm text-zinc-300 mt-2">
                  Dive into the best {category.toLowerCase()} podcasts curated for you.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[20vh] sm:h-[10vh]" />

      <div className="flex justify-center items-center px-10 text-center text-xs">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          Project description
        </ScrollReveal>
      </div>

      <div className="h-[1vh] sm:h-[1vh]" />

      <div className="flex justify-center items-center px-10 text-center text-xs">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          MyPodcast is a personal podcast platform designed to give you a simple, elegant space to enjoy and follow my latest episodes.

          This website is where I publish my own podcasts — episodes I create, edit, and share directly from a server I manage in the cloud. Built on powerful infrastructure using IaaS (Infrastructure as a Service), the platform is hosted securely and reliably, ensuring you can stream my content anytime, anywhere.

          Here, you’ll find carefully curated episodes across different themes like technology, wellness, creativity, and more. Each podcast comes with show notes, timestamps, and helpful links so you can dive deeper into the topics that interest you.

          Whether you’re here to catch up on my latest release, revisit your favorite episodes, or explore new content, MyPodcast is built for a clean, distraction-free listening experience. You can stream episodes directly from your browser — no downloads, no third-party logins required.

          As a creator, this space gives me the freedom to publish independently, without relying on mainstream platforms. It also lets me experiment with design, features, and formats to keep things fresh.

          More features are coming soon, including search and filtering by topics, episode bookmarking, and optional downloads for offline listening. If you're a regular listener, make sure to check back often or bookmark the page — new content is always on the way.

          Thank you for visiting and tuning in.
          I hope you enjoy the stories, insights, and ideas I share here — and that this platform makes listening as smooth and enjoyable as possible.
        </ScrollReveal>
      </div>

      <div className="h-[30vh] sm:h-[30vh]" />

      <div className="flex justify-center items-center px-10 text-center text-xs">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          License & Rationale
        </ScrollReveal>
      </div>

      <div className="h-[1vh] sm:h-[1vh]" />

      <div className="flex justify-center items-center px-10 text-center text-xs">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          I have chosen the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license for this project. This allows others to view and use the content for educational or personal use as long as they credit me and do not use it commercially. Since MyPodcast includes original media and code, I want to protect it from being exploited for profit while still encouraging learning and sharing in non-commercial settings. This license is ideal for independent creative projects that promote open access with some protective boundaries.
        </ScrollReveal>
      </div>

      <div className="h-[30vh] sm:h-[30vh]" />

      <footer className="text-center py-6 border-t border-white/20 text-sm text-zinc-400">
        <div className="mb-2">
          <img
            src="https://licensebuttons.net/l/by-nc/4.0/88x31.png"
            alt="Creative Commons License"
            className="mx-auto"
          />
          <p className="mt-2">
            This work is licensed under a{' '}
            <a
              href="https://creativecommons.org/licenses/by-nc/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white"
            >
              Creative Commons Attribution-NonCommercial 4.0 International License
            </a>.
          </p>
        </div>
        © 2025 Matteo Dupond. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
