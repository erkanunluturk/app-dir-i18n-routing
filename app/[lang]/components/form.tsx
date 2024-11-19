'use client'

import Form from "next/form"
import { useActionState } from "react"
import { sendVerificationCode } from "../../../lib/actions"

function sendForm({ dictionary }: { dictionary: any }) {
  const [state, formAction] = useActionState(sendVerificationCode, undefined)
  return (
    <Form action={formAction}>
      <input type="email" name="email" placeholder="email write" />
      <button type="submit">submit</button>
    </Form>
  )
}

export default sendForm