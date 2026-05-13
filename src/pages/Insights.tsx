import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { posts } from '../data/posts';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Insights() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@lulimconsulting.co.za", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          _subject: "New Newsletter Subscription from Lulim Consulting Website"
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="w-full bg-brand-bg pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-heading font-light text-brand-dark mb-6">Insights & Perspectives</h1>
            <div className="w-16 h-[2px] bg-brand-tertiary mb-6"></div>
            <p className="text-text-subtle font-light text-lg max-w-2xl">
              Thoughts, frameworks, and strategic observations from our leadership team on topics shaping the future of business across Africa and beyond.
            </p>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.1 } }
              }}
              className="bg-brand-gray-light border border-border-light group overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-brand-bg px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-brand-dark">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-[11px] font-bold text-text-muted uppercase tracking-wider mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-brand-tertiary" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} className="text-brand-tertiary" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold font-heading text-brand-dark mb-4 group-hover:text-brand-tertiary transition-colors">
                  <Link to={`/insights/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-text-subtle font-light leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link to={`/insights/${post.slug}`} className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-dark group-hover:text-brand-tertiary transition-colors self-start mt-auto">
                  Read Article <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* Newsletter / CTA */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
          className="mt-20 border border-border-light bg-brand-gray-light p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-tertiary/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="text-2xl font-heading text-brand-dark mb-4">Stay ahead of the curve.</h3>
            <p className="text-text-subtle font-light mb-8">
              Subscribe to get our latest strategic insights delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 bg-brand-bg border border-border-light focus:border-brand-tertiary outline-none text-brand-dark rounded-none"
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="px-8 py-3 bg-brand-dark text-brand-bg text-[11px] uppercase tracking-widest font-bold hover:bg-brand-tertiary hover:text-brand-dark transition-colors whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {status === 'success' && (
              <p className="text-green-500 text-sm mt-4">Successfully subscribed to our newsletter!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-sm mt-4">Oops! Something went wrong, please try again.</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
