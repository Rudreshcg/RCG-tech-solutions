export default function Services() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-900 dark:text-blue-300">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h3 className="font-semibold text-xl mb-2">Software Development</h3>
          <p className="text-gray-700 dark:text-blue-100 text-center">Custom web, mobile, and enterprise software tailored to your business needs.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h3 className="font-semibold text-xl mb-2">Cloud Solutions</h3>
          <p className="text-gray-700 dark:text-blue-100 text-center">Scalable cloud infrastructure, migration, and management for modern businesses.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h3 className="font-semibold text-xl mb-2">Cybersecurity</h3>
          <p className="text-gray-700 dark:text-blue-100 text-center">Protect your data and operations with advanced security solutions and monitoring.</p>
        </div>
      </div>
    </section>
  );
} 