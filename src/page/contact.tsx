import Template from "../template/template";
import chef from "../assets/chef.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default function Contact() {
  return (
    <Template>
      <section>
        <h1 className="text-5xl font-semibold leading-tight text-center">
          Contact Us
        </h1>
        <div className="mt-12">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-t from-[#e7fafe]">
                <img
                  src={chef}
                  alt="chef"
                  className="w-full h-full object-cover px-6"
                />
              </div>
            </div>
            <div className="col-span-2">
              <form action="">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label>Name</Label>
                    <Input type="text" placeholder="Enter your name"className="mt-4" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Enter your email"className="mt-4" />
                  </div>
                  <div>
                    <Label>Subject</Label>
                    <Input type="text" placeholder="Enter your subject"className="mt-4" />
                  </div>
                  <div>
                    <Label>Adsvertising</Label>
                    <Input type="text" placeholder="Adsvertising"className="mt-4" />
                  </div>
                </div>
                <Textarea placeholder="Enter your message" className="mt-4 h-[200px]" />
                <Button className="mt-4">Send</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
}
