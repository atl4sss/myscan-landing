import SectionReveal from "../SectionReveal.jsx";

export default function VideoDemo({ youtubeId = "x0mFJE1dHjk" }) { // заменишь на свой ID
  return (
    <section id="demo" className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-blue-900">
            Watch the Demo
          </h2>
          <p className="mt-2 text-center text-blue-900/60 text-sm">
            A short walkthrough of the upload and analysis flow.
          </p>
        </SectionReveal>

        <div className="mt-8 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow ring-1 ring-blue-900/10">
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
              title="MyScan Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
