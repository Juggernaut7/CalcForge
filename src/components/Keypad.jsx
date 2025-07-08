import React from "react";
import Button from "./Button";

const Keypad = ({ buttons, handleInput }) => (
  <div className="grid grid-cols-4 gap-2">
    {buttons.map((btn) => (
      <Button
        key={btn}
        label={btn}
        onClick={handleInput}
        variant={btn === "=" ? "primary" : "default"}
      />
    ))}
  </div>
);

export default Keypad;
