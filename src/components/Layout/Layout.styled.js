import styled from "styled-components";

export const Container = styled.div`
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 80px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  max-width: 1360px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1360px) {
    padding-left: 28px;
    padding-right: 28px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 24px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const SectionTitleColor = styled(SectionTitle)`
  color: var(--text-color);
`;

export const SectionSubtitle = styled.h3`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 16px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const SectionSubtitleColor = styled(SectionSubtitle)`
  color: var(--text-color);
`;

export const SectionText = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 24px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const SectionTextColor = styled(SectionText)`
  color: var(--text-color);
`;
