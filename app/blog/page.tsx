import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "ridurre-il-carico-fiscale-senza-rischi",
      title: "Come ridurre il carico fiscale senza rischi: la pianificazione strategica che fa la differenza",
      excerpt:
        "Navigate the complex world of tax deductions with our comprehensive guide covering business expenses, personal deductions, and strategic planning for maximum savings.",
      category: "Tax Planning",
      readTime: "8 min read",
      publishDate: "March 15, 2024",
      image: "/tax-documents-and-calculator-on-desk.jpg",
    },
    {
      slug: "small-business-financial-planning",
      title: "Financial Planning Essentials for Small Business Owners",
      excerpt:
        "Learn the fundamental financial planning strategies every small business owner needs to know for sustainable growth, cash flow management, and long-term success.",
      category: "Business Finance",
      readTime: "6 min read",
      publishDate: "March 10, 2024",
      image: "/small-business-owner-reviewing-financial-charts.jpg",
    },
    {
      slug: "estate-planning-basics",
      title: "Estate Planning Basics: Protecting Your Legacy",
      excerpt:
        "Understand the essential components of estate planning and how proper preparation can protect your assets, minimize taxes, and provide for your loved ones.",
      category: "Legal & Estate",
      readTime: "10 min read",
      publishDate: "March 5, 2024",
      image: "/family-documents-and-legal-papers.jpg",
    },
    {
      slug: "retirement-planning-strategies",
      title: "Retirement Planning Strategies for Every Age",
      excerpt:
        "Discover age-appropriate retirement planning strategies, from starting your career to approaching retirement, including 401(k) optimization and IRA strategies.",
      category: "Financial Planning",
      readTime: "12 min read",
      publishDate: "February 28, 2024",
      image: "/retirement-planning-documents-and-graphs.jpg",
    },
    {
      slug: "business-tax-compliance",
      title: "Business Tax Compliance: Avoiding Common Pitfalls",
      excerpt:
        "Learn about common business tax compliance issues and how to avoid costly mistakes that could result in penalties or audits.",
      category: "Tax Planning",
      readTime: "7 min read",
      publishDate: "February 20, 2024",
      image: "/business-tax-forms-and-compliance-documents.jpg",
    },
    {
      slug: "investment-tax-implications",
      title: "Understanding Investment Tax Implications",
      excerpt:
        "Navigate the complex world of investment taxation, including capital gains, dividend taxes, and tax-efficient investment strategies.",
      category: "Investment Tax",
      readTime: "9 min read",
      publishDate: "February 15, 2024",
      image: "/investment-portfolio-and-tax-documents.jpg",
    },
  ]

  const categories = [
    "All",
    "Fiscalità e Adempimenti",
    "Business Finance",
    "Legal & Estate",
    "Financial Planning",
    "Investment Tax",
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-4">Esplora il mondo della Finanza e del Fisco</h1>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto mb-8">
                Expert insights, practical advice, and educational content to help you make informed financial
                decisions.
              </p>

              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search articles..." className="pl-10 bg-background" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.publishDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-semibold leading-tight hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="p-0 h-auto font-medium">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
