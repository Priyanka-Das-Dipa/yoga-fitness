import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-semibold text-center py-8 text-orange-400">
        FAQ's
      </h1>
      <div className="grid md:grid-cols-2 gap-2 justify-center items-center">
        <div>
          <img src="https://i.ibb.co/fChzdwf/Feb-Business-9.jpg" alt="" />
        </div>

        <div>
          <div className="collapse collapse-arrow bg-slate-50 mb-2">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-2xl font-semibold ">
              What are the benefits of doing yoga?
            </div>
            <div className="collapse-content text-xl">
              <p>
                The practice of Yoga includes a very holistic approach to
                health. It includes practices which focus on the well being of
                the body, mind and soul. Initially the benefits are very subtle
                but over a period of time when iy becomes a way of life, the
                benefits are very obvious.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl bg-slate-50 font-semibold">
              Is Yoga enough to keep you fit?
            </div>
            <div className="collapse-content text-xl">
              <p>
                If by yoga, you mean asanas, then definitely it is not enough to
                keep you fit. Fitness depends as much on the state of mind as on
                the state of the body. Thus a well balanced diet, healthy
                lifestyle, an appropriate yoga routine (asana, pranayama,
                meditation) and using the knowledge given in the courses can
                help keep you fit. And doing all these things are very natural
                and effortless for all of us. That’s why in the yogasutras it is
                said, “Prayatna shaithilya anantha samapattibhyam."
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-slate-50 mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold shadow-lg shadow-black">
              Are there any side-effects of doing yoga?
            </div>
            <div className="collapse-content text-xl">
              <p>
                When done under proper supervision of a trained yoga teacher,
                there are no side effects. If at all the effects are only
                positive.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-slate-50 mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold">
              Can the practice of yoga help in alleviating incurable diseases?
            </div>
            <div className="collapse-content text-xl">
              <p>
                Yoga is not a substitute for medicine. However it does help the
                body mind complex to cope with stresses. Many patients with
                incurable diseases have experienced a remarkable transformation
                after doing The Art of Living courses. You can visit the section
                on Yoga Experiences.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-slate-50 mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold">
              What asanas are included in a complete yoga workout?
            </div>
            <div className="collapse-content text-xl">
              <p>
                A complete yoga sequence should comprise asanas that help to
                balance out the imbalances in the system. A healthy mix of
                standing, sitting and lying down postures is provided in the Sri
                Sri Yoga sequences. It is very important to include yoga nidra
                at the end of any asana sequence as the body and mind needs the
                time to assimilate the effects of the asanas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
