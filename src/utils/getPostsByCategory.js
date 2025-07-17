import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPostsByCategory(category) {
  const dirPath = `./src/content/reviews/${category}`;
  const files = fs.readdirSync(dirPath);
  const posts = files.map((file) => {
    const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    const { data, content: body } = matter(content);
    return { ...data, body };
  }).sort((a, b) => b.rating - a.rating);
  return posts;
}
