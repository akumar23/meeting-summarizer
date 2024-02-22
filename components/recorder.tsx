import React, { useState } from 'react';

const AudioRecorder: React.FC = () => {
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  let mediaRecorder: MediaRecorder | null = null;

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);

      // Reset audioChunks when starting a new recording
      setAudioChunks([]);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((chunks) => [...chunks, event.data]);
        }
      };

      mediaRecorder.onstop = () => {
        // Combine audio chunks into a single Blob
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });

        // You can save the Blob to a file, send it to a server, etc.
        saveRecording(audioBlob);

        // Reset audioChunks after saving
        setAudioChunks([]);
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      setRecording(false);
      // Stop the media recorder
      mediaRecorder.stop();
    }
  };

  const saveRecording = (audioBlob: Blob) => {
    // Perform actions to save the recording
    // For example, you can create a download link for the user
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(audioBlob);
    downloadLink.download = 'recording.wav';
    downloadLink.click();
  };

  return (
    <>
      <div>
        <button className="btn" onClick={startRecording} disabled={recording}>
          Start Recording
        </button>
        <br />
        <br />
        <button className="btn" onClick={stopRecording} disabled={!recording}>
          Stop Recording
        </button>
      </div>
    </>
  );
};

export default AudioRecorder;
