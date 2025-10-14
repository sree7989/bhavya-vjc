import Image from 'next/image';

export default function VideoSection() {
  return (
    <section className="bg-gray-900 text-white py-10 flex flex-col items-center w-full overflow-hidden">
      <h2 className="text-3xl font-bold text-orange-400 animate-slide-up">
        Watch How We Can Help You
      </h2>
      <p className="mt-2 text-gray-300 max-w-xl text-center animate-fade-in">
        Learn more about our services and success stories from our satisfied clients.
      </p>
      <div className="mt-6 w-full max-w-2xl px-4">
        <a
          href="https://youtu.be/cLNpEry1oPQ?si=NR8PtaZ2eAABx1OK"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full aspect-video rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <div className="relative w-full h-0 pb-[56.25%]">
            <Image
              src="/youtube.jpg"
              alt="Video Thumbnail"
              fill
              className="object-cover"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
