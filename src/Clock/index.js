import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
    const date = useCurrentDate();
    const dateContent = date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });


    return (
        <StyledClock>
            Dzisiaj jest {dateContent}
        </StyledClock>)
};

export default Clock;