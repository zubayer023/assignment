import FooterLink from "./FooterLink";

export default function SubFooter1() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Company
        </h3>

        <FooterLink href="#" text="About" />
        <FooterLink href="#" text="Careers" />
        <FooterLink href="#" text="Brand Center" />
        <FooterLink href="#" text="Blog" />
      </div>

      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Help center
        </h3>

        <FooterLink href="#" text="Discord Server" />
        <FooterLink href="#" text="Twitterr" />
        <FooterLink href="#" text="Facebook" />
        <FooterLink href="#" text="Contact Us" />
      </div>
      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Legal
        </h3>
        <FooterLink href="#" text="Privacy Policy" />
        <FooterLink href="#" text="Licensing" />
        <FooterLink href="#" text="Terms" />
      </div>
      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Company
        </h3>
        <FooterLink href="#" text="About" />
        <FooterLink href="#" text="Careers" />
        <FooterLink href="#" text="Brand Center" />
        <FooterLink href="#" text="Blog" />
      </div>
      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Download
        </h3>
        <FooterLink href="#" text="iOS" />
        <FooterLink href="#" text="Android" />
        <FooterLink href="#" text="Windows" />
        <FooterLink href="#" text="MacOS" />
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
    </div>
  );
}
