import { FEATURES, HERO_MESSAGE } from "@/const/constants";

export default function Home() {
  return (
    <div className="font-varela">
      <section className="bg-gray-100">
        <div
          className="relative h-[500px] w-full flex items-center justify-center text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80')",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {HERO_MESSAGE.TITLE}
            </h1>
            <p className="text-lg md:text-xl text-white mb-8">
              {HERO_MESSAGE.SUB_TITLE}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
