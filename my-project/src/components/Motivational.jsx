import React from 'react';

const motivationalLines = [
  "Push yourself because no one else is going to do it for you.",
  "Success starts with self-discipline.",
  "The body achieves what the mind believes.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Your only limit is you.",
  "Great things never come from comfort zones."
];

function Motivational() {
  const getDailyMotivation = () => {
    const dayOfYear = new Date().getDay();
    return motivationalLines[dayOfYear % motivationalLines.length];
  };

  return (
    <section className="bg-blue-400 text-white text-center py-32">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold">Today's Motivation</h2>
        <p className="mt-12 text-2xl">{getDailyMotivation()}</p>
      </div>
    </section>
  );
}

export default Motivational;
