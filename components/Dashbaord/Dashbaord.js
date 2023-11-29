/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { BallTriangle } from  'react-loader-spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faTrash } from '@fortawesome/free-regular-svg-icons';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  colors
} from '@/constants';

import {
  Header
} from '../common';

const trashIcon = "https://i.wlycdn.com/articles/trash.png"

const Dashbaord = ({
  handleCreateTemplate,
  templates,
  handleDeleteTemplate,
  isCreating,
  isLoading
}) => {
  return (
  <>
   <ToastContainer />
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
        {
          isLoading ?
          <LoaderConatiner>
              <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
             visible={true}
            />
            </LoaderConatiner> :
            <TemplatesGridWrapper>
            {
             templates && templates.length ? (
                templates.map((template) => (
                  <TemplateItem key={template.id} >
                    <TemplatePreview>
                      {parse(template.template_data || '')}
                    </TemplatePreview>
                    <TemplateInfo>
                      <TemplateName>Name: {template.name}</TemplateName>
                      <TemplateAuthor>Author: {template.author_email}</TemplateAuthor>
                      <TemplateActionsWrapper>
                        <View href={`/template/${template._id}`}>
                          <StyledIcon icon={faEye} />
                        </View>
                        <StyledTrashIcon onClick={() => handleDeleteTemplate(template._id)} src={trashIcon} />
                      </TemplateActionsWrapper>
                    </TemplateInfo>
                  </TemplateItem>
                ))
              ) : ''
            }
        </TemplatesGridWrapper>
        }

      </Container>
    </TemplatesListWrapper>
  </>
  )
};

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

const LoaderConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`

const View = styled.a``

const TemplateItem = styled.a`
  display: block;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 10px 10px 30px -13px rgba(0,0,0,0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.1);
  }
`;

const TemplateActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0.2rem 2rem;

`
const StyledIcon = styled(FontAwesomeIcon)`
  color: #007bff;
  font-size: 24px;
  cursor: pointer;
`;

const StyledTrashIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
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

const ActionButtons = styled.button`
  padding: 0.5rem;
`

export default Dashbaord;
