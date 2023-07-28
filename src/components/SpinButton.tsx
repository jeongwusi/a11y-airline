import React, { useState, MouseEvent } from "react";
import "./SpinButton.css";

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const increment = () => {
    if (count < 3) {
      setCount((prevCount) => prevCount + 1);
      setMessage(`성인 ${count + 1}명 추가`);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setMessage(`성인 1명 제거`);
    }
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <div>
        <h1>승객 선택</h1>
        <div className="spinButtonLabel">
          <label htmlFor="adultCount">성인</label>
          <div
            className="helpIcon"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
            aria-describedby="tooltip"
          >
            ?
          </div>
        </div>
        <button
          onClick={decrement}
          className="spinButton"
          aria-label="성인 탑승자 한명 줄이기"
        >
          -
        </button>
        <input
          type="text"
          role="spinbutton"
          id="adultCount"
          aria-label="성인"
          readOnly
          className="spinButtonInput"
          value={count}
        />
        <button
          onClick={increment}
          className="spinButton"
          aria-label="성인 탑승자 한명 늘리기"
        >
          +
        </button>
        {isTooltipVisible && (
          <span id="tooltip" className="tooltip">
            최대 인원수는 3명까지 가능합니다
          </span>
        )}
      </div>
      <span aria-live="assertive">{message}</span>
    </section>
  );
};

export default SpinButton;
