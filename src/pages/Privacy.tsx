import React from 'react';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Privacy() {
  return (
    <div className="w-full bg-brand-bg pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-4xl md:text-5xl font-heading font-light text-brand-dark mb-6">Privacy Policy</h1>
          <div className="w-16 h-[2px] bg-brand-tertiary mb-12"></div>
          
          <div className="prose prose-lg text-text-subtle font-light leading-relaxed">
            <p className="mb-6">
              At Lulim Consulting, we are committed to protecting and respecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard personal information when you visit our website, contact us, or engage our services.
            </p>

            <h2 className="text-2xl font-heading text-brand-dark mt-10 mb-4">1. Information We Collect</h2>
            <p className="mb-6">
              <strong>Personal Information:</strong> We may collect personal details such as your name, email address, phone number, and company name when you voluntarily provide this information through our contact forms, newsletter sign-ups, or when you communicate with us directly.
            </p>
            <p className="mb-6">
              <strong>Usage Data:</strong> We may also collect non-personal information about how you interact with our website. This includes browser types, IP addresses, pages visited, and timestamps.
            </p>

            <h2 className="text-2xl font-heading text-brand-dark mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To provide and maintain our consulting services.</li>
              <li>To notify you about changes to our services.</li>
              <li>To provide customer support and respond to inquiries.</li>
              <li>To monitor the usage of our website and improve user experience.</li>
              <li>To send you marketing communications (you may opt out at any time).</li>
            </ul>

            <h2 className="text-2xl font-heading text-brand-dark mt-10 mb-4">3. Data Security</h2>
            <p className="mb-6">
              The security of your data is important to us. We strive to use commercially acceptable means to protect your Personal Information. However, please remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-heading text-brand-dark mt-10 mb-4">4. Sharing Your Information</h2>
            <p className="mb-6">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or providing services to you, so long as those parties agree to keep this information confidential.
            </p>

            <h2 className="text-2xl font-heading text-brand-dark mt-10 mb-4">5. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:info@lulimconsulting.co.za" className="text-brand-tertiary hover:underline">info@lulimconsulting.co.za</a>.
            </p>
            
            <p className="text-sm mt-12 text-text-muted">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
