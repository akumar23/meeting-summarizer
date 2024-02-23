import { formStateAtom } from "atoms/transcription-atoms"
import { useAtomValue } from "jotai"

import TranscribeForm from "./form"
import TranscriptionEditForm from "./edit-from"

const Transcribe = () => {
  const formState = useAtomValue(formStateAtom)

  return (
    <div>
      {formState === "transcribe" ? (
        <TranscribeForm />
      ) : (
        <TranscriptionEditForm />
      )}
    </div>
  )
}

export default Transcribe