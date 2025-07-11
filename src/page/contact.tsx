import Template from "../template/template";
import chef from "../assets/chef.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default function Contact() {
  return (
    <Template recipeSection={true}>
      <section className="pb-16 md:pb-32 px-4 md:px-0">
        <h1 className="text-5xl font-semibold leading-tight text-center">
          Contact Us
        </h1>
        <div className="mt-8 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="col-span-1">
              <div className="overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-t from-[#e7fafe]">
                <img
                  src={chef}
                  alt="chef"
                  className="w-full h-full object-cover px-4 md:px-6"
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <form action="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <Label className="text-gray-500 font-semibold">Name</Label>
                    <Input type="text" placeholder="Enter your name" className="mt-2 md:mt-4" />
                  </div>
                  <div>
                    <Label className="text-gray-500 font-semibold">Email</Label>
                    <Input type="email" placeholder="Enter your email" className="mt-2 md:mt-4" />
                  </div>
                  <div>
                    <Label className="text-gray-500 font-semibold">Subject</Label>
                    <Input type="text" placeholder="Enter your subject" className="mt-2 md:mt-4" />
                  </div>
                  <div>
                    <Label className="text-gray-500 font-semibold">Adsvertising</Label>
                    <Input type="text" placeholder="Adsvertising" className="mt-2 md:mt-4" />
                  </div>
                </div>
                <div className="mt-4 md:mt-6 h-[180px] md:h-[260px]">
                  <Label className="text-gray-500 font-semibold">Message</Label>
                  <Textarea placeholder="Enter your message" className="mt-2 md:mt-4 h-full" />
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-6">
            <Button className="py-4 md:py-6 px-8 md:px-12 w-full md:w-auto">Submit</Button>
          </div>
        </div>
      </section>
    </Template>
  );
}
