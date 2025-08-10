import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className = "" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`flex items-center justify-center gap-2 md:gap-4 ${className}`}>
      <div 
        className="text-center p-3 md:p-4 rounded-lg shadow-lg"
        style={{ backgroundColor: '#2B3A55' }}
      >
        <div 
          className="text-xl md:text-2xl font-bold text-white"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {formatNumber(timeLeft.days)}
        </div>
        <div 
          className="text-xs md:text-sm text-white opacity-75"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          DAYS
        </div>
      </div>
      
      <div 
        className="text-2xl md:text-3xl font-bold"
        style={{ color: '#2B3A55' }}
      >
        :
      </div>
      
      <div 
        className="text-center p-3 md:p-4 rounded-lg shadow-lg"
        style={{ backgroundColor: '#2B3A55' }}
      >
        <div 
          className="text-xl md:text-2xl font-bold text-white"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {formatNumber(timeLeft.hours)}
        </div>
        <div 
          className="text-xs md:text-sm text-white opacity-75"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          HOURS
        </div>
      </div>
      
      <div 
        className="text-2xl md:text-3xl font-bold"
        style={{ color: '#2B3A55' }}
      >
        :
      </div>
      
      <div 
        className="text-center p-3 md:p-4 rounded-lg shadow-lg"
        style={{ backgroundColor: '#2B3A55' }}
      >
        <div 
          className="text-xl md:text-2xl font-bold text-white"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {formatNumber(timeLeft.minutes)}
        </div>
        <div 
          className="text-xs md:text-sm text-white opacity-75"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          MINS
        </div>
      </div>
      
      <div 
        className="text-2xl md:text-3xl font-bold"
        style={{ color: '#2B3A55' }}
      >
        :
      </div>
      
      <div 
        className="text-center p-3 md:p-4 rounded-lg shadow-lg"
        style={{ backgroundColor: '#2B3A55' }}
      >
        <div 
          className="text-xl md:text-2xl font-bold text-white"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {formatNumber(timeLeft.seconds)}
        </div>
        <div 
          className="text-xs md:text-sm text-white opacity-75"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          SECS
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;