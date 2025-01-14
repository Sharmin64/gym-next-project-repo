import Button from "@/app/commonui/button/Button";

const PricingPage: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#ffad33] to-[#993414] bg-clip-text text-transparent">
          Member Pricing Plan
        </h2>

        <p className="text-gray-600 mb-8">
          We provide plans for those of you who want training with us.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Bronze Plan */}
          <div className="relative group bg-white border p-6 rounded-lg shadow-sm hover:shadow-md hover:border-[#ff5722] hover:bg-[#ffeee9] transition">
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ff8964] text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
              Popular Pricing
            </span>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">BRONZE</h3>
            <p className="text-4xl font-bold text-gray-800 mb-4">$32</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>4 Credits</li>
              <li>Support for AWS, GCP, and Azure</li>
              <li>Delivered in 1 week</li>
            </ul>
            <Button buttonName="Join_Class" />
          </div>

          {/* Silver Plan */}
          <div className="relative group bg-white border p-6 rounded-lg shadow-sm hover:shadow-md hover:border-[#ff5722] hover:bg-[#ffeee9] transition">
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ff8964] text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
              Popular Pricing
            </span>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">SILVER</h3>
            <p className="text-4xl font-bold text-gray-800 mb-4">$50</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>4 Credits</li>
              <li>Support for AWS, GCP, and Azure</li>
              <li>Delivered in 1 week</li>
              <li>1-on-1 Personal training</li>
            </ul>
            <Button buttonName="Join Class" />
          </div>

          {/* Gold Plan */}
          <div className="relative group bg-white border p-6 rounded-lg shadow-sm hover:shadow-md hover:border-[#ff5722] hover:bg-[#ffeee9] transition">
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ff8964] text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
              Popular Pricing
            </span>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">GOLD</h3>
            <p className="text-4xl font-bold text-gray-800 mb-4">$120</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>4 Credits</li>
              <li>Support for AWS, GCP, and Azure</li>
              <li>Delivered in 1 week</li>
              <li>Access to my online tutorials</li>
            </ul>
            <Button buttonName="Join Class" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
