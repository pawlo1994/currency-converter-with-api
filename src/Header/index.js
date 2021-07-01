import { StyledHeader, StyledTitle } from "./styled";

const Header = ({ headerContent }) => (
    <StyledHeader>
        <StyledTitle>{headerContent}</StyledTitle>
    </StyledHeader>
);

export default Header;