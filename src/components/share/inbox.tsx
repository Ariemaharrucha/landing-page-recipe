import inbox from "../../assets/bg-email.png"
import { Button } from "../ui/button";

export default function Inbox() {
    return (
        <section className="pb-20">
            <div className="container mx-auto">
                <div className="bg-cover bg-center bg-no-repeat py-20 px-4 rounded-4xl" 
                     style={{ backgroundImage: `url(${inbox})` }}>
                    <div className="flex flex-col items-center justify-center gap-10">
                        <h3 className="text-4xl font-semibold text-gray-800">Deliciousness to your inbox</h3>
                        <p className="text-gray-700 mt-6 text-center">
                            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> 
                            labore et dolore magna aliqut enim ad minim
                        </p>
                        <div className="max-w-lg bg-white rounded-2xl p-4 h-fit flex items-center justify-between">
                            <input type="text" placeholder="Enter your email" className="px-6 py-2 rounded-2xl outline-none" />
                            <Button size="lg" className="">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}