export default function Contact() {
  return (
    <section className="max-w-xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-900 dark:text-blue-300">Contact Us</h1>
      <p className="text-lg text-gray-700 dark:text-blue-100 mb-4">Ready to elevate your business? Reach out to us today!</p>
      <div className="flex flex-col items-center gap-2">
        <a href="mailto:info@rcgtechsolutions.com" className="text-blue-900 dark:text-blue-300 font-semibold hover:underline">info@rcgtechsolutions.com</a>
        <span className="text-gray-700 dark:text-blue-100">+1 (555) 123-4567</span>
      </div>
    </section>
  );
} 