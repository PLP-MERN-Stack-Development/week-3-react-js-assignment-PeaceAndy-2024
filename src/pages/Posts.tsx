import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const POSTS_PER_PAGE = 10;

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Filter posts by search term
  const filteredPosts = posts.filter(post =>
post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination: slice posts to current page
  const paginatedPosts = filteredPosts.slice(0, page * POSTS_PER_PAGE);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>

      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full mb-6 p-2 border rounded"
      />

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && paginatedPosts.length === 0 &&(<p>No posts found.</p>
      )}
      <ul className="space-y-6"> {paginatedPosts.map(post =>(
        <li key={post.id} className="border p-4 rounded shaadow-sm hover:shower-md transition">
            <h2 className="text-xl font-semibold mb-2">(post.title)</h2>
            <p>(post.body)</p>
            </li>
      ))}
      </ul>

      {/*Load More Button*/}
      {paginatedPosts.length<
        filteredPosts.length &&(
            <button onClick={handleLoadMore}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Posts;