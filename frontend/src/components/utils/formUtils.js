import { useRouter } from 'next/router'
import { postRequest } from '../../lib/api'
import { useCustomToast } from './toastUtils'

export function PostFormSubmit({ url, data }) {
	const { push } = useRouter()
	const { launchToast } = useCustomToast()

	const handleSubmits = async () => {
		try {
			const response = await postRequest(url, data)
			if (response) {
				launchToast('', 'Action Successful', 'Redirecting...')
				setTimeout(() => {
					push('/posts')
				}, 2000)
			}
		} catch (error) {
			launchToast('destructive', 'Error Occurred', 'Please try again.')
		}
	}

	return null // or any other JSX you might need
}

// // formUtils.js
// import { useRouter } from 'next/navigation';
// import { postRequest } from "../../lib/api";
// import { useCustomToast } from "./toastUtils";

// export function useFormSubmission() {
//     const { push } = useRouter();
//     const { launchToast } = useCustomToast();

//     async function onSubmit(url, data) {
//         console.log(`url is: ${url}`, `data is: ${data}`);
//         // try {
//         //     const response = await postRequest(url, data);
//         //     if (response) {
//         //         launchToast('', 'Action Successful', 'Redirecting...');
//         //         setTimeout(() => {
//         //             push("/posts");
//         //         }, 2000);
//         //     }
//         // } catch (error) {
//         //     launchToast('destructive', 'Error Occurred', 'Please try again.');
//         // }
//     }

//     return { onSubmit };
// }
