import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 flex items-center justify-center">
      <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6">About RecipeApp</h1>
        <p className="text-lg leading-relaxed">
          Welcome to RecipeApp, your ultimate destination for discovering and sharing amazing recipes from around the world! Our mission is to bring food lovers together and inspire creativity in the kitchen. Whether you’re a seasoned chef or a beginner cook, you’ll find a variety of delicious and easy-to-follow recipes here.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          We believe food is more than just sustenance — it’s a way to connect, share stories, and explore cultures. Join our community, share your own recipes, and discover the joy of cooking.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Thank you for being part of RecipeApp. Let’s cook something amazing together!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
