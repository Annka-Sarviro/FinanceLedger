import styled from "styled-components";

export const Container = styled.div`
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 80px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  max-width: 1360px;
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 24px;
`;

export const SectionTitleColor = styled(SectionTitle)`
  color: var(--text-color);
`;

export const SectionSubtitle = styled.h3`
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 16px;
`;

export const SectionSubtitleColor = styled(SectionSubtitle)`
  color: var(--text-color);
`;

export const SectionText = styled.p`
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 24px;
`;

export const SectionTextColor = styled(SectionText)`
  color: var(--text-color);
`;
