import styled from "styled-components";
import { Table } from "antd";
import { TableProps } from "antd/lib/table";

export const TableCustom: typeof Table = styled(Table)<TableProps<any>>`
  .ant-table-thead > tr > th {
    color: var(--gray-800);
  }

  .ant-table {
    /* background: var(--gray-800); */
  }

  .ant-table-thead >tr>th {
    background: var(--orange-200);
  }

  .ant-table-container table>thead>tr:first-child >*:last-child {
    border-start-end-radius: 20px;
  }

  .ant-table-container table>thead>tr:first-child >*:first-child {
    border-start-start-radius: 20px;
  }

  .ant-pagination-next a,
  .ant-pagination-prev a {
    color: var(--blue-600);
  }
  
  .ant-table-pagination.ant-pagination {
    margin: 40px 0 16px 0;
  }

` as any;