import styled from "styled-components";

export const FormContainer = styled.div`
  display: grid;
  gap: 1.25rem;
`;

export const ProjectIdContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 0.7rem;
`;

export const ProjectId = styled.p`
  margin-left: 0.25rem;
`;

export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Default to 1 column on small screens */
  gap:  0.7rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr; /* Use 2 columns starting at md (768px) */
  }
`;
export const DescriptionTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  resize: vertical; 
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
  ${({ error }) =>
    error &&
    `
    border-color: #f87171;
  `}
`;

export const TextInputFieldContainer = styled.div`
  margin-bottom: 1.25rem;
`;
