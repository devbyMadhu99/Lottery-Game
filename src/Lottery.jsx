
import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winCondition = (ticket) => sum(ticket) === 15 }) {
    let [ticket, setTicket] = useState(() => genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    };

    return (
        <div className="lottery">
            <h1>Lottery Game!</h1>

            <Ticket ticket={ticket} />

            <button onClick={buyTicket}>Buy New Ticket</button>

            <h3 className={isWinning ? "winning-message" : "result-message"}>
                {isWinning ? "Congratulations, you won! 🎉" : "Good luck! Try again 🍀"}
            </h3>
        </div>
    );
}
