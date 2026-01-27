export default function CollectionsPage() {
  const collections = [
    { name: "Rings", desc: "Modern statement rings" },
    { name: "Neckpieces", desc: "Elegant fusion necklaces" },
    { name: "Earrings", desc: "Bold & minimal designs" },
    { name: "Bracelets", desc: "Contemporary wristwear" },
  ];

  return (
    <section className="min-h-screen bg-black px-6 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-light text-gold mb-4">
          Our Collections
        </h1>
        <p className="text-gray-400 mb-16">
          Crafted fusion jewellery for modern brands
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {collections.map((item) => (
            <div
              key={item.name}
              className="border border-gold/40 p-8 hover:bg-gold/10 transition duration-300"
            >
              <h3 className="text-xl text-gold mb-2">{item.name}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
