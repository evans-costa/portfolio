import ContactForm from "@/components/ContactForm";
import PatternRings from "@/components/Icons/pattern-rings";
import Social from "@/components/Social";

export default function Footer() {
  return (
    <footer className="flex-col justify-between items-center py-20 px-40">
      <div className="max-w-screen-xl mx-auto px-12">
        <div className="max-w-screen-xl flex justify-between items-start gap-52 pb-24 mb-12 border-b border-gray">
          <div className="w-1/2 flex flex-col items-start">
            <h1 className="text-white mb-9">Contact</h1>
            <p className="text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus similique eveniet, saepe quisquam corrupti cupiditate
              itaque non harum minima omnis doloremque quas rerum,
              exercitationem animi! Voluptatum quidem cumque quod corrupti!
            </p>
          </div>
          <ContactForm />
        </div>
        <Social />
      </div>
    </footer>
  );
}
