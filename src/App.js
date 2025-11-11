import React, { useRef, useState } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const restartVideo = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div>
      <video 
        ref={videoRef}
        width="600"
        controls
      >
        {/* ⬇️ ВСТАВЬТЕ СВОЮ ССЫЛКУ ЗДЕСЬ ⬇️ */}
        <source src="https://www.youtube.com/watch?v=Lvkq0HY3EgA" type="video/mp4" />
        {/* ⬆️ ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА ВАШУ ⬆️ */}
        Ваш браузер не поддерживает видео.
      </video>
      
      <div style={{ marginTop: '10px' }}>
        <button onClick={playVideo}>▶️ Воспроизвести</button>
        <button onClick={pauseVideo}>⏸️ Пауза</button>
        <button onClick={restartVideo}>⏮️ Заново</button>
      </div>
    </div>
  );
}

export default VideoPlayer;