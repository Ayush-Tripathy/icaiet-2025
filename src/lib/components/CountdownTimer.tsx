import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string | Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerId = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timerId);
  }, [targetDate]);

  return (
    <div className="bg-black text-white flex flex-row gap-3 font-[SatoshiBold]">
      <div className="flex flex-col items-center border border-[#2e2e2e] p-3 rounded-lg min-w-24">
        <span className="text-3xl">{timeLeft.days}</span>
        <span className="font-[SatoshiRegular]">Days</span>
      </div>
      <div className="flex flex-col items-center border border-[#2e2e2e] p-3 rounded-lg min-w-24">
        <span className="text-3xl">{timeLeft.hours}</span>
        <span className="font-[SatoshiRegular]">Hours</span>
      </div>
      <div className="flex flex-col items-center border border-[#2e2e2e] p-3 rounded-lg min-w-24">
        <span className="text-3xl">{timeLeft.minutes}</span>
        <span className="font-[SatoshiRegular]">Minutes</span>
      </div>
      <div className="flex flex-col items-center border border-[#2e2e2e] p-3 rounded-lg min-w-24">
        <span className="text-3xl">{timeLeft.seconds}</span>
        <span className="font-[SatoshiRegular]">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
