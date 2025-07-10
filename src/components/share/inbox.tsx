import inbox from "../../assets/bg-email.png";
import { Button } from "../ui/button";

export default function Inbox() {
    return (
        <section className="pb-10 md:pb-20 px-4 md:px-0">
            <div className="container mx-auto">
                <div className="bg-cover bg-center bg-no-repeat py-10 md:py-20 px-2 md:px-4 rounded-4xl"
                     style={{ backgroundImage: `url(${inbox})` }}>
                    <div className="flex flex-col items-center justify-center gap-6 md:gap-10">
                        <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 text-center">Deliciousness to your inbox</h3>
                        <p className="text-gray-700 mt-2 md:mt-6 text-center text-sm md:text-base">
                            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br className="hidden md:block" />
                            labore et dolore magna aliqut enim ad minim
                        </p>
                        <div className="w-full max-w-lg bg-white rounded-2xl p-2 md:p-4 h-fit flex flex-col sm:flex-row items-center gap-2 sm:gap-0 sm:justify-between">
                            <input type="text" placeholder="Enter your email" className="w-full sm:w-auto flex-1 px-4 md:px-6 py-2 rounded-2xl outline-none text-sm md:text-base" />
                            <Button size="lg" className="w-full sm:w-auto mt-2 sm:mt-0">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}