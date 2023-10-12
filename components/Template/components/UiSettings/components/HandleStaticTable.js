/**
Author - Babajan
Git - https://github.com/babajanpatan
* */

import React, {
  useEffect, useContext, useState
} from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/constants';
import {
  settingTitle, settingWrapper
} from './styledElements';
import {
  TemplateContext
} from '@/components/Template/Template.container';
import {
  updateTemplate
} from '@/helpers';

const allowedTags = ['SECTION'];

const HandleStaticTable = () => {
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);
  const [rowCount, setRowCount] = useState(2);
  const [colCount, setColCount] = useState(2);

  const addRow = () => {
    setRowCount(rowCount + 1);
  };

  const addColumn = () => {
    setColCount(colCount + 1);
  };

  const removeRow = () => {
    if (rowCount > 1) {
      setRowCount(rowCount - 1);
    }
  };

  const removeColumn = () => {
    if (colCount > 1) {
      setColCount(colCount - 1);
    }
  };

  useEffect(() => {
    const container = document.getElementById(templatePayload.activeElemet);

    if (container) {
      const table = document.createElement('table');
      const tbody = document.createElement('tbody');

      for (let i = 0; i < rowCount; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < colCount; j++) {
          const cell = i === 0 ? document.createElement('th') : document.createElement('td');
          cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
          row.appendChild(cell);
        }
        tbody.appendChild(row);
      }

      table.appendChild(tbody);

      // Clear the container and append the table
      container.innerHTML = '';
      container.appendChild(table);
      updateTemplate(templatePayload, setTemplatePayload);
    }
  }, [rowCount, colCount]);

  return (
    <SettingWrapper className={allowedTags.includes(templatePayload.tagName) && 'd-block'}>
      <SettingTitle>Table Properties</SettingTitle>
      <SettingOptions>
        <OptionItem>
          <button
            type="button"
            id="add-row"
            style={{marginRight: '10px', border: '1px solid black'}}
            onClick={addRow}
          >
            Add Row
          </button>
          <button
            type="button"
            id="add-column"
            style={{marginRight: '10px', border: '1px solid black'}}
            onClick={addColumn}
          >
            Add Column
          </button>
          <button
            type="button"
            id="remove-row"
            style={{marginRight: '10px', border: '1px solid black'}}
            onClick={removeRow}
          >
            Remove Row
          </button>
          <button
            type="button"
            id="remove-column"
            style={{marginRight: '10px', border: '1px solid black'}}
            onClick={removeColumn}
          >
            Remove Column
          </button>
        </OptionItem>
      </SettingOptions>
    </SettingWrapper>
  );
};

const SettingWrapper = styled(settingWrapper)``;
const SettingTitle = styled(settingTitle)``;

const SettingOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;

  &:not(:last-child) {
    padding-bottom: 15px;
  }
`;

const OptionItem = styled.div`
  width: 100%;

  input {
    padding: 5px;
    border-radius: 4px;
    border: 1px solid ${colors.tertiary};
    margin: 0 10px;
  }

  i {
    color: #9d9d9d;
  }
`;

export default HandleStaticTable;
