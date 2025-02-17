import { useEffect, useState } from "react"
import { Navigate, useSearchParams } from "react-router-dom"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import { verifyUserAPI } from "../../apis"

export default function AccountVerification() {
  let [searchParams] = useSearchParams()
  const email = searchParams.get('email')
  const token = searchParams.get('token')

  const [verified, setVerified] = useState(false)

  useEffect(() => {
    console.log(email, token)

    if (email && token) {
      verifyUserAPI({ email, token }).then(res => {
        setVerified(true)
      })
    }
  }, [email, token])

  if (!email || !token) {
    return <Navigate to='/404' />
  }

  if (!verified) {
    return <LoadingSpinner caption='Verifying your account...' />
  }
  return <Navigate to={`/login?verifiedEmail=${email}`} />
}