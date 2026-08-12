import SEO from "../../components/shared/SEO";

export default function Refund() {
  return (
    <main>
      <SEO
        title="Refund Policy | AnkleGaming Private Limited"
        description="Read AnkleGaming Private Limited refund policy regarding software development services, payments and cancellations."
      />

      <section
        className="
py-32
max-w-5xl
mx-auto
px-6
"
      >
        <h1
          className="
text-5xl
md:text-6xl
font-bold
"
        >
          Refund
          <span className="gradient-text">Policy</span>
        </h1>

        <p
          className="
mt-6
text-gray-400
"
        >
          Last Updated: August 2026
        </p>

        <div
          className="
mt-12
space-y-10
text-gray-300
leading-8
"
        >
          <div>
            <h2
              className="
text-3xl
font-bold
text-white
"
            >
              1. Overview
            </h2>

            <p
              className="
mt-4
"
            >
              At AnkleGaming Private Limited, we provide custom software
              development, mobile applications, websites, AI solutions and
              technology consulting services. Due to the nature of our digital
              services, payments are handled according to the project agreement
              and service terms.
            </p>
          </div>

          <div>
            <h2
              className="
text-3xl
font-bold
text-white
"
            >
              2. Project Payments
            </h2>

            <p
              className="
mt-4
"
            >
              Projects may require advance payments, milestone payments or
              subscription based payments depending on the agreement between
              AnkleGaming and the client.
            </p>
          </div>

          <div>
            <h2
              className="
text-3xl
font-bold
text-white
"
            >
              3. Refund Eligibility
            </h2>

            <p
              className="
mt-4
"
            >
              Refund requests may be considered only in cases where:
            </p>

            <ul
              className="
mt-4
list-disc
pl-6
space-y-3
"
            >
              <li>
                Service has not started and development work has not been
                initiated.
              </li>

              <li>Duplicate payment has been made accidentally.</li>

              <li>A refund is approved according to the signed agreement.</li>
            </ul>
          </div>

          <div>
            <h2
              className="
text-3xl
font-bold
text-white
"
            >
              4. Non Refundable Payments
            </h2>

            <ul
              className="
mt-4
list-disc
pl-6
space-y-3
"
            >
              <li>Payments for completed development milestones.</li>

              <li>
                Payments for completed design, development or consulting work.
              </li>

              <li>
                Third-party service charges, licenses or infrastructure costs.
              </li>
            </ul>
          </div>

          <div>
            <h2
              className="
text-3xl
font-bold
text-white
"
            >
              5. Cancellation Policy
            </h2>

            <p
              className="
mt-4
"
            >
              If a client decides to cancel a project after work has started,
              charges may apply according to the completed work and project
              agreement.
            </p>
          </div>

          <div>
            <h2
              className="
text-3xl
font-bold
text-white
"
            >
              6. Processing Time
            </h2>

            <p
              className="
mt-4
"
            >
              Approved refunds will be processed within a reasonable time period
              through the original payment method.
            </p>
          </div>

          <div>
            <h2
              className="
text-3xl
font-bold
text-white
"
            >
              7. Contact Us
            </h2>

            <p
              className="
mt-4
"
            >
              For refund related queries, contact our support team.
            </p>

            <p
              className="
mt-3
text-cyan-400
"
            >
              Email: hello@anklegaming.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
