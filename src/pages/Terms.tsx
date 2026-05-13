import React from 'react';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Terms() {
  return (
    <div className="w-full bg-brand-bg pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-4xl md:text-5xl font-heading font-light text-brand-dark mb-6">Terms of Service</h1>
          <div className="w-16 h-[2px] bg-brand-tertiary mb-12"></div>
          
          <div className="prose prose-lg text-text-subtle font-light leading-relaxed">
            <p className="mb-6">
              Welcome to Lulim Consulting. Please read these Terms of Service closely before using our website and engaging our services. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-heading text-brand-dark mt-10 mb-4">1. Services Provided</h2>
            <p className="mb-6">
              Lulim Consulting provides strategic communications, creative design, digital marketing, and sales enablement services. Project scope, timelines, deliverables, and fees are established under individual Master Service Agreements or Statements of Work (SOW) executed between Lulim Consulting and the client.
            </p>

            <h2 className="text-2xl font-heading text-brand-dark mt-10 mb-4">2. Client Responsibilities</h2>
            <p className="mb-6">
              For us to provide services efficiently, clients are expected to provide timely feedback, the necessary assets, access to systems, and accurate information. Delays in client feedback may impact project timelines and deliverables.
            </p>

            <h2 className="text-2xl font-heading text-brand-dark mt-10 mb-4">3. Intellectual Property</h2>
            <p className="mb-6">
              All concepts, strategies, code, written materials, designs, and other intellectual property produced by Lulim Consulting during a project remain the exclusive property of Lulim Consulting until full and final payment has been made by the client. Upon final payment, the appropriate usage rights or ownership are transferred to the client as outlined in the signed SOW.
            </p>

            <h2 className="text-2xl font-heading text-brand-dark mt-10 mb-4">4. Payment Terms</h2>
            <p className="mb-6">
              Invoices are issued according to the scheduling in the agreed upon terms of your proposal or SOW. Generally, invoices are due within the terms specified (e.g., Net 30). Late payments may incur interest charges and could result in the suspension of ongoing work.
            </p>

            <h2 className="text-2xl font-heading text-brand-dark mt-10 mb-4">5. Disclaimer of Warranties</h2>
            <p className="mb-6">
              Our services are provided on an "as is" and "as available" basis. While we strive to deliver high-quality strategic outcomes, Lulim Consulting makes no warranties, whether express or implied, regarding specific business outcomes, market performance, or sales revenue results resulting from the execution of our services.
            </p>

            <h2 className="text-2xl font-heading text-brand-dark mt-10 mb-4">6. Limitation of Liability</h2>
            <p className="mb-6">
              In no event shall Lulim Consulting be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of, or inability to access or use the services.
            </p>

            <h2 className="text-2xl font-heading text-brand-dark mt-10 mb-4">7. Contact Information</h2>
            <p className="mb-6">
              If you have any questions about these Terms, please contact us at: <a href="mailto:info@lulimconsulting.co.za" className="text-brand-tertiary hover:underline">info@lulimconsulting.co.za</a>.
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
