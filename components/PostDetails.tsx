import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchPost } from './api/api';
import { Post } from './types/types';

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const { data: post, isLoading } = useQuery<Post>(['post', id], () => {
    if (id) {
      return fetchPost(parseInt(id, 10));
    }
    return Promise.resolve(null); 
  });

  if (!post || isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default PostDetails;
