/**
Author - Babajan
Git - https://github.com/babajanpatan
* */

import React, {
  useContext, useState
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

const allowedTags = ['MAIN'];

const HandleJsonTable = () => {
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);
  const data = [
    {id: 1, name: 'Brijesh', age: 1},
    {id: 2, name: 'Babajan', age: 1},
    {id: 2, name: 'Sahil', age: 1}

  ];

  const [jsonDataInput, setJsonDataInput] = useState(JSON.stringify(data, null, 2));

  const generateTable = () => {
    const container = document.getElementById(templatePayload.activeElement);

    if (!container) {
      return;
    }

    container.innerHTML = '';

    const newData = JSON.parse(jsonDataInput);

    const table = document.createElement('table');
    table.className = 'table';
    table.cellPadding = '0';
    table.cellSpacing = '0';
    table.width = '100%';
    table.border = '0';
    table.style = 'color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none;';

    const headerRow = document.createElement('tr');
    headerRow.style = 'border-bottom:1px solid #ecedee;text-align:left;padding:15px 0;';

    const thead = document.createElement('thead');

    const headers = Object.keys(newData[0]);

    headers.forEach((headerText) => {
      const th = document.createElement('th');
      th.style = 'padding: 15px ;border:5px solid white; background-color: #F2EDFF ';
      th.textContent = headerText;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    newData.forEach((rowData) => {
      const row = document.createElement('tr');
      row.style = 'border-bottom:1px solid #ecedee;text-align:left;padding:15px 0;';

      headers.forEach((header) => {
        const cell = document.createElement('td');
        cell.classList = 'json-table-cell';
        cell.textContent = rowData[header];
        cell.style = 'background-color: #F2EDFF; padding: 10px;border:5px solid white;';
        row.appendChild(cell);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    container.appendChild(table);

    updateTemplate(templatePayload, setTemplatePayload);
  };

  const addJson = () => {
    const Element = document.getElementById(templatePayload.activeElement);
    const main = Element.parentElement.querySelectorAll('main')[0];
    const tablediv = main.document?.querySelectorAll('table');
    if (tablediv) {
      tablediv.removeChild(tablediv.firstElementChild);
    }
    main.style.background = '#ffff';
    try {
      const newJsonData = JSON.parse(document.getElementById('col-name').value);
      setJsonDataInput(JSON.stringify(newJsonData, null, 2));
    } catch (error) {
      alert('Invalid JSON data entered:', error);
    }
    generateTable();
  };

  const handleTablePosition = (tableAlign) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const main = Element.parentElement.querySelectorAll('main')[0];
    main.style.textAlign = tableAlign;
  };

  const handleTableWidth = (newWidth) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const table = Element.querySelectorAll('table')[0];
    table.style.width = `${newWidth}%`;
  };

  const handleAlignment = (textAlign) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const table = Element.querySelectorAll('table')[0];
    const tableHeader = table.querySelectorAll('th');
    const tbody = table.querySelector('tbody');
    if (tableHeader) {
      for (let i = 0; i < tableHeader.length; i++) {
        tableHeader[i].style.textAlign = textAlign;
      }
    }
    if (tbody) {
      const tableData = tbody.querySelectorAll('td');
      if (tableData) {
        for (let i = 0; i < tableData.length; i++) {
          tableData[i].style.textAlign = textAlign;
        }
      }
    }
  };

  const handleHeaderCellBackgroundColo = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const table = Element.querySelectorAll('table')[0];
    const tableHeader = table.querySelectorAll('th');
    if (tableHeader) {
      for (let i = 0; i < tableHeader.length; i++) {
        tableHeader[i].style.backgroundColor = e.target.value;
      }
    }
  };

  const handleDataCellBackgroundColor = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const table = Element.querySelectorAll('table')[0];
    const tbody = table.querySelector('tbody');
    const tableData = tbody.querySelectorAll('td');

    if (tableData) {
      for (let i = 0; i < tableData.length; i++) {
        tableData[i].style.backgroundColor = e.target.value;
      }
    }
  };

  const handleHeaderCellColor = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const table = Element.querySelectorAll('table')[0];
    const tableHeader = table.querySelectorAll('th');
    if (tableHeader) {
      for (let i = 0; i < tableHeader.length; i++) {
        tableHeader[i].style.color = e.target.value;
      }
    }
  };

  const handleDataCellColor = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const table = Element.querySelectorAll('table')[0];
    const tbody = table.querySelector('tbody');
    const tableData = tbody.querySelectorAll('td');

    if (tableData) {
      for (let i = 0; i < tableData.length; i++) {
        tableData[i].style.color = e.target.value;
      }
    }
  };

  const handleHeaderFontSize = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const table = Element.querySelectorAll('table')[0];
    const tableHeader = table.querySelectorAll('th');
    if (tableHeader) {
      for (let i = 0; i < tableHeader.length; i++) {
        tableHeader[i].style.fontSize = `${e.target.value}px`;
      }
    }
  };

  const handleDataCellFontSize = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const table = Element.querySelectorAll('table')[0];
    const tbody = table.querySelector('tbody');
    const tableData = tbody.querySelectorAll('td');

    if (tableData) {
      for (let i = 0; i < tableData.length; i++) {
        tableData[i].style.fontSize = `${e.target.value}px`;
      }
    }
  };

  return (
    <SettingWrapper className={allowedTags.includes(templatePayload.tagName) && 'd-block'}>
      <SettingTitle>Table Properties</SettingTitle>
      <SettingTitleLight>
        Add/modify JSON
      </SettingTitleLight>
      <OptionItem>
        <Textarea
          type="text"
          id="col-name"
          placeholder="Enter JSON"
          value={jsonDataInput}
          onChange={(e) => setJsonDataInput(e.target.value)}
          style={{height: '200px', resize: 'both'}}
        />
      </OptionItem>
      <Button
        type="button"
        id="add-column"
        style={{marginLeft: '10px', border: '1px solid black'}}
        onClick={addJson}
      >
        Update Table
      </Button>
      <SettingOptionsAlign>
        width
        <div style={{display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'start'}}>
          <Input
            placeholder=" Ex : 70"
            type="number"
            onChange={(e) => handleTableWidth(e.target.value)}
          />
          <Note>(Default 100) </Note>
        </div>
      </SettingOptionsAlign>
      <SettingOptionsAlign id="tableAlign">
        <SettingTitleLight>
          Table Align
        </SettingTitleLight>
        <OptionItemAlignment onClick={() => handleTablePosition('-webkit-left')}>
          <i className="fas fa-align-left" />
        </OptionItemAlignment>
        <OptionItemAlignment onClick={() => handleTablePosition('-webkit-center')}>
          <i className="fas fa-align-center" />
        </OptionItemAlignment>
        <OptionItemAlignment onClick={() => handleTablePosition('-webkit-right')}>
          <i className="fas fa-align-right" />
        </OptionItemAlignment>
      </SettingOptionsAlign>
      <SettingOptionsAlign id="textAlign">
        <SettingTitleLight>
          Cell Data Align
        </SettingTitleLight>
        <OptionItemAlignment onClick={() => handleAlignment('left')}>
          <i className="fas fa-align-left" />
        </OptionItemAlignment>
        <OptionItemAlignment onClick={() => handleAlignment('center')}>
          <i className="fas fa-align-center" />
        </OptionItemAlignment>
        <OptionItemAlignment onClick={() => handleAlignment('right')}>
          <i className="fas fa-align-right" />
        </OptionItemAlignment>
      </SettingOptionsAlign>
      <SettingOptions />
      <SettingOptions>
        <SettingTitleLight>
          Text Color
        </SettingTitleLight>
        <OptionItem>
          <input id="color-header-cell" type="color" onChange={handleHeaderCellColor} />
          <span>Header Cell</span>
        </OptionItem>
        <OptionItem>
          <input id="color-data-cell" type="color" onChange={handleDataCellColor} />
          <span>Data Cell</span>
        </OptionItem>
      </SettingOptions>
      <SettingOptions>
        <SettingTitleLight>
          Background
        </SettingTitleLight>
        <OptionItem>
          <input id="backgroundColor" type="color" onChange={handleHeaderCellBackgroundColo} />
          <span>Header Cell</span>
        </OptionItem>
        <OptionItem>
          <input id="backgroundColor" type="color" onChange={handleDataCellBackgroundColor} />
          <span>Data Cell</span>
        </OptionItem>
      </SettingOptions>
      <SettingOptions>
        <SettingTitleLight>
          Font Sizes
        </SettingTitleLight>
        <OptionItem>
          <input id="backgroundColor" type="number" placeholder="Size" onChange={handleHeaderFontSize} />
          <span>Header Cell</span>
        </OptionItem>
        <OptionItem>
          <input id="backgroundColor" type="number" placeholder="Size" onChange={handleDataCellFontSize} />
          <span>Data Cell</span>
        </OptionItem>
      </SettingOptions>
    </SettingWrapper>
  );
};

const SettingWrapper = styled(settingWrapper)`
  background-color: white;
`;

const SettingTitle = styled(settingTitle)``;

const SettingTitleLight = styled(settingTitle)`
   font-weight: lighter;
`;

const SettingOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 15px;

  &:not(:last-child) {
    padding-bottom: 15px;
  }
`;

const Note = styled.p`
  font-size: smaller;
`;

const SettingOptionsAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 15px;

  &:not(:last-child) {
    padding-bottom: 15px;
  }
`;

const OptionItem = styled.div`
  width: 100%;

  input {
    padding: 2px;
    border-radius: 4px;
    width: 50px !important;
    height: 30px;
    border: 1px solid ${colors.tertiary};
    margin: 0 10px;
  }

  i {
    color: #9d9d9d;
  }
`;

const OptionItemAlignment = styled(OptionItem)`
   width: 10%;
   cursor: pointer;
`;

const Textarea = styled.textarea`
 background: #eaeaea;
 height: 300px !important;
 width: 350px;
 resize: both;
`;
const Button = styled.button`
    height: 38px;
    padding: 0 30px;
    margin:30px 0px ;
    color: #555;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: .1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #bbb;
    cursor: pointer;
    width: 350px;
`;

const Input = styled.input`
  width: 50% !important;
  padding: 3px;
`;

export default HandleJsonTable;
