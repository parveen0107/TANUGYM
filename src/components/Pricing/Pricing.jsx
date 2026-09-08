import "./Pricing.css";
import Button from "../Button/Button";
import { FaCheckCircle } from "react-icons/fa";

const whatsappMembershipLink =
  "https://wa.me/918950855815?text=Hello%20TANU%20GYM%2C%20I%20would%20like%20to%20enquire%20about%20membership.";

function Pricing() {
  const plans = [
    {
      name: "Monthly",
      price: "INR 1500",
      duration: "/ month",
      popular: false,
      features: [
        "Gym Access",
        "Gym floor access",
        "Trainer guidance",
        "Progress check-ins",
      ],
    },
    {
      name: "Quarterly",
      price: "INR 3500",
      duration: "3 months",
      popular: true,
      features: [
        "Gym Access",
        "All gym access",
        "Fitness assessment",
        "Priority support",
      ],
    },
    {
      name: "Half Yearly",
      price: "INR 6000",
      duration: "/ 6 months",
      popular: false,
      features: [
        "Best-value membership",
        "Structured workout plan",
        "Nutrition guidance",
        "Regular progress reviews",
      ],
    },
    { name: "Yearly", price: "INR 10000", duration: "/ year", popular: false, features: ["Full gym access", "Goal planning", "Member benefits", "Long-term coaching"] },
    { name: "Personal Training", price: "Enquire", duration: "one-to-one", popular: false, features: ["Dedicated trainer", "Custom workouts", "Technique coaching", "Accountability"] },
  ];

  return (
    <section
      id="pricing"
      className="pricing"
      data-aos="fade-up"
      aria-labelledby="pricing-title"
    >
      <div className="section-title" data-aos="fade-up">
        <span>PRICING PLAN</span>

        <h2 id="pricing-title">
          Choose Your
          <br />
          Membership
        </h2>
      </div>

      <div className="pricing-container">
        {plans.map((plan, index) => (
          <article
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={plan.name}
            data-aos="fade-up"
            data-aos-delay={index * 90}
          >
            {plan.popular && <div className="popular-badge">Most Popular</div>}

            <h3>{plan.name}</h3>

            <p className="plan-price">
              {plan.price}
              <span>{plan.duration}</span>
            </p>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <FaCheckCircle />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              text="Enquire on WhatsApp"
              variant="primary"
              href={whatsappMembershipLink}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
