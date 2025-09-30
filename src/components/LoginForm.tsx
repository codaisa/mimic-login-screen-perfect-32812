
import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <>
      {/* Form */}
      <form className="space-y-6 relative z-10">
        {/* Email field */}
        <div className="space-y-2">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              type="email" 
              placeholder="E-mail de usuário:" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="bg-login-light-gray/50 border-login-light-gray/30 text-white placeholder-gray-400 pl-11 py-3 rounded-md focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200" 
            />
          </div>
        </div>

        {/* Password field */}
        <div className="space-y-2">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Sua senha:" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="bg-login-light-gray/50 border-login-light-gray/30 text-white placeholder-gray-400 pl-11 pr-11 py-3 rounded-md focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200" 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Show password checkbox and forgot password */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="show-password" 
              checked={showPassword2} 
              onCheckedChange={checked => setShowPassword2(checked === true)} 
              className="border-gray-400 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600" 
            />
            <label htmlFor="show-password" className="text-gray-400 cursor-pointer">
              Mostrar senha
            </label>
          </div>
          <a href="#" className="text-gray-400 hover:text-white transition-colors underline">
            Esqueci minha senha
          </a>
        </div>

        {/* Login button */}
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-purple-600 to-purple-400 hover:opacity-90 text-white font-semibold py-3 rounded-md transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Entrar
        </Button>

        {/* Google login button */}
        <Button 
          type="button" 
          variant="outline" 
          className="w-full bg-transparent border-gray-600 text-white hover:bg-gray-800 py-3 rounded-md transition-all duration-200 flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path 
              fill="#4285F4" 
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path 
              fill="#34A853" 
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path 
              fill="#FBBC05" 
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path 
              fill="#EA4335" 
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Entrar com Google
        </Button>

        {/* Security notice */}
        <div className="flex items-center justify-center space-x-2 text-gray-400 text-xs">
          <Shield className="w-4 h-4" />
          <span>Seus dados estão protegidos.</span>
        </div>
      </form>

      {/* Sign up link */}
      <div className="text-center mt-8 pt-6 border-t border-login-light-gray/20 relative z-10">
        <p className="text-gray-400 text-sm">
          Ainda não possui uma conta?
        </p>
        <a href="#" className="text-white hover:text-purple-400 transition-colors underline text-sm">
          Realizar Minha Inscrição
        </a>
      </div>
    </>
  );
};

export default LoginForm;
