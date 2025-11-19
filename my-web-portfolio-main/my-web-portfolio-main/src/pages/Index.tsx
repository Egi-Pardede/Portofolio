import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, Code, Palette, Database, Smartphone } from "lucide-react";

const Index = () => {
  const courses = [
    {
      id: 1,
      title: "E-Commerce",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Mempelajari konsep bisnis online, sistem pembayaran digital, dan strategi pemasaran e-commerce.",
      projects: [
        { name: "Toko Online Fashion", link: "#" },
        { name: "Marketplace Produk Digital", link: "#" },
        { name: "Sistem Manajemen Inventory", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Pemrograman Web",
      icon: <Code className="w-8 h-8" />,
      description: "Belajar HTML, CSS, JavaScript, React, dan framework modern untuk membangun aplikasi web interaktif.",
      projects: [
        { name: "Website Company Profile", link: "#" },
        { name: "Blog Personal dengan CMS", link: "#" },
        { name: "Dashboard Admin Panel", link: "#" },
      ],
    },
    {
      id: 3,
      title: "Desain UI/UX",
      icon: <Palette className="w-8 h-8" />,
      description: "Menguasai prinsip desain user interface dan user experience untuk menciptakan produk yang user-friendly.",
      projects: [
        { name: "Redesign Aplikasi Mobile Banking", link: "#" },
        { name: "Wireframe & Prototype E-Learning", link: "#" },
        { name: "Design System Components", link: "#" },
      ],
    },
    {
      id: 4,
      title: "Basis Data",
      icon: <Database className="w-8 h-8" />,
      description: "Mempelajari perancangan database, SQL, NoSQL, dan optimasi query untuk aplikasi skala besar.",
      projects: [
        { name: "Sistem Informasi Akademik", link: "#" },
        { name: "Database Perpustakaan Digital", link: "#" },
        { name: "API dengan PostgreSQL", link: "#" },
      ],
    },
    {
      id: 5,
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Mengembangkan aplikasi mobile native dan cross-platform untuk Android dan iOS.",
      projects: [
        { name: "Aplikasi To-Do List", link: "#" },
        { name: "Social Media Clone", link: "#" },
        { name: "Aplikasi Fitness Tracker", link: "#" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-90"
          style={{ background: 'var(--gradient-hero)' }}
        />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/20 backdrop-blur-sm p-2 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">👋</span>
              </div>
            </div>
            <div className="flex-1 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
                Egi Agung Santoso Pardede
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-2 font-medium">
                Digital Solutions Enthusiast & Project Leader
              </p>
              <p className="text-base md:text-lg text-white/80 max-w-2xl">
                Seorang penggemar solusi digital dan penggerak tim proyek. Saya percaya bahwa keputusan tepat lahir dari data yang kuat dan eksekusi yang terstruktur. Dengan menggabungkan pemikiran analitis dan pendekatan manajemen yang kolaboratif, saya membantu mengubah ide menjadi produk yang bernilai bagi pengguna dan bisnis.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Mata Kuliah & Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Koleksi project dan pembelajaran dari berbagai mata kuliah yang telah saya tempuh
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group hover:-translate-y-2 transition-all duration-300 border-border/50 hover:shadow-lg"
              style={{
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <CardHeader className="space-y-4">
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-primary-foreground transition-transform group-hover:scale-110"
                  style={{ background: 'var(--gradient-hero)' }}
                >
                  {course.icon}
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {course.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                    Portfolio Projects
                  </h4>
                  <ul className="space-y-2">
                    {course.projects.map((project, idx) => (
                      <li key={idx}>
                        <a
                          href={project.link}
                          className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors group/link"
                        >
                          <ExternalLink className="w-4 h-4 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                          <span className="group-hover/link:underline">{project.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © {new Date().getFullYear()} Egi Agung Santoso Pardede. Dibuat dengan React & Tailwind CSS.
            </p>
            <p className="text-xs mt-2">
              Portfolio ini dapat dimodifikasi sesuai kebutuhan Anda
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
