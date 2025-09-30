
import { useState, useEffect } from 'react';
import BackgroundImage from '@/components/BackgroundImage';
import ImageUploadButton from '@/components/ImageUploadButton';
import NeonEffects from '@/components/NeonEffects';
import LoginHeader from '@/components/LoginHeader';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  const [backgroundImage, setBackgroundImage] = useState('/lovable-uploads/b60949d3-45b3-4877-aab6-56c60fd7f003.png');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        const result = e.target?.result as string;
        setBackgroundImage(result);
        console.log('Nova imagem de fundo definida:', result.substring(0, 50) + '...');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
      <BackgroundImage backgroundImage={backgroundImage} />
      
      <ImageUploadButton onImageUpload={handleImageUpload} />
      
      {/* Main login container */}
      <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="w-full max-w-md">
          {/* Login form card */}
          <div className="backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-login-light-gray/20 bg-zinc-950/80 relative overflow-hidden">
            <NeonEffects />
            
            {/* Subtle glow behind the login box */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-lg blur-xl"></div>
            
            <LoginHeader />
            <LoginForm />
          </div>

          {/* reCaptcha notice */}
          <div className="text-center mt-6 text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
            <div className="flex items-center justify-center space-x-4 mt-2">
              <span>•</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
