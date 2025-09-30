
const LoginHeader = () => {
  return (
    <>
      {/* Logo */}
      <div className="text-center mb-8 relative z-10">
        <img 
          alt="Academe" 
          className="h-8 mx-auto mb-6" 
          src="/lovable-uploads/39d81295-6c37-4577-b4c8-fcb4ce2fcae8.png" 
        />
      </div>

      {/* Header with gradient line */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-white font-semibold tracking-wider mb-4 text-sm">
          FAÇA SEU LOGIN
        </h1>
        <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mx-auto w-full"></div>
      </div>
    </>
  );
};

export default LoginHeader;
