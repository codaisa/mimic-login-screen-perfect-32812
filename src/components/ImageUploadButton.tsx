import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface ImageUploadButtonProps {
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const ImageUploadButton = ({
  onImageUpload
}: ImageUploadButtonProps) => {
  return <div className="fixed top-4 right-4 z-20">
      <label htmlFor="image-upload" className="cursor-pointer">
        <Button size="sm" variant="ghost" className="bg-zinc-800/50 hover:bg-zinc-700/50 text-gray-400 hover:text-white border border-zinc-700/50 backdrop-blur-sm" asChild>
          
        </Button>
      </label>
      <input id="image-upload" type="file" accept="image/*" onChange={onImageUpload} className="hidden" />
    </div>;
};
export default ImageUploadButton;