
interface BackgroundImageProps {
  backgroundImage: string;
}

const BackgroundImage = ({ backgroundImage }: BackgroundImageProps) => {
  return (
    <>
      {/* Background image with 15% opacity */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-15" 
        style={{
          backgroundImage: `url(${backgroundImage})`
        }} 
      />
      
      {/* Black gradient overlay from bottom to top */}
      <div className="fixed inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    </>
  );
};

export default BackgroundImage;
