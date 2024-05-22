import { useToast } from '@/components/ui/use-toast'

export function useCustomToast() {
	const { toast } = useToast()

	async function launchToast(variant, title, description) {
		toast({
			variant: variant,
			title: title,
			description: description,
		})
	}

	return { launchToast }
}
