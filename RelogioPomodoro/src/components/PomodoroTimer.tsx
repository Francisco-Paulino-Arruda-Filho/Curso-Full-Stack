import { useEffect, useState } from "react";
import useInterval from "../utils/setInterval";
import "bootstrap/dist/css/bootstrap.min.css";

interface PomodoroTimerProps {
  defaultPomodoroTime: number;
}

const bellFinish = new Audio("../sounds/bell-finish.mp3");
const bellBreak = new Audio("../sounds/bell-break.mp3");

export const PomodoroTimer = ({ defaultPomodoroTime }: PomodoroTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(defaultPomodoroTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [cycles, setCycles] = useState(new Array(4).fill(null).map((_, index) => index));

  useEffect(() => {
    if (timeLeft === 0 && cycles.length > 0) {
      bellBreak.play();
      setIsRunning(false);
      setCycles((prevCycles) => prevCycles.slice(0, -1));
      setTimeLeft(defaultPomodoroTime * 60);
    }
  }, [timeLeft, cycles, defaultPomodoroTime]);

  useInterval(
    () => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    },
    isRunning ? 1000 : null
  );

  const startTimer = () => {
    bellFinish.play();
    setIsRunning(true);
  };

  const stopTimer = () => {
    bellBreak.play();
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(defaultPomodoroTime * 60);
    setIsRunning(false);
    setCycles(new Array(4).fill(null).map((_, index) => index));
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={`container d-flex flex-column align-items-center p-4 text-white rounded shadow-lg w-50 ${
        isRunning ? "bg-success" : timeLeft === 0 ? "bg-danger" : "bg-dark"
      }`}
    >
      <h1 className="display-3 mb-4">{formatTime(timeLeft)}</h1>
      <div className="d-flex gap-2">
        <button onClick={startTimer} className="btn btn-light btn-lg">Start</button>
        <button onClick={stopTimer} className="btn btn-warning btn-lg">Stop</button>
        <button onClick={resetTimer} className="btn btn-primary btn-lg">Reset</button>
      </div>
      <p className="mt-3">Cycles left: {cycles.length}</p>
    </div>
  );
};
