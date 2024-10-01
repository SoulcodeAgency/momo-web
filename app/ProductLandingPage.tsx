import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function StickyHeaderProductLandingPage() {
  return (
    <main className="flex-1 pt-16"> {/* Added pt-16 to account for fixed header */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Revolutionize Your Workflow
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Streamline your tasks, boost productivity, and achieve more with our cutting-edge project management tool.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-200">Get Started for Free</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </section>
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <CardTitle>Task Management</CardTitle>
              </CardHeader>
              <CardContent>
                Easily create, assign, and track tasks across your team.
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <CardTitle>Real-time Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                Work together seamlessly with instant updates and communication.
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                Gain insights into your team's performance with detailed reports.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full max-w-4xl">
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <CardTitle>Free Plan</CardTitle>
                <CardDescription>Perfect for individuals and small teams</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">$0</p>
                <p className="text-sm text-gray-500">per user / month</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center justify-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-500" /> Up to 5 users</li>
                  <li className="flex items-center justify-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-500" /> Basic task management</li>
                  <li className="flex items-center justify-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-500" /> Limited storage</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <CardTitle>Pro Plan</CardTitle>
                <CardDescription>For growing businesses and teams</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">$29</p>
                <p className="text-sm text-gray-500">per user / month</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center justify-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-500" /> Unlimited users</li>
                  <li className="flex items-center justify-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-500" /> Advanced task management</li>
                  <li className="flex items-center justify-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-500" /> Unlimited storage</li>
                  <li className="flex items-center justify-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-500" /> Priority support</li>
                  <li className="flex items-center justify-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-500" /> Advanced analytics</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Free Trial</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of satisfied users and take your productivity to the next level.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 mt-8">
            <Button className="w-full">Start Your Free Trial</Button>
            <p className="text-xs text-gray-500">No credit card required</p>
          </div>
        </div>
      </section>
    </main>
  )
}