export default function Privacy() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          hidden
          h-[350px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/10
          blur-[120px]
          md:block
        "
      />

      <section
        className="
          relative
          mx-auto
          max-w-5xl
          px-6
          pb-24
          pt-36
          lg:px-8
        "
      >
        {/* Header */}

        <div className="text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-cyan-400
            "
          >
            Legal & Privacy
          </span>

          <h1
            className="
              mt-6
              text-5xl
              font-bold
              leading-tight
              sm:text-6xl
            "
          >
            Privacy <span className="gradient-text">Policy</span>
          </h1>

          <p className="mt-5 text-gray-500">Last Updated: August 2026</p>
        </div>

        {/* Content */}

        <div
          className="
            mt-16
            space-y-12
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-7
            backdrop-blur-sm
            sm:p-10
            lg:p-14
          "
        >
          {/* Introduction */}

          <div>
            <h2 className="text-2xl font-bold text-white">1. Introduction</h2>

            <p className="mt-4 leading-8 text-gray-400">
              Your privacy is important to us. This Privacy Policy explains how
              AnkleGaming Private Limited collects, uses, stores and protects
              information when you visit our website, contact us, or use our
              services.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              By using our website or communicating with us, you acknowledge
              that you have read and understood this Privacy Policy.
            </p>
          </div>

          {/* Information Collection */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              2. Information We Collect
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              We may collect information that you voluntarily provide when you
              contact us, request a quotation, submit an enquiry, apply for a
              job, or otherwise communicate with AnkleGaming.
            </p>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li>• Name and contact information</li>

              <li>• Email address and phone number</li>

              <li>• Company or organization details</li>

              <li>• Project requirements and business information</li>

              <li>• Information submitted through contact forms</li>

              <li>
                • Information provided during recruitment or job applications
              </li>
            </ul>
          </div>

          {/* Automatically Collected */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              3. Automatically Collected Information
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              When you visit our website, certain technical information may be
              collected automatically. This may include your browser type,
              device information, operating system, approximate location, IP
              address, pages visited and general website usage information.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              This information helps us understand website performance, improve
              user experience and identify technical issues.
            </p>
          </div>

          {/* How We Use Information */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              4. How We Use Your Information
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              Information collected by AnkleGaming may be used for legitimate
              business purposes, including:
            </p>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li>• Responding to enquiries and requests</li>

              <li>• Understanding project requirements</li>

              <li>• Providing quotations and proposals</li>

              <li>• Delivering and improving our services</li>

              <li>• Communicating important project information</li>

              <li>• Improving website functionality and performance</li>

              <li>• Managing recruitment and career applications</li>

              <li>• Preventing fraud, abuse and security threats</li>
            </ul>
          </div>

          {/* Data Security */}

          <div>
            <h2 className="text-2xl font-bold text-white">5. Data Security</h2>

            <p className="mt-4 leading-8 text-gray-400">
              We take reasonable technical and organizational measures to
              protect information against unauthorized access, alteration,
              disclosure or destruction.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              However, no method of transmission or electronic storage can be
              guaranteed to be completely secure. Therefore, while we work to
              protect your information, we cannot guarantee absolute security.
            </p>
          </div>

          {/* Sharing */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              6. Sharing of Information
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              AnkleGaming does not sell or rent personal information to third
              parties. Information may be shared with trusted service providers
              when necessary to operate our website, deliver services, process
              communications or support business operations.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              We may also disclose information where required by applicable law,
              regulation, legal process or to protect the rights and safety of
              our company, users or other parties.
            </p>
          </div>

          {/* Cookies */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              7. Cookies and Similar Technologies
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              Our website may use cookies and similar technologies to improve
              functionality, understand website usage, remember preferences and
              enhance the overall user experience.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              You can control or disable cookies through your browser settings.
              Disabling certain cookies may affect some website functionality.
            </p>
          </div>

          {/* Third Party Services */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              8. Third-Party Services
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              Our website or services may contain links to or integrations with
              third-party platforms and services. These third parties may have
              their own privacy policies and terms.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              We are not responsible for the privacy practices, content or
              security policies of third-party websites that are outside our
              control.
            </p>
          </div>

          {/* Data Retention */}

          <div>
            <h2 className="text-2xl font-bold text-white">9. Data Retention</h2>

            <p className="mt-4 leading-8 text-gray-400">
              We retain information only for as long as reasonably necessary to
              fulfil the purposes for which it was collected, provide our
              services, maintain business records, resolve disputes or comply
              with applicable legal obligations.
            </p>
          </div>

          {/* User Rights */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              10. Your Privacy Choices
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              Depending on applicable law, you may have rights regarding your
              personal information, including the ability to request access,
              correction or deletion of certain information.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              If you would like to make a privacy-related request, please
              contact us using the details provided below.
            </p>
          </div>

          {/* Children */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              11. Children's Privacy
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              Our website and services are intended for businesses,
              organizations and individuals who are legally able to use such
              services. We do not knowingly collect personal information from
              children without appropriate consent where such consent is
              required by law.
            </p>
          </div>

          {/* Policy Updates */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              12. Changes to This Privacy Policy
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              We may update this Privacy Policy from time to time to reflect
              changes in our services, technology, business practices or
              applicable legal requirements.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Any updated version will be published on this page with a revised
              "Last Updated" date.
            </p>
          </div>

          {/* Contact */}

          <div
            className="
              rounded-2xl
              border
              border-cyan-400/10
              bg-cyan-400/[0.04]
              p-6
              sm:p-8
            "
          >
            <h2 className="text-2xl font-bold text-white">13. Contact Us</h2>

            <p className="mt-4 leading-8 text-gray-400">
              If you have any questions, concerns or requests regarding this
              Privacy Policy or the way we handle your information, please
              contact AnkleGaming Private Limited.
            </p>

            <div className="mt-6 space-y-2 text-gray-300">
              <p>
                <strong className="text-white">Company:</strong> AnkleGaming
                Private Limited
              </p>

              <p>
                <strong className="text-white">Email:</strong>{" "}
                hello@anklegaming.com
              </p>

              <p>
                <strong className="text-white">Location:</strong> Delhi, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
