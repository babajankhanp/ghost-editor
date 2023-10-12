/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

import {
  colors
} from '@/constants';

import {
  Header
} from '../common';

const Dashbaord = ({
  handleCreateTemplate,
  templates,
  isCreating
}) => (
  <>
    <Header />
    <TemplatesListWrapper>
      <Container>
        <SectionHeader>
          <PageTitle>Templates</PageTitle>
          <Button
            onClick={handleCreateTemplate}
            className={`btn btn-primary ${isCreating && 'active'}`}
            disabled={isCreating}
          >
            {
              isCreating ? ('Creating ...') : ('Create New')
            }
          </Button>
        </SectionHeader>
        <TemplatesGridWrapper>
          {
            templates.length ? (
              templates.map((template) => (
                <TemplateItem key={template?.id} href={`/template/${template?._id}`}>
                  <TemplatePreview>
                    {parse(template?.template_data || '')}
                  </TemplatePreview>
                  <TemplateInfo>
                    <TemplateName>{template?.name}</TemplateName>
                    <TemplateAuthor>{template?.author_email}</TemplateAuthor>
                  </TemplateInfo>
                </TemplateItem>
              ))
            ) : ('')
          }
        </TemplatesGridWrapper>
      </Container>
    </TemplatesListWrapper>
  </>
);

const TemplatesListWrapper = styled.div`
  padding-top: 50px;
`;

const Container = styled.div`
  max-width: 850px;
  margin: 0 auto;

  @media (max-wdith: 880px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const TemplatesGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 30px 0;
`;

const TemplateItem = styled.a`
  display: block;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 10px 10px 30px -13px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.1);
  }
`;

const TemplatePreview = styled.div`
  height: 300px;
  overflow: hidden;
  pointer-events: none;
`;

const TemplateInfo = styled.div`
  background-color: #eaeaea;
  padding: 5px 10px 7px;
  font-weight: 400;
`;

const TemplateName = styled.p`
  font-size: 16px;
  color: #272727;
`;

const TemplateAuthor = styled.p`
  padding-top: 3px;
  font-size: 14px;
  color: #333;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageTitle = styled.h1`
  font-weight: 400;
  font-size: 28px;
  color: ${colors.textPrimary};
`;

const Button = styled.button`
  &.active {
    background-color: #fff;
    color: #6725F4;
    cursor: not-allowed;
  }
`;

export default Dashbaord;
