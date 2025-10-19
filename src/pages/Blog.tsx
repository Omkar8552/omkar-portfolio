import { Calendar, Tag } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Design Conferences in 2022",
      category: "Design",
      date: "Feb 23, 2022",
      image: "🎨",
      color: "from-pink-500/20 to-pink-600/20",
      excerpt: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    },
    {
      title: "Best Fonts Every Designer",
      category: "Design",
      date: "Feb 23, 2022",
      image: "✏️",
      color: "from-orange-500/20 to-orange-600/20",
      excerpt: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
    },
    {
      title: "Design Digest #80",
      category: "Design",
      date: "Feb 23, 2022",
      image: "📐",
      color: "from-cyan-500/20 to-cyan-600/20",
      excerpt: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
    },
    {
      title: "UI Interactions of the Week",
      category: "Design",
      date: "Feb 23, 2022",
      image: "💻",
      color: "from-purple-500/20 to-purple-600/20",
      excerpt: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
    },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Blog</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <article
            key={index}
            className="bg-secondary rounded-2xl overflow-hidden hover:shadow-accent transition-all duration-300 group cursor-pointer"
          >
            <div className={`aspect-video bg-gradient-to-br ${post.color} flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300`}>
              {post.image}
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4 text-primary" />
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-primary" />
                  {post.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
