import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

export const ShareButtons = () => {
  const shareUrl = window.location.href;
  const shareText = "A vida em cor de azul - Poupe água, preserve o futuro 💧";
  const hashtags = "PoupeÁgua,AVidaEmCorDeAzul,CadaGotaConta,PortugalSustentável";

  const handleShare = (platform: string) => {
    let url = "";
    
    switch(platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&hashtags=${hashtags}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "whatsapp":
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(shareUrl);
        toast.success("Link copiado para a área de transferência!");
        return;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Button
        onClick={() => handleShare("twitter")}
        variant="outline"
        size="lg"
        className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white border-none"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Twitter
      </Button>
      <Button
        onClick={() => handleShare("facebook")}
        variant="outline"
        size="lg"
        className="bg-[#1877F2] hover:bg-[#166fe5] text-white border-none"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Facebook
      </Button>
      <Button
        onClick={() => handleShare("linkedin")}
        variant="outline"
        size="lg"
        className="bg-[#0A66C2] hover:bg-[#095196] text-white border-none"
      >
        <Share2 className="w-4 h-4 mr-2" />
        LinkedIn
      </Button>
      <Button
        onClick={() => handleShare("whatsapp")}
        variant="outline"
        size="lg"
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white border-none"
      >
        <Share2 className="w-4 h-4 mr-2" />
        WhatsApp
      </Button>
      <Button
        onClick={() => handleShare("copy")}
        variant="outline"
        size="lg"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Copiar Link
      </Button>
    </div>
  );
};
