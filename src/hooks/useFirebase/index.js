import { useContext } from "react"
import { FirebaseContext } from "../../firebase"

const useFirebase = () => {
    const firebaseContext = useContext(FirebaseContext)

    if (firebaseContext === undefined) {
        throw new Error(
            "useFirebase hook must be used within a FirebaseContext.Provider"
        )
    }

    return firebaseContext
}

export default useFirebase