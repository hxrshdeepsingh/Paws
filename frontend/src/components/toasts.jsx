import { useToast } from "@/components/ui/use-toast"

function toasts(variant, title, description) {
    const { toast } = useToast()
    return (
        toast({
            variant: variant,
            title: title,
            description: description
        })
    )
}

export default toasts