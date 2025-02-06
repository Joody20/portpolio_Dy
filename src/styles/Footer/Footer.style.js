import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
`;

export const Section = styled.section`
  background-image: url("https://i.pinimg.com/474x/85/11/48/851148a276ede2ab8927dab128d6e5e7.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Changed from row to column for vertical stacking */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  position: relative;
  height: 100%; /* Ensure it takes up the full height of the container */
  text-align: center;
`;

export const TitleName = styled(motion.h2)`
  font-weight: 400;
  font-size: 22px;
  color: #2f1f1b;
  margin: 0;
  position: relative;
  top: 120px;
  span {
    font-weight: bold;
    color: #2f1f1b;
  }
  @media ${(props) => props.theme.tabletMedium} {
    font-size: 64px;
  }
  z-index: 1;
`;

export const Title = styled(motion.h2)`
  font-weight: bold;
  font-size: 140px;
  color: #fff;
  margin: 0;
  line-height: 1;
  position: relative;
  top: 10px;
  z-index: 0;
  white-space: nowrap;
  -webkit-text-stroke: 2px #fff;
  letter-spacing: -5px;
  @media ${(props) => props.theme.tabletMedium} {
    font-size: 220px;
    top: -170px;
  }
`;

export const GitHubLink = styled.a`
  position: absolute;
  gap: 0.25rem;
  left: 40%; /* Centering the element horizontally */
  transform: translateX(-50%); /* Ensure it's centered exactly */
  z-index: 20;
  font-size: 20px;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  color: #2f1f1b;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  letter-spacing: -1.5px;
  text-align: center;
  margin-top: 160px;
  &:hover {
    color: #fff;
  }
  &::before {
    content: "GitHub 가기";
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background-color: #44332e;
    color: #fff;
    font-size: 0.7rem;
    font-weight: 400;
    padding: 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    letter-spacing: -0.5px;
  }
  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 4px;
    background-color: #2f1f1b;
    transition: all 0.3s ease-in-out;
  }
  &:hover::after {
    height: 100%;
  }
  @media ${(props) => props.theme.tabletMedium} {
    font-size: 18px;
  }
`;

export const MailLink = styled.a`
  position: absolute;
  left: 60%; /* Centering the element horizontally */
  transform: translateX(-50%); /* Ensure it's centered exactly */
  gap: 0.25rem;
  flex-direction: column;
  z-index: 20;
  font-size: 10px;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  color: #2f1f1b;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  letter-spacing: -1.5px;
  margin-top: 160px; /* Increased margin-top for better spacing */
  &:hover {
    color: #fff;
  }
  &::before {
    content: "메일 보내기";
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background-color: #44332e;
    color: #fff;
    font-size: 0.7rem;
    font-weight: 400;
    padding: 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    letter-spacing: -0.5px;
  }
  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 4px;
    background-color: #2f1f1b;
    transition: all 0.3s ease-in-out;
  }
  &:hover::after {
    height: 100%;
  }
  @media ${(props) => props.theme.tabletMedium} {
    font-size: 18px;
  }
`;
