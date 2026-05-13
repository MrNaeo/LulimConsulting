import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { posts } from '../data/posts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="w-full bg-brand-bg pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-heading text-brand-dark mb-4">Post Not Found</h1>
          <Link to="/insights" className="text-brand-tertiary hover:underline uppercase text-[11px] font-bold tracking-widest">
            Return to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-brand-bg pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-8">
        
        <Link to="/insights" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-text-muted hover:text-brand-tertiary transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Insights
        </Link>
        
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <div className="inline-block bg-brand-gray-light px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-brand-dark mb-6">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-light text-brand-dark mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-[11px] font-bold text-text-muted uppercase tracking-wider border-y border-border-light py-4">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-brand-tertiary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={14} className="text-brand-tertiary" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>

          <div className="mb-12 aspect-[21/9] w-full overflow-hidden border border-border-light bg-brand-gray-light">
             <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale opacity-90" />
          </div>

          <div className="prose prose-lg prose-headings:font-heading prose-headings:font-light prose-headings:text-brand-dark prose-p:text-text-subtle prose-p:font-light prose-p:leading-relaxed prose-a:text-brand-tertiary prose-li:text-text-subtle max-w-none pb-12 border-b border-border-light"
               dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
        </motion.article>
      </div>
    </div>
  );
}
