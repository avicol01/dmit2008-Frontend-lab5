'use server'
import {revalidatePath} from 'next/cache'

import {ref, remove} from 'firebase/database'

import {db} from '@/lib/firebase/firebaseInit'

export async function deleteAction(prevState, formData) {
	const uid = formData.get('uid')
	const response = await removeFromFTDB(uid)
	revalidatePath('/demo')
	return {message: response}
}

async function removeFromFTDB(uid) {
	const path =`todos/${uid}`
	const dbRef = ref(db, path)

	try{
		await remove(dbRef)
		return "success"
	}catch(error){
		return "failure"
	}
}