'use server'

import { redirect } from "next/navigation"


export async function sendVerificationCode(prevState: any, formData: FormData) {
  const rawFormData = {
    email: formData.get('email')
  }
  try {
    console.log('mail:', rawFormData.email)
  } catch (e) {
    throw new Error('Failed to create task')
  }
  redirect(`/verify?email=${rawFormData.email}`)
}