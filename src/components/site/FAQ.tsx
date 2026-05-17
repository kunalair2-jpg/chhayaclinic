import React from "react";

export function FAQ() {
  const faqs = [
    {
      q: "Do I need to visit a hospital for a mild viral infection?",
      a: "It is not necessary to visit a hospital for a mild infection. You can visit any general physician's clinic near your home to get treatment. If the infection is major, the doctor will refer you to a hospital.",
    },
    {
      q: "Where is Chhaya Clinic & Dental Care located in Pune?",
      a: "Chhaya Clinic & Dental Care in Parvati, Pune is easy to reach. It is located Near Hanuman Mandal Janta Vasahat.",
    },
    {
      q: "Do I need an appointment before visiting Chhaya Clinic & Dental Care?",
      a: "Yes, it is recommended to book an appointment before visiting Chhaya Clinic & Dental Care. You can scroll up to get the contact number.",
    },
    {
      q: "Are there special clinics for skin infections?",
      a: "Yes, there are skin care clinics with certified dermatologists who treat skin infections and other skin-related issues.",
    },
    {
      q: "Is there a blood test facility available at Chhaya Clinic & Dental Care?",
      a: "While some clinics offer blood testing facility, it is best to confirm the same with Chhaya Clinic & Dental Care.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 border rounded-2xl bg-slate-50">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{i + 1}. {f.q}</h3>
              <p className="text-slate-700 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
