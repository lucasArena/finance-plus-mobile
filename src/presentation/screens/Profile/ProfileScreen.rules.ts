import { useAuth } from "@/presentation/providers/Auth/AuthProvider"

export const useProfileScreenRules = () => {
  const auth = useAuth()

  const handleSignOut = () => {
    auth.signOut()
  }

  return { handleSignOut }
}
