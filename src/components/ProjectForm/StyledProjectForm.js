import styled from "styled-components";

// Styled components
export const FormContainer = styled.div`
  display: grid;
  gap: 1.25rem; /* gap-5 equivalent */
`;

export const ProjectIdContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 1.25rem; /* md:gap-5 equivalent */
`;

export const ProjectId = styled.p`
  margin-left: 0.25rem; /* ml-1 equivalent */
`;

export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem; /* gap-2 equivalent */
`;

export const DescriptionTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db; /* border-gray-300 equivalent */
  border-radius: 0.375rem; /* rounded-md equivalent */
  resize: vertical; /* resize-y equivalent */
  &:focus {
    outline: none;
    border-color: #3b82f6; /* focus:border-blue-500 equivalent */
  }
  ${({ error }) =>
    error &&
    `
    border-color: #f87171; /* border-red-500 equivalent */
  `}
`;

export const TextInputFieldContainer = styled.div`
  margin-bottom: 1.25rem; /* gap-5 equivalent */
`;
