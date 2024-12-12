import React from 'react';

function Features() {
  return (
    <section className="bg-orange py-32">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">App Features</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <h3 className="font-semibold text-2xl">Track Your Workouts</h3>
            <p>Log your daily exercises, sets, and reps.</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Nutrition Tracking</h3>
            <p>Track your meals and monitor your calories.</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Goal Setting</h3>
            <p>Set fitness goals and track progress.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
