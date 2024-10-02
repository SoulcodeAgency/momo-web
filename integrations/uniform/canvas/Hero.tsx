import { Button } from "@/components/ui/button";
import { ComponentProps, UniformText } from "@uniformdev/canvas-next-rsc/component";

type HeroProps = ComponentProps<{
  title: string;
  description: string;
}>;

// TODO: This component was a quick example, it should be rather a common component, not a canvas only component.
// It might be possible to reproduce this component with Container, Grid, Text and Button components.

export function Hero({ context, component }: HeroProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <div className="space-y-4 max-w-3xl">
          <UniformText
            context={context}
            component={component}
            parameterId="title"
            as="h1"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
            placeholder={"Revolutionize Your Workflow"}
          />
          <UniformText
            context={context}
            component={component}
            parameterId="description"
            as="p"
            className="mx-auto max-w-[700px] text-gray-300 md:text-xl"
            placeholder={"Streamline your tasks, boost productivity, and achieve more with our cutting-edge project management tool."}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button variant="outline" className="bg-white text-black hover:bg-gray-200">Get Started for Free</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </section>



  );
}

