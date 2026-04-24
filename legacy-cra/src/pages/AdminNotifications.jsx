import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendBlogNotification } from '../firebase/sendBlogNotification';
import { getAllSubscribers } from '../firebase/subscribeService';
import { BLOGS, ARTICLES } from '../data/blogsData';

const AdminNotifications = () => {
  const [selectedBlog, setSelectedBlog] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(0);

  const allContent = [...BLOGS, ...ARTICLES];

  React.useEffect(() => {
    loadSubscriberCount();
  }, []);

  const loadSubscriberCount = async () => {
    const subs = await getAllSubscribers();
    setSubscriberCount(subs.length);
  };

  const handleSend = async () => {
    if (!selectedBlog) {
      setResult({ success: false, message: 'Please select a blog' });
      return;
    }

    const blog = allContent.find(b => b.slug === selectedBlog);
    if (!blog) return;

    setLoading(true);
    setResult(null);

    const response = await sendBlogNotification({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt
    });

    setResult(response);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-fear-light py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h1 className="text-3xl font-bold text-fear-dark mb-2">
            Send Blog Notification
          </h1>
          <p className="text-gray-600 mb-8">
            Send email notifications to {subscriberCount} subscribers
          </p>

          <div className="space-y-6">
            {/* Blog Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Blog/Article
              </label>
              <select
                value={selectedBlog}
                onChange={(e) => setSelectedBlog(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fear-dark focus:border-transparent"
              >
                <option value="">Choose a blog...</option>
                {allContent.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Preview */}
            {selectedBlog && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <p className="text-sm font-medium text-gray-700 mb-2">Email Preview:</p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">Subject:</p>
                  <p className="mb-3">
                    New Blog from FEAR Agency: {allContent.find(b => b.slug === selectedBlog)?.title}
                  </p>
                  <p className="font-semibold">Content:</p>
                  <p>{allContent.find(b => b.slug === selectedBlog)?.excerpt}</p>
                </div>
              </motion.div>
            )}

            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={loading || !selectedBlog}
              className="w-full bg-fear-dark text-white py-3 px-6 rounded-lg font-medium hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : `Send to ${subscriberCount} Subscribers`}
            </button>

            {/* Result Message */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  result.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}
              >
                <p className="font-medium">
                  {result.success ? '✓ Success!' : '✗ Error'}
                </p>
                <p className="text-sm mt-1">{result.message}</p>
              </motion.div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">How to use:</h3>
            <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
              <li>Select the blog you want to notify subscribers about</li>
              <li>Review the email preview</li>
              <li>Click "Send" to notify all subscribers</li>
              <li>Subscribers will receive an email with a link to the blog</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminNotifications;
