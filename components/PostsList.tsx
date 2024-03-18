import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchPosts } from './api/api';
import { Post } from './types/types';

const PostList: React.FC = () => {
  const { data: posts, isLoading } = useQuery<Post[]>('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body}</p>
          <Link to={`/post/${post.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
