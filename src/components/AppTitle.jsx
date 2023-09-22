import { styled } from "styled-components";

export default function AppTitle(props) {
  const {
    title = "Know My Show",
    subTitle = "Are you looking for a series or actor?",
  } = props;

  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: #dc2026;
    font-style: italic;
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;
