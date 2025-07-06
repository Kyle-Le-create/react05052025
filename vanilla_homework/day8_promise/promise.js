// Fetch all posts from API
export const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
};

// Fetch a single post by ID
export const fetchPostById = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
};

// Execute promises sequentially according to the provided order
export const sequentialPromise = async (promises, order) => {
  const results = [];
  for (const i of order) {
    try {
      const result = await promises[i - 1];
      results.push(result);
    } catch (err) {
      throw err; // stop execution if any promise rejects
    }
  }
  return results;
};
