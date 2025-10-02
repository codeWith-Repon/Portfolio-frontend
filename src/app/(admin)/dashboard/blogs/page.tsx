import BlogCard from '@/components/Public/BlogCard';
import React from 'react';

const blogs = [
  {
    title: 'Getting Started with Prisma ORM',
    slug: 'getting-started-prisma-orm',
    content: {
      type: 'doc',
      content: [
        {
          type: 'heading',
          attrs: { level: 2 },
          content: [{ type: 'text', text: 'Introduction to Prisma' }],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Prisma is a next-generation ORM for Node.js and TypeScript.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'It simplifies database access by providing an auto-generated query builder.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Prisma integrates seamlessly with modern frameworks like Next.js.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'With Prisma, developers can avoid writing raw SQL in most cases.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'This makes backend development faster, safer, and more maintainable.',
            },
          ],
        },
      ],
    },
    thumbnail:
      'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    isPublished: true,
    views: 100,
    featured: true,
    tags: ['prisma', 'orm', 'typescript'],
    authorId: 1,
  },
  {
    title: 'Mastering Next.js Rendering',
    slug: 'mastering-nextjs-rendering',
    content: {
      type: 'doc',
      content: [
        {
          type: 'heading',
          attrs: { level: 2 },
          content: [{ type: 'text', text: 'Next.js Rendering Techniques' }],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Next.js supports multiple rendering methods like SSR, SSG, and CSR.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Server-Side Rendering ensures pages are rendered on the server before sending.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Static Site Generation pre-renders pages at build time for better performance.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Client-Side Rendering is useful for interactive dashboards and dynamic data.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Choosing the right rendering strategy depends on the app’s requirements.',
            },
          ],
        },
      ],
    },
    thumbnail:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    isPublished: true,
    views: 220,
    featured: false,
    tags: ['nextjs', 'rendering', 'ssr', 'ssg'],
    authorId: 1,
  },
  {
    title: 'Understanding REST APIs',
    slug: 'understanding-rest-apis',
    content: {
      type: 'doc',
      content: [
        {
          type: 'heading',
          attrs: { level: 2 },
          content: [{ type: 'text', text: 'REST API Basics' }],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'REST APIs follow a stateless, client-server architecture.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'They use HTTP methods like GET, POST, PUT, and DELETE.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Resources are represented as JSON for easy data exchange.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'REST APIs are widely used due to their simplicity and scalability.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Good API design ensures security, performance, and maintainability.',
            },
          ],
        },
      ],
    },
    thumbnail:
      'https://us.123rf.com/450wm/dmitryag/dmitryag2306/dmitryag230600906/206060089-man-hiking-back-cape-water-male-travel-mountain-yellow-lake-nature-generative-ai.jpg?ver=6',
    isPublished: true,
    views: 180,
    featured: false,
    tags: ['api', 'rest', 'backend'],
    authorId: 1,
  },
  {
    title: 'Exploring MongoDB with Mongoose',
    slug: 'exploring-mongodb-mongoose',
    content: {
      type: 'doc',
      content: [
        {
          type: 'heading',
          attrs: { level: 2 },
          content: [{ type: 'text', text: 'MongoDB & Mongoose' }],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'MongoDB is a popular NoSQL database used in modern applications.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Mongoose is an ODM that provides schema validation and query helpers.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'It allows developers to define models with strong data structures.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Using Mongoose, CRUD operations become more efficient and safer.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'MongoDB with Mongoose is widely used in MERN and MEAN stacks.',
            },
          ],
        },
      ],
    },
    thumbnail: 'https://example.com/images/mongoose.png',
    isPublished: true,
    views: 150,
    featured: true,
    tags: ['mongodb', 'mongoose', 'nosql'],
    authorId: 1,
  },
  {
    title: 'JWT Authentication in Node.js',
    slug: 'jwt-authentication-nodejs',
    content: {
      type: 'doc',
      content: [
        {
          type: 'heading',
          attrs: { level: 2 },
          content: [{ type: 'text', text: 'JWT Authentication' }],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'JSON Web Tokens are widely used for secure authentication.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'JWTs are stateless and can be verified using a secret or public key.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'They are commonly used in APIs to authorize users.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'JWT reduces the need for storing sessions in the server.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Proper implementation is required to avoid security vulnerabilities.',
            },
          ],
        },
      ],
    },
    thumbnail: 'https://example.com/images/jwt-auth.png',
    isPublished: true,
    views: 300,
    featured: false,
    tags: ['jwt', 'authentication', 'nodejs'],
    authorId: 1,
  },
];

const Blogs = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-3xl font-bold'>All Blogs</h1>
        <div className=''>
          <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer'>
            Add New Blog
          </button>
        </div>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
