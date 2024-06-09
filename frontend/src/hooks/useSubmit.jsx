import { useToast } from "@/components/ui/use-toast";
import { useRouter } from 'next/navigation';
import { postRequest } from "@/lib/api";

import Links from "@/config/links.json"

export default function useSubmit(url) {
  const { toast } = useToast();
  const { push } = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await postRequest(`${process.env.NEXT_PUBLIC_API_BASE}${url}`, data);
      if (response) {
        toast({ variant: "default", title: "Post created successfully!", description: "Wait for redirection" });
        setTimeout(() => {
          push(Links.Explore.Url);
        }, 1000);
      } else {
        toast({ variant: "destructive", title: "Error occurred", description: "Try again!!!" });
      }
    } catch (error) {
      toast({ variant: "destructive", title: "Error occurred", description: "Try again!!!" });
    }
  };

  return onSubmit;
}