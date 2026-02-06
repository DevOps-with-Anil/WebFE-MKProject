import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertTriangle, FileText, Mail, Shield } from "lucide-react"

export default function DMCAPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-destructive/10 via-background to-muted py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Badge variant="outline" className="mb-4 border-destructive/50 text-destructive">
              Legal
            </Badge>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              DMCA & Copyright
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Report copyright infringement or request content takedown
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Info Cards */}
              <div className="space-y-6">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Our Commitment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Coran Challenge respects intellectual property rights and expects our users to do the same. 
                      We respond promptly to notices of alleged copyright infringement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <FileText className="h-8 w-8 text-secondary mb-2" />
                    <CardTitle>What to Include</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">1.</span>
                        Description of copyrighted work
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">2.</span>
                        URL of infringing content
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">3.</span>
                        Your contact information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">4.</span>
                        Statement of good faith belief
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">5.</span>
                        Statement of accuracy
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md bg-destructive/5">
                  <CardHeader>
                    <AlertTriangle className="h-8 w-8 text-destructive mb-2" />
                    <CardTitle>Important Notice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Filing a false DMCA notice is punishable by law. Only submit if you are the copyright owner 
                      or authorized to act on their behalf.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Report Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Submit DMCA Takedown Request
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" placeholder="Your legal name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="your@email.com" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization (if applicable)</Label>
                        <Input id="company" placeholder="Company name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="infringing-url">URL of Infringing Content *</Label>
                        <Input 
                          id="infringing-url" 
                          placeholder="https://coranchallenge.com/..." 
                          required 
                        />
                        <p className="text-xs text-muted-foreground">
                          Provide the exact URL where the infringing content appears
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="original-url">URL of Original Work *</Label>
                        <Input 
                          id="original-url" 
                          placeholder="https://..." 
                          required 
                        />
                        <p className="text-xs text-muted-foreground">
                          Link to the original copyrighted work (if available online)
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description of Copyrighted Work *</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Describe the copyrighted work that has been infringed..."
                          rows={4}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additional">Additional Information</Label>
                        <Textarea 
                          id="additional" 
                          placeholder="Any additional details that may help us process your request..."
                          rows={3}
                        />
                      </div>

                      <div className="space-y-4 rounded-lg bg-muted/50 p-4">
                        <div className="flex items-start gap-3">
                          <input 
                            type="checkbox" 
                            id="good-faith" 
                            required
                            className="mt-1"
                          />
                          <Label htmlFor="good-faith" className="text-sm font-normal leading-relaxed">
                            I have a good faith belief that the use of the described material is not authorized 
                            by the copyright owner, its agent, or the law.
                          </Label>
                        </div>
                        <div className="flex items-start gap-3">
                          <input 
                            type="checkbox" 
                            id="accuracy" 
                            required
                            className="mt-1"
                          />
                          <Label htmlFor="accuracy" className="text-sm font-normal leading-relaxed">
                            I swear, under penalty of perjury, that the information in this notification is accurate 
                            and that I am the copyright owner, or am authorized to act on behalf of the owner.
                          </Label>
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Submit DMCA Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Alternative Contact */}
                <Card className="mt-6 border-0 shadow-md">
                  <CardContent className="py-6">
                    <p className="text-center text-muted-foreground">
                      You can also send DMCA notices via email to{" "}
                      <a href="mailto:dmca@coranchallenge.com" className="font-medium text-primary hover:underline">
                        dmca@coranchallenge.com
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
